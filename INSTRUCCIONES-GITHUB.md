# Cómo subir Diario Moleskine a GitHub

Tiempo estimado: **10 minutos**. No necesitas saber programar ni usar la terminal.

---

## Antes de empezar

Necesitas:
- Una cuenta en [github.com](https://github.com) (gratis)
- Los 13 archivos del ZIP descomprimidos en una carpeta

Si no tienes cuenta: ve a [github.com/signup](https://github.com/signup) y crea una en 2 minutos.

---

## Paso 1 — Descomprime el ZIP

Descomprime `diario-moleskine.zip` en una carpeta de tu ordenador.  
Debería quedar algo así:

```
diario-moleskine/
├── moleskine-diary.html
├── index.html
├── manifest.json
├── sw.js
├── icon-192.png
├── icon-512.png
├── icon-512-maskable.png
├── screenshot_main.svg
├── screenshot_stats.svg
├── screenshot_night.svg
├── README.md
├── LICENSE
└── .gitignore
```

> **Nota:** `.gitignore` empieza por punto — en Mac/Linux puede estar oculto. En Windows es visible. No te preocupes si no lo ves, el ZIP lo incluye.

---

## Paso 2 — Crea el repositorio en GitHub

1. Entra en [github.com](https://github.com) con tu cuenta.
2. Haz clic en el botón verde **"New"** (arriba a la izquierda) o ve a [github.com/new](https://github.com/new).
3. Rellena el formulario:
   - **Repository name:** `diario-moleskine` (o el nombre que quieras)
   - **Description:** `Diario personal digital. Un solo archivo HTML, 100% offline y open source.`
   - **Public** ✓ (para poder usar GitHub Pages gratis)
   - **NO marques** "Add a README file" — ya tienes uno
   - **NO marques** "Add .gitignore" — ya tienes uno
4. Clic en **"Create repository"**.

---

## Paso 3 — Sube los archivos

Ahora estás en tu nuevo repositorio vacío. Verás una página con instrucciones de git — **ignóralas** y usa el método visual:

1. Haz clic en el enlace **"uploading an existing file"**  
   (está en el texto que dice *"…or upload an existing file"*)

2. Arrastra **todos los archivos** de tu carpeta `diario-moleskine/` al área de carga.  
   Deben ser los 13 archivos. Puedes seleccionarlos todos con `Ctrl+A` y arrastrar.

3. Espera a que suban (la barra de progreso llega al 100%).

4. Abajo, en **"Commit changes"**:
   - Deja el mensaje como está (`Add files via upload`) o escribe algo tuyo
   - Clic en **"Commit changes"** (botón verde)

> ⚠️ **El archivo `.gitignore`** puede no aparecer en el explorador de archivos de Windows/Mac porque empieza por punto. Para incluirlo: en Windows activa "Mostrar archivos ocultos"; en Mac pulsa `Cmd+Shift+.` en el selector de archivos. Si no puedes subirlo, no pasa nada — no es crítico para que la app funcione.

---

## Paso 4 — Activa GitHub Pages

Esto convierte tu repositorio en una web pública accesible por URL.

1. En tu repositorio, haz clic en **"Settings"** (la rueda dentada, arriba a la derecha).
2. En el menú lateral izquierdo, haz clic en **"Pages"**.
3. En **"Branch"**, selecciona `main` en el primer desplegable y `/  (root)` en el segundo.
4. Clic en **"Save"**.
5. Aparecerá un mensaje: *"Your site is being published..."*

GitHub tarda entre **30 segundos y 3 minutos** en publicar la primera vez.

---

## Paso 5 — Abre tu diario

Una vez publicado, tu diario estará disponible en:

```
https://TU-USUARIO.github.io/diario-moleskine/
```

Sustituye `TU-USUARIO` por tu nombre de usuario de GitHub y `diario-moleskine` por el nombre que le diste al repositorio en el paso 2.

También puedes encontrar la URL en **Settings → Pages**, donde aparecerá el enlace directo.

---

## Paso 6 — Instalar como app (opcional pero recomendado)

Una vez que abras la URL en el navegador, puedes instalarla como aplicación nativa:

### En Chrome / Edge (escritorio)
- Busca el icono de instalación (➕ o pantalla con flecha) en la barra de direcciones
- O ve al menú (⋮) → **"Instalar Diario Moleskine"**

### En Safari / iPhone
- Toca el botón compartir (□↑)
- **"Añadir a pantalla de inicio"**

### En Android (Chrome)
- Toca el menú (⋮)
- **"Añadir a pantalla de inicio"** o **"Instalar app"**

Una vez instalada, funciona **completamente offline** — sin conexión a internet.

---

## Personalizar antes de subir (opcional)

Si quieres poner tu nombre en la licencia, abre `LICENSE` con el Bloc de notas y cambia la línea:

```
Copyright (c) 2026 Ivan Roig
```

por tu nombre.

---

## Preguntas frecuentes

**¿Mis entradas se suben a GitHub?**  
No. Los archivos del repositorio son solo el código de la app. Tus entradas del diario se guardan en el almacenamiento local de tu navegador (IndexedDB), nunca salen de tu dispositivo.

**¿Puedo hacer el repositorio privado?**  
Sí, pero GitHub Pages no funciona con repositorios privados en la cuenta gratuita. Puedes tener el repo privado y abrir el archivo `.html` directamente desde tu ordenador sin publicarlo.

**¿Cómo comparto la app con alguien?**  
Una vez publicada en GitHub Pages, simplemente comparte la URL. Cualquiera puede usarla desde su navegador — cada usuario tiene su propio diario local, los datos no se mezclan.

**¿Puedo actualizar la app después?**  
Sí. Ve a tu repositorio, haz clic en el archivo que quieres actualizar, luego en el icono de lápiz (editar), pega el nuevo contenido y haz commit. Los cambios se publican en minutos.

**¿Qué pasa si borro el navegador o cambio de ordenador?**  
Los datos se perderían. **Exporta regularmente** desde el menú "Exportar / Importar" de la app. El formato JSON guarda todo y se puede reimportar.

---

## Estructura final del repositorio

Cuando termines, tu repositorio se verá así en GitHub:

```
github.com/TU-USUARIO/diario-moleskine
│
├── 📄 moleskine-diary.html    ← La app completa
├── 📄 index.html              ← Redirección para Pages
├── 📄 manifest.json           ← Config PWA
├── 📄 sw.js                   ← Offline / service worker
├── 🖼  icon-192.png
├── 🖼  icon-512.png
├── 🖼  icon-512-maskable.png
├── 🖼  screenshot_main.svg
├── 🖼  screenshot_stats.svg
├── 🖼  screenshot_night.svg
├── 📄 README.md               ← Página del proyecto (con capturas)
├── 📄 LICENSE
└── 📄 .gitignore
```

El README se renderiza automáticamente en la página principal del repositorio, con las capturas integradas.

---

¡Listo! Tu diario estará publicado y accesible desde cualquier dispositivo.
