// 1. BASE DE DATOS Y VARIABLES (Se mantienen igual)
const escalaConceptos = ["Excelente", "Muy Bien", "Bien", "Regular", "Ausente", "Sin Calificar"];
const baseDeDatosAlumnos = {};

const materiasPorCurso = {
    "1 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "1 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "1 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "1 D": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "1 E": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "2 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "2 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "2 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "2 D": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "3 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
    "3 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
    "3 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
        "4 A": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA","CS. BIOLÓGICAS","QUÍMICA","FÍSICA","ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"],
        "4 B": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA","CS. BIOLÓGICAS","QUÍMICA","FÍSICA","ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"],
        "4 C": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE", "LENGUAS OTRAS", "EDUCACION FISICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA", "CS. BIOLÓGICAS", "QUÍMICA", "FÍSICA", "FILOSOFÍA DE LAS CIENCIAS", "GEOPOLÍTICA", "ESTUDIOS SOCIALES Y CULTURALES", "GENEALOGÍAS DE LAS ARTES Y LAS ESTÉTICA", "COMUNICACIÓN, DISCURSO Y PRODUCCIÓN DE SENTIDOS", "PROYECTOS SOCIOCOMUNITARIOS"],
    "5 A": ["IDIOMA EXTRANJERO INGLÉS O FRANCÉS","MATEMÁTICA FINANCIERA","MERCEOLOGÍA","GEOGRAFÍA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÓN DEL COMERCIO Y DE LA EMPRESA","ECONOMÍA POLÍTICA","CONTABILIDAD","ESTENOGRAFÍA","MECANOGRAFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"],
    "5 B": ["IDIOMA EXTRANJERO INGLÉS O FRANCÉS","MATEMÁTICA FINANCIERA","MERCEOLOGÍA","GEOGRAFÍA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÓN DEL COMERCIO Y DE LA EMPRESA","ECONOMÍA POLÍTICA","CONTABILIDAD","ESTENOGRAFÍA","MECANOGRAFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"],
    "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMÁTICA","FÍSICA","QUÍMICA","CIENCIAS BIOLÓGICAS","GEOGRAFÍA ARGENTINA","HISTORIA","INSTRUCCIÓN CÍVICA","FILOSOFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"]
    
};
const criteriosCualitativos = ["Interpreta", "Relaciona", "Aplica", "Participación", "Autonomía", "Realización de TP", "Cumplimiento AEC"];
const opcionesCualitativas = ["-", "Siempre", "Frecuentemente", "A veces", "Nunca", "Sin referencia"];
const frasesPorMateria = {
    "MATEMATICA": ["Resuelve problemas con autonomía", "Requiere reforzar operaciones básicas", "Buen razonamiento lógico"],
    "ANALISIS": ["Deriva e integra correctamente", "Aplica conceptos a funciones complejas", "Requiere práctica en límites"],
    "LENGUA": ["Excelente análisis de textos", "Debe mejorar la ortografía", "Participa activamente en clase"],
    "LITERATURA": ["Profundo análisis literario", "Relaciona autores y contextos", "Buena expresión escrita"],
    "DEFAULT": ["Cumple con los objetivos", "En proceso de mejora", "Faltas reiteradas"]
};

let tabActual = 'espacios';
let memoriaGlobal = {};
let datosSheetsCargados = false;
let sesionActual = null;
let mainTabActual = 'calificaciones';
let editandoCorreo = '';
let editandoRol = '';
let alumnosDesdeSheets = [];
let listaPreceptoresGlobal = [];
let recursantesAgrupados = {};
let frasesConfig = {};
let fechasLimite = {};
let llavesGuardadas = new Set();
let _callbackDescargarComprobante = null;
const URL_WEB_APP = 'https://script.google.com/macros/s/AKfycbxnS9qNjshBrI81t9IzVON9E4EzZYLivWpM2Vb8tbWc600mzIBeAdER2EcnXj_v3SV9EA/exec';

async function fetchConReintento(url, options, maxIntentos = 3) {
  for (let i = 0; i < maxIntentos; i++) {
    try {
      const resp = await fetch(url, { ...options, redirect: 'follow' });
      return resp;
    } catch (e) {
      if (i === maxIntentos - 1) throw e;
      await new Promise(r => setTimeout(r, 1000 * (i + 1)));
    }
  }
}

const nombresRoles = {
  admin: 'Administrador',
  docente: 'Docente',
  preceptor: 'Preceptor',
  jefe_preceptor: 'Jefe de Preceptor',
  sub_jefe_preceptor: 'Sub Jefe de Preceptor'
};

/**
 * Normaliza un nombre para comparación robusta:
 * quita espacios extra, pasa a mayúsculas y elimina tildes.
 * Así "CASTRO GORJÓN, Isabella" == "Castro Gorjon,  Isabella" == true
 */
function normalizarNombre(str) {
    return str
        .trim()
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // elimina tildes
        .replace(/,/g, '')               // elimina comas
        .replace(/\s+/g, " ");           // colapsa espacios múltiples
}

/**
 * Carga todos los datos guardados desde Google Sheets al iniciar la app.
 * Usa el nombre normalizado como clave de búsqueda para evitar fallos
 * por tildes, espacios o mayúsculas distintas entre Sheets y la base local.
 */
async function cargarDesdeSheetsAlIniciar() {
    const tbody = document.querySelector('#tabla-notas tbody');
    tbody.innerHTML = `<tr><td colspan="10" style="padding:30px;text-align:center;color:#007bff;">
        <i class="fas fa-spinner fa-spin"></i> Cargando datos desde el servidor...
    </td></tr>`;

    try {
        const resp = await fetch(URL_WEB_APP, { method: 'GET', mode: 'cors' });
        const filas = await resp.json();

        if (filas.error) throw new Error(filas.error);

        let cargados = 0;
        let noEncontrados = [];

        filas.forEach(item => {
            // Normalizar periodo: Sheets guarda "1er Cuatrimestre", la app usa "1"
            let periodoInterno = item.periodo;
            if (item.periodo === "1er Cuatrimestre") periodoInterno = "1";
            if (item.periodo === "2do Cuatrimestre")  periodoInterno = "2";

            const llave = `${item.turno}-${item.curso}-${item.materia}-${periodoInterno}`;

            // Buscar el alumno por nombre normalizado (tolerante a tildes y espacios)
            const turnoData = baseDeDatosAlumnos[item.turno];
            if (!turnoData || !turnoData[item.curso]) return;

            const nombreBuscado = normalizarNombre(item.nombre);
            const alumno = turnoData[item.curso].find(
                a => normalizarNombre(a.nombre) === nombreBuscado
            );

            if (!alumno) {
                noEncontrados.push(`"${item.nombre}" (${item.curso} / ${item.turno})`);
                return;
            }

            if (!memoriaGlobal[llave]) memoriaGlobal[llave] = {};
            memoriaGlobal[llave][alumno.dni] = {
                nota:                  item.nota             || "",
                sel_1:                 item.obs1             || "",
                sel_2:                 item.obs2             || "",
                sel_3:                 item.obs3             || "",
                observacion:           item.obs4             || "",
                "Interpreta":          item.interpreta       || "-",
                "Relaciona":           item.relaciona        || "-",
                "Aplica":              item.aplica           || "-",
                "Participación":       item.participacion    || "-",
                "Autonomía":           item.autonomia        || "-",
                "Realización de TP":   item.realizacion_tp   || "-",
                "Cumplimiento AEC":    item.cumplimiento_aec || "-"
            };
            cargados++;
        });

        datosSheetsCargados = true;
        console.log(`✅ ${cargados} registros cargados desde Sheets.`);
        if (noEncontrados.length > 0) {
            console.warn("⚠️ Nombres en Sheets que no coinciden con la base local:", noEncontrados);
        }

    } catch (err) {
        console.warn("⚠️ No se pudo cargar desde Sheets, se usará memoria vacía.", err);
        datosSheetsCargados = true;
    }

    // Restaurar mensaje inicial de la tabla
    tbody.innerHTML = `<tr><td colspan="10" style="padding:30px;color:#777;text-align:center;">
        <i class="fas fa-filter"></i> Seleccione todos los filtros para visualizar la lista de alumnos
    </td></tr>`;
}

// 2. FUNCIONES DE ACCESO Y APOYO (Se mantienen igual)
function obtenerSesion() {
    const datos = localStorage.getItem('sia_sesion');
    if (!datos) return null;
    try { return JSON.parse(datos); } catch(e) { return null; }
}

function guardarSesion(datos) {
    localStorage.setItem('sia_sesion', JSON.stringify(datos));
    sesionActual = datos;
}

function cerrarSesion() {
    localStorage.removeItem('sia_sesion');
    sesionActual = null;
    memoriaGlobal = {};
    llavesGuardadas.clear();
    location.reload();
}

async function verificarAcceso() {
    const correo = document.getElementById('user-email').value.trim();
    const password = document.getElementById('pass-input').value;
    const errorMsg = document.getElementById('login-error');

    if (!correo || !password) {
        errorMsg.textContent = 'Complete ambos campos';
        errorMsg.style.display = 'block';
        return;
    }

    const btnLogin = document.getElementById('btn-login');
    btnLogin.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verificando...';
    btnLogin.disabled = true;

    try {
        const resp = await fetchConReintento(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'login', correo: correo, password: password })
        });
        const resultado = await resp.json();

        if (resultado.success) {
            guardarSesion({
                correo: resultado.correo,
                rol: resultado.rol,
                turno: resultado.turno,
                materias_permitidas: resultado.materias_permitidas || [],
                cursos_permitidos: resultado.cursos_permitidos || []
            });
            iniciarApp();
        } else {
            let msg = resultado.error || 'Credenciales incorrectas';
            if (resultado.error === 'Usuario inactivo') {
                msg = 'Tu cuenta esta desactivada. Contacta al administrador.';
            } else if (resultado.error === 'Sistema en mantenimiento') {
                msg = 'Sistema en mantenimiento. Vuelve mas tarde.';
            }
            errorMsg.textContent = msg;
            errorMsg.style.display = 'block';
            document.getElementById('pass-input').value = '';
        }
    } catch (err) {
        console.error('Error de login:', err);
        errorMsg.textContent = 'Error de conexion con el servidor';
        errorMsg.style.display = 'block';
    }

    btnLogin.innerHTML = '<i class="fas fa-sign-in-alt"></i> Iniciar Sesion';
    btnLogin.disabled = false;
}

async function precargarAlumnosDesdeSheets() {
    try {
        const url = URL_WEB_APP + '?action=obtenerAlumnos&correo=' + encodeURIComponent(sesionActual.correo) + '&curso=&turno=';
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();
        if (resultado.success && resultado.alumnos) {
            alumnosDesdeSheets = resultado.alumnos;
            var nuevo = {};
            resultado.alumnos.forEach(function(a) {
                if (!nuevo[a.turno]) nuevo[a.turno] = {};
                if (!nuevo[a.turno][a.curso]) nuevo[a.turno][a.curso] = [];
                nuevo[a.turno][a.curso].push({ dni: a.dni, nombre: a.nombre });
            });
            Object.assign(baseDeDatosAlumnos, nuevo);
        }
    } catch(e) {
        console.warn('Error precargando alumnos desde Sheets:', e);
    }
}

async function iniciarApp() {
    if (!sesionActual) return;

    document.getElementById('login-overlay').style.display = 'none';
    document.getElementById('loading-overlay').style.display = 'flex';

    // precargarAlumnos debe terminar antes de cargarDesdeSheets
    await precargarAlumnosDesdeSheets();

    // El resto corre en paralelo
    await Promise.all([
        cargarRecursantes(),
        cargarFrasesConfig(),
        cargarFechasLimiteGlobal(),
        cargarDesdeSheetsAlIniciar()
    ]);

    document.getElementById('session-email').textContent = sesionActual.correo;
    document.getElementById('session-rol').textContent = nombresRoles[sesionActual.rol] || sesionActual.rol;

    configurarUIporRol();
    actualizarSelectorTurnos();

    document.getElementById('loading-overlay').style.display = 'none';
    document.getElementById('app-main').style.display = 'block';

    if (['preceptor', 'jefe_preceptor', 'sub_jefe_preceptor'].includes(sesionActual.rol)) {
        switchMainTab('alumnos');
    }
}

function configurarUIporRol() {
    const tabEspacios = document.getElementById('tab-espacios');
    const tabGestion = document.getElementById('tab-gestion');
    const tabAlumnos = document.getElementById('tab-alumnos');
    const accionesGuardar = document.getElementById('acciones-guardar');
    const avisoReadonly = document.getElementById('aviso-solo-lectura');
    const dangerZone = document.getElementById('danger-zone-admin');

    const rol = sesionActual.rol;
    const esAdmin = rol === 'admin';
    const esJefePreceptor = rol === 'jefe_preceptor' || rol === 'sub_jefe_preceptor';
    const esPreceptor = rol === 'preceptor';
    const esCualquierPreceptor = esJefePreceptor || esPreceptor;

    if (esAdmin) {
        tabEspacios.style.display = 'inline-flex';
        tabGestion.style.display = 'inline-flex';
        tabAlumnos.style.display = 'inline-flex';
        accionesGuardar.style.display = 'none';
        avisoReadonly.style.display = 'block';
        if (dangerZone) dangerZone.style.display = 'block';
    } else if (esJefePreceptor) {
        tabEspacios.style.display = 'none';
        tabGestion.style.display = 'none';
        tabAlumnos.style.display = 'inline-flex';
        accionesGuardar.style.display = 'none';
        avisoReadonly.style.display = 'block';
        if (dangerZone) dangerZone.style.display = 'none';
    } else if (esPreceptor) {
        tabEspacios.style.display = 'none';
        tabGestion.style.display = 'none';
        tabAlumnos.style.display = 'inline-flex';
        accionesGuardar.style.display = 'none';
        avisoReadonly.style.display = 'block';
        if (dangerZone) dangerZone.style.display = 'none';
    } else {
        tabEspacios.style.display = 'inline-flex';
        tabGestion.style.display = 'none';
        tabAlumnos.style.display = 'none';
        accionesGuardar.style.display = 'flex';
        avisoReadonly.style.display = 'none';
        if (dangerZone) dangerZone.style.display = 'none';
    }
}

function switchMainTab(tab) {
    mainTabActual = tab;
    document.querySelectorAll('#main-tabs .tab-btn').forEach(b => b.classList.remove('active'));

    document.getElementById('panel-calificaciones').style.display = 'none';
    document.getElementById('panel-gestion').style.display = 'none';
    document.getElementById('panel-alumnos').style.display = 'none';

    if (tab === 'calificaciones') {
        document.getElementById('tab-espacios').classList.add('active');
        document.getElementById('panel-calificaciones').style.display = 'block';
    } else if (tab === 'gestion') {
        document.getElementById('tab-gestion').classList.add('active');
        document.getElementById('panel-gestion').style.display = 'block';
        if (typeof cargarListaUsuarios === 'function') cargarListaUsuarios();
        const esAdminGestionTab = sesionActual.rol === 'admin';
        const fechasSection = document.querySelector('.fechas-section');
        const frasesSection = document.querySelector('.frases-section');
        const librosSection = document.querySelector('.libros-section');
        if (fechasSection) fechasSection.style.display = esAdminGestionTab ? 'block' : 'none';
        if (frasesSection) frasesSection.style.display = esAdminGestionTab ? 'block' : 'none';
        if (librosSection) librosSection.style.display = esAdminGestionTab ? 'block' : 'none';
        if (esAdminGestionTab && typeof cargarFechasLimite === 'function') cargarFechasLimite();
    } else if (tab === 'alumnos') {
        document.getElementById('tab-alumnos').classList.add('active');
        document.getElementById('panel-alumnos').style.display = 'block';
        const esJefePreceptor = sesionActual.rol === 'jefe_preceptor' || sesionActual.rol === 'sub_jefe_preceptor' || sesionActual.rol === 'admin';
        const seccionPreceptores = document.getElementById('seccion-preceptores');
        if (seccionPreceptores) {
            seccionPreceptores.style.display = esJefePreceptor ? 'block' : 'none';
        }
        if (typeof cargarListaAlumnosGestion === 'function') cargarListaAlumnosGestion();
        if (typeof cargarPreceptores === 'function') cargarPreceptores();
    }
}

function actualizarSelectorTurnos() {
    const selTurno = document.getElementById('turnos');
    if (!selTurno) return;

    var turnosDisponibles = Object.keys(baseDeDatosAlumnos);
    if (turnosDisponibles.length === 0) turnosDisponibles = ['MAÑANA', 'TARDE'];

    selTurno.innerHTML = '<option value="">Seleccione Turno</option>';
    turnosDisponibles.forEach(function(t) {
        selTurno.innerHTML += '<option value="' + t + '">' + t + '</option>';
    });

    if (sesionActual && sesionActual.turno && (sesionActual.rol === 'preceptor' || sesionActual.rol === 'docente')) {
        var turnoAsignado = sesionActual.turno.trim().toUpperCase();
        if (turnosDisponibles.indexOf(turnoAsignado) >= 0) {
            selTurno.value = turnoAsignado;
        }
        selTurno.disabled = true;
    } else {
        selTurno.disabled = false;
    }
}

async function cargarRecursantes() {
    try {
        const url = URL_WEB_APP + '?action=obtenerRecursantes&correo=' + encodeURIComponent(sesionActual.correo);
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const res = await resp.json();
        if (res.success && res.recursantes) {
            recursantesAgrupados = {};
            res.recursantes.forEach(r => {
                if (!recursantesAgrupados[r.curso]) recursantesAgrupados[r.curso] = {};
                if (!recursantesAgrupados[r.curso][r.dni]) {
                    recursantesAgrupados[r.curso][r.dni] = { nombre: r.nombre, turno: r.turno, materias: [] };
                }
                (r.materias || []).forEach(function(m) {
                    if (!recursantesAgrupados[r.curso][r.dni].materias.includes(m)) {
                        recursantesAgrupados[r.curso][r.dni].materias.push(m);
                    }
                });
            });
        }
    } catch(e) {
        console.warn('Error cargando recursantes:', e);
    }
}

async function cargarFrasesConfig() {
    try {
        const url = URL_WEB_APP + '?action=obtenerFrasesConfig';
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const res = await resp.json();
        if (res.success && res.frases) {
            frasesConfig = res.frases;
        }
    } catch(e) {
        console.warn('Error cargando frases config:', e);
    }
}

function obtenerFrasesDropdown(curso, materia, pos) {
    if (!curso && !materia) return null;
    var anioNum = String(parseInt(String(curso).charAt(0)));
    // Try full curso name first
    if (frasesConfig[curso]) {
        var materiaNorm = materia.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        var keys = Object.keys(frasesConfig[curso]);
        var matchKey = keys.find(function(k) {
            return k.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === materiaNorm;
        });
        if (matchKey) {
            var arr = frasesConfig[curso][matchKey]?.[pos];
            if (arr && arr.length) return arr;
        }
    }
    // Fallback to year number
    if (frasesConfig[anioNum]) {
        materiaNorm = materia.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        keys = Object.keys(frasesConfig[anioNum]);
        matchKey = keys.find(function(k) {
            return k.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === materiaNorm;
        });
        if (matchKey) {
            arr = frasesConfig[anioNum][matchKey]?.[pos];
            if (arr && arr.length) return arr;
        }
    }
    return null;
}

function actualizarMaterias() {
    // 1. Obtenemos los elementos del HTML
    const selectCursos = document.getElementById("cursos");
    const selectMaterias = document.getElementById("materias");

    if (!selectCursos || !selectMaterias) {
        console.error("No se encontraron los selectores en el HTML.");
        return;
    }

    // 2. Leemos el curso y le quitamos espacios fantasmas al inicio o final
    const cursoSeleccionado = selectCursos.value.trim();

    // 3. Limpiamos el menú de materias por completo
    selectMaterias.innerHTML = '<option value="">Seleccione Materia</option>';

    console.log("Curso detectado en pantalla: '" + cursoSeleccionado + "'"); // Esto te ayudará a revisar en la consola

    // 4. Mapa de materias exacto según tus cursos de la base de datos
    const materiasPorCurso = {
        "1 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "1 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
    "1 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "1 D": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "1 E": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "2 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "2 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "2 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "2 D": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "EDUCACION SEXUAL INTEGRAL", "INTERÁREA TECNOLOGÍA"],
        "3 A": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
        "3 B": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
        "3 C": ["CIENCIAS SOCIALES, POLÍTICAS Y ECONÓMICAS", "LENGUAJES Y PRODUCCIÓN CULTURAL", "CIENCIAS NATURALES", "MATEMÁTICA E INFORMÁTICA", "EDUCACION FISICA INTEGRAL", "INTERÁREA TECNOLOGÍA", "COMUNICACIÓN Y MEDIOS", "INVESTIGACIÓN DE LAS ORIENTACIONES"],
        "4 A": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA","CS. BIOLÓGICAS","QUÍMICA","FÍSICA","ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"],
        "4 B": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA","CS. BIOLÓGICAS","QUÍMICA","FÍSICA","ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"],
        "4 C": ["HISTORIA", "GEOGRAFÍA", "SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES", "LENGUA Y LITERATURA","ARTE", "LENGUAS OTRAS", "EDUCACION FISICA INTEGRAL", "MATEMÁTICA","INFORMÁTICA", "CS. BIOLÓGICAS", "QUÍMICA", "FÍSICA", "FILOSOFÍA DE LAS CIENCIAS", "GEOPOLÍTICA", "ESTUDIOS SOCIALES Y CULTURALES", "GENEALOGÍAS DE LAS ARTES Y LAS ESTÉTICA", "COMUNICACIÓN, DISCURSO Y PRODUCCIÓN DE SENTIDOS", "PROYECTOS SOCIOCOMUNITARIOS"],
        "5 A": ["IDIOMA EXTRANJERO INGLÉS O FRANCÉS","MATEMÁTICA FINANCIERA","MERCEOLOGÍA","GEOGRAFÍA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÓN DEL COMERCIO Y DE LA EMPRESA","ECONOMÍA POLÍTICA","CONTABILIDAD","ESTENOGRAFÍA","MECANOGRAFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"],
        "5 B": ["IDIOMA EXTRANJERO INGLÉS O FRANCÉS","MATEMÁTICA FINANCIERA","MERCEOLOGÍA","GEOGRAFÍA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACIÓN DEL COMERCIO Y DE LA EMPRESA","ECONOMÍA POLÍTICA","CONTABILIDAD","ESTENOGRAFÍA","MECANOGRAFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"],
        "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMÁTICA","FÍSICA","QUÍMICA","CIENCIAS BIOLÓGICAS","GEOGRAFÍA ARGENTINA","HISTORIA","INSTRUCCIÓN CÍVICA","FILOSOFÍA","EDUCACIÓN FÍSICA","INFORMÁTICA V"]
    };

    // 5. Verificamos si el curso existe en el mapa
    if (cursoSeleccionado && materiasPorCurso[cursoSeleccionado]) {
        
        // Cargamos las materias correspondientes
        materiasPorCurso[cursoSeleccionado].forEach(materia => {
            const option = document.createElement("option");
            option.value = materia;
            option.textContent = materia;
            selectMaterias.appendChild(option);
        });
        
    } else if (cursoSeleccionado !== "") {
        // Si el curso existe pero no le pusimos materias en el mapa todavía
        const option = document.createElement("option");
        option.value = "";
        option.textContent = "Sin materias registradas para este curso";
        selectMaterias.appendChild(option);
    }
}

function respaldarAPantallaAMemoria() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value || document.getElementById('areas-cualitativas').value;
    const periodo = document.getElementById('periodos').value || document.getElementById('periodos-cualitativas').value;

    if (!turno || !curso || !materia || !periodo) return;

    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    if (!memoriaGlobal[llaveID]) memoriaGlobal[llaveID] = {};

    const filas = document.querySelectorAll('#tabla-notas tbody tr');
    filas.forEach(fila => {
        const dni = fila.getAttribute('data-dni');
        if (!dni) return;
        if (!memoriaGlobal[llaveID][dni]) memoriaGlobal[llaveID][dni] = {};

        const selNota = fila.querySelector('.select-nota');
        if (selNota) memoriaGlobal[llaveID][dni].nota = selNota.value;

        fila.querySelectorAll('.select-obs-multiple').forEach(sel => {
            memoriaGlobal[llaveID][dni][`sel_${sel.dataset.pos}`] = sel.value;
        });

        fila.querySelectorAll('.select-nota-cualitativa').forEach(sel => {
            memoriaGlobal[llaveID][dni][sel.dataset.criterio] = sel.value;
        });

        const txtObs = fila.querySelector('.text-obs');
        if (txtObs) memoriaGlobal[llaveID][dni].observacion = txtObs.value;
    });
    // Nota: ya no guardamos en localStorage. Los datos persisten en Google Sheets al presionar "Guardar".
}

function switchTab(tab) {
    // 1. Guardar cambios en memoria antes de movernos
    respaldarAPantallaAMemoria(); 
    tabActual = tab;

    // 2. Manejo visual de la interfaz
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.getElementById(`filtros-${tab}`).classList.add('active');

    // 3. CAPTURA DE ELEMENTOS PARA SINCRONIZAR Y BLOQUEAR
    const pEspacios = document.getElementById('periodos');
    const pCualitativas = document.getElementById('periodos-cualitativas');
    const selectorCursos = document.getElementById('cursos');
    const selectorTurnos = document.getElementById('turnos'); // Nuevo elemento a bloquear

    if (tab === 'cualitativas') {
        // --- Período: Sincronizar y Bloquear ---
        pCualitativas.value = pEspacios.value;
        pCualitativas.disabled = true;
        pCualitativas.style.backgroundColor = "#f0f0f0";

        // --- Curso: Bloquear ---
        selectorCursos.disabled = true;
        selectorCursos.style.backgroundColor = "#f0f0f0";
        selectorCursos.style.cursor = "not-allowed";

        // --- Turno: Bloquear (NUEVO) ---
        selectorTurnos.disabled = true;
        selectorTurnos.style.backgroundColor = "#f0f0f0";
        selectorTurnos.style.cursor = "not-allowed";

    } else {
        // --- Desbloqueo Total al volver a Espacios Curriculares ---
        pEspacios.disabled = false;
        
        selectorCursos.disabled = false;
        selectorCursos.style.backgroundColor = "";
        selectorCursos.style.cursor = "default";

        selectorTurnos.disabled = false;
        selectorTurnos.style.backgroundColor = "";
        selectorTurnos.style.cursor = "default";
    }

    // 4. Refrescar la vista de la tabla
    validarYFiltrar();
}

function limpiarTabla() {
    const tbody = document.querySelector('#tabla-notas tbody');
    if (tbody) tbody.innerHTML = '';
    const headerRow = document.getElementById('header-row');
    if (headerRow) headerRow.innerHTML = '';
}

function validarYFiltrar() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    let filtrosCompletos = false;
    
    if (tabActual === 'espacios') {
        const mat = document.getElementById('materias').value;
        const per = document.getElementById('periodos').value;
        if (turno && curso && mat && per) filtrosCompletos = true;
    } else {
        const area = document.getElementById('areas-cualitativas').value;
        const perC = document.getElementById('periodos-cualitativas').value;
        if (turno && curso && area && perC) filtrosCompletos = true;
    }

    if (filtrosCompletos) {
        cargarAlumnos(); 
    } else {
        limpiarTabla();
    }
}

function actualizarSelectorCursos() {
    const turnoSeleccionado = document.getElementById('turnos').value;
    const selectorCursos = document.getElementById('cursos');
    selectorCursos.innerHTML = '<option value="">Seleccione Curso</option>';
    
    if (turnoSeleccionado && baseDeDatosAlumnos[turnoSeleccionado]) {
        Object.keys(baseDeDatosAlumnos[turnoSeleccionado]).sort().forEach(curso => {
            selectorCursos.innerHTML += '<option value="' + curso + '">' + curso + '</option>';
        });
    }
    actualizarMaterias();
    validarYFiltrar();
}

// 3. CARGAR ALUMNOS (AJUSTADO SEGÚN TU SOLICITUD)
async function cargarAlumnos() {
    const tbody = document.querySelector('#tabla-notas tbody');
    const headerRow = document.getElementById('header-row');
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value || document.getElementById('areas-cualitativas').value;
    const periodo = document.getElementById('periodos').value || document.getElementById('periodos-cualitativas').value;

    // Si falta algún filtro, limpiamos la tabla y salimos
    if (!turno || !curso || !materia || !periodo) {
        limpiarTabla();
        actualizarAvisoFechaLimite('');
        return;
    }

    document.getElementById('loader-tabla').style.display = 'block';

    // Asegurar fechas limite cargadas
    if (Object.keys(fechasLimite).length === 0) {
        await cargarFechasLimiteGlobal();
    }

    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    
    // Si no hay datos en memoria para esta combinación, cargar desde el servidor
    if (!memoriaGlobal[llaveID]) {
        try {
            const url = `${URL_WEB_APP}?action=obtenerDatosCurso`
                + `&correo=${encodeURIComponent(sesionActual.correo)}`
                + `&turno=${encodeURIComponent(turno)}`
                + `&curso=${encodeURIComponent(curso)}`
                + `&materia=${encodeURIComponent(materia)}`
                + `&periodo=${encodeURIComponent(periodo)}`;
            const resp = await fetch(url, { method: 'GET', mode: 'cors' });
            const res = await resp.json();
            if (res.success && res.datos) {
                if (!memoriaGlobal[llaveID]) memoriaGlobal[llaveID] = {};
                const alumnos = baseDeDatosAlumnos[turno]?.[curso] || [];
                res.datos.forEach(item => {
                    const nombreBuscado = normalizarNombre(item.nombre);
                    const alumno = alumnos.find(a => normalizarNombre(a.nombre) === nombreBuscado);
                    if (!alumno) return;
                    memoriaGlobal[llaveID][alumno.dni] = {
                        nota:                  item.nota             || "",
                        sel_1:                 item.obs1             || "",
                        sel_2:                 item.obs2             || "",
                        sel_3:                 item.obs3             || "",
                        observacion:           item.obs4             || "",
                        "Interpreta":          item.interpreta       || "-",
                        "Relaciona":           item.relaciona        || "-",
                        "Aplica":              item.aplica           || "-",
                        "Participación":       item.participacion    || "-",
                        "Autonomía":           item.autonomia        || "-",
                        "Realización de TP":   item.realizacion_tp   || "-",
                        "Cumplimiento AEC":    item.cumplimiento_aec || "-"
                    };
                });
            }
        } catch(e) {
            console.warn('Error cargando datos del curso:', e);
        }
    }
    
    const datosM = memoriaGlobal[llaveID] || {};
    const añoCurso = curso ? parseInt(curso.charAt(0)) : 0;
    const esBimestre = periodo.includes("Bimestre");
    const mostrarCualitativas = (añoCurso >= 5) || esBimestre;
    const puedeEditar = verificarPermisoEdicion(materia, curso);

    // Mostrar/ocultar avisos segun permisos
    const avisoMateria = document.getElementById('aviso-materia-bloqueada');
    const accionesGuardar = document.getElementById('acciones-guardar');

    if (!puedeEditar) {
        accionesGuardar.style.display = 'none';
        if (avisoMateria) avisoMateria.style.display = 'block';
    } else {
        accionesGuardar.style.display = 'flex';
        if (avisoMateria) avisoMateria.style.display = 'none';
    }

    const disabledAttr = (!puedeEditar) ? 'disabled' : '';
    const bgStyle = (!puedeEditar) ? 'style="background-color:#e9ecef;"' : '';

    actualizarEstadoBotonComprobante();

    // 1. CONFIGURACIÓN DE ENCABEZADOS (TÍTULOS)
    headerRow.innerHTML = '<th style="width: 50px;">N°</th><th>Apellido y Nombre</th>';
    
    if (tabActual === 'espacios') {
        if (mostrarCualitativas) {
            criteriosCualitativos.forEach(crit => {
                headerRow.innerHTML += `<th style="font-size: 0.75rem; min-width: 85px;">${crit}</th>`;
            });
        }
        headerRow.innerHTML += '<th>Nota</th>';
        headerRow.innerHTML += '<th>Observaciones (Frase y Nota Personal)</th>';
    } else {
        // Formato para Cualitativas
        if (añoCurso <= 4 && !periodo.includes("Bimestre")) {
            // Formato Cuatrimestral de 1ro a 4to
            headerRow.innerHTML += '<th>Observaciones Cualitativas (3 Frases y Nota)</th>';
        } else {
            // Formato de Criterios para 5to o bimestres
            criteriosCualitativos.forEach(crit => {
                headerRow.innerHTML += `<th style="font-size: 0.75rem;">${crit}</th>`;
            });
        }
    }

    // 2. RENDERIZADO DE FILAS
    tbody.innerHTML = ''; 
    let alumnos = (baseDeDatosAlumnos[turno]?.[curso] || []).map(a => ({ ...a, _recursante: false }));

    // Filtrar recursantes: deben aparecer SOLO en las materias que recursan
    if (recursantesAgrupados[curso]) {
        Object.keys(recursantesAgrupados[curso]).forEach(dni => {
            const r = recursantesAgrupados[curso][dni];
            const matchIdx = alumnos.findIndex(a => normalizarNombre(a.nombre) === normalizarNombre(r.nombre));
            if (matchIdx >= 0) {
                // Es alumno regular + recursante
                if (r.materias.includes(materia)) {
                    alumnos[matchIdx]._recursante = true; // lo marcamos pero se queda
                } else {
                    alumnos.splice(matchIdx, 1); // lo sacamos, no recursa esta materia
                }
            } else if (r.materias.includes(materia)) {
                // Solo recursante (no está en baseDeDatosAlumnos)
                alumnos.push({ dni, nombre: r.nombre, _recursante: true });
            }
        });
    }
    
    // Buscar frases correspondientes a la materia
    let frases = frasesPorMateria["DEFAULT"];
    for(let clave in frasesPorMateria) { 
        if(materia.toUpperCase().includes(clave)) frases = frasesPorMateria[clave]; 
    }

    alumnos.forEach((alumno, index) => {
        const tr = document.createElement('tr');
        tr.setAttribute('data-dni', alumno.dni);
        const persistido = datosM[alumno.dni] || {};
        let html = `<td>${index + 1}</td><td style="text-align:left;">${alumno.nombre}</td>`;

        if (tabActual === 'espacios') {
            // --- PESTAÑA ESPACIOS CURRICULARES ---
            if (mostrarCualitativas) {
                criteriosCualitativos.forEach(crit => {
                    const valC = persistido[crit] || "-";
                    html += `<td><select class="nota-input select-nota-cualitativa" data-criterio="${crit}" style="font-size:0.85rem;" ${disabledAttr} ${bgStyle} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', '${crit}', this.value)">
                                ${opcionesCualitativas.map(o => `<option value="${o}" ${valC===o?'selected':''}>${o}</option>`).join('')}
                             </select></td>`;
                });
            }
            const n = persistido.nota || "";
            const esCuatrimestre = (periodo === "1" || periodo === "2");
            html += `<td><select class="nota-input select-nota" ${disabledAttr} ${bgStyle} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'nota', this.value)">
                        <option value="">-</option>`;
            if (esCuatrimestre) {
                for (let i = 4; i <= 10; i++) {
                    html += `<option value="${i}" ${n == i ? 'selected' : ''}>${i}</option>`;
                }
                html += `<option value="Ausente" ${n === 'Ausente' ? 'selected' : ''}>Ausente</option>`;
                html += `<option value="Sin calificar" ${n === 'Sin calificar' ? 'selected' : ''}>Sin calificar</option>`;
            } else {
                escalaConceptos.forEach(e => {
                    html += `<option value="${e}" ${n == e ? 'selected' : ''}>${e}</option>`;
                });
            }
            html += `</select></td>`;
            


            if (añoCurso >= 5 || periodo.includes("Bimestre")) {
                const valP = persistido[`sel_1`] || "";
                const frasesAC = obtenerFrasesDropdown(curso, materia, 1) || frases;
                html += `<td><div style="display:flex; flex-direction:column; gap:3px;">
                            <select class="nota-input select-obs-multiple" data-pos="1" style="font-size:0.85rem;min-width:260px;" ${disabledAttr} ${bgStyle} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'sel_1', this.value)">
                                <option value="">Seleccione una frase...</option>
                                ${frasesAC.map(f => `<option value="${f}" ${valP===f?'selected':''}>* ${f}</option>`).join('')}
                            </select>
                            <textarea class="nota-input text-obs" placeholder="Nota personal..." style="height:40px;" ${disabledAttr} ${bgStyle} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'observacion', this.value)">${persistido.observacion || ""}</textarea>
                         </div></td>`;
            } else {
                html += `<td><div style="display:flex; flex-direction:column; gap:3px;">`;
                for(let p=1; p<=3; p++) {
                    const valP = persistido[`sel_${p}`] || "";
                    const opts = obtenerFrasesDropdown(curso, materia, p) || frases;
                    html += `<select class="nota-input select-obs-multiple" data-pos="${p}" style="font-size:0.85rem;min-width:240px;" ${disabledAttr} ${bgStyle} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'sel_${p}', this.value)">
                                <option value="">Frase ${p}...</option>
                                ${opts.map(f => `<option value="${f}" ${valP===f?'selected':''}>* ${f}</option>`).join('')}
                             </select>`;
                }
                html += `<textarea class="nota-input text-obs" placeholder="Nota personal..." style="height:40px;" ${disabledAttr} ${bgStyle} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'observacion', this.value)">${persistido.observacion || ""}</textarea>
                         </div></td>`;
            }
            
        } else {
            // --- PESTAÑA CATEGORÍAS CUALITATIVAS ---
            if (añoCurso <= 4 && !periodo.includes("Bimestre")) {
                // Formato de 3 DESPLEGABLES (Cuatrimestres 1-4)
                html += `<td><div style="display:flex; flex-direction:column; gap:3px;">`;
                for(let p=1; p<=3; p++) {
                    const valP = persistido[`sel_${p}`] || "";
                    const opts = obtenerFrasesDropdown(curso, materia, p) || frases;
                    html += `<select class="nota-input select-obs-multiple" data-pos="${p}" style="font-size:0.85rem;min-width:240px;" ${disabledAttr} ${bgStyle} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'sel_${p}', this.value)">
                                <option value="">Frase ${p}...</option>
                                ${opts.map(f => `<option value="${f}" ${valP===f?'selected':''}>* ${f}</option>`).join('')}
                             </select>`;
                }
                html += `<textarea class="nota-input text-obs" placeholder="Nota personal..." style="height:45px;" ${disabledAttr} ${bgStyle} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', 'observacion', this.value)">${persistido.observacion || ""}</textarea>
                         </div></td>`;
            } else {
                // Formato de CRITERIOS (Bimestres o 5to)
                criteriosCualitativos.forEach(crit => {
                    const valC = persistido[crit] || "-";
                    html += `<td><select class="nota-input select-nota-cualitativa" data-criterio="${crit}" ${disabledAttr} ${bgStyle} onchange="actualizarMemoria('${llaveID}', '${alumno.dni}', '${crit}', this.value)">
                                ${opcionesCualitativas.map(o => `<option value="${o}" ${valC===o?'selected':''}>${o}</option>`).join('')}
                             </select></td>`;
                });
            }
        }
        tr.innerHTML = html;
        tbody.appendChild(tr);
    });
    actualizarAvisoFechaLimite(periodo);
    document.getElementById('loader-tabla').style.display = 'none';
}

// 4. EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    sesionActual = obtenerSesion();

    if (sesionActual) {
        iniciarApp();
    } else {
        document.getElementById('login-overlay').style.display = 'flex';
        document.getElementById('app-main').style.display = 'none';
    }

    // Enter en campos de login
    document.getElementById('pass-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verificarAcceso();
    });
    document.getElementById('user-email').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') document.getElementById('pass-input').focus();
    });

    const btnLogin = document.getElementById('btn-login'); 

    document.getElementById('turnos').addEventListener('change', actualizarSelectorCursos);
    document.getElementById('cursos').addEventListener('change', actualizarMaterias);
    ['materias', 'periodos', 'areas-cualitativas', 'periodos-cualitativas'].forEach(id => {
        const el = document.getElementById(id); if(el) el.addEventListener('change', validarYFiltrar);
    });
    document.getElementById('tabla-notas').addEventListener('change', (e) => {
        if (e.target.classList.contains('nota-input')) respaldarAPantallaAMemoria();
    });
    document.getElementById('btnGuardar').onclick = guardarEnGoogleSheets;
    document.getElementById('btnLimpiar').onclick = () => {
        if(confirm("¿Limpiar la memoria de esta sesión? Los datos guardados en Sheets no se borran.")) {
            memoriaGlobal = {};
            location.reload();
        }
    };

    if (!sesionActual) {
        cargarDesdeSheetsAlIniciar();
    }
});

// 5. GUARDAR DATOS (VERSIÓN CORREGIDA 2026)
// Cola de guardado secuencial (evita sobrecargar la BD con multiples envios simultaneos)
let colaGuardado = [];
let procesandoCola = false;

function mostrarColaStatus() {
    const el = document.getElementById('cola-status');
    const txt = document.getElementById('cola-texto');
    if (!el || !txt) return;
    if (colaGuardado.length > 0 || procesandoCola) {
        el.style.display = 'block';
        if (procesandoCola && colaGuardado.length === 0) {
            txt.textContent = 'Guardando...';
        } else if (procesandoCola) {
            txt.textContent = `Guardando... ${colaGuardado.length} en fila para ser cargado`;
        } else {
            txt.textContent = `${colaGuardado.length} en fila para ser cargado...`;
        }
    } else {
        el.style.display = 'none';
    }
}

async function procesarCola() {
    if (procesandoCola || colaGuardado.length === 0) return;
    procesandoCola = true;
    mostrarColaStatus();

    while (colaGuardado.length > 0) {
        const tarea = colaGuardado[0];
        const { turno, curso, materia, periodo, llave, datos, resolver, rechazar } = tarea;

        // Mostrar progreso
        const progressContainer = document.getElementById('progress-container');
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        if (progressContainer) progressContainer.style.display = 'block';
        if (progressBar) progressBar.style.width = '30%';
        if (progressText) progressText.textContent = `Guardando ${curso} - ${materia}...`;

        let nombrePeriodo = periodo;
        if (periodo === "1") nombrePeriodo = "1er Cuatrimestre";
        else if (periodo === "2") nombrePeriodo = "2do Cuatrimestre";
        else if (periodo === "1_Bimestre") nombrePeriodo = "1er Bimestre";
        else if (periodo === "2_Bimestre") nombrePeriodo = "2do Bimestre";

        const payload = {
            action: 'guardarNotas',
            correoDocente: sesionActual.correo,
            datos: datos.map(d => ({
                ...d,
                periodo: nombrePeriodo
            }))
        };

        try {
            if (progressBar) progressBar.style.width = '60%';
            if (progressText) progressText.textContent = 'Enviando a Google Sheets...';

            const resp = await fetch(URL_WEB_APP, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(payload)
            });

            if (progressBar) progressBar.style.width = '80%';
            if (progressText) progressText.textContent = 'Procesando respuesta...';

            if (!resp.ok) throw new Error('El servidor respondio con error: ' + resp.status);

            const resultado = await resp.json();
            if (resultado.success) {
                llavesGuardadas.add(llave);
                actualizarEstadoBotonComprobante();
                if (progressBar) progressBar.style.width = '100%';
                if (progressText) progressText.textContent = `${curso} - ${materia} guardado correctamente`;
                resolver(resultado);
            } else {
                throw new Error(resultado.error || 'Error del servidor');
            }
        } catch (e) {
            console.error('Error en guardado:', e);
            if (progressText) progressText.textContent = `Error: ${e.message}`;
            rechazar(e);
        }

        // Esperar 1s entre tareas para no saturar
        await new Promise(r => setTimeout(r, 1000));

        // Remover tarea completada
        colaGuardado.shift();
        mostrarColaStatus();
    }

    procesandoCola = false;
    mostrarColaStatus();

    // Ocultar progreso tras 2s
    setTimeout(() => {
        const progressContainer = document.getElementById('progress-container');
        if (progressContainer && colaGuardado.length === 0 && !procesandoCola) {
            progressContainer.style.display = 'none';
        }
    }, 2000);
}

function agregarACola(turno, curso, materia, periodo, datos) {
    return new Promise((resolve, reject) => {
        const llave = `${turno}-${curso}-${materia}-${periodo}`;
        colaGuardado.push({ turno, curso, materia, periodo, llave, datos, resolver: resolve, rechazar: reject });
        mostrarColaStatus();
        procesarCola();
    });
}

async function guardarEnGoogleSheets() {
    if (!sesionActual) { alert('Debe iniciar sesión'); return; }

    respaldarAPantallaAMemoria();
    const btn = document.getElementById('btnGuardar');

    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value || document.getElementById('areas-cualitativas').value;
    const periodo = document.getElementById('periodos').value || document.getElementById('periodos-cualitativas').value;

    if (!turno || !curso || !materia || !periodo) {
        alert('Complete todos los filtros antes de guardar');
        return;
    }

    if (!verificarPermisoEdicion(materia, curso)) {
        alert('No tiene permiso para editar esta materia');
        return;
    }

    const llave = `${turno}-${curso}-${materia}-${periodo}`;
    let alumnos = (baseDeDatosAlumnos[turno]?.[curso] || []).map(a => ({ ...a }));
    // Filtrar recursantes: solos para las materias que recursan
    if (recursantesAgrupados[curso]) {
        Object.keys(recursantesAgrupados[curso]).forEach(dni => {
            const r = recursantesAgrupados[curso][dni];
            const matchIdx = alumnos.findIndex(a => normalizarNombre(a.nombre) === normalizarNombre(r.nombre));
            if (matchIdx >= 0) {
                if (!r.materias.includes(materia)) {
                    alumnos.splice(matchIdx, 1);
                }
            } else if (r.materias.includes(materia)) {
                alumnos.push({ dni, nombre: r.nombre });
            }
        });
    }
    if (!alumnos || alumnos.length === 0) {
        alert('No hay alumnos cargados para esta combinacion');
        return;
    }

    const datos = [];
    alumnos.forEach((a, i) => {
        const m = memoriaGlobal[llave] ? (memoriaGlobal[llave][a.dni] || {}) : {};
        datos.push({
            n_orden: i + 1,
            nombre: a.nombre,
            curso: curso,
            turno: turno,
            materia: materia,
            periodo: periodo,
            nota: m.nota || "",
            obs1: m.sel_1 || "",
            obs2: m.sel_2 || "",
            obs3: m.sel_3 || "",
            obs4: m.observacion || "",
            interpreta: m["Interpreta"] || "-",
            relaciona: m["Relaciona"] || "-",
            aplica: m["Aplica"] || "-",
            participacion: m["Participación"] || "-",
            autonomia: m["Autonomía"] || "-",
            realizacion_tp: m["Realización de TP"] || "-",
            cumplimiento_aec: m["Cumplimiento AEC"] || "-"
        });
    });

    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-clock"></i> En cola...';

    try {
        await agregarACola(turno, curso, materia, periodo, datos);
        alert("Datos sincronizados con exito!");
    } catch (e) {
        alert("Error al guardar: " + (e.message || 'Error de conexion'));
    }

    btn.innerHTML = '<i class="fas fa-cloud-upload-alt"></i> Guardar Datos';
    btn.disabled = false;
}



function verificarPermisoEdicion(materia, curso) {
    if (!sesionActual) return false;
    // asesoria@cpem32.edu.ar solo lectura en calificaciones
    if (sesionActual.correo === 'asesoria@cpem32.edu.ar') return false;
    if (sesionActual.rol === 'admin') return true;
    const rol = sesionActual.rol;
    if (rol === 'jefe_preceptor' || rol === 'sub_jefe_preceptor' || rol === 'preceptor') {
        return false;
    }
    if (!sesionActual.materias_permitidas || sesionActual.materias_permitidas.length === 0) {
        return true;
    }
    const pair = (curso ? curso + ': ' : '') + materia;
    if (sesionActual.materias_permitidas.indexOf(pair) !== -1) return true;
    
    // Fallback solo para 1° a 3° año: el docente tiene materias específicas
    // (ej. "1 C: MATEMATICA") y debe poder editar el área completa
    // (ej. "MATEMÁTICA E INFORMÁTICA")
    const anio = curso ? parseInt(curso) : 0;
    if (anio >= 1 && anio <= 3) {
        const materiaNorm = materia.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        for (const perm of sesionActual.materias_permitidas) {
            if (curso && !perm.startsWith(curso + ': ')) continue;
            const permSubject = perm.substring((curso + ': ').length).trim().toUpperCase();
            // Normalizar por si el área en areasPorMateria está sin acentos
            const permArea = areasPorMateria[permSubject];
            if (permArea) {
                const permAreaNorm = permArea.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                if (permAreaNorm === materiaNorm) return true;
            }
        }
    }
    
    return false;
}

// ============================================================
// PANEL DE GESTIÓN DE USUARIOS (ADMIN)
// ============================================================

function mostrarToast(mensaje, tipo) {
    let cont = document.getElementById('toast-container');
    if (!cont) {
        cont = document.createElement('div');
        cont.id = 'toast-container';
        cont.style.cssText = 'position:fixed;top:70px;right:20px;z-index:9999;display:flex;flex-direction:column;gap:8px;';
        document.body.appendChild(cont);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-notification toast-' + (tipo || 'info');
    toast.innerHTML = mensaje;
    toast.style.cssText = 'padding:12px 24px;border-radius:6px;margin-bottom:8px;font-size:0.9rem;animation:fadeInToast 0.3s ease;box-shadow:0 2px 8px rgba(0,0,0,0.15);' +
        (tipo === 'success' ? 'background:#d4edda;color:#155724;border:1px solid #c3e6cb;' :
         tipo === 'error' ? 'background:#f8d7da;color:#721c24;border:1px solid #f5c6cb;' :
         'background:#cce5ff;color:#004085;border:1px solid #b8daff;');
    cont.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; setTimeout(() => toast.remove(), 500); }, 3000);
}

async function cargarListaUsuarios() {
    const tbody = document.getElementById('tbody-usuarios');
    tbody.innerHTML = '<tr><td colspan="5" style="padding:20px;text-align:center;"><i class="fas fa-spinner fa-spin"></i> Cargando...</td></tr>';
    try {
        const url = `${URL_WEB_APP}?action=listarUsuarios&correo=${encodeURIComponent(sesionActual.correo)}`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();
        if (!resultado.success) {
            tbody.innerHTML = `<tr><td colspan="5" style="padding:20px;text-align:center;color:red;">${resultado.error}</td></tr>`;
            return;
        }
        renderizarTablaUsuarios(resultado.usuarios, resultado.sistema_activo);
    } catch (err) {
        tbody.innerHTML = '<tr><td colspan="5" style="padding:20px;text-align:center;color:red;">Error al cargar usuarios</td></tr>';
    }
}

function renderizarTablaUsuarios(usuarios, sistemaActivo) {
    const tbody = document.getElementById('tbody-usuarios');
    const thMateriasTurno = document.getElementById('th-materias-turno');
    const esJefePreceptorRender = sesionActual.rol === 'jefe_preceptor' || sesionActual.rol === 'sub_jefe_preceptor';
    if (thMateriasTurno) thMateriasTurno.textContent = esJefePreceptorRender ? 'Turno Asignado' : 'Materias Asignadas';
    tbody.innerHTML = '';
    if (!usuarios || usuarios.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="padding:20px;text-align:center;">No hay usuarios registrados</td></tr>';
        return;
    }
    const panelGestion = document.getElementById('panel-gestion');
    const esAdminGestion = sesionActual.rol === 'admin';
    let switchGlobal = document.getElementById('switch-global-sistema');
    if (esAdminGestion) {
        if (!switchGlobal) {
            switchGlobal = document.createElement('div');
            switchGlobal.id = 'switch-global-sistema';
            switchGlobal.className = 'switch-global-container';
            switchGlobal.innerHTML = `
                <label class="switch-global-label">
                    <input type="checkbox" id="chk-sistema-activo" ${sistemaActivo !== false ? 'checked' : ''} onchange="toggleSistemaGlobal(this.checked)">
                    <span class="switch-slider"></span>
                    <span id="txt-sistema-estado" class="switch-text">${sistemaActivo !== false ? 'Sistema activo' : 'En mantenimiento'}</span>
                </label>`;
            panelGestion.insertBefore(switchGlobal, panelGestion.firstChild);
        } else {
            switchGlobal.style.display = 'flex';
            document.getElementById('chk-sistema-activo').checked = sistemaActivo !== false;
            document.getElementById('txt-sistema-estado').textContent = sistemaActivo !== false ? 'Sistema activo' : 'En mantenimiento';
        }
    } else {
        if (switchGlobal) switchGlobal.style.display = 'none';
    }
    usuarios.forEach(u => {
        const tr = document.createElement('tr');
        const esAdminPrincipal = u.esAdminPrincipal;
        const nombreRolDisplay = nombresRoles[u.rol] || u.rol;
        const materiasTexto = (u.materias_permitidas && u.materias_permitidas.length > 0)
            ? u.materias_permitidas.join(', ')
            : '<em>Todas (sin restriccion)</em>';
        const cursosTexto = (u.rol === 'preceptor' && u.cursos_permitidos && u.cursos_permitidos.length > 0)
            ? u.cursos_permitidos.join(', ')
            : (u.rol === 'preceptor' ? '<em>Ninguno</em>' : '<em>Incluido en materias</em>');
        const estaActivo = u.activo === 'si' || u.activo === true;
        const badgeActivo = estaActivo
            ? '<span class="badge badge-activo">ACTIVO</span>'
            : '<span class="badge badge-inactivo">INACTIVO</span>';
        const esAdminToggle = sesionActual.rol === 'admin';
        const toggleDisabled = esAdminPrincipal || !esAdminToggle ? 'disabled' : '';
        const toggleChecked = estaActivo ? 'checked' : '';
        const toggleHtml = esAdminToggle ? `
            <label class="switch-toggle">
                <input type="checkbox" ${toggleChecked} ${toggleDisabled} onchange="toggleUsuarioActivo('${u.correo}', this.checked)">
                <span class="switch-toggle-slider"></span>
            </label>` : '';
        let acciones = '';
        const esAdminGestionTabla = sesionActual.rol === 'admin';
        const esJefePreceptorTabla = sesionActual.rol === 'jefe_preceptor' || sesionActual.rol === 'sub_jefe_preceptor';
        if (esAdminGestionTabla) {
            if (u.rol === 'docente' || u.rol === 'preceptor' || u.rol === 'jefe_preceptor' || u.rol === 'sub_jefe_preceptor' || (u.rol === 'admin' && !esAdminPrincipal)) {
                acciones += `<button class="btn-action btn-edit-mat" onclick="abrirModalMaterias('${u.correo}')"><i class="fas fa-book"></i></button>`;
            }
            if (!esAdminPrincipal || sesionActual.correo === '/admin32/@cpem32.edu.ar') {
                acciones += `<button class="btn-action btn-edit-pass" onclick="abrirModalPassword('${u.correo}')"><i class="fas fa-key"></i></button>`;
            }
            if (!esAdminPrincipal) {
                acciones += `<button class="btn-action btn-delete" onclick="confirmarEliminarUsuario('${u.correo}')"><i class="fas fa-trash"></i></button>`;
            }
        } else if (esJefePreceptorTabla) {
            if (!esAdminPrincipal) {
                acciones += `<button class="btn-action btn-delete" onclick="confirmarEliminarUsuario('${u.correo}')"><i class="fas fa-trash"></i></button>`;
            }
        }
        const turnoTexto = u.turno || '<em>No asignado</em>';
        tr.innerHTML = `
            <td>${u.correo}</td>
            <td><span class="badge badge-${u.rol}">${nombreRolDisplay}</span></td>
            <td class="materias-cell">${esJefePreceptorRender ? turnoTexto : materiasTexto}</td>
            <td>${badgeActivo} ${toggleHtml}</td>
            <td class="acciones-cell">${acciones}</td>`;
        tbody.appendChild(tr);
    });
}

async function toggleUsuarioActivo(correo, activo) {
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST', mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'toggleActivo', correoAdmin: sesionActual.correo, correoObjetivo: correo, activo: activo })
        });
        const res = await resp.json();
        if (!res.success) {
            alert(res.error || 'Error al cambiar estado');
            cargarListaUsuarios();
        }
    } catch (err) {
        alert('Error de conexion');
        cargarListaUsuarios();
    }
}

async function toggleSistemaGlobal(activo) {
    const txt = document.getElementById('txt-sistema-estado');
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST', mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({ action: 'setConfig', correoAdmin: sesionActual.correo, clave: 'sistema_activo', valor: activo ? 'si' : 'no' })
        });
        const res = await resp.json();
        if (res.success) {
            txt.textContent = activo ? 'Sistema activo' : 'En mantenimiento';
        } else {
            alert(res.error || 'Error');
            document.getElementById('chk-sistema-activo').checked = !activo;
        }
    } catch (err) {
        alert('Error de conexion');
        document.getElementById('chk-sistema-activo').checked = !activo;
    }
}

function cerrarModal(id) {
    document.getElementById(id).style.display = 'none';
}

function obtenerTodosLosCursos() {
    const todos = new Set();
    Object.keys(baseDeDatosAlumnos).forEach(turno => {
        Object.keys(baseDeDatosAlumnos[turno]).forEach(curso => { todos.add(curso); });
    });
    return Array.from(todos).sort((a, b) => {
        const numA = parseInt(a.charAt(0));
        const numB = parseInt(b.charAt(0));
        if (numA !== numB) return numA - numB;
        return a.localeCompare(b);
    });
}

function obtenerTodasLasMaterias() {
    const lista = [];
    const materias1_3 = typeof MATERIAS_BIMESTRE_1_3 !== 'undefined' ? MATERIAS_BIMESTRE_1_3 : {};
    Object.entries(materiasPorCurso).forEach(([curso, arr]) => {
        if (!Array.isArray(arr)) return;
        const grado = parseInt(curso.split(' ')[0], 10);
        if (isNaN(grado)) return;
        if (grado >= 4) {
            arr.forEach(m => {
                if (m) lista.push({ curso, materia: m, display: m });
            });
        } else {
            const subjects = materias1_3[curso] || arr;
            subjects.forEach(sub => {
                if (!sub) return;
                const area = areasPorMateria[sub];
                if (area) {
                    lista.push({ curso, materia: sub, display: area + ' (' + sub + ')' });
                } else {
                    lista.push({ curso, materia: sub, display: sub });
                }
            });
        }
    });
    return lista;
}

function extraerMateriaDeDisplay(valor) {
    const match = valor.match(/\((.+)\)$/);
    return match ? match[1].trim() : valor.trim();
}

function filtrarMaterias(input) {
    const raw = input.value.toLowerCase().trim();
    const container = input.closest('.form-group') || input.parentElement;
    const wrapper = container.querySelector('.materias-checklist');
    if (!wrapper) return;
    const tokens = raw ? raw.split(/\s+/).filter(Boolean) : [];
    const all = wrapper.querySelectorAll('h4, label');
    let cursoActual = '';
    const visible = new WeakSet();
    let ultimoH4 = null;
    all.forEach(el => {
        if (el.tagName === 'H4') {
            cursoActual = el.textContent.trim();
            ultimoH4 = el;
        } else {
            const contenido = (cursoActual + ' ' + el.textContent).toLowerCase().replace(/\s+/g, '');
            const match = tokens.length === 0 || tokens.every(t => contenido.includes(t));
            el.style.display = match ? '' : 'none';
            if (match) visible.add(ultimoH4);
        }
    });
    all.forEach(el => {
        if (el.tagName === 'H4') el.style.display = visible.has(el) ? '' : 'none';
    });
}

function mostrarModalAgregar() {
    document.getElementById('nuevo-correo').value = '';
    document.getElementById('nuevo-password').value = '';
    document.getElementById('nuevo-rol').value = 'docente';
    const container = document.getElementById('materias-multiselect');
    container.innerHTML = '';
    const todas = obtenerTodasLasMaterias();
    let html = '';
    let ultimoCurso = '';
    todas.forEach(item => {
        if (item.curso !== ultimoCurso) {
            ultimoCurso = item.curso;
            html += `<h4>${item.curso}</h4>`;
        }
        html += `<label class="check-item"><input type="checkbox" value="${item.curso}: ${item.materia}"> ${item.display}</label>`;
    });
    container.innerHTML = html;
    document.getElementById('filtro-materias-nuevas').style.display = 'block';
    document.getElementById('label-materias-nuevas').textContent = 'Materias permitidas (Curso → Materia)';
    document.getElementById('modal-agregar').style.display = 'flex';
}

function cambiarTipoNuevoRol() {
    var rol = document.getElementById('nuevo-rol').value;
    var esPreceptor = rol === 'preceptor' || rol === 'jefe_preceptor' || rol === 'sub_jefe_preceptor';
    var container = document.getElementById('materias-multiselect');
    var label = document.getElementById('label-materias-nuevas');
    var filtro = document.getElementById('filtro-materias-nuevas');
    if (esPreceptor) {
        label.textContent = 'Cursos asignados';
        filtro.style.display = 'none';
        var cursos = ['1 A','1 B','1 C','1 D','1 E','2 A','2 B','2 C','2 D','3 A','3 B','3 C','4 A','4 B','4 C','5 A','5 B','5 C'];
        var html = '';
        cursos.forEach(function(c) {
            html += '<label class="check-item"><input type="checkbox" value="' + c + '"> ' + c + '</label>';
        });
        container.innerHTML = html;
    } else {
        label.textContent = 'Materias permitidas (Curso → Materia)';
        filtro.style.display = 'block';
        container.innerHTML = '';
        var todas = obtenerTodasLasMaterias();
        var html = '';
        var ultimoCurso = '';
        todas.forEach(function(item) {
            if (item.curso !== ultimoCurso) {
                ultimoCurso = item.curso;
                html += '<h4>' + item.curso + '</h4>';
            }
            html += '<label class="check-item"><input type="checkbox" value="' + item.curso + ': ' + item.materia + '"> ' + item.display + '</label>';
        });
        container.innerHTML = html;
    }
}

function abrirModalMaterias(correo) {
    editandoCorreo = correo;
    const correoInput = document.getElementById('editar-correo-input');
    if (correoInput) correoInput.value = correo;
    const container = document.getElementById('materias-editar-checklist');
    container.innerHTML = '<p style="color:#999;"><i class="fas fa-spinner fa-spin"></i> Cargando...</p>';
    document.getElementById('modal-materias').style.display = 'flex';
    const url = `${URL_WEB_APP}?action=listarUsuarios&correo=${encodeURIComponent(sesionActual.correo)}`;
    fetch(url, { method: 'GET', mode: 'cors' })
        .then(r => r.json())
        .then(res => {
            if (!res.success) { container.innerHTML = '<p style="color:red;">' + (res.error || 'Error al cargar') + '</p>'; return; }
            const usuario = (res.usuarios || []).find(u => u.correo === correo);
            if (!usuario) { container.innerHTML = '<p style="color:red;">Usuario no encontrado</p>'; return; }
            editandoRol = usuario.rol;
            const esPreceptor = usuario.rol === 'preceptor' || usuario.rol === 'jefe_preceptor' || usuario.rol === 'sub_jefe_preceptor';
            if (esPreceptor) {
              var cursosSeleccionados = (usuario.cursos_permitidos || []).map(s => s.trim());
              var cursos = ['1 A','1 B','1 C','1 D','1 E','2 A','2 B','2 C','2 D','3 A','3 B','3 C','4 A','4 B','4 C','5 A','5 B','5 C'];
              var html = '<label style="font-weight:bold;display:block;margin-bottom:8px;">Cursos asignados</label>';
              cursos.forEach(function(c) {
                var checked = cursosSeleccionados.indexOf(c) !== -1 ? 'checked' : '';
                html += '<label class="check-item"><input type="checkbox" value="' + c + '" ' + checked + '> ' + c + '</label>';
              });
              container.innerHTML = html;
            } else {
              const seleccionadas = (usuario.materias_permitidas || []).map(s => s.trim());
              const todas = obtenerTodasLasMaterias();
              let html = '';
              let ultimoCurso = '';
              todas.forEach(item => {
                  if (item.curso !== ultimoCurso) {
                      ultimoCurso = item.curso;
                      html += `<h4>${item.curso}</h4>`;
                  }
                  const val = item.curso + ': ' + item.materia;
                  const checked = seleccionadas.indexOf(val) !== -1 ? 'checked' : '';
                  html += `<label class="check-item"><input type="checkbox" value="${val}" ${checked}> ${item.display}</label>`;
              });
              container.innerHTML = html;
            }
        })
        .catch(() => { container.innerHTML = '<p style="color:red;">Error de conexion</p>'; });
}

function abrirModalPassword(correo) {
    editandoCorreo = correo;
    document.getElementById('cambiar-pass-usuario').textContent = 'Cambiar password de: ' + correo;
    document.getElementById('nueva-password-input').value = '';
    document.getElementById('confirmar-password-input').value = '';
    document.getElementById('modal-password').style.display = 'flex';
}

function confirmarAgregarUsuario() {
    const correo = document.getElementById('nuevo-correo').value.trim();
    const password = document.getElementById('nuevo-password').value;
    const rol = document.getElementById('nuevo-rol').value;
    const checks = document.querySelectorAll('#materias-multiselect input[type="checkbox"]:checked');
    const seleccionadas = Array.from(checks).map(cb => cb.value);
    if (!correo || !password) { alert('Complete correo y contraseña'); return; }
    if (!correo.endsWith('@cpem32.edu.ar')) {
        alert('El correo debe ser institucional (@cpem32.edu.ar)');
        return;
    }
    const btn = document.querySelector('#modal-agregar .btn-confirm');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creando...';
    var datos = { correo: correo, password: password, rol: rol, materias_permitidas: [] };
    if (rol === 'preceptor' || rol === 'jefe_preceptor' || rol === 'sub_jefe_preceptor') {
        datos.cursos_permitidos = seleccionadas;
    } else {
        datos.materias_permitidas = seleccionadas;
    }
    fetch(URL_WEB_APP, {
        method: 'POST', mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
            action: 'agregarUsuario', correoAdmin: sesionActual.correo,
            datos: datos
        })
    })
    .then(r => r.json())
    .then(res => {
        btn.disabled = false;
        btn.innerHTML = 'Crear Usuario';
        if (res.success) { cerrarModal('modal-agregar'); mostrarToast('Usuario creado correctamente', 'success'); cargarListaUsuarios(); }
        else { alert('Error: ' + res.error); }
    })
    .catch(() => { btn.disabled = false; btn.innerHTML = 'Crear Usuario'; alert('Error de conexion'); });
}

function confirmarEditarMaterias() {
    const checks = document.querySelectorAll('#materias-editar-checklist input[type="checkbox"]:checked');
    const seleccionadas = Array.from(checks).map(cb => cb.value);
    const nuevoCorreo = document.getElementById('editar-correo-input').value.trim();
    if (!nuevoCorreo) { alert('El correo no puede estar vacío'); return; }
    const btn = document.querySelector('#modal-materias .btn-confirm');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Guardando...';
    var body = {
        action: 'actualizarMaterias', correoAdmin: sesionActual.correo,
        correoDocente: editandoCorreo, nuevoCorreo: nuevoCorreo
    };
    if (editandoRol === 'preceptor' || editandoRol === 'jefe_preceptor' || editandoRol === 'sub_jefe_preceptor') {
        body.cursos = seleccionadas;
    } else {
        body.materias = seleccionadas;
    }
    fetch(URL_WEB_APP, {
        method: 'POST', mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(body)
    })
    .then(r => r.json())
    .then(res => {
        btn.disabled = false;
        btn.innerHTML = 'Guardar Cambios';
        if (res.success) {
            editandoCorreo = nuevoCorreo;
            cerrarModal('modal-materias');
            mostrarToast(res.mensaje || 'Actualizado correctamente', 'success');
            cargarListaUsuarios();
        } else {
            alert('Error: ' + res.error);
        }
    })
    .catch(() => { btn.disabled = false; btn.innerHTML = 'Guardar Cambios'; alert('Error de conexion'); });
}

function confirmarCambiarPassword() {
    const nueva = document.getElementById('nueva-password-input').value;
    const confirmar = document.getElementById('confirmar-password-input').value;
    if (!nueva || nueva.length < 4) { alert('La contraseña debe tener al menos 4 caracteres'); return; }
    if (nueva !== confirmar) { alert('Las contraseñas no coinciden'); return; }
    const btn = document.querySelector('#modal-password .btn-confirm');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Actualizando...';
    fetch(URL_WEB_APP, {
        method: 'POST', mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
            action: 'cambiarPassword', correoSolicitante: sesionActual.correo,
            correoObjetivo: editandoCorreo, nuevaPassword: nueva
        })
    })
    .then(r => r.json())
    .then(res => {
        btn.disabled = false;
        btn.innerHTML = 'Actualizar';
        if (res.success) { cerrarModal('modal-password'); mostrarToast('Contraseña actualizada correctamente', 'success'); }
        else { alert('Error: ' + res.error); }
    })
    .catch(() => { btn.disabled = false; btn.innerHTML = 'Actualizar'; alert('Error de conexion'); });
}

function confirmarEliminarUsuario(correo) {
    if (!confirm('¿Eliminar al usuario ' + correo + '? Esta accion no se puede deshacer.')) return;
    fetch(URL_WEB_APP, {
        method: 'POST', mode: 'cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
            action: 'eliminarUsuario', correoAdmin: sesionActual.correo, correoEliminar: correo
        })
    })
    .then(r => r.json())
    .then(res => {
        if (res.success) { mostrarToast('Usuario eliminado correctamente', 'success'); cargarListaUsuarios(); }
        else { alert('Error: ' + res.error); }
    })
    .catch(() => { alert('Error de conexion'); });
}

// ============================================================
// FECHAS LIMITE
// ============================================================

async function cargarFechasLimite() {
    try {
        const url = `${URL_WEB_APP}?action=obtenerConfig&correo=${encodeURIComponent(sesionActual.correo)}&clave=fechas_limite`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const res = await resp.json();
        if (res.success) {
            const fechas = res.valor ? JSON.parse(res.valor) : {};
            renderizarFechasLimite(fechas);
        }
    } catch (err) {
        console.error('Error cargando fechas limite:', err);
    }
}

function renderizarFechasLimite(fechasGuardadas) {
    const container = document.getElementById('fechas-container');
    if (!container) return;
    const periodos = [
        { id: '1_Bimestre', label: '1er Bimestre' },
        { id: '2_Bimestre', label: '2do Bimestre' },
        { id: '1', label: '1er Cuatrimestre' },
        { id: '2', label: '2do Cuatrimestre' }
    ];
    container.innerHTML = periodos.map(p => `
        <div style="display:flex;flex-direction:column;gap:4px;padding:10px;background:white;border-radius:6px;border:1px solid #dee2e6;min-width:180px;">
            <label style="font-size:0.85rem;font-weight:bold;color:#555;">${p.label}</label>
            <input type="date" id="fecha-${p.id}" value="${fechasGuardadas[p.id] || ''}" style="padding:6px;border:1px solid #ced4da;border-radius:4px;">
        </div>
    `).join('');
}

async function cargarFechasLimiteGlobal() {
    try {
        const url = `${URL_WEB_APP}?action=obtenerConfig&correo=${encodeURIComponent(sesionActual.correo)}&clave=fechas_limite`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const res = await resp.json();
        if (res.success && res.valor) {
            fechasLimite = JSON.parse(res.valor);
        }
    } catch (err) {
        console.error('Error cargando fechas limite:', err);
    }
}

function actualizarAvisoFechaLimite(periodo) {
    const aviso = document.getElementById('aviso-fechas-limite');
    const texto = document.getElementById('texto-fecha-limite');
    if (!aviso || !texto) return;
    let fecha = null;
    if (periodo.includes('Bimestre')) {
        fecha = fechasLimite[periodo] || null;
    } else if (periodo === '1' || periodo === '2') {
        fecha = fechasLimite[periodo] || null;
    }
    if (fecha) {
        const partes = fecha.split('-');
        const fechaFormateada = `${partes[2]}/${partes[1]}/${partes[0]}`;
        texto.textContent = `Fecha límite de carga: ${fechaFormateada}`;
        aviso.style.display = 'block';
    } else {
        aviso.style.display = 'none';
    }
}

function obtenerFechaLimitePeriodo(periodo) {
    return fechasLimite[periodo] || null;
}

function verificarTerminidad(fechaLimite) {
    if (!fechaLimite) return { mensaje: '' };
    const ahora = new Date();
    const [anio, mes, dia] = fechaLimite.split('-').map(Number);
    const limite = new Date(anio, mes - 1, dia + 1);
    if (ahora <= limite) {
        return { mensaje: 'Completado En Término' };
    } else {
        return { mensaje: 'Completado Fuera de Término' };
    }
}

function actualizarSelectorCursosFrases() {
    var anio = document.getElementById('frases-anio').value;
    var sel = document.getElementById('frases-curso');
    sel.innerHTML = '<option value="">Todos</option>';
    var prefijo = anio + ' ';
    Object.keys(materiasPorCurso).forEach(function(curso) {
        if (curso.indexOf(prefijo) === 0) {
            sel.innerHTML += '<option value="' + curso + '">' + curso + '</option>';
        }
    });
    filtrarListaAreas();
}

function obtenerAreasDisponibles() {
    var curso = document.getElementById('frases-curso').value;
    var areas = new Set();
    if (curso) {
        (materiasPorCurso[curso] || []).forEach(function(m) { areas.add(m); });
        (frasesConfig[curso] ? Object.keys(frasesConfig[curso]) : []).forEach(function(a) { areas.add(a); });
    } else {
        Object.values(materiasPorCurso).forEach(function(materias) {
            materias.forEach(function(m) { areas.add(m); });
        });
        Object.values(frasesConfig).forEach(function(porAnio) {
            Object.keys(porAnio).forEach(function(a) { areas.add(a); });
        });
    }
    return [...areas].sort();
}

function mostrarListaAreas() {
    const input = document.getElementById('frases-area');
    const dropdown = document.getElementById('frases-area-dropdown');
    const areas = obtenerAreasDisponibles();
    const filtro = input.value.toLowerCase();
    const filtradas = areas.filter(a => a.toLowerCase().includes(filtro));
    
    if (filtradas.length === 0) { dropdown.style.display = 'none'; return; }
    
    dropdown.innerHTML = filtradas.map(a =>
        `<div style="padding:8px 12px; cursor:pointer; border-bottom:1px solid #eee; font-size:0.85rem;" onmouseover="this.style.background='#f0f0f0'" onmouseout="this.style.background=''" onclick="seleccionarArea('${a.replace(/'/g, "\\'")}')">${a}</div>`
    ).join('');
    dropdown.style.display = 'block';
}

function filtrarListaAreas() {
    const dropdown = document.getElementById('frases-area-dropdown');
    const input = document.getElementById('frases-area');
    if (input.value) { mostrarListaAreas(); }
    else { dropdown.style.display = 'none'; }
}

function seleccionarArea(area) {
    document.getElementById('frases-area').value = area;
    document.getElementById('frases-area-dropdown').style.display = 'none';
    cargarFrasesAnioArea();
}

// Cerrar dropdown al hacer clic fuera
document.addEventListener('click', function(e) {
    const wrapper = document.getElementById('frases-area-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        const dd = document.getElementById('frases-area-dropdown');
        if (dd) dd.style.display = 'none';
    }
});

async function cargarFrasesAnioArea() {
    var anio = document.getElementById('frases-anio').value;
    var curso = document.getElementById('frases-curso').value;
    var area = document.getElementById('frases-area').value.trim();
    if (!anio || !area) { document.getElementById('msg-frases').textContent = 'Seleccione año y área'; return; }
    var key = curso || anio;
    var areaNorm = area.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var keys = Object.keys(frasesConfig[key] || {});
    var matchKey = keys.find(function(k) {
        return k.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === areaNorm;
    });
    var row = matchKey ? frasesConfig[key][matchKey] : null;
    if (!row) {
        document.getElementById('frases-1').value = '';
        document.getElementById('frases-2').value = '';
        document.getElementById('frases-3').value = '';
        document.getElementById('msg-frases').textContent = 'No hay frases guardadas para esta combinación';
        return;
    }
    document.getElementById('frases-1').value = (row[1] || []).join(' * ');
    document.getElementById('frases-2').value = (row[2] || []).join(' * ');
    document.getElementById('frases-3').value = (row[3] || []).join(' * ');
    document.getElementById('msg-frases').textContent = 'Frases cargadas';
    document.getElementById('msg-frases').style.color = 'green';
}

async function guardarFrasesAnioArea() {
    var anio = document.getElementById('frases-anio').value;
    var curso = document.getElementById('frases-curso').value;
    var area = document.getElementById('frases-area').value.trim();
    if (!anio || !area) { document.getElementById('msg-frases').textContent = 'Seleccione año y área'; return; }
    var key = curso || anio;
    var datos = {
        anio: key,
        area: area,
        frases: {
            1: document.getElementById('frases-1').value.split('*').map(function(s) { return s.trim(); }).filter(Boolean),
            2: document.getElementById('frases-2').value.split('*').map(function(s) { return s.trim(); }).filter(Boolean),
            3: document.getElementById('frases-3').value.split('*').map(function(s) { return s.trim(); }).filter(Boolean)
        }
    };
    try {
        var resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'guardarFrasesConfig',
                correo: sesionActual.correo,
                datos: datos
            })
        });
        var res = await resp.json();
        if (res.success) {
            if (!frasesConfig[key]) frasesConfig[key] = {};
            var areaKey = area.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            var keys = Object.keys(frasesConfig[key]);
            var existingKey = keys.find(function(k) {
                return k.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === areaKey;
            });
            if (existingKey && existingKey !== areaKey) {
                delete frasesConfig[key][existingKey];
            }
            frasesConfig[key][areaKey] = datos.frases;
            document.getElementById('msg-frases').textContent = res.mensaje || 'Guardado correctamente';
            document.getElementById('msg-frases').style.color = 'green';
        } else {
            document.getElementById('msg-frases').textContent = res.error || 'Error al guardar';
            document.getElementById('msg-frases').style.color = 'red';
        }
    } catch(e) {
        document.getElementById('msg-frases').textContent = 'Error de conexión';
        document.getElementById('msg-frases').style.color = 'red';
    }
}

async function guardarFechasLimite() {
    const fechas = {};
    ['1_Bimestre', '2_Bimestre', '1', '2'].forEach(p => {
        const el = document.getElementById('fecha-' + p);
        if (el) fechas[p] = el.value;
    });
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST', mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'setConfig', correoAdmin: sesionActual.correo,
                clave: 'fechas_limite', valor: JSON.stringify(fechas)
            })
        });
        const res = await resp.json();
        const msg = document.getElementById('msg-fechas');
        if (res.success) {
            msg.textContent = 'Fechas guardadas correctamente';
            msg.style.color = '#28a745';
        } else {
            msg.textContent = 'Error: ' + res.error;
            msg.style.color = '#dc3545';
        }
        setTimeout(() => { msg.textContent = ''; }, 3000);
    } catch (err) {
        alert('Error de conexion');
    }
}

// ============================================================
// FUNCIONES PARA COMPROBANTES Y DESCARGA DE PDF
// ============================================================

function correoANombre(correo) {
    if (!correo) return '';
    return correo.replace(/@.*$/, '').replace(/^\/?(.*?)\/?$/, '$1');
}

function obtenerDocentePorMateria(materia, usuarios) {
    if (!usuarios) return '';
    for (const u of usuarios) {
        if (u.rol === 'docente' && u.materias_permitidas && u.materias_permitidas.includes(materia)) {
            return correoANombre(u.correo);
        }
    }
    return '';
}

const materiasPorCursoLibro = {
    "1 A": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
    "1 B": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
    "1 C": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
    "1 D": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
    "1 E": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
    "2 A": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
    "2 B": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","DANZA","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
    "2 C": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","DANZA","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
    "2 D": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","DANZA","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
    "3 A": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","LENGUA","LITERATURA","LENGUAS OTRAS","LENGUAS PREEXISTENTES","ARTES VISUALES","BIOLOGIA","QUIMICA","FISICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","INTEGRACION TECNOLOGICA","COMUNICACION Y MEDIOS","INVESTIGACION DE LAS ORIENTACIONES"],
    "3 B": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","LENGUA","LITERATURA","LENGUAS OTRAS","LENGUAS PREEXISTENTES","ARTES VISUALES","BIOLOGIA","QUIMICA","FISICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","INTEGRACION TECNOLOGICA","COMUNICACION Y MEDIOS","INVESTIGACION DE LAS ORIENTACIONES"],
    "3 C": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","LENGUA","LITERATURA","LENGUAS OTRAS","LENGUAS PREEXISTENTES","ARTES VISUALES","BIOLOGIA","QUIMICA","FISICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","INTEGRACION TECNOLOGICA","COMUNICACION Y MEDIOS","INVESTIGACION DE LAS ORIENTACIONES"],
    "4 A": ["HISTORIA","GEOGRAFIA","SOCIEDADES, POLITICAS Y SUBJETIVIDADES","LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL","MATEMATICA","INFORMATICA","CS. BIOLÓGICAS","QUIMICA","FISICA","ESTADOS, POLITICAS Y LEGISLACIONES","SISTEMA DE INFORMACION CONTABLE","ECONOMIAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
    "4 B": ["HISTORIA","GEOGRAFIA","SOCIEDADES, POLITICAS Y SUBJETIVIDADES","LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL","MATEMATICA","INFORMATICA","CS. BIOLÓGICAS","QUIMICA","FISICA","ESTADOS, POLITICAS Y LEGISLACIONES","SISTEMA DE INFORMACION CONTABLE","ECONOMIAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
    "4 C": ["HISTORIA","GEOGRAFIA","SOCIEDADES, POLITICAS Y SUBJETIVIDADES","LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL","MATEMATICA","INFORMATICA","CS. BIOLÓGICAS","QUIMICA","FISICA","FILOSOFIA DE LAS CIENCIAS","GEOPOLITICA","ESTUDIOS SOCIALES Y CULTURALES","GENEALOGIAS DE LAS ARTES Y LAS ESTETICA","COMUNICACION, DISCURSO Y PRODUCCION DE SENTIDOS","PROYECTOS SOCIOCOMUNITARIOS"],
    "5 A": ["IDIOMA EXTRANJERO INGLES O FRANCES","MATEMATICA FINANCIERA","MERCEOLOGIA","GEOGRAFIA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACION DEL COMERCIO Y DE LA EMPRESA","ECONOMIA POLITICA","CONTABILIDAD","ESTENOGRAFIA","MECANOGRAFIA","EDUCACIÓN FÍSICA","INFORMATICA V"],
    "5 B": ["IDIOMA EXTRANJERO INGLES O FRANCES","MATEMATICA FINANCIERA","MERCEOLOGIA","GEOGRAFIA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACION DEL COMERCIO Y DE LA EMPRESA","ECONOMIA POLITICA","CONTABILIDAD","ESTENOGRAFIA","MECANOGRAFIA","EDUCACIÓN FÍSICA","INFORMATICA V"],
    "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMATICA","FISICA","QUIMICA","CIENCIAS BIOLOGICAS","GEOGRAFIA ARGENTINA","HISTORIA","INSTRUCCION CIVICA","FILOSOFIA","EDUCACIÓN FÍSICA","INFORMATICA V"]
};

function toggleBotonBorrado() {
    const chk = document.getElementById('chk-confirmar-borrado');
    const btn = document.getElementById('btnLimpiar');
    const txt = document.getElementById('txt-borrado-estado');
    if (chk && btn && txt) {
        if (chk.checked) {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
            txt.textContent = 'Confirmado';
            txt.style.color = '#dc3545';
        } else {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
            txt.textContent = 'Bloqueado';
            txt.style.color = '#721c24';
        }
    }
}

function borrarMemoriaLocal() {
    if (confirm('¿Estas seguro? Se borraran TODOS los datos locales y se cerrara la sesion.')) {
        localStorage.clear();
        sessionStorage.clear();
        memoriaGlobal = {};
        location.reload();
    }
}

// ============================================================
// MAPEO DE MATERIAS POR ÁREA (para informes 1°-3°)
// ============================================================
const areasPorMateria = {
    "HISTORIA": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "GEOGRAFIA": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "ECONOMIA": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "CONSTRUCCION DE CIUDADANIAS": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "FILOSOFIA": "CIENCIAS SOCIALES, POLITICAS Y ECONOMICAS",
    "LENGUA": "LENGUAJES Y PRODUCCION CULTURAL",
    "LITERATURA": "LENGUAJES Y PRODUCCION CULTURAL",
    "LENGUAS OTRAS": "LENGUAJES Y PRODUCCION CULTURAL",
    "TEATRO": "LENGUAJES Y PRODUCCION CULTURAL",
    "DANZA": "LENGUAJES Y PRODUCCION CULTURAL",
    "MUSICA": "LENGUAJES Y PRODUCCION CULTURAL",
    "ARTES VISUALES": "LENGUAJES Y PRODUCCION CULTURAL",
    "LENGUA Y LITERATURA": "LENGUAJES Y PRODUCCION CULTURAL",
    "ARTE": "LENGUAJES Y PRODUCCION CULTURAL",
    "LENGUAS PREEXISTENTES": "LENGUAJES Y PRODUCCION CULTURAL",
    "BIOLOGIA": "CIENCIAS NATURALES",
    "FISICO QUIMICA": "CIENCIAS NATURALES",
    "QUIMICA": "CIENCIAS NATURALES",
    "FISICA": "CIENCIAS NATURALES",
    "CS. BIOLÓGICAS": "CIENCIAS NATURALES",
    "CIENCIAS BIOLOGICAS": "CIENCIAS NATURALES",
    "MATEMATICA": "MATEMÁTICA E INFORMÁTICA",
    "INFORMATICA": "MATEMÁTICA E INFORMÁTICA",
    "MATEMATICA E INFORMATICA": "MATEMÁTICA E INFORMÁTICA",
    "INFORMATICA V": "MATEMÁTICA E INFORMÁTICA",
    "MATEMATICA FINANCIERA": "MATEMÁTICA E INFORMÁTICA",
    "EDUCACION FISICA INTEGRAL": "EDUCACION FISICA INTEGRAL",
    "EDUCACION FISICA": "EDUCACION FISICA INTEGRAL",
    "EDUCACION SEXUAL INTEGRAL": "INTERAREA EDUCACION SEXUAL INTEGRAL",
    "INTERAREA EDUCACION SEXUAL INTEGRAL": "INTERAREA EDUCACION SEXUAL INTEGRAL",
    "INTEGRACION TECNOLOGICA": "INTERAREA TECNOLOGIA",
    "INTERAREA TECNOLOGIA": "INTERAREA TECNOLOGIA",
    "COMUNICACION Y MEDIOS": "COMUNICACION Y MEDIOS",
    "INVESTIGACION DE LAS ORIENTACIONES": "INVESTIGACION DE LAS ORIENTACIONES"
};

// ============================================================
// INFORME CUATRIMESTRAL - GENERADOR DE PDF
// ============================================================

const AREAS_POR_CURSO = {
  "1 A": [
    { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA"] },
    { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES"] },
    { area: "Ciencias Naturales",                        materias: ["BIOLOGIA","FISICO QUIMICA"] },
    { area: "Matemática e Informática",                  materias: ["MATEMATICA","INFORMATICA"] },
    { area: "Educación Física Integral",                 materias: ["EDUCACION FISICA INTEGRAL"] },
    { area: "Interárea Ed. Sexual Integral",             materias: ["EDUCACION SEXUAL INTEGRAL"] },
    { area: "Interárea Tecnología",                      materias: ["INTEGRACION TECNOLOGICA"] }
  ],
  "2 B": [
    { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFÍA","ECONOMÍA","CONSTRUCCIÓN DE CIUDADANÍAS","FILOSOFÍA"] },
    { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA","LITERATURA","LENGUAS OTRAS","DANZA","MÚSICA","ARTES VISUALES"] },
    { area: "Ciencias Naturales",                        materias: ["BIOLOGÍA","FÍSICO QUÍMICA"] },
    { area: "Matemática e Informática",                  materias: ["MATEMÁTICA","INFORMÁTICA"] },
    { area: "Educación Física Integral",                 materias: ["EDUCACION FISICA INTEGRAL"] },
    { area: "Interárea Educación Sexual Integral",       materias: ["EDUCACION SEXUAL INTEGRAL"] },
    { area: "Interárea Tecnología",                      materias: ["INTEGRACIÓN TECNOLÓGICA"] }
  ],
  "3 A": [
    { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFÍA","ECONOMÍA","CONSTRUCCIÓN DE CIUDADANÍAS"] },
    { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA","LITERATURA","LENGUAS OTRAS","LENGUAS PREEXISTENTES","ARTES VISUALES"] },
    { area: "Ciencias Naturales",                        materias: ["BIOLOGÍA","QUÍMICA","FÍSICA"] },
    { area: "Matemática e Informática",                  materias: ["MATEMÁTICA","INFORMÁTICA"] },
    { area: "Educación Física Integral",                 materias: ["EDUCACION FISICA INTEGRAL"] },
    { area: "Interárea Tecnología",                      materias: ["INTEGRACIÓN TECNOLÓGICA"] },
    { area: "Comunicación y Medios",                     materias: ["COMUNICACIÓN Y MEDIOS"] },
    { area: "Investigación de las Orientaciones",        materias: ["INVESTIGACIÓN DE LAS ORIENTACIONES"] }
  ]
};
AREAS_POR_CURSO["1 A"] = [
  { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFÍA","ECONOMÍA","CONSTRUCCIÓN DE CIUDADANÍAS","FILOSOFÍA"] },
  { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MÚSICA","ARTES VISUALES"] },
  { area: "Ciencias Naturales",                        materias: ["BIOLOGÍA","FÍSICO QUÍMICA"] },
  { area: "Matemática e Informática",                  materias: ["MATEMÁTICA","INFORMÁTICA"] },
  { area: "Educación Física Integral",                 materias: ["EDUCACION FISICA INTEGRAL"] },
  { area: "Interárea Educación Sexual Integral",       materias: ["EDUCACION SEXUAL INTEGRAL"] },
  { area: "Interárea Tecnología",                      materias: ["INTEGRACIÓN TECNOLÓGICA"] }
];
["1 B","1 C","1 D","1 E"].forEach(c => AREAS_POR_CURSO[c] = AREAS_POR_CURSO["1 A"]);
AREAS_POR_CURSO["2 A"] = [
  { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFÍA","ECONOMÍA","CONSTRUCCIÓN DE CIUDADANÍAS","FILOSOFÍA"] },
  { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MÚSICA","ARTES VISUALES"] },
  { area: "Ciencias Naturales",                        materias: ["BIOLOGÍA","FÍSICO QUÍMICA"] },
  { area: "Matemática e Informática",                  materias: ["MATEMÁTICA","INFORMÁTICA"] },
  { area: "Educación Física Integral",                 materias: ["EDUCACION FISICA INTEGRAL"] },
  { area: "Interárea Educación Sexual Integral",       materias: ["EDUCACION SEXUAL INTEGRAL"] },
  { area: "Interárea Tecnología",                      materias: ["INTEGRACIÓN TECNOLÓGICA"] }
];
["2 C","2 D"].forEach(c => AREAS_POR_CURSO[c] = AREAS_POR_CURSO["2 B"]);
["3 B","3 C"].forEach(c => AREAS_POR_CURSO[c] = AREAS_POR_CURSO["3 A"]);
AREAS_POR_CURSO["4 A"] = [
  { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFÍA","SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES"] },
  { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL"] },
  { area: "Matemática e Informática",                  materias: ["MATEMÁTICA","INFORMÁTICA"] },
  { area: "Ciencias Naturales",                        materias: ["CS. BIOLÓGICAS","QUÍMICA","FÍSICA"] },
  { area: "Formación Específica",                      materias: ["ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"] }
];
AREAS_POR_CURSO["4 B"] = [
  { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFÍA","SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES"] },
  { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL"] },
  { area: "Matemática e Informática",                  materias: ["MATEMÁTICA","INFORMÁTICA"] },
  { area: "Ciencias Naturales",                        materias: ["CS. BIOLÓGICAS","QUÍMICA","FÍSICA"] },
  { area: "Formación Específica",                      materias: ["ESTADOS, POLÍTICAS Y LEGISLACIONES","SISTEMA DE INFORMACIÓN CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACIÓN CURRICULAR: ANÁLISIS Y EVALUACIÓN DE PROYECTOS"] }
];
AREAS_POR_CURSO["4 C"] = [
  { area: "Ciencias Sociales, Políticas y Económicas", materias: ["HISTORIA","GEOGRAFÍA","SOCIEDADES, POLÍTICAS Y SUBJETIVIDADES"] },
  { area: "Lenguajes y Producción Cultural",           materias: ["LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL"] },
  { area: "Matemática e Informática",                  materias: ["MATEMÁTICA","INFORMÁTICA"] },
  { area: "Ciencias Naturales",                        materias: ["CS. BIOLÓGICAS","QUÍMICA","FÍSICA"] },
  { area: "Formación Específica",                      materias: ["FILOSOFÍA DE LAS CIENCIAS","GEOPOLÍTICA","ESTUDIOS SOCIALES Y CULTURALES","GENEALOGÍAS DE LAS ARTES Y LAS ESTÉTICA","COMUNICACIÓN, DISCURSO Y PRODUCCIÓN DE SENTIDOS","PROYECTOS SOCIOCOMUNITARIOS"] }
];

const MATERIAS_4_5 = {
  "4 A": ["HISTORIA","GEOGRAFIA","SOCIEDADES, POLITICAS Y SUBJETIVIDADES","LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL","MATEMATICA","INFORMATICA","CS. BIOLÓGICAS","QUIMICA","FISICA","ESTADOS, POLITICAS Y LEGISLACIONES","SISTEMA DE INFORMACION CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
  "4 B": ["HISTORIA","GEOGRAFIA","SOCIEDADES, POLITICAS Y SUBJETIVIDADES","LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL","MATEMATICA","INFORMATICA","CS. BIOLÓGICAS","QUIMICA","FISICA","ESTADOS, POLITICAS Y LEGISLACIONES","SISTEMA DE INFORMACION CONTABLE","ECONOMÍAS","ORGANIZACIONES Y ADMINISTRACIONES","INTEGRACION CURRICULAR: ANALISIS Y EVALUACION DE PROYECTOS"],
  "4 C": ["HISTORIA","GEOGRAFIA","SOCIEDADES, POLITICAS Y SUBJETIVIDADES","LENGUA Y LITERATURA","ARTE","LENGUAS OTRAS","EDUCACION FISICA INTEGRAL","MATEMATICA","INFORMATICA","CS. BIOLÓGICAS","QUIMICA","FISICA","FILOSOFIA DE LAS CIENCIAS","GEOPOLITICA","ESTUDIOS SOCIALES Y CULTURALES","GENEALOGIAS DE LAS ARTES Y LAS ESTETICA","COMUNICACION, DISCURSO Y PRODUCCION DE SENTIDOS","PROYECTOS SOCIOCOMUNITARIOS"],
  "5 A": ["IDIOMA EXTRANJERO INGLES O FRANCES","MATEMATICA FINANCIERA","MERCEOLOGIA","GEOGRAFIA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACION DEL COMERCIO Y DE LA EMPRESA","ECONOMIA POLITICA","CONTABILIDAD","ESTENOGRAFIA","MECANOGRAFIA","EDUCACIÓN FÍSICA","INFORMATICA V"],
  "5 B": ["IDIOMA EXTRANJERO INGLES O FRANCES","MATEMATICA FINANCIERA","MERCEOLOGIA","GEOGRAFIA","DERECHO COMERCIAL","DERECHO ADMINISTRATIVO","ORGANIZACION DEL COMERCIO Y DE LA EMPRESA","ECONOMIA POLITICA","CONTABILIDAD","ESTENOGRAFIA","MECANOGRAFIA","EDUCACIÓN FÍSICA","INFORMATICA V"],
  "5 C": ["LITERATURA","IDIOMA EXTRANJERO","MATEMATICA","FISICA","QUIMICA","CIENCIAS BIOLOGICAS","GEOGRAFIA ARGENTINA","HISTORIA","INSTRUCCION CIVICA","FILOSOFIA","EDUCACIÓN FÍSICA","INFORMATICA V"]
};

const anioDesde = c => parseInt((c || '').trim().charAt(0)) || 0;

function mostrarModalInforme() {
  const modal = document.getElementById('modal-informe');
  if (!modal) { alert('Modal de informe no encontrado'); return; }
  const selCurso   = document.getElementById('informe-curso');
  const esPreceptor = sesionActual.rol === 'preceptor';
  const esDocente = sesionActual.rol === 'docente';
  selCurso.innerHTML = '<option value="">Seleccione curso</option>';
  const todos = [...Object.keys(AREAS_POR_CURSO), ...Object.keys(MATERIAS_4_5)];
  let lista;
  if (esPreceptor) {
    lista = sesionActual.cursos_permitidos || [];
  } else if (esDocente) {
    const cursosSet = new Set();
    (sesionActual.materias_permitidas || []).forEach(mp => {
      const parts = mp.split(':');
      if (parts.length >= 2) cursosSet.add(parts[0].trim());
    });
    lista = [...cursosSet].sort();
  } else {
    lista = [...new Set(todos)].sort();
  }
  lista.forEach(c => { selCurso.innerHTML += `<option value="${c}">${c}</option>`; });
  if ((esPreceptor || esDocente) && lista.length === 1) { selCurso.value = lista[0]; selCurso.disabled = true; }
  else selCurso.disabled = false;
  modal.style.display = 'flex';
}

function cerrarModalInforme() {
  const m = document.getElementById('modal-informe');
  if (m) m.style.display = 'none';
}

async function generarInformes() {
  const curso     = document.getElementById('informe-curso').value;
  const periodo   = document.getElementById('informe-periodo').value;
  const turno     = document.getElementById('informe-turno').value;
  const preceptor = document.getElementById('informe-preceptor').value.trim();

  if (!curso || !periodo || !turno) { alert('Completá Curso, Turno y Período.'); return; }

  const btn = document.getElementById('btn-generar-informes');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando datos...';

  try {
    const url = `${URL_WEB_APP}?action=obtenerInformeCurso`
      + `&correo=${encodeURIComponent(sesionActual.correo)}`
      + `&curso=${encodeURIComponent(curso)}`
      + `&turno=${encodeURIComponent(turno)}`
      + `&periodo=${encodeURIComponent(periodo)}`;

    const resp = await fetch(url, { method:'GET', mode:'cors' });
    const data = await resp.json();

    if (!data.success) { alert('Error: ' + data.error); return; }
    if (!data.alumnos?.length) { alert('No se encontraron alumnos para este curso.'); return; }

    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Generando PDF...`;

    const es5 = anioDesde(curso) >= 5;
    const esBimestre = periodo.includes('Bimestre');
    const preceptorAuto = data.preceptor || '';
    const preceptorFinal = preceptor || preceptorAuto;

    const paginasHTML = data.alumnos.map(alumno => {
      const alumnoKey = Object.keys(data.notasMap).find(k => normalizarNombre(k) === normalizarNombre(alumno.nombre)) || alumno.nombre;
      const notas = data.notasMap[alumnoKey] || {};
      const usarFormato45 = es5 || (anioDesde(curso) >= 1 && anioDesde(curso) <= 3 && esBimestre);
      // Si es recursante, mostrar solo las materias que recursa
      const materiasRec = data.recursantesMap?.[alumno.dni];
      const materiasOverride = materiasRec?.length ? materiasRec : undefined;
      return usarFormato45
        ? paginaInforme45(alumno, curso, turno, periodo, preceptorFinal, notas, data.docenteMap, materiasOverride)
        : paginaInforme13(alumno, curso, turno, periodo, preceptorFinal, notas, data.docenteMap, materiasOverride);
    }).join('\n');

    abrirInformeEnPestana(paginasHTML);
    cerrarModalInforme();
    validarYFiltrar();

  } catch(err) {
    alert('Error: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-file-pdf"></i> Generar Informes PDF';
  }
}

function abrirInformeEnPestana(paginasHTML) {
  try {
    localStorage.setItem('sia_informe_html', paginasHTML);
    localStorage.setItem('sia_informe_ts', Date.now().toString());
  } catch(e) {
    alert('Error al preparar el informe: ' + e.message);
    return;
  }
  const ventana = window.open('informe.html', '_blank');
  if (!ventana) {
    alert('El navegador bloqueó la ventana emergente.\nPermití las ventanas emergentes para este sitio e intentá de nuevo.');
  }
}

function _keyNotas(notas, materia) {
  const norm = s => s.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const mNorm = norm(materia);
  return Object.keys(notas).find(k => norm(k) === mNorm) || materia;
}

async function generarPlanillaInformes(sinColor) {
  const curso     = document.getElementById('informe-curso').value;
  const periodo   = document.getElementById('informe-periodo').value;
  const turno     = document.getElementById('informe-turno').value;
  const preceptor = document.getElementById('informe-preceptor').value.trim();

  if (!curso || !periodo || !turno) { alert('Completá Curso, Turno y Período.'); return; }

  const btn = document.getElementById('btn-generar-planilla');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando...';

  try {
    const areas = AREAS_POR_CURSO[curso] || [];
    const areaMap = {};
    areas.forEach(g => g.materias.forEach(m => { areaMap[m] = g.area; }));

    let todasMaterias = [];
    if (AREAS_POR_CURSO[curso]) {
      AREAS_POR_CURSO[curso].forEach(g => { todasMaterias = todasMaterias.concat(g.materias); });
    } else if (MATERIAS_4_5[curso]) {
      todasMaterias = MATERIAS_4_5[curso];
    }

    const resp = await fetch(URL_WEB_APP, {
      method: 'POST', mode: 'cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        action: 'crearPlanillaInformes',
        correo: sesionActual.correo,
        curso, turno, periodo,
        preceptor,
        materias: todasMaterias,
        areaMap,
        sinColor: !!sinColor
      })
    });

    const result = await resp.json();
    if (result.success) {
      window.open(result.url, '_blank');
      cerrarModalInforme();
      validarYFiltrar();
    } else {
      alert('Error: ' + (result.error || 'Error al crear la planilla'));
    }

  } catch(err) {
    alert('Error: ' + err.message);
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-file-alt"></i> Planilla';
  }
}

function cabeceraHTML(alumno, curso, preceptor, periodo) {
  const esBimestre = periodo && periodo.includes('Bimestre');
  const anioEl = document.getElementById('input-anio-libro');
  const anio = anioEl ? anioEl.value : new Date().getFullYear();
  const labelInforme = esBimestre ? `Informe Bimestral ${anio}` : `Informe Cuatrimestral ${anio}`;
  return `<div class="cabecera">
    <div class="cab-cpem">
      <span class="titulo">CPEM N° 32</span>
      <span class="subtitulo">${labelInforme}</span>
    </div>
    <div class="cab-nombre">${alumno.nombre}</div>
    <div class="cab-curso">${curso}</div>
    <div class="cab-prece">
      <span class="label">Preceptor/a:</span>
      <span class="valor">${preceptor || '_______________'}</span>
    </div>
  </div>`;
}

function valorCelda(v) {
  const s = (v || '').toString().trim();
  if (!s || s === '-') return `<td class="td-val">-</td>`;
  return `<td class="td-val tiene-valor">${s}</td>`;
}

function paginaInforme13(alumno, curso, turno, periodo, preceptor, notas, docenteMap, materiasOverride) {
  let filas = '';

  // Si es recursante con materiasOverride, usar lista plana
  if (materiasOverride) {
    materiasOverride.forEach(mat => {
      const matUpper = mat.toUpperCase();
      const key = Object.keys(notas).find(k => k.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === matUpper) || mat;
      const n   = notas[key] || {};
      const docKey = Object.keys(docenteMap).find(k => k.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") === matUpper) || mat;
      const doc = docenteMap[docKey] || 'Sin Docentes';
      const obs1 = n.obs1 || n.sel_1 || '';
      const obs2 = n.obs2 || n.sel_2 || '';
      const obs3 = n.obs3 || n.sel_3 || '';
      const obsP = n.obs4 || n.observacion || '';
      const nota = (n.nota || '').toString().trim();
      const cualis = [obs1, obs2, obs3, obsP].filter(o => o).map(o => `* ${o}`).join('<br>');
      filas += `<tr>
        <td class="td-area-nombre"></td>
        <td class="td-mat" style="width:160px;">${mat}</td>
        <td class="td-docente" style="width:120px;">${doc}</td>
        <td class="td-obs">${cualis || '-'}</td>
        <td class="td-nota" style="width:48px;">${nota}</td>
      </tr>`;
    });
  } else {
    const esFormatoIndividual = anioDesde(curso) >= 4;
    const areas = AREAS_POR_CURSO[curso] || [];
    areas.forEach(grupo => {
      const area = grupo.area;
      const areaUpper = area.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let obsVal = '';
      let notaVal = '';
      if (!esFormatoIndividual) {
        // 1°-3°: tomar obs y nota del primer subject con datos (rowspan)
        for (const mat of grupo.materias) {
          const matUpper = mat.toUpperCase();
          const key = Object.keys(notas).find(k => {
            const kn = k.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            return kn === matUpper || kn === areaUpper;
          }) || mat;
          const n = notas[key] || {};
          const obs1 = n.obs1 || n.sel_1 || '';
          const obs2 = n.obs2 || n.sel_2 || '';
          const obs3 = n.obs3 || n.sel_3 || '';
          const obsP = n.obs4 || n.observacion || '';
      const cualis = [obs1, obs2, obs3, obsP].filter(o => o).map(o => `* ${o}`).join('<br><br>');
          if (cualis) obsVal = cualis;
          if (n.nota) notaVal = (n.nota || '').toString().trim();
        }
      }
      grupo.materias.forEach((mat, idx) => {
        const matUpper = mat.toUpperCase();
        const key = Object.keys(notas).find(k => {
          const kn = k.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return kn === matUpper || kn === areaUpper;
        }) || mat;
        const n = notas[key] || {};
        const docKey = Object.keys(docenteMap).find(k => {
          const kn = k.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return kn === matUpper || kn === areaUpper;
        }) || mat;
        const doc = docenteMap[docKey] || 'Sin Docentes';
        if (esFormatoIndividual) {
          const obs1 = n.obs1 || n.sel_1 || '';
          const obs2 = n.obs2 || n.sel_2 || '';
          const obs3 = n.obs3 || n.sel_3 || '';
          const obsP = n.obs4 || n.observacion || '';
          const cualis = [obs1, obs2, obs3, obsP].filter(o => o).map(o => '* ' + o).join('<br><br>');
          const nota = (n.nota || '').toString().trim();
          if (idx === 0) {
            filas += `<tr>
              <td class="td-area-nombre" rowspan="${grupo.materias.length}">${area}</td>
              <td class="td-mat" style="width:160px;">${mat}</td>
              <td class="td-docente" style="width:120px;">${doc}</td>
              <td class="td-obs">${cualis || '-'}</td>
              <td class="td-nota" style="width:48px;">${nota}</td>
            </tr>`;
          } else {
            filas += `<tr>
              <td class="td-mat" style="width:160px;">${mat}</td>
              <td class="td-docente" style="width:120px;">${doc}</td>
              <td class="td-obs">${cualis || '-'}</td>
              <td class="td-nota" style="width:48px;">${nota}</td>
            </tr>`;
          }
        } else {
          if (idx === 0) {
            filas += `<tr>
              <td class="td-area-nombre" rowspan="${grupo.materias.length}">${area}</td>
              <td class="td-mat" style="width:160px;">${mat}</td>
              <td class="td-docente" style="width:120px;">${doc}</td>
              <td class="td-obs" rowspan="${grupo.materias.length}">${obsVal || '-'}</td>
              <td class="td-nota" style="width:48px;" rowspan="${grupo.materias.length}">${notaVal}</td>
            </tr>`;
          } else {
            filas += `<tr>
              <td class="td-mat" style="width:160px;">${mat}</td>
              <td class="td-docente" style="width:120px;">${doc}</td>
            </tr>`;
          }
        }
      });
    });
  }

  return `<div class="pagina">
    <div class="marco-contenido">
    ${cabeceraHTML(alumno, curso, preceptor, periodo)}
    <table class="tabla-principal">
      <thead><tr>
        <th class="th-main" style="width:140px;">Area</th>
        <th class="th-main" style="width:160px;">Espacio Curricular</th>
        <th class="th-main" style="width:120px;">Docentes</th>
        <th class="th-main">Informe Cualitativo</th>
        <th class="th-main" style="width:48px;">NOTA</th>
      </tr></thead>
      <tbody>${filas}</tbody>
    </table>
    </div>
    <div class="firmas">
      <div class="firma-item">Firma de la familia:</div>
      <div class="firma-item">Firma del Equipo de Gobierno y Conducci\u00F3n Escolar:</div>
    </div>
  </div>`;
}

// ============================================================
function actualizarMemoria(llave, dni, campo, valor) {
    if (!memoriaGlobal[llave]) memoriaGlobal[llave] = {};
    if (!memoriaGlobal[llave][dni]) memoriaGlobal[llave][dni] = {};
    memoriaGlobal[llave][dni][campo] = valor;
}

function buscarAlumnoPorNombre(turno, curso, nombre) {
    const alumnos = baseDeDatosAlumnos[turno]?.[curso] || [];
    return alumnos.find(a => a.nombre === nombre);
}

// ============================================================
// GESTION DE ALUMNOS
// ============================================================

async function cargarListaAlumnosGestion() {
    const tbody = document.getElementById('tbody-alumnos-gestion');
    tbody.innerHTML = '<tr><td colspan="7" style="padding:20px;text-align:center;color:#777;"><i class="fas fa-spinner fa-spin"></i> Cargando alumnos...</td></tr>';

    const esPreceptorOjefe = sesionActual && ['preceptor', 'jefe_preceptor', 'sub_jefe_preceptor'].includes(sesionActual.rol);
    let cursosPermitidos = (sesionActual?.cursos_permitidos || []).map(c => String(c).trim().toUpperCase());
    const turnoAsignado = (sesionActual.turno || '').trim().toUpperCase();
    var turnosList = turnoAsignado ? turnoAsignado.split(',').map(function(t) { return t.trim(); }).filter(Boolean) : [];

    const selTurno = document.getElementById('filtro-turno-alumnos');
    const selCurso = document.getElementById('filtro-curso-alumnos');

    if (esPreceptorOjefe && cursosPermitidos.length > 0) {
        // populate filter with only assigned courses
        selCurso.innerHTML = '<option value="">Todos</option>';
        cursosPermitidos.forEach(function(c) {
            selCurso.innerHTML += '<option value="' + c + '">' + c + '</option>';
        });
        if (cursosPermitidos.length === 1) {
            selCurso.value = cursosPermitidos[0];
            selCurso.disabled = true;
        } else {
            selCurso.disabled = false;
        }
        // populate turno filter with assigned turnos
        if (turnosList.length > 0) {
            selTurno.innerHTML = '<option value="">Todos</option>';
            turnosList.forEach(function(t) {
                selTurno.innerHTML += '<option value="' + t + '">' + t + '</option>';
            });
            if (turnosList.length === 1) {
                selTurno.value = turnosList[0];
                selTurno.disabled = true;
            } else {
                selTurno.disabled = false;
            }
        } else {
            selTurno.disabled = false;
        }
    } else {
        selCurso.innerHTML = '<option value="">Todos</option><option value="1 A">1 A</option><option value="1 B">1 B</option><option value="1 C">1 C</option><option value="1 D">1 D</option><option value="1 E">1 E</option><option value="2 A">2 A</option><option value="2 B">2 B</option><option value="2 C">2 C</option><option value="2 D">2 D</option><option value="3 A">3 A</option><option value="3 B">3 B</option><option value="3 C">3 C</option><option value="4 A">4 A</option><option value="4 B">4 B</option><option value="4 C">4 C</option><option value="5 A">5 A</option><option value="5 B">5 B</option><option value="5 C">5 C</option>';
        selTurno.innerHTML = '<option value="">Todos</option><option value="MAÑANA">MAÑANA</option><option value="TARDE">TARDE</option>';
        selTurno.disabled = false;
        selCurso.disabled = false;
    }

    try {
        var cursoParam = '';
        var turnoParam = '';
        if (esPreceptorOjefe) {
            if (cursosPermitidos.length > 0) cursoParam = cursosPermitidos.join(',');
            if (turnosList.length > 0) turnoParam = turnosList.join(',');
        }
        const url = `${URL_WEB_APP}?action=obtenerAlumnos&correo=${encodeURIComponent(sesionActual.correo)}&curso=${encodeURIComponent(cursoParam)}&turno=${encodeURIComponent(turnoParam)}`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();
        if (resultado.success) {
            alumnosDesdeSheets = resultado.alumnos || [];
            // Re-poblar baseDeDatosAlumnos para que las otras secciones (calificaciones, libros) tengan datos actualizados
            var nuevo = {};
            (resultado.alumnos || []).forEach(function(a) {
                if (!nuevo[a.turno]) nuevo[a.turno] = {};
                if (!nuevo[a.turno][a.curso]) nuevo[a.turno][a.curso] = [];
                nuevo[a.turno][a.curso].push({ dni: a.dni, nombre: a.nombre });
            });
            Object.keys(baseDeDatosAlumnos).forEach(function(t) { delete baseDeDatosAlumnos[t]; });
            Object.assign(baseDeDatosAlumnos, nuevo);
        } else {
            console.warn('obtenerAlumnos error:', resultado.error);
            alumnosDesdeSheets = [];
        }
    } catch (err) {
        console.error('Error cargando alumnos desde Sheets:', err);
        alumnosDesdeSheets = [];
    }

    renderizarTablaAlumnos();
}

function eliminarDeBaseDatos(dni) {
    Object.keys(baseDeDatosAlumnos).forEach(t => {
        Object.keys(baseDeDatosAlumnos[t] || {}).forEach(c => {
            baseDeDatosAlumnos[t][c] = (baseDeDatosAlumnos[t][c] || []).filter(a => String(a.dni).trim() !== String(dni).trim());
        });
    });
}

function renderizarTablaAlumnos() {
    const tbody = document.getElementById('tbody-alumnos-gestion');
    const busqueda = document.getElementById('buscar-alumno').value.toLowerCase();
    const turnoFiltro = document.getElementById('filtro-turno-alumnos').value;
    const cursoFiltro = document.getElementById('filtro-curso-alumnos').value;

    const esPreceptorOjefe = sesionActual && ['preceptor', 'jefe_preceptor', 'sub_jefe_preceptor'].includes(sesionActual.rol);
    let cursosPermitidos = (sesionActual?.cursos_permitidos || []).map(c => String(c).trim().toUpperCase());
    const turnoAsignado = esPreceptorOjefe ? (sesionActual.turno || '').trim().toUpperCase() : '';
    var turnosList = turnoAsignado ? turnoAsignado.split(',').map(function(t) { return t.trim(); }).filter(Boolean) : [];

    let dniEnSheets = new Set(alumnosDesdeSheets.map(a => String(a.dni).trim()));
    let alumnos = [...alumnosDesdeSheets.map(a => ({ ...a, esRecursante: false, materia: '' }))];

    function normalizarCurso(c) { return c.trim().toUpperCase().replace(/\s+/g, ''); }
    var cursosNorm = cursosPermitidos.map(normalizarCurso);

    if (alumnosDesdeSheets.length > 0) {
        Object.keys(baseDeDatosAlumnos).forEach(turno => {
            Object.keys(baseDeDatosAlumnos[turno]).forEach(curso => {
                if (esPreceptorOjefe) {
                    if (!cursosNorm.includes(normalizarCurso(curso))) return;
                    if (turnosList.length > 0 && turnosList.indexOf(turno.trim().toUpperCase()) === -1) return;
                }
                baseDeDatosAlumnos[turno][curso].forEach((alumno, idx) => {
                    if (!dniEnSheets.has(String(alumno.dni).trim())) {
                        alumnos.push({ ...alumno, turno, curso, index: idx, esRecursante: false, materia: '' });
                    }
                });
            });
        });
    }

    Object.keys(recursantesAgrupados).forEach(curso => {
        Object.keys(recursantesAgrupados[curso]).forEach(dni => {
            const r = recursantesAgrupados[curso][dni];
            if (esPreceptorOjefe) {
                if (!cursosNorm.includes(normalizarCurso(curso))) return;
                if (turnosList.length > 0 && turnosList.indexOf((r.turno || '').trim().toUpperCase()) === -1) return;
            }
            alumnos.push({ nombre: r.nombre, dni, turno: r.turno, curso, esRecursante: true, materia: r.materias.join(', ') });
        });
    });

    try {
        alumnos.sort(function(a, b) {
            var na = parseInt(String(a.dni).trim());
            var nb = parseInt(String(b.dni).trim());
            if (!isNaN(na) && !isNaN(nb)) return na - nb;
            return 0;
        });
    } catch(e) {
        console.warn('Error al ordenar alumnos en tabla:', e);
    }

    // Eliminar duplicados por DNI (la primera ocurrencia = sheets, es la autoritaria)
    var seenDni = new Set();
    alumnos = alumnos.filter(function(a) {
        var key = String(a.dni).trim() + '|' + String(a.curso).trim().toUpperCase();
        if (seenDni.has(key)) return false;
        seenDni.add(key);
        return true;
    });

    if (turnoFiltro) alumnos = alumnos.filter(a => a.turno === turnoFiltro);
    if (cursoFiltro) alumnos = alumnos.filter(a => a.curso === cursoFiltro);
    if (busqueda) alumnos = alumnos.filter(a =>
        a.nombre.toLowerCase().includes(busqueda) ||
        String(a.dni).toLowerCase().includes(busqueda)
    );

    if (alumnos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" style="padding:20px;text-align:center;color:#777;">No se encontraron alumnos</td></tr>';
        return;
    }

    tbody.innerHTML = alumnos.map((a, i) => `
        <tr style="${a.esRecursante ? 'background:#f0faff;' : ''}">
            <td style="text-align:center;font-weight:bold;">${a.dni}</td>
            <td style="text-align:left;">
                ${a.nombre}
                ${a.esRecursante ? '<span style="margin-left:6px;background:#17a2b8;color:white;border-radius:4px;padding:1px 6px;font-size:0.7rem;">Recursante</span>' : ''}
            </td>
            <td>${a.curso}</td>
            <td>${a.turno}</td>
            <td style="font-size:0.82rem;color:#555;">${a.esRecursante ? a.materia : '-'}</td>
            <td>
                ${a.esRecursante
                    ? `<button class="btn-action" onclick="mostrarModalEditarRecursante('${a.turno}', '${a.curso}', '${a.dni}')" style="background:#ffc107;color:#333;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;margin-right:4px;">
                           <i class="fas fa-edit"></i> Editar
                       </button>
                       <button class="btn-action" onclick="eliminarRecursante('${a.turno}', '${a.curso}', '${a.dni}')" style="background:#dc3545;color:white;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;">
                           <i class="fas fa-trash-alt"></i> Eliminar
                       </button>`
                    : `<button class="btn-action" onclick="mostrarModalEditarAlumno('${a.turno}', '${a.curso}', '${a.dni}')" style="background:#ffc107;color:#333;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;margin-right:4px;">
                           <i class="fas fa-edit"></i> Editar
                       </button>
                       <button class="btn-action" onclick="eliminarAlumno('${a.turno}', '${a.curso}', '${a.dni}')" style="background:#dc3545;color:white;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;">
                           <i class="fas fa-trash-alt"></i> Eliminar
                       </button>`
                }
            </td>
            <td>
                <div style="display:flex;align-items:center;gap:4px;">
                    <textarea class="ecap-input" data-dni="${a.dni}" data-curso="${a.curso}" data-turno="${a.turno}"
                              rows="1"
                              style="flex:1;padding:3px 6px;border:1px solid #ccc;border-radius:4px;font-size:0.8rem;resize:none;overflow:hidden;line-height:1.3;"
                              placeholder="Escribir mensaje ECAP...">${(a.ecap || '').replace(/"/g, '&quot;')}</textarea>
                    <button type="button" class="ecap-toggle" onclick="toggleEcap(this)" style="background:none;border:none;cursor:pointer;padding:0 2px;font-size:0.7rem;color:#888;line-height:1;">&#9660;</button>
                    <span class="ecap-spinner"></span>
                    <span class="ecap-check" style="font-size:1.1rem;color:#28a745;display:${a.ecap ? 'inline' : 'none'};">&#10003;</span>
                </div>
            </td>
        </tr>
    `).join('');
    
    // Auto-guardar ECAP al escribir con debounce
    document.querySelectorAll('.ecap-input').forEach(function(inp) {
        var timer;
        inp.addEventListener('input', function() {
            clearTimeout(timer);
            var container = this.parentElement;
            container.querySelector('.ecap-spinner').style.display = 'inline-block';
            container.querySelector('.ecap-check').style.display = 'none';
            var dni = this.getAttribute('data-dni');
            var curso = this.getAttribute('data-curso');
            var turno = this.getAttribute('data-turno');
            timer = setTimeout(function() {
                guardarECAP(dni, curso, turno, inp.value, function(exito) {
                    var sp = container.querySelector('.ecap-spinner');
                    var ch = container.querySelector('.ecap-check');
                    sp.style.display = 'none';
                    if (exito) {
                        ch.style.display = 'inline';
                        setTimeout(function() { ch.style.display = 'none'; }, 3000);
                    }
                });
            }, 400);
        });
    });
}

function filtrarAlumnos() {
    renderizarTablaAlumnos();
}

function mostrarModalAgregarAlumno() {
    document.getElementById('titulo-modal-alumno').textContent = 'Agregar Alumno';
    document.getElementById('alumno-modo').value = 'agregar';
    document.getElementById('alumno-dni-original').value = '';
    document.getElementById('nuevo-alumno-nombre').value = '';
    document.getElementById('nuevo-alumno-dni').value = '';

    const selectCurso = document.getElementById('nuevo-alumno-curso');
    const selectTurno = document.getElementById('nuevo-alumno-turno');

    const esPreceptorOjefe = sesionActual && ['preceptor', 'jefe_preceptor', 'sub_jefe_preceptor'].includes(sesionActual.rol);
    if (esPreceptorOjefe) {
        const cursosPermitidos = (sesionActual.cursos_permitidos || []);
        const turnoAsignado = (sesionActual.turno || '').trim();
        var turnosList = turnoAsignado ? turnoAsignado.split(',').map(function(t) { return t.trim(); }).filter(Boolean) : [];
        // populate curso dropdown with only assigned courses
        selectCurso.innerHTML = '<option value="">Seleccione Curso</option>';
        cursosPermitidos.forEach(function(c) {
            selectCurso.innerHTML += '<option value="' + c + '">' + c + '</option>';
        });
        selectCurso.disabled = cursosPermitidos.length === 1;
        // populate turno dropdown
        if (turnosList.length > 0) {
            selectTurno.innerHTML = '<option value="">Seleccione Turno</option>';
            turnosList.forEach(function(t) {
                selectTurno.innerHTML += '<option value="' + t + '">' + t + '</option>';
            });
            selectTurno.disabled = turnosList.length === 1;
        } else {
            selectTurno.innerHTML = '<option value="">Seleccione Turno</option><option value="MAÑANA">MAÑANA</option><option value="TARDE">TARDE</option>';
            selectTurno.disabled = false;
        }
        selectCurso.value = cursosPermitidos.length === 1 ? cursosPermitidos[0] : '';
        selectTurno.value = turnosList.length === 1 ? turnosList[0] : '';
    } else {
        selectCurso.innerHTML = '<option value="">Seleccione Curso</option><option value="1 A">1 A</option><option value="1 B">1 B</option><option value="1 C">1 C</option><option value="1 D">1 D</option><option value="1 E">1 E</option><option value="2 A">2 A</option><option value="2 B">2 B</option><option value="2 C">2 C</option><option value="2 D">2 D</option><option value="3 A">3 A</option><option value="3 B">3 B</option><option value="3 C">3 C</option><option value="4 A">4 A</option><option value="4 B">4 B</option><option value="4 C">4 C</option><option value="5 A">5 A</option><option value="5 B">5 B</option><option value="5 C">5 C</option>';
        selectCurso.value = '';
        selectCurso.disabled = false;
        selectTurno.value = '';
        selectTurno.disabled = false;
    }

    // Auto-calcular próximo Nro. Orden disponible
    setTimeout(function() {
        calcularSiguienteDni('nuevo-alumno-curso', 'nuevo-alumno-turno', 'nuevo-alumno-dni');
    }, 100);

    document.getElementById('modal-agregar-alumno').style.display = 'flex';
}

// Calcula el próximo DNI (Nro. Orden) disponible para el curso+turno seleccionado
function calcularSiguienteDni(selectCursoId, selectTurnoId, inputDniId) {
    const curso = document.getElementById(selectCursoId).value;
    const turno = document.getElementById(selectTurnoId).value;
    if (!curso || !turno) return;
    var maxDni = 0;
    (alumnosDesdeSheets || []).forEach(function(a) {
        if (a.curso.trim().toUpperCase() === curso.trim().toUpperCase() &&
            a.turno.trim().toUpperCase() === turno.trim().toUpperCase()) {
            var dniNum = parseInt(String(a.dni).trim());
            if (!isNaN(dniNum) && dniNum > maxDni) maxDni = dniNum;
        }
    });
    document.getElementById(inputDniId).value = maxDni + 1;
}

// Event listeners para auto-calcular DNI al cambiar curso/turno en el modal de agregar
(function() {
    var cursoSelect = document.getElementById('nuevo-alumno-curso');
    var turnoSelect = document.getElementById('nuevo-alumno-turno');
    if (cursoSelect) {
        cursoSelect.addEventListener('change', function() {
            if (document.getElementById('alumno-modo').value === 'agregar') {
                calcularSiguienteDni('nuevo-alumno-curso', 'nuevo-alumno-turno', 'nuevo-alumno-dni');
            }
        });
    }
    if (turnoSelect) {
        turnoSelect.addEventListener('change', function() {
            if (document.getElementById('alumno-modo').value === 'agregar') {
                calcularSiguienteDni('nuevo-alumno-curso', 'nuevo-alumno-turno', 'nuevo-alumno-dni');
            }
        });
    }
})();

function mostrarModalCargaMasiva() {
    const selectCurso = document.getElementById('cm-curso');
    const selectTurno = document.getElementById('cm-turno');
    document.getElementById('cm-lista-nombres').value = '';
    document.getElementById('cm-dni-inicio').value = '';

    const esPreceptorOjefe = sesionActual && ['preceptor', 'jefe_preceptor', 'sub_jefe_preceptor'].includes(sesionActual.rol);
    if (esPreceptorOjefe) {
        const cursosPermitidos = (sesionActual.cursos_permitidos || []);
        const turnoAsignado = (sesionActual.turno || '').trim();
        var turnosList = turnoAsignado ? turnoAsignado.split(',').map(function(t) { return t.trim(); }).filter(Boolean) : [];

        selectCurso.innerHTML = '<option value="">Seleccione Curso</option>';
        cursosPermitidos.forEach(function(c) {
            selectCurso.innerHTML += '<option value="' + c + '">' + c + '</option>';
        });
        selectCurso.disabled = cursosPermitidos.length === 1;

        if (turnosList.length > 0) {
            selectTurno.innerHTML = '<option value="">Seleccione Turno</option>';
            turnosList.forEach(function(t) {
                selectTurno.innerHTML += '<option value="' + t + '">' + t + '</option>';
            });
            selectTurno.disabled = turnosList.length === 1;
        } else {
            selectTurno.innerHTML = '<option value="">Seleccione Turno</option><option value="MAÑANA">MAÑANA</option><option value="TARDE">TARDE</option>';
            selectTurno.disabled = false;
        }
        selectCurso.value = cursosPermitidos.length === 1 ? cursosPermitidos[0] : '';
        selectTurno.value = turnosList.length === 1 ? turnosList[0] : '';
    } else {
        selectCurso.value = '';
        selectCurso.disabled = false;
        selectTurno.value = '';
        selectTurno.disabled = false;
    }

    document.getElementById('modal-carga-masiva').style.display = 'flex';
}

function mostrarModalEditarAlumno(turno, curso, dni) {
    const dniStr = String(dni).trim();

    let alumno = alumnosDesdeSheets.find(a =>
        String(a.dni).trim() === dniStr &&
        a.curso.trim().toUpperCase() === curso.trim().toUpperCase()
    );

    if (!alumno) {
        const encontrado = baseDeDatosAlumnos[turno]?.[curso]?.find(a => String(a.dni).trim() === dniStr);
        if (encontrado) alumno = { ...encontrado, turno, curso };
    }

    if (!alumno) {
        alert('Alumno no encontrado');
        return;
    }

    const esPreceptorOjefe = sesionActual && ['preceptor', 'jefe_preceptor', 'sub_jefe_preceptor'].includes(sesionActual.rol);
    const selectCurso = document.getElementById('nuevo-alumno-curso');
    const selectTurno = document.getElementById('nuevo-alumno-turno');

    document.getElementById('titulo-modal-alumno').textContent = 'Editar Alumno';
    document.getElementById('alumno-modo').value = 'editar';
    document.getElementById('alumno-dni-original').value = dniStr;
    document.getElementById('nuevo-alumno-nombre').value = alumno.nombre;
    document.getElementById('nuevo-alumno-dni').value = alumno.dni;

    if (esPreceptorOjefe) {
        const cursosPermitidos = (sesionActual.cursos_permitidos || []);
        const turnoAsignado = (sesionActual.turno || '').trim();
        var turnosList = turnoAsignado ? turnoAsignado.split(',').map(function(t) { return t.trim(); }).filter(Boolean) : [];
        selectCurso.innerHTML = '<option value="">Seleccione Curso</option>';
        cursosPermitidos.forEach(function(c) {
            selectCurso.innerHTML += '<option value="' + c + '">' + c + '</option>';
        });
        selectCurso.value = alumno.curso || curso;
        selectCurso.disabled = cursosPermitidos.length === 1;
        if (turnosList.length > 0) {
            selectTurno.innerHTML = '<option value="">Seleccione Turno</option>';
            turnosList.forEach(function(t) {
                selectTurno.innerHTML += '<option value="' + t + '">' + t + '</option>';
            });
            selectTurno.value = alumno.turno || turno;
            selectTurno.disabled = turnosList.length === 1;
        } else {
            selectTurno.innerHTML = '<option value="">Seleccione Turno</option><option value="MAÑANA">MAÑANA</option><option value="TARDE">TARDE</option>';
            selectTurno.value = alumno.turno || turno;
            selectTurno.disabled = false;
        }
    } else {
        selectCurso.innerHTML = '<option value="">Seleccione Curso</option><option value="1 A">1 A</option><option value="1 B">1 B</option><option value="1 C">1 C</option><option value="1 D">1 D</option><option value="1 E">1 E</option><option value="2 A">2 A</option><option value="2 B">2 B</option><option value="2 C">2 C</option><option value="2 D">2 D</option><option value="3 A">3 A</option><option value="3 B">3 B</option><option value="3 C">3 C</option><option value="4 A">4 A</option><option value="4 B">4 B</option><option value="4 C">4 C</option><option value="5 A">5 A</option><option value="5 B">5 B</option><option value="5 C">5 C</option>';
        selectCurso.value = alumno.curso || curso;
        selectCurso.disabled = false;
        selectTurno.value = alumno.turno || turno;
        selectTurno.disabled = false;
    }

    document.getElementById('modal-agregar-alumno').style.display = 'flex';
}

async function confirmarGuardarAlumno() {
    const modo = document.getElementById('alumno-modo').value;
    const nombre = document.getElementById('nuevo-alumno-nombre').value.trim();
    const dni = document.getElementById('nuevo-alumno-dni').value.trim();
    const curso = document.getElementById('nuevo-alumno-curso').value;
    const turno = document.getElementById('nuevo-alumno-turno').value;
    const dniOriginal = document.getElementById('alumno-dni-original').value;
    
    if (!nombre || !dni || !curso || !turno) {
        alert('Complete todos los campos');
        return;
    }
    
    const btn = document.getElementById('btn-guardar-alumno');
    const spinner = document.getElementById('spinner-guardar-alumno');
    const texto = document.getElementById('texto-guardar-alumno');
    btn.disabled = true;
    spinner.style.display = 'inline-block';
    texto.textContent = 'Guardando...';
    
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: modo === 'editar' ? 'editarAlumno' : 'agregarAlumno',
                correo: sesionActual.correo,
                datos: { nombre, dni, curso, turno },
                dniOriginal: dniOriginal
            })
        });
        
        const resultado = await resp.json();
        
        if (resultado.success) {
            alert(modo === 'editar' ? 'Alumno actualizado exitosamente' : 'Alumno agregado exitosamente');
            cerrarModal('modal-agregar-alumno');
            if (modo === 'editar' && dniOriginal) {
                eliminarDeBaseDatos(dniOriginal);
            } else if (modo === 'agregar') {
                eliminarDeBaseDatos(dni);
            }
            await cargarListaAlumnosGestion();
        } else {
            alert('Error: ' + resultado.error);
        }
    } catch (err) {
        console.error(err);
        alert('Error al guardar alumno');
    }
    btn.disabled = false;
    spinner.style.display = 'none';
    texto.textContent = 'Guardar';
}

async function confirmarCargaMasiva() {
    const curso = document.getElementById('cm-curso').value;
    const turno = document.getElementById('cm-turno').value;
    const dniInicio = document.getElementById('cm-dni-inicio').value.trim();
    const texto = document.getElementById('cm-lista-nombres').value.trim();

    if (!curso || !turno) {
        alert('Seleccione curso y turno');
        return;
    }

    const nombres = texto.split('\n').map(function(n) { return n.trim(); }).filter(Boolean);
    if (nombres.length === 0) {
        alert('Ingrese al menos un nombre');
        return;
    }

    if (!confirm('¿Agregar ' + nombres.length + ' alumno(s) al curso ' + curso + ' (' + turno + ')?')) return;

    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'agregarAlumnosMasivo',
                correo: sesionActual.correo,
                datos: { curso: curso, turno: turno, nombres: nombres, dniInicio: dniInicio }
            })
        });

        const resultado = await resp.json();

        if (resultado.success) {
            alert('Carga exitosa\n\n' + resultado.mensaje);
            cerrarModal('modal-carga-masiva');
            await cargarListaAlumnosGestion();
        } else {
            alert('Error: ' + resultado.error);
        }
    } catch (err) {
        console.error(err);
        alert('Error al realizar carga masiva');
    }
}

async function eliminarAlumno(turno, curso, dni) {
    if (!confirm('¿Esta seguro de eliminar este alumno?')) return;
    
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'eliminarAlumno',
                correo: sesionActual.correo,
                turno: turno,
                curso: curso,
                dni: dni
            })
        });
        
        const resultado = await resp.json();
        
        if (resultado.success) {
            alert('Alumno eliminado exitosamente');
            eliminarDeBaseDatos(dni);
            await cargarListaAlumnosGestion();
        } else {
            alert('Error: ' + resultado.error);
        }
    } catch (err) {
        console.error(err);
        alert('Error al eliminar alumno');
    }
}

async function guardarECAP(dni, curso, turno, texto, callback) {
    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'guardarECAP',
                correo: sesionActual.correo,
                dni: dni,
                curso: curso,
                turno: turno,
                ecap: texto
            })
        });
        const resultado = await resp.json();
        if (callback) callback(resultado && resultado.success);
    } catch (err) {
        console.error('Error al guardar ECAP:', err);
        if (callback) callback(false);
    }
}

function toggleEcap(btn) {
    var ta = btn.parentElement.querySelector('.ecap-input');
    if (ta.getAttribute('rows') === '1') {
        ta.setAttribute('rows', '5');
        ta.style.height = 'auto';
        btn.innerHTML = '&#9650;';
    } else {
        ta.setAttribute('rows', '1');
        ta.style.height = 'auto';
        btn.innerHTML = '&#9660;';
    }
}

function mostrarModalAgregarRecursante() {
    document.getElementById('recursante-modo').value = 'agregar';
    document.getElementById('recursante-dni').value = '';
    document.getElementById('recursante-modal-titulo').textContent = 'Agregar Recursante';
    document.getElementById('recursante-nombre').value = '';
    document.getElementById('recursante-curso').value = '';
    document.getElementById('recursante-materias-container').innerHTML = '<div style="color:#999;padding:8px;">Seleccione un curso primero</div>';
    document.getElementById('recursante-turno').value = '';
    document.getElementById('modal-agregar-recursante').style.display = 'flex';
}

function mostrarModalEditarRecursante(turno, curso, dni) {
    document.getElementById('recursante-modo').value = 'editar';
    document.getElementById('recursante-dni').value = dni;
    document.getElementById('recursante-modal-titulo').textContent = 'Editar Recursante';
    document.getElementById('recursante-curso').value = curso;

    document.getElementById('recursante-turno').value = '';
    const turnosSelect = document.getElementById('recursante-turno');
    for (let opt of turnosSelect.options) {
        if (opt.value === turno) { opt.selected = true; break; }
    }

    const r = recursantesAgrupados[curso]?.[dni];
    document.getElementById('recursante-nombre').value = r?.nombre || '';

    actualizarMateriasRecursante(dni);
    document.getElementById('modal-agregar-recursante').style.display = 'flex';
}

function actualizarMateriasRecursante(dniEdit = '') {
    const curso = document.getElementById('recursante-curso').value;
    const container = document.getElementById('recursante-materias-container');

    if (!curso) {
        container.innerHTML = '<div style="color:#999;padding:8px;">Seleccione un curso primero</div>';
        return;
    }

    const materias = (materiasPorCurso[curso] || []).slice().sort((a, b) => a.localeCompare(b, 'es'));

    let materiasEdit = new Set();
    if (dniEdit && recursantesAgrupados[curso]?.[dniEdit]) {
        recursantesAgrupados[curso][dniEdit].materias.forEach(m => materiasEdit.add(m));
    }

    container.innerHTML = `
        <input type="text" id="filtro-materias-recursante" placeholder="Buscar materia..." style="width:100%;padding:6px;border:1px solid #ccc;border-radius:4px;margin-bottom:6px;box-sizing:border-box;" oninput="filtrarMateriasRecursante(this.value)">
        <div id="recursante-materias-lista" style="max-height:150px;overflow-y:auto;">
            ${materias.map(m => `
                <label class="recursante-mat-item" data-mat="${m}" style="display:flex;align-items:center;gap:8px;padding:4px 6px;cursor:pointer;border-radius:4px;transition:background 0.15s;"
                       onmouseover="this.style.background='#eef'" onmouseout="this.style.background=''">
                    <input type="checkbox" value="${m}" ${materiasEdit.has(m) ? 'checked' : ''}>
                    <span>${m}</span>
                </label>
            `).join('')}
        </div>
    `;
}

function filtrarMateriasRecursante(texto) {
    const q = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    document.querySelectorAll('#recursante-materias-lista .recursante-mat-item').forEach(label => {
        const mat = label.getAttribute('data-mat').toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        label.style.display = mat.includes(q) ? '' : 'none';
    });
}

async function confirmarGuardarRecursante() {
    const modo = document.getElementById('recursante-modo').value;
    if (modo === 'agregar') await confirmarAgregarRecursante();
    else await confirmarEditarRecursante();
}

async function confirmarAgregarRecursante() {
    const nombre = document.getElementById('recursante-nombre').value.trim();
    const curso = document.getElementById('recursante-curso').value;
    const turno = document.getElementById('recursante-turno').value;
    const checks = document.querySelectorAll('#recursante-materias-container input[type="checkbox"]:checked');
    const materias = Array.from(checks).map(c => c.value);

    if (!nombre || !curso || materias.length === 0 || !turno) {
        alert('Complete todos los campos y seleccione al menos una materia');
        return;
    }

    const dniTemporal = 'REC-' + Date.now();

    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'agregarRecursante',
                correo: sesionActual.correo,
                datos: { nombre, dni: dniTemporal, curso, materias, turno }
            })
        });

        const resultado = await resp.json();

        if (resultado.success) {
            if (!recursantesAgrupados[curso]) recursantesAgrupados[curso] = {};
            if (!recursantesAgrupados[curso][dniTemporal]) {
                recursantesAgrupados[curso][dniTemporal] = { nombre, turno, materias: [] };
            }
            materias.forEach(mat => {
                if (!recursantesAgrupados[curso][dniTemporal].materias.includes(mat)) {
                    recursantesAgrupados[curso][dniTemporal].materias.push(mat);
                }
            });

            alert('Recursante agregado exitosamente');
            cerrarModal('modal-agregar-recursante');
            cargarListaAlumnosGestion();
        } else {
            alert('Error: ' + resultado.error);
        }
    } catch (err) {
        console.error(err);
        alert('Error al agregar recursante');
    }
}

async function confirmarEditarRecursante() {
    const dni = document.getElementById('recursante-dni').value;
    const nombre = document.getElementById('recursante-nombre').value.trim();
    const curso = document.getElementById('recursante-curso').value;
    const turno = document.getElementById('recursante-turno').value;
    const checks = document.querySelectorAll('#recursante-materias-container input[type="checkbox"]:checked');
    const materias = Array.from(checks).map(c => c.value);

    if (!nombre || !curso || materias.length === 0 || !turno) {
        alert('Complete todos los campos y seleccione al menos una materia');
        return;
    }

    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'editarRecursante',
                correo: sesionActual.correo,
                datos: { nombre, dni, curso, materias, turno }
            })
        });

        const resultado = await resp.json();

        if (resultado.success) {
            // Actualizar local: reemplazar entrada del DNI
            if (recursantesAgrupados[curso]) {
                delete recursantesAgrupados[curso][dni];
            }
            if (!recursantesAgrupados[curso]) recursantesAgrupados[curso] = {};
            recursantesAgrupados[curso][dni] = { nombre, turno, materias: [...materias] };

            alert('Recursante actualizado exitosamente');
            cerrarModal('modal-agregar-recursante');
            cargarListaAlumnosGestion();
        } else {
            alert('Error: ' + resultado.error);
        }
    } catch (err) {
        console.error(err);
        alert('Error al editar recursante');
    }
}

async function eliminarRecursante(turno, curso, dni) {
    if (!confirm('¿Está seguro de eliminar este recursante de la base de datos?')) return;

    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'eliminarRecursante',
                correo: sesionActual.correo,
                dni
            })
        });
        const resultado = await resp.json();

        if (resultado.success) {
            if (recursantesAgrupados[curso]) {
                delete recursantesAgrupados[curso][dni];
                if (Object.keys(recursantesAgrupados[curso]).length === 0) delete recursantesAgrupados[curso];
            }
            alert('Recursante eliminado correctamente.');
            cargarAlumnos();
            cargarListaAlumnosGestion();
        } else {
            alert('Error: ' + (resultado.error || 'No se pudo eliminar'));
        }
    } catch (err) {
        console.error(err);
        alert('Error de conexión al eliminar recursante.');
    }
}

// ============================================================
// GESTION DE PRECEPTORES
// ============================================================

async function cargarPreceptores() {
    const tbody = document.getElementById('tbody-preceptores');

    try {
        const url = `${URL_WEB_APP}?action=listarPreceptores&correo=${encodeURIComponent(sesionActual.correo)}`;
        const resp = await fetch(url, { method: 'GET', mode: 'cors' });
        const resultado = await resp.json();

        if (resultado.success && resultado.preceptores) {
            listaPreceptoresGlobal = resultado.preceptores;
        } else {
            listaPreceptoresGlobal = [];
        }
    } catch (err) {
        console.error('Error cargando preceptores:', err);
        listaPreceptoresGlobal = [];
    }

    renderizarPreceptores();
}

function renderizarPreceptores() {
    const tbody = document.getElementById('tbody-preceptores');
    const busqueda = (document.getElementById('buscar-preceptor')?.value || '').toLowerCase();

    let preceptores = [...listaPreceptoresGlobal];

    if (busqueda) {
        preceptores = preceptores.filter(p =>
            (p.correo || '').toLowerCase().includes(busqueda) ||
            (p.turno || '').toLowerCase().includes(busqueda) ||
            (p.curso || '').toLowerCase().includes(busqueda)
        );
    }

    if (preceptores.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="padding:20px;text-align:center;color:#777;">No hay preceptores registrados</td></tr>';
        return;
    }

    var etiquetaRol = { preceptor: 'Preceptor', jefe_preceptor: 'Jefe Preceptor', sub_jefe_preceptor: 'Sub Jefe Preceptor' };

    tbody.innerHTML = preceptores.map((p, i) => `
        <tr>
            <td>${i + 1}</td>
            <td style="text-align:left;">${p.correo}</td>
            <td>${etiquetaRol[p.rol] || p.rol || 'Preceptor'}</td>
            <td>${p.turno || '-'}</td>
            <td>${p.curso || '-'}</td>
            <td>
                <button class="btn-action" onclick="mostrarModalEditarPreceptor('${p.correo}')" style="background:#ffc107;color:#333;border:none;padding:4px 8px;border-radius:4px;cursor:pointer;margin-right:4px;" title="Editar preceptor">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn-action btn-delete" onclick="eliminarPreceptor('${p.correo}')" title="Eliminar preceptor">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');
}

function filtrarPreceptores() {
    renderizarPreceptores();
}

function mostrarModalAgregarPreceptor() {
    document.getElementById('preceptor-correo-original').value = '';
    document.getElementById('preceptor-correo').value = '';
    document.getElementById('preceptor-correo').disabled = false;
    document.getElementById('preceptor-password').value = '';
    document.getElementById('preceptor-pass-label').textContent = 'inicial';
    document.getElementById('preceptor-modal-titulo').textContent = 'Agregar Preceptor';
    document.getElementById('preceptor-modal-btn').textContent = 'Guardar Preceptor';
    // uncheck all turno checkboxes
    document.querySelectorAll('#preceptor-turnos input[type="checkbox"]').forEach(function(cb) { cb.checked = false; });
    var container = document.getElementById('preceptor-cursos');
    var cursos = ['1 A','1 B','1 C','1 D','1 E','2 A','2 B','2 C','2 D','3 A','3 B','3 C','4 A','4 B','4 C','5 A','5 B','5 C'];
    container.innerHTML = cursos.map(function(c) {
        return '<label class="check-item"><input type="checkbox" value="' + c + '"> ' + c + '</label>';
    }).join('');
    document.getElementById('modal-agregar-preceptor').style.display = 'flex';
}

function mostrarModalEditarPreceptor(correo) {
    var p = listaPreceptoresGlobal.find(function(x) { return x.correo === correo; });
    if (!p) { alert('Preceptor no encontrado'); return; }

    document.getElementById('preceptor-correo-original').value = correo;
    document.getElementById('preceptor-correo').value = correo;
    document.getElementById('preceptor-correo').disabled = false;
    document.getElementById('preceptor-password').value = '';
    document.getElementById('preceptor-pass-label').textContent = '(dejar vacio para no cambiar)';
    document.getElementById('preceptor-modal-titulo').textContent = 'Editar Preceptor';
    document.getElementById('preceptor-modal-btn').textContent = 'Actualizar Preceptor';

    // marcar turnos
    var turnosPreceptor = (p.turno || '').split(',').map(function(s) { return s.trim().toUpperCase(); });
    document.querySelectorAll('#preceptor-turnos input[type="checkbox"]').forEach(function(cb) {
        cb.checked = turnosPreceptor.indexOf(cb.value.toUpperCase()) !== -1;
    });

    var cursosAsignados = (p.cursos || '').split(',').map(function(s) { return s.trim(); });
    var container = document.getElementById('preceptor-cursos');
    var todos = ['1 A','1 B','1 C','1 D','1 E','2 A','2 B','2 C','2 D','3 A','3 B','3 C','4 A','4 B','4 C','5 A','5 B','5 C'];
    container.innerHTML = todos.map(function(c) {
        var checked = cursosAsignados.indexOf(c) !== -1 ? ' checked' : '';
        return '<label class="check-item"><input type="checkbox" value="' + c + '"' + checked + '> ' + c + '</label>';
    }).join('');

    document.getElementById('modal-agregar-preceptor').style.display = 'flex';
}

async function confirmarAgregarPreceptor() {
    const correoOriginal = document.getElementById('preceptor-correo-original').value;
    const correo = document.getElementById('preceptor-correo').value.trim();
    const password = document.getElementById('preceptor-password').value;
    var turnoChecks = document.querySelectorAll('#preceptor-turnos input[type="checkbox"]:checked');
    var turnos = Array.from(turnoChecks).map(function(cb) { return cb.value; });
    var checks = document.querySelectorAll('#preceptor-cursos input[type="checkbox"]:checked');
    var cursos = Array.from(checks).map(function(cb) { return cb.value; });

    const esEdicion = correoOriginal !== '';

    if (!correo || turnos.length === 0 || cursos.length === 0) {
        alert('Complete todos los campos y seleccione al menos un turno y un curso');
        return;
    }
    if (!correo.endsWith('@cpem32.edu.ar')) {
        alert('El correo debe ser institucional (@cpem32.edu.ar)');
        return;
    }
    if (!esEdicion && password.length < 4) {
        alert('La contrasena debe tener al menos 4 caracteres');
        return;
    }

    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: esEdicion ? 'actualizarPreceptor' : 'agregarPreceptor',
                correoSolicitante: sesionActual.correo,
                correoOriginal: esEdicion ? correoOriginal : undefined,
                datos: {
                    correo: correo,
                    password: password,
                    rol: 'preceptor',
                    turno: turnos.join(','),
                    cursos: cursos
                }
            })
        });
        const res = await resp.json();

        if (res.success) {
            alert(esEdicion ? 'Preceptor actualizado exitosamente' : 'Preceptor agregado exitosamente');
            cerrarModal('modal-agregar-preceptor');
            cargarPreceptores();
        } else {
            alert('Error: ' + (res.error || 'No se pudo ' + (esEdicion ? 'actualizar' : 'agregar') + ' el preceptor'));
        }
    } catch (err) {
        console.error(err);
        alert('Error de conexion al ' + (esEdicion ? 'actualizar' : 'agregar') + ' preceptor');
    }
}

async function eliminarPreceptor(correo) {
    if (!confirm(`Esta seguro de eliminar al preceptor ${correo}?`)) return;

    try {
        const resp = await fetch(URL_WEB_APP, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain;charset=utf-8' },
            body: JSON.stringify({
                action: 'eliminarPreceptor',
                correoSolicitante: sesionActual.correo,
                correoEliminar: correo
            })
        });
        const res = await resp.json();

        if (res.success) {
            alert('Preceptor eliminado');
            cargarPreceptores();
        } else {
            alert('Error: ' + (res.error || 'No se pudo eliminar'));
        }
    } catch (err) {
        console.error(err);
        alert('Error de conexion');
    }
}

// ============================================================
// DESCARGAR COMPROBANTE PDF
// ============================================================

function actualizarEstadoBotonComprobante() {
    const btn = document.getElementById('btnComprobante');
    const msg = document.getElementById('msg-desbloquear');
    if (!btn) return;
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;
    if (!turno || !curso || !materia || !periodo) {
        btn.style.display = 'none';
        if (msg) msg.style.display = 'none';
        return;
    }
    const llave = `${turno}-${curso}-${materia}-${periodo}`;
    const guardado = llavesGuardadas.has(llave);
    btn.style.display = 'inline-flex';
    btn.disabled = !guardado;
    btn.style.opacity = guardado ? '1' : '0.5';
    btn.style.cursor = guardado ? 'pointer' : 'not-allowed';
    btn.title = guardado ? 'Descargar comprobante' : 'Primero debe guardar los datos';
    if (guardado) {
        btn.classList.add('activo');
        if (msg) msg.style.display = 'none';
    } else {
        btn.classList.remove('activo');
        if (msg) msg.style.display = 'block';
    }
}

function verificarDatosCompletos() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;
    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    const datosM = memoriaGlobal[llaveID] || {};
    const alumnos = baseDeDatosAlumnos[turno]?.[curso] || [];
    const anoCurso = parseInt(curso.charAt(0));
    const esBimestre = periodo.includes("Bimestre");
    const esCuatrimestre = (periodo === "1" || periodo === "2");
    const incompletos = [];

    alumnos.forEach((alumno, idx) => {
        const d = datosM[alumno.dni] || {};
        let falta = [];
        if (esCuatrimestre) {
            const notaNum = parseInt(d.nota);
            if (!d.nota || d.nota.trim() === '' || (isNaN(notaNum) && d.nota !== 'Ausente' && d.nota !== 'Sin calificar') || notaNum < 4 || notaNum > 10) {
                falta.push('Nota');
            }
        } else {
            if (!d.nota || d.nota === '-' || d.nota === 'Sin Calificar' || d.nota.trim() === '') {
                falta.push('Nota');
            }
        }
        const obs = d.observacion || d.sel_1 || '';
        if (!obs || obs.trim() === '' || obs === '-') {
            falta.push('Observacion');
        }
        if (anoCurso >= 5 || esBimestre) {
            const criterios = ["Interpreta", "Relaciona", "Aplica", "Participación", "Autonomía", "Realización de TP", "Cumplimiento AEC"];
            criterios.forEach(crit => {
                const val = d[crit];
                if (!val || val === '-' || val.trim() === '') {
                    falta.push(crit);
                }
            });
        }
        if (falta.length > 0) {
            incompletos.push({ nombre: alumno.nombre, faltantes: falta });
        }
    });

    return incompletos;
}

function mostrarModalVerificacion(incompletos, callbackDescargar) {
    let modal = document.getElementById('modal-verificacion');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal-verificacion';
        modal.className = 'modal-overlay';
        modal.innerHTML = `
            <div class="modal-content" style="max-width:600px;">
                <div class="modal-header">
                    <h3><i class="fas fa-exclamation-triangle" style="color:#f0ad4e;"></i> Verificacion de datos</h3>
                    <button class="btn-close-modal" id="btn-cerrar-modal-v">&times;</button>
                </div>
                <div class="modal-body" id="modal-verif-body"></div>
                <div class="modal-footer" id="modal-verif-footer"></div>
            </div>
        `;
        document.body.appendChild(modal);
        document.getElementById('btn-cerrar-modal-v').addEventListener('click', cerrarModalVerificacion);
    }

    const body = document.getElementById('modal-verif-body');
    const footer = document.getElementById('modal-verif-footer');

    if (incompletos.length === 0) {
        body.innerHTML = '<p style="text-align:center;color:#28a745;"><i class="fas fa-check-circle" style="font-size:2rem;"></i><br><br>Todos los alumnos tienen sus datos completos.</p>';
        footer.innerHTML = `
            <button class="btn-save" id="btn-modal-descargar"><i class="fas fa-file-pdf"></i> Descargar comprobante</button>
            <button class="btn-cancel" id="btn-modal-cancelar">Cancelar</button>
        `;
    } else {
        let html = `<p style="color:#856404;"><strong>Atencion:</strong> Los siguientes alumnos tienen datos incompletos:</p>
        <div id="scroll-top-modal" style="overflow-x:auto; overflow-y:hidden; height:12px;">
            <div style="width:100%; min-width:500px; height:1px;"></div>
        </div>
        <div id="scroll-bottom-modal" style="max-height:250px; overflow-y:auto; overflow-x:auto; border:1px solid #ddd; border-radius:4px; margin:10px 0;">
        <table style="width:100%; font-size:0.85rem; min-width:500px;">
            <thead><tr style="background:#f8f9fa;"><th style="white-space:nowrap;">Alumno</th><th style="white-space:nowrap;">Datos faltantes</th></tr></thead>
            <tbody>`;
        incompletos.forEach(item => {
            html += `<tr><td style="padding:6px; border-bottom:1px solid #eee;">${item.nombre}</td><td style="padding:6px; border-bottom:1px solid #eee; color:#721c24;">${item.faltantes.join(', ')}</td></tr>`;
        });
        html += `</tbody></table></div>`;
        body.innerHTML = html;
        
        const scrollTop = document.getElementById('scroll-top-modal');
        const scrollBottom = document.getElementById('scroll-bottom-modal');
        if (scrollTop && scrollBottom) {
            scrollTop.addEventListener('scroll', () => { scrollBottom.scrollLeft = scrollTop.scrollLeft; });
            scrollBottom.addEventListener('scroll', () => { scrollTop.scrollLeft = scrollBottom.scrollLeft; });
        }
        
        footer.innerHTML = `
            <button class="btn-save" style="background:#6c757d;" id="btn-modal-descargar"><i class="fas fa-file-pdf"></i> Omitir y descargar igual</button>
            <button class="btn-save" id="btn-modal-volver"><i class="fas fa-edit"></i> Volver a completar</button>
        `;
    }

    _callbackDescargarComprobante = callbackDescargar;

    const btnDescargar = document.getElementById('btn-modal-descargar');
    const btnCancelar = document.getElementById('btn-modal-cancelar');
    const btnVolver = document.getElementById('btn-modal-volver');

    if (btnDescargar) {
        btnDescargar.onclick = function() {
            const cb = _callbackDescargarComprobante;
            cerrarModalVerificacion();
            if (typeof cb === 'function') {
                cb();
            }
        };
    }
    if (btnCancelar) {
        btnCancelar.onclick = cerrarModalVerificacion;
    }
    if (btnVolver) {
        btnVolver.onclick = cerrarModalVerificacion;
    }

    modal.style.display = 'flex';
}

function cerrarModalVerificacion() {
    const modal = document.getElementById('modal-verificacion');
    if (modal) modal.style.display = 'none';
    _callbackDescargarComprobante = null;
}

function descargarComprobante() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;
    const llave = `${turno}-${curso}-${materia}-${periodo}`;

    if (!llavesGuardadas.has(llave)) {
        alert('Primero debe guardar los datos en la base de datos antes de descargar el comprobante.');
        return;
    }

    const incompletos = verificarDatosCompletos();

    mostrarModalVerificacion(incompletos, async () => {
        await generarPDFComprobante();
    });
}

async function generarPDFComprobante() {
    const turno = document.getElementById('turnos').value;
    const curso = document.getElementById('cursos').value;
    const materia = document.getElementById('materias').value;
    const periodo = document.getElementById('periodos').value;
    
    const alumnos = baseDeDatosAlumnos[turno]?.[curso] || [];
    const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
    const datosM = memoriaGlobal[llaveID] || {};
    const anoCurso = parseInt(curso.charAt(0));
    const esBimestre = periodo.includes("Bimestre");
    
    let mensajeTermino = '';
    try {
        const fechaLimite = await obtenerFechaLimitePeriodo(periodo);
        const resultadoTermino = verificarTerminidad(fechaLimite);
        
        const incompletos = verificarDatosCompletos();
        if (incompletos.length === 0) {
            mensajeTermino = resultadoTermino.mensaje;
        } else {
            mensajeTermino = 'Falta Completar Datos';
        }
    } catch (err) {
        console.error('Error verificando fecha limite:', err);
    }
    
    const ahora = new Date();
    const fechaStr = ahora.toLocaleDateString('es-AR');
    const horaStr = ahora.toLocaleTimeString('es-AR');
    
    let nombrePeriodoMostrar = periodo;
    if (periodo === "1") nombrePeriodoMostrar = "1er Cuatrimestre";
    else if (periodo === "2") nombrePeriodoMostrar = "2do Cuatrimestre";
    else if (periodo === "1_Bimestre") nombrePeriodoMostrar = "1er Bimestre";
    else if (periodo === "2_Bimestre") nombrePeriodoMostrar = "2do Bimestre";
    else if (periodo === "3_Bimestre") nombrePeriodoMostrar = "3er Bimestre";
    else if (periodo === "4_Bimestre") nombrePeriodoMostrar = "4to Bimestre";
    
    let html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Comprobante - ${materia} - ${curso}</title>
        <style>
            @page { size: A4 landscape; margin: 8mm; }
            * { box-sizing: border-box; }
            body { font-family: Arial, sans-serif; font-size: 7.5pt; margin: 0; padding: 8px; color: #333; position: relative; }
            .header { text-align: center; border-bottom: 1.5px solid #0056b3; padding-bottom: 5px; margin-bottom: 8px; }
            .header h1 { margin: 0; font-size: 12pt; color: #0056b3; }
            .header h2 { margin: 3px 0; font-size: 10pt; color: #555; }
            .info { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 7.5pt; }
            .info-box { background: #f5f5f5; padding: 4px 8px; border-radius: 3px; }
            .termino-box { position: absolute; top: 10px; right: 10px; padding: 3px 8px; border-radius: 3px; font-weight: bold; font-size: 7pt; }
            .termino-ok { background: #d4edda; color: #155724; border: 1px solid #c3e6cb; }
            .termino-fuera { background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb; }
            .termino-incompleto { background: #fff3cd; color: #856404; border: 1px solid #ffc107; }
            table { width: 100%; border-collapse: collapse; font-size: 7pt; }
            th { background: #0056b3; color: white; padding: 3px 2px; text-align: center; font-weight: bold; border: 1px solid #004494; font-size: 6.5pt; }
            td { padding: 2px 3px; border: 1px solid #ddd; vertical-align: middle; }
            tr:nth-child(even) { background: #f9f9f9; }
            .col-n { width: 22px; text-align: center; }
            .col-nombre { width: 140px; font-size: 7pt; }
            .col-nota { width: 55px; text-align: center; }
            .col-obs { width: 130px; font-size: 6.5pt; }
            .col-crit { width: 42px; text-align: center; font-size: 6pt; }
            .footer { margin-top: 8px; text-align: center; font-size: 6.5pt; color: #777; border-top: 1px solid #ddd; padding-top: 5px; }
            .badge { display: inline-block; padding: 1px 3px; border-radius: 2px; font-size: 6pt; font-weight: bold; }
            .badge-siempre { background: #d4edda; color: #155724; }
            .badge-frecuentemente { background: #fff3cd; color: #856404; }
            .badge-a_veces { background: #ffe0b2; color: #e65100; }
            .badge-nunca { background: #f8d7da; color: #721c24; }
            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body>
        <div class="header">
            <h1>CPEM 32 - Sistema Integral de Acreditacion</h1>
            <h2>Comprobante de Carga de Calificaciones</h2>
        </div>
        
        <div class="info">
            <div class="info-box">
                <strong>Turno:</strong> ${turno}<br>
                <strong>Curso:</strong> ${curso}<br>
                <strong>Materia:</strong> ${materia}
            </div>
            <div class="info-box">
                <strong>Periodo:</strong> ${nombrePeriodoMostrar}<br>
                <strong>Docente:</strong> ${sesionActual ? sesionActual.correo : ''}<br>
                <strong>Fecha:</strong> ${fechaStr} ${horaStr}
            </div>
        </div>
        
        ${mensajeTermino ? `<div class="termino-box ${mensajeTermino.includes('Fuera') ? 'termino-fuera' : mensajeTermino.includes('Falta') ? 'termino-incompleto' : 'termino-ok'}">
            ${mensajeTermino}
        </div>` : ''}
        
        <table>
            <thead>
                <tr>
                    <th class="col-n">N°</th>
                    <th class="col-nombre">Apellido y Nombre</th>
                    ${anoCurso >= 5 || esBimestre ? `
                        <th class="col-nota">Nota</th>
                        <th class="col-obs">Observaciones</th>
                        <th class="col-crit">Interp.</th>
                        <th class="col-crit">Relac.</th>
                        <th class="col-crit">Aplica</th>
                        <th class="col-crit">Partic.</th>
                        <th class="col-crit">Auton.</th>
                        <th class="col-crit">Real. TP</th>
                        <th class="col-crit">Cump. AEC</th>
                    ` : `
                        <th class="col-nota">Nota</th>
                        <th class="col-obs">Observaciones</th>
                    `}
                </tr>
            </thead>
            <tbody>
    `;
    
    alumnos.forEach((alumno, index) => {
        const d = datosM[alumno.dni] || {};
        const nota = d.nota || '-';
        const obs = (anoCurso >= 5 || esBimestre)
            ? (d.observacion || d.sel_1 || '-')
            : [d.sel_1, d.sel_2, d.sel_3, d.observacion].filter(o => o).map(o => `* ${o}`).join('<br>') || '-';
        
        html += `<tr>
            <td class="col-n">${index + 1}</td>
            <td class="col-nombre">${alumno.nombre}</td>
        `;
        
        if (anoCurso >= 5 || esBimestre) {
            const badgeClass = (val) => {
                const v = (val || '-').toString().toLowerCase().trim();
                if (v === 'siempre') return 'badge-siempre';
                if (v === 'frecuentemente') return 'badge-frecuentemente';
                if (v === 'a veces') return 'badge-a_veces';
                if (v === 'nunca') return 'badge-nunca';
                return '';
            };
            const fmt = (val) => {
                const v = (val || '-').toString().trim();
                const cls = badgeClass(v);
                return cls ? `<span class="badge ${cls}">${v}</span>` : v;
            };
            
            html += `
                <td class="col-nota">${nota}</td>
                <td class="col-obs">${obs}</td>
                <td class="col-crit">${fmt(d['Interpreta'])}</td>
                <td class="col-crit">${fmt(d['Relaciona'])}</td>
                <td class="col-crit">${fmt(d['Aplica'])}</td>
                <td class="col-crit">${fmt(d['Participación'])}</td>
                <td class="col-crit">${fmt(d['Autonomía'])}</td>
                <td class="col-crit">${fmt(d['Realización de TP'])}</td>
                <td class="col-crit">${fmt(d['Cumplimiento AEC'])}</td>
            `;
        } else {
            html += `
                <td class="col-nota">${nota}</td>
                <td class="col-obs">${obs}</td>
            `;
        }
        
        html += `</tr>`;
    });
    
    html += `
            </tbody>
        </table>
        
        <div class="footer">
            Comprobante generado por SIA CPEM 32 | ${fechaStr} ${horaStr}<br>
            Este documento es una constancia de las calificaciones cargadas en el sistema.
        </div>
        
        <div class="no-print" style="text-align:center; margin-top:20px;">
            <button onclick="window.print()" style="padding:10px 30px; font-size:12pt; cursor:pointer;">
                <i class="fas fa-print"></i> Imprimir / Guardar como PDF
            </button>
            <p style="font-size:9pt; color:#777;">Para guardar como PDF, seleccione "Guardar como PDF" en el destino de la impresora.</p>
        </div>
    </body>
    </html>`;
    
    let iframe = document.getElementById('iframe-comprobante');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'iframe-comprobante';
        iframe.style.position = 'fixed';
        iframe.style.top = '-9999px';
        iframe.style.left = '-9999px';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        document.body.appendChild(iframe);
    }

    try {
        iframe.contentDocument.open();
        iframe.contentDocument.write(html);
        iframe.contentDocument.close();

        setTimeout(() => {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
        }, 500);

        guardarComprobanteEnDrive(html, turno, curso, materia, periodo);

    } catch (err) {
        console.error('Error al generar PDF:', err);
        alert('Error al generar el comprobante: ' + err.message);
    }
}

async function guardarComprobanteEnDrive(html, turno, curso, materia, periodo) {
    try {
        const iframeCaptura = document.createElement('iframe');
        iframeCaptura.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:1200px;height:900px;border:none;visibility:hidden;';
        document.body.appendChild(iframeCaptura);

        await new Promise(resolve => {
            iframeCaptura.onload = resolve;
            iframeCaptura.contentDocument.open();
            iframeCaptura.contentDocument.write(html);
            iframeCaptura.contentDocument.close();
        });

        await new Promise(r => setTimeout(r, 600));

        const canvas = await html2canvas(iframeCaptura.contentDocument.body, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#ffffff',
            width: 1200,
            windowWidth: 1200
        });

        document.body.removeChild(iframeCaptura);

        const pngBase64 = canvas.toDataURL('image/png').split(',')[1];
        const fechaHora = new Date().toISOString();

        const params = new URLSearchParams({
            action:   'guardarComprobanteDrive',
            correo:   sesionActual.correo,
            curso,
            turno,
            materia,
            periodo,
            fechaHora,
            tipo:     'png'
        });

        const resp = await fetch(URL_WEB_APP + '?' + params.toString(), {
            method:   'POST',
            mode:     'cors',
            redirect: 'follow',
            headers:  { 'Content-Type': 'text/plain;charset=utf-8' },
            body:     pngBase64
        });

        const resultado = await resp.json();

        if (resultado.success) {
            console.log('[Drive] Comprobante guardado como imagen:', resultado.nombre);
            mostrarToastDrive('Copia guardada en Google Drive');
        } else {
            console.warn('[Drive] No se pudo guardar:', resultado.error);
            mostrarToastDrive('No se pudo guardar en Drive: ' + resultado.error);
        }
    } catch (err) {
        console.warn('[Drive] Error:', err.message);
        mostrarToastDrive('Error al guardar en Drive');
    }
}

function mostrarToastDrive(mensaje) {
    let toast = document.getElementById('toast-drive');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-drive';
        toast.style.cssText = [
            'position:fixed', 'bottom:24px', 'right:24px', 'z-index:9999',
            'background:#28a745', 'color:white', 'padding:12px 20px',
            'border-radius:8px', 'font-size:14px', 'font-weight:bold',
            'box-shadow:0 4px 12px rgba(0,0,0,0.25)', 'transition:opacity 0.5s',
            'opacity:0', 'pointer-events:none'
        ].join(';');
        document.body.appendChild(toast);
    }
    toast.textContent = mensaje;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 4000);
}

// ============================================================
// LIBROS ESCOLARES PDF
// ============================================================

function obtenerNotasAlumnoParaLibro(alumno, curso, materias, periodo) {
    const resultado = {};
    const turno = Object.keys(baseDeDatosAlumnos).find(t => baseDeDatosAlumnos[t] && baseDeDatosAlumnos[t][curso]);
    if (!turno) return resultado;

    materias.forEach(materia => {
        const llaveID = `${turno}-${curso}-${materia}-${periodo}`;
        const datosM = memoriaGlobal[llaveID] || {};
        const d = datosM[alumno.dni] || {};
        resultado[materia] = {
            nota: d.nota || '',
            interpreta: d['Interpreta'] || '-',
            relaciona: d['Relaciona'] || '-',
            aplica: d['Aplica'] || '-',
            participacion: d['Participacion'] || '-',
            autonomia: d['Autonomia'] || '-',
            realizacion_tp: d['Realizacion de TP'] || '-',
            cumplimiento_aec: d['Cumplimiento AEC'] || '-',
            observacion: d.observacion || d.sel_1 || ''
        };
    });
    return resultado;
}

function generarHTMLLibroCurso(curso, usuarios, periodo = '1_Bimestre', anio = '2026') {
    const alumnos = [];
    Object.keys(baseDeDatosAlumnos).forEach(turno => {
        if (baseDeDatosAlumnos[turno][curso]) {
            baseDeDatosAlumnos[turno][curso].forEach(a => alumnos.push({...a, turno}));
        }
    });
    alumnos.sort((a, b) => a.nombre.localeCompare(b.nombre));

    const materias = materiasPorCursoLibro[curso] || [];
    const anoCurso = parseInt(curso.charAt(0));
    const esArea = anoCurso <= 3;

    let nombrePeriodo = periodo;
    if (periodo === "1") nombrePeriodo = "1er Cuatrimestre";
    else if (periodo === "2") nombrePeriodo = "2do Cuatrimestre";
    else if (periodo === "1_Bimestre") nombrePeriodo = "1er Bimestre";
    else if (periodo === "2_Bimestre") nombrePeriodo = "2do Bimestre";

    const ahora = new Date();
    const fechaStr = ahora.toLocaleDateString('es-AR');

    let html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <title>Libro Escolar - ${curso}</title>
        <style>
            @page { size: A4 landscape; margin: 10mm; }
            * { box-sizing: border-box; margin: 0; padding: 0; }
            body { font-family: Arial, sans-serif; font-size: 8pt; color: #333; padding: 15px; }
            .page-break { page-break-after: always; }
            .header-libro {
                text-align: center;
                background: linear-gradient(135deg, #c8a2c8 0%, #d4a5d4 100%);
                color: #4a154b;
                padding: 12px;
                border-radius: 8px;
                margin-bottom: 10px;
                border: 2px solid #b080b0;
            }
            .header-libro h1 { font-size: 14pt; margin: 0; }
            .header-libro h2 { font-size: 11pt; margin: 4px 0; }
            .header-libro .datos-alumno {
                display: flex;
                justify-content: space-around;
                margin-top: 8px;
                font-size: 9pt;
                font-weight: bold;
            }
            table.libro-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 7.5pt;
                margin-top: 8px;
            }
            table.libro-table th {
                background: #e8d5e8;
                color: #4a154b;
                padding: 5px 3px;
                text-align: center;
                font-weight: bold;
                border: 1px solid #b080b0;
                font-size: 7pt;
            }
            table.libro-table td {
                padding: 4px 3px;
                border: 1px solid #ccc;
                text-align: center;
                vertical-align: middle;
            }
            table.libro-table td.area-cell {
                text-align: left;
                font-weight: bold;
                background: #f5f0f5;
                font-size: 7pt;
            }
            table.libro-table td.materia-cell {
                text-align: left;
                font-size: 7pt;
            }
            table.libro-table td.docente-cell {
                text-align: left;
                font-size: 6.5pt;
                color: #555;
            }
            .nota-final { font-weight: bold; font-size: 8pt; }
            .obs-cell { text-align: left; font-size: 6.5pt; max-width: 120px; }
            .firma-section {
                margin-top: 15px;
                display: flex;
                justify-content: space-between;
                font-size: 8pt;
            }
            .firma-box {
                text-align: center;
                width: 45%;
            }
            .firma-line {
                border-top: 1px solid #333;
                margin-top: 25px;
                padding-top: 5px;
            }
            @media print {
                body { padding: 0; }
                .no-print { display: none; }
            }
        </style>
    </head>
    <body>`;

    alumnos.forEach((alumno, idx) => {
        const notas = obtenerNotasAlumnoParaLibro(alumno, curso, materias, periodo);

        html += `
        <div class="header-libro">
            <h1>CPEM N° 32</h1>
            <h2>Informe ${nombrePeriodo} - ${anio}</h2>
            <div class="datos-alumno">
                <span>Alumno/a: <u>${alumno.nombre}</u></span>
                <span>Curso: <u>${curso}</u></span>
                <span>Preceptor/a: ____________________</span>
            </div>
        </div>

        <table class="libro-table">
            <thead>
                <tr>
                    <th style="width:18%">${esArea ? 'ÁREA' : 'ESPACIO CURRICULAR'}</th>
                    ${!esArea ? '<th style="width:14%">Docente</th>' : ''}
                    <th style="width:7%">Interp.</th>
                    <th style="width:7%">Relac.</th>
                    <th style="width:7%">Aplica</th>
                    <th style="width:7%">Partic.</th>
                    <th style="width:7%">Auton.</th>
                    <th style="width:9%">Realiz. TP</th>
                    <th style="width:9%">Cump. AEC</th>
                    <th style="width:8%">Nota Final</th>
                    <th style="width:20%">Observaciones</th>
                </tr>
            </thead>
            <tbody>`;

        if (esArea) {
            const areasUnicas = [...new Set(materias.map(m => areasPorMateria[m] || m))];
            areasUnicas.forEach(area => {
                const materiasDelArea = materias.filter(m => (areasPorMateria[m] || m) === area);
                const primeraMateria = materiasDelArea[0];
                const d = notas[primeraMateria] || {};
                const docente = obtenerDocentePorMateria(primeraMateria, usuarios);

                html += `
                <tr>
                    <td class="area-cell">${area}<br><span style="font-weight:normal;font-size:6.5pt;color:#666;">${docente}</span></td>
                    <td>${d.interpreta || '-'}</td>
                    <td>${d.relaciona || '-'}</td>
                    <td>${d.aplica || '-'}</td>
                    <td>${d.participacion || '-'}</td>
                    <td>${d.autonomia || '-'}</td>
                    <td>${d.realizacion_tp || '-'}</td>
                    <td>${d.cumplimiento_aec || '-'}</td>
                    <td class="nota-final">${d.nota || ''}</td>
                    <td class="obs-cell">${d.observacion || ''}</td>
                </tr>`;
            });
        } else {
            materias.forEach(materia => {
                const d = notas[materia] || {};
                const docente = obtenerDocentePorMateria(materia, usuarios);

                html += `
                <tr>
                    <td class="materia-cell">${materia}</td>
                    <td class="docente-cell">${docente}</td>
                    <td>${d.interpreta || '-'}</td>
                    <td>${d.relaciona || '-'}</td>
                    <td>${d.aplica || '-'}</td>
                    <td>${d.participacion || '-'}</td>
                    <td>${d.autonomia || '-'}</td>
                    <td>${d.realizacion_tp || '-'}</td>
                    <td>${d.cumplimiento_aec || '-'}</td>
                    <td class="nota-final">${d.nota || ''}</td>
                    <td class="obs-cell">${d.observacion || ''}</td>
                </tr>`;
            });
        }

        html += `
            </tbody>
        </table>

        <div class="firma-section">
            <div class="firma-box">
                <div class="firma-line">Firma de la Familia</div>
            </div>
            <div class="firma-box">
                <div class="firma-line">Firma del Equipo de Gobierno</div>
            </div>
        </div>

        ${idx < alumnos.length - 1 ? '<div class="page-break"></div>' : ''}`;
    });

    html += `
        <div class="no-print" style="text-align:center; margin-top:20px;">
            <button onclick="window.print()" style="padding:10px 30px; font-size:12pt; cursor:pointer;">
                <i class="fas fa-print"></i> Imprimir / Guardar como PDF
            </button>
        </div>
    </body>
    </html>`;

    return html;
}

function imprimirHTMLenIframe(html) {
    let iframe = document.getElementById('iframe-comprobante');
    if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'iframe-comprobante';
        iframe.style.position = 'fixed';
        iframe.style.top = '-9999px';
        iframe.style.left = '-9999px';
        iframe.style.width = '1px';
        iframe.style.height = '1px';
        document.body.appendChild(iframe);
    }
    try {
        iframe.contentDocument.open();
        iframe.contentDocument.write(html);
        iframe.contentDocument.close();
        setTimeout(() => {
            iframe.contentWindow.focus();
            iframe.contentWindow.print();
        }, 500);
    } catch (err) {
        console.error('Error al generar PDF:', err);
        alert('Error al generar el PDF: ' + err.message);
    }
}

async function descargarLibroPorCurso() {
    const curso = document.getElementById('select-curso-libro').value;
    const periodo = document.getElementById('select-periodo-libro').value;
    const turno = document.getElementById('select-turno-libro').value;

    if (!curso || !periodo) {
        alert('Seleccione curso y período');
        return;
    }

    const turnos = turno ? [turno] : ['MAÑANA', 'TARDE'];
    let todosAlumnos = [];
    let todasNotas = {};
    let todosDocentes = {};
    let todosRecursantes = {};
    let preceptor = '';

    const resultados = await Promise.all(turnos.map(async t => {
        try {
            const url = `${URL_WEB_APP}?action=obtenerInformeCurso`
                + `&correo=${encodeURIComponent(sesionActual.correo)}`
                + `&curso=${encodeURIComponent(curso)}`
                + `&turno=${encodeURIComponent(t)}`
                + `&periodo=${encodeURIComponent(periodo)}`;
            const resp = await fetch(url, { method: 'GET', mode: 'cors' });
            return await resp.json();
        } catch (e) {
            console.warn('Error cargando datos para turno', t, e);
            return null;
        }
    }));

    resultados.forEach(data => {
        if (!data || !data.success) return;
        if (!preceptor && data.preceptor) preceptor = data.preceptor;
        if (data.alumnos) {
            data.alumnos.forEach(a => {
                if (!todosAlumnos.some(x => x.dni === a.dni)) {
                    todosAlumnos.push(a);
                }
            });
        }
        if (data.notasMap) Object.assign(todasNotas, data.notasMap);
        if (data.docenteMap) Object.assign(todosDocentes, data.docenteMap);
        if (data.recursantesMap) Object.assign(todosRecursantes, data.recursantesMap);
    });

    if (!todosAlumnos.length) {
        alert('No se encontraron alumnos para este curso');
        return;
    }

    const es5 = anioDesde(curso) >= 5;
    const esBimestre = periodo.includes('Bimestre');

    const paginasHTML = todosAlumnos.map(alumno => {
        const alumnoKey = Object.keys(todasNotas).find(k => normalizarNombre(k) === normalizarNombre(alumno.nombre)) || alumno.nombre;
        const notas = todasNotas[alumnoKey] || {};
        const usarFormato45 = es5 || (anioDesde(curso) >= 1 && anioDesde(curso) <= 3 && esBimestre);
        const materiasRec = todosRecursantes?.[alumno.dni];
        const materiasOverride = materiasRec?.length ? materiasRec : undefined;
        return usarFormato45
            ? paginaInforme45(alumno, curso, '', periodo, preceptor, notas, todosDocentes, materiasOverride)
            : paginaInforme13(alumno, curso, '', periodo, preceptor, notas, todosDocentes, materiasOverride);
    }).join('\n');

    abrirInformeEnPestana(paginasHTML);
}

async function descargarLibroTodosCursos() {
    const periodo = document.getElementById('select-periodo-libro').value;
    const turno = document.getElementById('select-turno-libro').value;

    if (!periodo) {
        alert('Seleccione un período');
        return;
    }

    const spinner = document.getElementById('spinner-libro');
    if (spinner) {
        spinner.style.display = 'inline';
        spinner.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generando informes...';
    }

    const cursos = [];
    const select = document.getElementById('select-curso-libro');
    for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].value) cursos.push(select.options[i].value);
    }

    const turnos = turno ? [turno] : ['MAÑANA', 'TARDE'];
    let todasPaginas = [];
    const total = cursos.length;

    for (let ci = 0; ci < cursos.length; ci++) {
        const curso = cursos[ci];
        if (spinner) spinner.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Procesando ${ci+1}/${total}: ${curso}...`;

        let todosAlumnos = [];
        let todasNotas = {};
        let todosDocentes = {};
        let todosRecursantes = {};
        let preceptor = '';

        const resultados = await Promise.all(turnos.map(async t => {
            try {
                const url = `${URL_WEB_APP}?action=obtenerInformeCurso`
                    + `&correo=${encodeURIComponent(sesionActual.correo)}`
                    + `&curso=${encodeURIComponent(curso)}`
                    + `&turno=${encodeURIComponent(t)}`
                    + `&periodo=${encodeURIComponent(periodo)}`;
                const resp = await fetch(url, { method: 'GET', mode: 'cors' });
                return await resp.json();
            } catch (e) {
                console.warn('Error cargando datos para', curso, t, e);
                return null;
            }
        }));

        resultados.forEach(data => {
            if (!data || !data.success) return;
            if (!preceptor && data.preceptor) preceptor = data.preceptor;
            if (data.alumnos) {
                data.alumnos.forEach(a => {
                    if (!todosAlumnos.some(x => x.dni === a.dni)) {
                        todosAlumnos.push(a);
                    }
                });
            }
            if (data.notasMap) Object.assign(todasNotas, data.notasMap);
            if (data.docenteMap) Object.assign(todosDocentes, data.docenteMap);
            if (data.recursantesMap) Object.assign(todosRecursantes, data.recursantesMap);
        });

        if (!todosAlumnos.length) continue;

        const es5 = anioDesde(curso) >= 5;
        const esBimestre = periodo.includes('Bimestre');

        todosAlumnos.forEach(alumno => {
            const alumnoKey = Object.keys(todasNotas).find(k => normalizarNombre(k) === normalizarNombre(alumno.nombre)) || alumno.nombre;
            const notas = todasNotas[alumnoKey] || {};
            const usarFormato45 = es5 || (anioDesde(curso) >= 1 && anioDesde(curso) <= 3 && esBimestre);
            const materiasRec = todosRecursantes?.[alumno.dni];
            const materiasOverride = materiasRec?.length ? materiasRec : undefined;
            const pagina = usarFormato45
                ? paginaInforme45(alumno, curso, '', periodo, preceptor, notas, todosDocentes, materiasOverride)
                : paginaInforme13(alumno, curso, '', periodo, preceptor, notas, todosDocentes, materiasOverride);
            todasPaginas.push(pagina);
        });
    }

    if (spinner) spinner.style.display = 'none';

    if (!todasPaginas.length) {
        alert('No se encontraron alumnos en ningún curso');
        return;
    }

    abrirInformeEnPestana(todasPaginas.join('\n'));
}

const MATERIAS_BIMESTRE_1_3 = {
  "1 A": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
  "1 B": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
  "1 C": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
  "1 D": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
  "1 E": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
  "2 A": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","TEATRO","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
  "2 B": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","DANZA","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
  "2 C": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","DANZA","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
  "2 D": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","FILOSOFIA","LENGUA","LITERATURA","LENGUAS OTRAS","DANZA","MUSICA","ARTES VISUALES","BIOLOGIA","FISICO QUIMICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","EDUCACION SEXUAL INTEGRAL","INTEGRACION TECNOLOGICA"],
  "3 A": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","LENGUA","LITERATURA","LENGUAS OTRAS","LENGUAS PREEXISTENTES","ARTES VISUALES","BIOLOGIA","QUIMICA","FISICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","INTEGRACION TECNOLOGICA","COMUNICACION Y MEDIOS","INVESTIGACION DE LAS ORIENTACIONES"],
  "3 B": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","LENGUA","LITERATURA","LENGUAS OTRAS","LENGUAS PREEXISTENTES","ARTES VISUALES","BIOLOGIA","QUIMICA","FISICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","INTEGRACION TECNOLOGICA","COMUNICACION Y MEDIOS","INVESTIGACION DE LAS ORIENTACIONES"],
  "3 C": ["HISTORIA","GEOGRAFIA","ECONOMIA","CONSTRUCCION DE CIUDADANIAS","LENGUA","LITERATURA","LENGUAS OTRAS","LENGUAS PREEXISTENTES","ARTES VISUALES","BIOLOGIA","QUIMICA","FISICA","MATEMATICA","INFORMATICA","EDUCACION FISICA INTEGRAL","INTEGRACION TECNOLOGICA","COMUNICACION Y MEDIOS","INVESTIGACION DE LAS ORIENTACIONES"]
};

function paginaInforme45(alumno, curso, turno, periodo, preceptor, notas, docenteMap, materiasOverride) {
  const anio = anioDesde(curso);
  let materias;
  if (materiasOverride) {
    materias = materiasOverride;
  } else if (anio >= 4) {
    materias = MATERIAS_4_5[curso] || [];
  } else {
    materias = materiasPorCurso[curso] || [];
  }
  let filas = '';

  materias.forEach(mat => {
      const key = Object.keys(notas).find(k => k.toUpperCase() === mat.toUpperCase() || normalizarNombre(k) === normalizarNombre(mat)) || mat;
      const n   = notas[key] || {};
      const docKey = Object.keys(docenteMap).find(k => k.toUpperCase() === mat.toUpperCase() || normalizarNombre(k) === normalizarNombre(mat)) || mat;
      const doc = docenteMap[docKey] || 'Sin Docentes';
      const nota = (n.nota || '').toString().trim();
      filas += `<tr>
        <td class="td-mat">${mat}</td>
        <td class="td-docente">${doc}</td>
        ${valorCelda(n.interpreta)}
        ${valorCelda(n.relaciona)}
        ${valorCelda(n.aplica)}
        ${valorCelda(n.participacion)}
        ${valorCelda(n.autonomia)}
        ${valorCelda(n.realizacion_tp)}
        ${valorCelda(n.cumplimiento_aec)}
        <td class="td-nota" style="width:44px;">${nota}</td>
        <td class="td-obs">${[n.obs1, n.obs4 || n.observacion].filter(o => o).map(o => `* ${o}`).join('<br>') || ''}</td>
      </tr>`;
    });
  return `<div class="pagina">
    <div class="marco-contenido">
    ${cabeceraHTML(alumno, curso, preceptor, periodo)}
    <table class="tabla-principal">
      <thead>
        <tr>
          <th class="th-main" rowspan="2" style="width:185px;">Espacio curricular</th>
          <th class="th-main" rowspan="2" style="width:110px;">Docentes</th>
          <th class="th-main" colspan="3">Apropiaci\u00F3n de conocimientos y saberes</th>
          <th class="th-main" colspan="3">Responsabilidad en su proceso de aprendizaje</th>
          <th class="th-main" rowspan="2" style="width:62px;">Cumplimiento de los AEC</th>
          <th class="th-main" rowspan="2" style="width:44px;">Nota final</th>
          <th class="th-main" rowspan="2">Observaciones</th>
        </tr>
        <tr>
          <th class="th-sub" style="width:50px;">Interpreta</th>
          <th class="th-sub" style="width:50px;">Relaciona</th>
          <th class="th-sub" style="width:44px;">Aplica</th>
          <th class="th-sub" style="width:60px;">Participaci\u00F3n</th>
          <th class="th-sub" style="width:52px;">Autonom\u00EDa</th>
          <th class="th-sub" style="width:68px;">Realizaci\u00F3n de TP/Actividades</th>
        </tr>
      </thead>
      <tbody>${filas}</tbody>
    </table>
    </div>
    <div class="firmas">
      <div class="firma-item">Firma de la familia:</div>
      <div class="firma-item">Firma del Equipo de Gobierno y Conducci\u00F3n Escolar:</div>
    </div>
  </div>`;
}
