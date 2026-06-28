<div align="center">
  <img src="icon-512.png" width="96" height="96" alt="Diario Moleskine icon">
  <h1>Diario · Moleskine</h1>
  <p>Tu diario personal digital. Íntimo, privado y elegante.</p>

  <p>
    <img alt="Licencia MIT" src="https://img.shields.io/badge/licencia-MIT-8b3a2a?style=flat-square">
    <img alt="Sin frameworks" src="https://img.shields.io/badge/frameworks-ninguno-4CAF50?style=flat-square">
    <img alt="Un solo archivo" src="https://img.shields.io/badge/app-un_solo_archivo_HTML-b8870a?style=flat-square">
    <img alt="PWA" src="https://img.shields.io/badge/PWA-instalable_offline-5C6BC0?style=flat-square">
    <img alt="Cifrado AES-256" src="https://img.shields.io/badge/cifrado_opcional-AES--256--GCM-1D9E75?style=flat-square">
    <img alt="Versión" src="https://img.shields.io/badge/versión-2.4.1-555?style=flat-square">
  </p>
</div>

---

## ¿Qué es esto?

Una aplicación web completa de diario personal construida en **un solo archivo HTML**, sin frameworks, sin base de datos en la nube, sin tracking, sin peticiones externas. Todo lo que escribes se guarda únicamente en tu navegador mediante IndexedDB.

> **Filosofía:** Tus recuerdos son tuyos. Siempre.

---

## ✨ Características

### Escritura
- Editor de texto enriquecido con barra de herramientas completa
- Negrita, cursiva, subrayado, tachado, H1–H3, listas, numeradas, checklists, citas, código, separadores
- **Inserción de imágenes**: arrastra, pega o selecciona. Compresión automática local (max 1200px)
- **Notas de voz**: graba directamente en la entrada, player embebido, todo local
- Conversión automática de Markdown al pegar texto
- Vista de lectura en panel dividido
- Modo enfoque a pantalla completa, sin distracciones
- Contador de palabras, caracteres y tiempo de lectura en vivo
- Guardado automático robusto y sanitización de contenido antes de persistir

### Organización
- Etiquetas libres con **autocompletado** de etiquetas existentes
- 8 estados de ánimo con filtro y visualización
- **Plantillas por tipo**: Gratitud, Sueño, Reflexión, Lista se pre-rellenan con estructura apropiada
- Favoritos y archivo
- Búsqueda instantánea en títulos, contenido y etiquetas
- Menú contextual (clic derecho) en cada entrada

### Memoria personal
- **"Hoy hace N años"**: banner sutil cuando hay entradas del mismo día en años anteriores
- Modal de lectura de recuerdos sin perder el contexto actual
- Navegación directa a la entrada original

### Historial de versiones
- Cada guardado preserva automáticamente la versión anterior
- Últimas 10 versiones por entrada
- Restauración con un clic desde el botón de historial en la toolbar

### Privacidad y seguridad
- **Sin peticiones externas** — cero conexiones de red tras la primera carga
- **Cifrado AES-256-GCM opcional** para entradas marcadas como privadas
- La clave se deriva de tu PIN con **PBKDF2** (150.000 iteraciones, sal aleatoria)
- **Auto-lock** por inactividad (10 min) o al cerrar la pestaña
- **Protección contra fuerza bruta**: bloqueo progresivo tras intentos fallidos
- **Sanitización anti-XSS** del contenido pegado, importado, previsualizado y exportado
- Borrado con **deshacer**: 8 segundos de gracia antes de eliminar definitivamente
- Sin puerta trasera: si olvidas el PIN, los datos cifrados son irrecuperables

### Visualización
- Mapa de calor anual de actividad (estilo GitHub)
- Estadísticas: racha actual, racha máxima, total de palabras, promedio por entrada
- Gráfico de barras de estados de ánimo

### Tres temas visuales
- ☀️ **Clásico** — papel crema cálido, estética Moleskine
- 🌙 **Oscuro** — modo oscuro visible, tinta suave, ideal para escribir de noche
- 📜 **Sepia** — tonos amarronados, atmósfera de diario antiguo

### PWA e instalación
- Instalable como aplicación nativa en escritorio y móvil
- Funciona **100% offline** una vez instalada
- Shortcut de "Nueva entrada" desde el icono de la app (Android/iOS), ahora funcional
- Service worker con estrategia cache-first

---

## ⚠️ Avisos importantes

### Sobre los datos
Tus entradas se guardan en el almacenamiento local de tu navegador (IndexedDB). **No se envían a ningún servidor.** Si limpias los datos del navegador, **los datos del diario se pierden de forma irreversible.** Exporta con regularidad.

### Sobre el PIN y el cifrado
Si olvidas el PIN, las entradas cifradas **no se pueden recuperar** — ni por el desarrollador ni por nadie. Guarda siempre una copia exportada antes de activar el cifrado.

### Sobre las imágenes y el audio
Las imágenes y notas de voz se almacenan como Data URLs en IndexedDB. Las entradas con mucho contenido multimedia pueden crecer en tamaño. La app avisa si una entrada supera 5MB.

### Sobre la exportación
Las entradas cifradas se incluyen en Markdown, TXT o HTML solo si la sesión está desbloqueada. El JSON completo conserva también la configuración criptográfica necesaria para restaurar backups con entradas cifradas.

---


### Cambios v2.4.1 — hardening final

- Corregido renderizado seguro de resultados de búsqueda vacíos.
- Eliminados manejadores inline dinámicos en tarjetas de entradas.
- Endurecida la importación JSON con normalización de IDs antes de guardar.
- Base64 de cifrado robusto para entradas grandes con imágenes o audio.
- Sanitizado más estricto de Data URLs de imagen/audio.
- Cache PWA incrementada para forzar actualización limpia.

### Cambios v2.4 — modo oscuro visible

- Botón **Modo oscuro** añadido directamente en la barra lateral.
- Botón rápido 🌙/☀️ añadido en la navegación móvil.
- Preferencia persistente en IndexedDB.
- Color de navegador/PWA actualizado dinámicamente según el tema.
- Ajustes siguen incluyendo los tres temas: Clásico, Oscuro y Sepia.

### Cambios de hardening v2.3
- El diario ya no crea entradas de ejemplo automáticamente en la primera ejecución.
- Navegación móvil final con barra superior, panel de entradas y menú lateral controlados por overlay.
- Exportación JSON v3 con metadatos de restauración de PIN para backups cifrados.
- Sanitización centralizada del HTML guardado para bloquear scripts, atributos `on*`, URLs `javascript:` e imágenes remotas.
- CSP reforzada con `object-src 'none'`, `base-uri 'none'`, `form-action 'none'` y `frame-ancestors 'none'`.

## 🚀 Puesta en marcha

### Opción 1 — Abrir directamente
Descarga `moleskine-diary.html` y ábrelo en tu navegador. Funciona sin instalar nada.

> El service worker (PWA offline) solo se activa cuando la app se sirve por `https://`. Abierta como `file://`, todo funciona excepto la instalación como PWA.

### Opción 2 — GitHub Pages (recomendado)
1. Sube todos los archivos del repo a tu repositorio de GitHub.
2. Ve a **Settings → Pages → Branch: main → Folder: / (root)** y guarda.
3. Accede a `https://TU-USUARIO.github.io/TU-REPO/`.
4. En el navegador aparecerá la opción de **instalar como app**.

Consulta [`INSTRUCCIONES-GITHUB.md`](INSTRUCCIONES-GITHUB.md) para una guía paso a paso.

### Opción 3 — Servidor local
```bash
python3 -m http.server 8000
# Abre: http://localhost:8000/moleskine-diary.html
```

---

## ⌨️ Atajos de teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl/Cmd + S` | Guardar entrada |
| `Ctrl/Cmd + N` | Nueva entrada |
| `Ctrl/Cmd + F` | Buscar |
| `Ctrl/Cmd + P` | Vista de lectura |
| `Ctrl/Cmd + Shift + Enter` | Modo enfoque |
| `Ctrl/Cmd + B` | Negrita |
| `Ctrl/Cmd + I` | Cursiva |
| `Ctrl/Cmd + U` | Subrayado |
| `Esc` | Salir del modo enfoque / cerrar menús |
| Clic derecho | Menú contextual sobre una entrada |

---

## 🔐 Sobre el cifrado

| Componente | Detalle |
|-----------|---------|
| Algoritmo | AES-256-GCM (autenticado) |
| Derivación | PBKDF2-SHA256, 150.000 iteraciones |
| Sal | 16 bytes aleatorios, única por instalación |
| PIN | Solo se guarda el hash derivado, nunca el PIN en claro |
| IV | 12 bytes aleatorios por cada cifrado |
| Auto-lock | La clave se destruye tras 10 min de inactividad o al cerrar la pestaña |

---

## 📦 Estructura del proyecto

```
.
├── moleskine-diary.html      ← La aplicación completa (un solo archivo)
├── manifest.json             ← Configuración PWA
├── sw.js                     ← Service worker (cache offline)
├── icon-192.png              ← Icono de la app
├── icon-512.png
├── icon-512-maskable.png     ← Icono para Android adaptive icons
├── index.html                ← Redirección para GitHub Pages
├── README.md
├── CHANGELOG.md
├── SECURITY.md
├── LICENSE
└── .gitignore
```

---

## 🛠️ Tecnología

- **HTML + CSS + JavaScript puros** — sin frameworks ni bundlers
- **IndexedDB** para almacenamiento local persistente
- **Web Crypto API** para cifrado AES-256-GCM (nativa del navegador)
- **MediaRecorder API** para notas de voz (nativa del navegador)
- **Canvas API** para compresión de imágenes (nativa del navegador)
- **Service Worker** para funcionamiento 100% offline
- **Tipografía del sistema** — Palatino, Georgia, Courier. Sin peticiones externas.
- Tamaño total: ~140 KB (el HTML) + ~10 KB (iconos + SW + manifest)

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Abre un issue para reportar bugs o proponer mejoras, o un pull request con tus cambios.

Para vulnerabilidades de seguridad, consulta [`SECURITY.md`](SECURITY.md).

---

## 📄 Licencia

[MIT](LICENSE) — úsalo, modifícalo, distribúyelo libremente.
