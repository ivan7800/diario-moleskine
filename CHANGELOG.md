# Changelog — Diario · Moleskine

Todos los cambios notables de este proyecto se documentan aquí.
Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/).

---

## [2.4.0] — 2026-06-21

### Añadido
- Botón visible de **Modo oscuro** en la barra lateral.
- Botón rápido 🌙/☀️ en la barra móvil.
- Estado ON/OFF del modo oscuro con `aria-pressed` para accesibilidad.

### Mejorado
- El tema “Noche” se muestra ahora como **Oscuro**, más claro para el usuario final.
- `theme-color` de la PWA cambia automáticamente entre claro y oscuro.
- Service Worker actualizado a caché `v8`.

## [2.3.0] — 2026-06-21

### Corregido
- Bloqueado un vector XSS: el contenido del editor, importaciones JSON, vista previa, recuerdos y exportación HTML pasan por sanitización centralizada antes de guardarse o renderizarse.
- Corregida la exportación de entradas cifradas: Markdown/TXT/HTML las incluyen cuando la sesión está desbloqueada; si no, avisan antes de omitirlas.
- Corregido el backup JSON de entradas cifradas: ahora conserva metadatos de PIN/sal necesarios para restaurar el backup en otra instalación.
- Corregida la experiencia móvil: barra superior, apertura de menú, panel de entradas, overlay de cierre y mejor editor táctil.
- Corregido el shortcut PWA `action=new`: ahora crea una entrada nueva tras abrir/desbloquear la app.
- Evitada la creación automática de entradas de ejemplo en un diario personal nuevo.

### Seguridad
- CSP reforzada con `object-src 'none'`, `base-uri 'none'`, `form-action 'none'`, `frame-ancestors 'none'`, `media-src` y `worker-src`.
- Importación JSON normalizada: IDs, títulos, fechas, etiquetas, historial y contenido se validan/sanean antes de persistir.
- Bloqueo de URLs `javascript:`, atributos `on*`, scripts embebidos, SVG/MathML y recursos remotos no permitidos dentro de las entradas.

### GitHub
- Añadidos `LICENSE`, `.gitignore` y este informe de auditoría.
- Service Worker actualizado a caché `v7`.

## [2.0.0] — 2026

### Añadido

#### Imágenes locales
- Inserción de imágenes por **arrastrar y soltar** directamente en el editor.
- Inserción por **pegar desde el portapapeles** (Ctrl+V con imagen copiada).
- Botón de imagen en la barra de herramientas con selector de archivo.
- **Compresión automática local**: máximo 1200px, calidad JPEG 75%. Sin servidores, sin URLs externas, sin dependencias.

#### Notas de voz
- Grabación de audio con un clic desde la barra de herramientas.
- Indicador visual animado durante la grabación con contador de tiempo.
- Player de audio embebido directamente en la entrada.
- Todo local: el audio se almacena como Data URL en IndexedDB.

#### Memoria Personal — "Hoy hace N años"
- Banner sutil en la lista de entradas cuando hay entradas del mismo día en años anteriores.
- Modal de vista de memoria en modo lectura sin abandonar la entrada actual.
- Botón para navegar directamente a la entrada original.

#### Plantillas por tipo de entrada
- Al crear una entrada de tipo **Gratitud**, **Sueño**, **Reflexión** o **Lista**, el editor se pre-rellena con una plantilla HTML estructurada.
- Las plantillas se aplican solo si el editor está vacío: nunca sobreescriben contenido existente.

#### Historial de versiones
- Cada guardado preserva automáticamente la versión anterior del contenido.
- Se conservan las últimas **10 versiones** por entrada (límite de 100KB por historial).
- Botón en la barra de herramientas para ver el historial con fechas y contador de palabras.
- Restauración de cualquier versión con un clic.

#### Autocompletado de etiquetas
- Al escribir en el campo de etiquetas, aparece un desplegable con etiquetas existentes que coinciden con el texto escrito.
- Selección con clic o teclado.

#### Empty state contextual
- El estado vacío del editor cambia según la hora del día: mensaje de mañana, tarde o noche.
- Botón de nueva entrada integrado en el estado vacío.

### Mejorado
- **Autosave reducido a 2 segundos** (antes 10s). Menor riesgo de pérdida de datos.
- Pantalla de bienvenida conservada para primera ejecución, sin crear datos de muestra automáticamente.
- **Borrado con deshacer**: al eliminar una entrada hay 8 segundos para cancelar la operación con un botón "Deshacer" en el toast.
- **Botón de cifrado inteligente**: si no hay PIN configurado, redirige directamente al campo de PIN en Configuración en lugar de mostrar un error.
- **Manifest PWA**: añadido `shortcuts` para acceso rápido a "Nueva entrada" desde el icono de la app en Android/iOS.
- **Service Worker**: versión de caché actualizada para forzar recarga en usuarios con v1 instalada.

### Corregido
- Bug: las entradas de muestra reaparecían si el usuario borraba todas sus entradas. Solucionado con flag `sampleLoaded` en settings.
- Bug: función `tagKeydown` duplicada eliminada (conflicto entre versión original y nueva con autocompletado).
- Eliminada referencia muerta `_origShowMainApp`.

---

## [1.0.0] — 2026

### Añadido
- **Auto-lock por inactividad**: la sesión se bloquea automáticamente tras 10 minutos sin actividad cuando hay PIN activo.
- **Botón "Bloquear ahora"** en la barra lateral (visible cuando hay sesión activa con PIN).
- **Protección de fuerza bruta en el PIN**: bloqueo progresivo (30s → 5min → 15min) tras intentos fallidos.
- **Aviso antes de activar el PIN**: diálogo con confirmación explícita de pérdida irreversible al olvidar el PIN.
- **Aviso al exportar con entradas cifradas**: confirmación cuando se exporta sin desbloquear y existen entradas privadas.
- **Recordatorio de backup**: aviso automático si pasan más de 7 días sin exportar.
- **Sanitizador de contenido pegado**: el HTML pegado desde el portapapeles se filtra para eliminar scripts y atributos peligrosos.
- **Validación fuerte de importación**: el JSON importado se verifica en estructura y formato antes de procesar.
- **CSP (Content Security Policy)**: cabecera de seguridad para prevenir XSS.
- `CHANGELOG.md` y `SECURITY.md` añadidos al repositorio.

### Cambiado
- **Tipografía del sistema**: eliminadas fuentes de Google. Ahora se usan Palatino/Georgia/Courier del sistema operativo. Cero peticiones externas.
- **Service Worker corregido**: errores de caché ya no se silencian; `skipWaiting()` controlado por mensaje del cliente.
- **`manifest.json`**: `orientation` cambiado a `any` para mejor experiencia en tablet/desktop.
- **`index.html`**: redirección cambiada de `meta refresh` a `window.location.replace()`.

### Corregido
- Bug: exportación silenciosa de entradas cifradas sin avisar al usuario.
- Bug: paste de HTML externo sin sanitizar podía introducir atributos peligrosos.
- Bug: sin límite de intentos de PIN permitía fuerza bruta local.
- Bug: `catch(() => {})` en el SW silenciaba errores de precaché.

---

## [0.9.0] — versión inicial (prerelease)

- Lanzamiento inicial: editor rico, temas, PIN/cifrado AES-256, estadísticas, heatmap, exportación múltiple, PWA, service worker.
