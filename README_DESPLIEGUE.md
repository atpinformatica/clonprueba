# README - Despliegue SIA CPEM 32 con Autenticacion

## Pasos de Despliegue

### 1. Actualizar el Google Apps Script

1. Abrir el proyecto de Apps Script vinculado a la spreadsheet `1rlSHrgT_e_0lPjzPXnD-RzMPj70C7CT_Ch1Lf7J__6Q`.
2. **Reemplazar** todo el contenido del archivo `Codigo.gs` con el contenido de `AppsScript_actualizado.gs`.
3. Guardar el proyecto (Ctrl+S).

### 2. Inicializar la Hoja de Docentes

1. En el editor de Apps Script, seleccionar la funcion `inicializarHojaDocentes` en el menu desplegable de funciones.
2. Hacer clic en **Ejecutar**.
3. Aceptar permisos si se solicitan.
4. Verificar que se creo la hoja "Docentes" con el admin principal:
   - Correo: `/admin32/@cpem32.edu.ar`
   - Password hash (SHA-256 de "admin32")
   - Rol: admin

### 3. Re-desplegar la Web App

1. En el editor de Apps Script, ir a **Implementar > Administrar implementaciones**.
2. Editar la implementacion existente o crear una nueva:
   - Ejecutar como: **Yo** (tu cuenta)
   - Quien tiene acceso: **Cualquier persona**
3. Hacer clic en **Implementar**.
4. **Copiar la nueva URL** si cambio.

### 4. Actualizar la URL en el Frontend (si cambio)

Si la URL de la webapp cambio, editar `script.js` linea 9:
```javascript
const URL_WEB_APP = 'NUEVA_URL_AQUI';
```

### 5. Subir los archivos Frontend

Subir los archivos actualizados al hosting donde se sirve la app:
- `index.html`
- `script.js`
- `style.css`

---

## Credenciales Iniciales

| Usuario | Correo | Password | Rol |
|---------|--------|----------|-----|
| Admin Principal | `/admin32/@cpem32.edu.ar` | `admin32` | admin |

**Importante:** El admin principal NO puede ser eliminado. Si puede cambiar su password.

---

## Crear Usuarios

1. Iniciar sesion con el admin principal.
2. Ir a la pestana **Gestion Usuarios**.
3. Clic en **Agregar Usuario**.
4. Completar: correo, contrasena, rol (docente/admin), materias permitidas.
5. Confirmar.

---

## Estructura de la Hoja "Docentes"

| Columna | Contenido |
|---------|-----------|
| A | correo |
| B | password_hash (SHA-256) |
| C | rol (admin/docente) |
| D | materias_permitidas (JSON array) |
| E | activo (si/no) |
| F | fecha_alta (ISO) |

---

## Funcionamiento de Roles

### Docente
- Ve la pestana de Calificaciones.
- Solo puede editar materias asignadas a el.
- Las demas materias se muestran en modo solo lectura (inputs deshabilitados, boton guardar oculto).
- Si tiene materias_permitidas vacio `[]`, puede editar todas (para retrocompatibilidad).

### Administrador
- Ve 2 pestanas: Calificaciones (solo lectura) y Gestion Usuarios.
- NO puede editar calificaciones.
- Puede crear, editar y eliminar usuarios (excepto admin principal).
- Puede cambiar passwords de cualquier usuario.
- Puede asignar/modificar materias de docentes.

---

## Notas Tecnicas

- Las llamadas POST usan Content-Type: text/plain para evitar CORS preflight con Apps Script — esto es por diseño, no es un bug.
- Las passwords se hashean con SHA-256 via `Utilities.computeDigest` en Apps Script.
- La sesion se almacena en `localStorage` del navegador (persiste al cerrar pestana).
- El boton "Cerrar Sesion" limpia localStorage y vuelve al login.
- El flujo original de notas (`guardarNotasEnHoja` + `repartirDatosIndividuales`) permanece intacto.
- Las llamadas POST de gestion de usuarios usan `mode: 'cors'` para obtener respuesta JSON.
- El login se realiza via POST (nunca GET) para evitar que las credenciales queden en logs de URL.
- Las llamadas POST de guardado de notas usan `mode: 'cors'` para validar la respuesta del servidor y detectar errores.
- **IMPORTANTE:** La webapp DEBE desplegarse con acceso "Cualquier persona" (`Anyone`) para que CORS funcione correctamente en todas las llamadas (login, guardar notas, gestion). Si se restringe el acceso, las solicitudes fallaran con error CORS.

---

## Troubleshooting

| Problema | Solucion |
|----------|----------|
| "Error de conexion con el servidor" | Verificar que la webapp este desplegada y la URL sea correcta |
| Login no funciona | Ejecutar `inicializarHojaDocentes()` para crear el admin |
| Admin principal no existe | Re-ejecutar `inicializarHojaDocentes()` |
| CORS error en gestion | Re-desplegar la webapp con acceso "Cualquier persona" |
| Docente puede editar todo | Verificar que tenga materias asignadas en la hoja Docentes |
