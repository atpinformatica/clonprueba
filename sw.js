const CACHE_NAME = 'sia-cpem32-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = event.request.url;

  if (event.request.method === 'POST' && url.includes('script.google.com')) {
    event.respondWith(enviarOEncolar(event.request));
    return;
  }

  if (event.request.method === 'GET' && url.includes('script.google.com')) {
    event.respondWith(
      fetch(event.request).catch(() =>
        new Response(JSON.stringify([]), { headers: { 'Content-Type': 'application/json' } })
      )
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});

self.addEventListener('sync', event => {
  if (event.tag === 'sync-notas') {
    event.waitUntil(sincronizarCola());
  }
});

self.addEventListener('message', event => {
  if (event.data === 'SYNC_NOW') {
    sincronizarCola();
  }
});

async function enviarOEncolar(request) {
  try {
    return await fetch(request.clone());
  } catch (err) {
    const bodyText = await request.clone().text();
    let body;
    try {
      body = JSON.parse(bodyText);
    } catch (_) {
      body = { url: request.url, datos: bodyText };
    }

    await agregarAColaOffline({
      url: body.url || request.url,
      datos: body.datos || body,
      creado: new Date().toISOString()
    });

    await registrarSync();

    return new Response(JSON.stringify({
      offline: true,
      mensaje: 'Guardado localmente. Se enviara cuando haya conexion.'
    }), {
      status: 202,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

function abrirDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('sia-offline', 1);
    req.onupgradeneeded = e => {
      if (!e.target.result.objectStoreNames.contains('cola')) {
        e.target.result.createObjectStore('cola', { autoIncrement: true });
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror = e => reject(e.target.error);
  });
}

async function agregarAColaOffline(item) {
  const db = await abrirDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('cola', 'readwrite');
    tx.objectStore('cola').add(item);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function obtenerCola() {
  const db = await abrirDB();
  const tx = db.transaction('cola', 'readonly');
  const store = tx.objectStore('cola');

  const items = await new Promise((resolve, reject) => {
    const req = store.getAll();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });

  const keys = await new Promise((resolve, reject) => {
    const req = store.getAllKeys();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });

  return { db, items, keys };
}

async function borrarDeCola(db, key) {
  return new Promise((resolve, reject) => {
    const tx = db.transaction('cola', 'readwrite');
    tx.objectStore('cola').delete(key);
    tx.oncomplete = resolve;
    tx.onerror = () => reject(tx.error);
  });
}

async function sincronizarCola() {
  const { db, items, keys } = await obtenerCola();
  if (items.length === 0) return;

  let sincronizados = 0;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (!item.url) continue;

    try {
      const payload = Array.isArray(item.datos) ? item.datos : [item.datos];
      const limpio = payload.map(dato => {
        if (dato && typeof dato === 'object') {
          const copia = { ...dato };
          delete copia._url;
          return copia;
        }
        return dato;
      });

      await fetch(item.url, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(limpio)
      });

      await borrarDeCola(db, keys[i]);
      sincronizados++;
    } catch (err) {
      console.warn('Aun sin conexion, se reintentara luego:', err);
      break;
    }
  }

  if (sincronizados > 0) {
    const allClients = await self.clients.matchAll();
    allClients.forEach(client => client.postMessage({ tipo: 'SYNC_COMPLETADA', cantidad: sincronizados }));
  }
}

async function registrarSync() {
  if (!self.registration || !self.registration.sync) return;
  try {
    await self.registration.sync.register('sync-notas');
  } catch (err) {
    console.warn('No se pudo registrar Background Sync:', err);
  }
}
