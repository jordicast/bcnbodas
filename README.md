# BCN Bodas — web de fotografía y vídeo de bodas

## Archivos
- `index.html`: estructura y contenido de la web.
- `css/style.css`: estilos, diseño responsive y menú fijo.
- `js/main.js`: comportamiento del menú y funciones interactivas.

## Editar en Visual Studio Code
1. Descomprime el ZIP.
2. Abre la carpeta `jordi-castejon-wedding-site` en Visual Studio Code.
3. Abre `index.html` en un navegador o utiliza la extensión Live Server.

## Antes de publicar
- Sustituye las fotografías de ejemplo por imágenes propias.
- En `index.html`, cambia `VIDEO_ID_1` y `VIDEO_ID_2` por los identificadores reales de YouTube. Por ejemplo, en `https://www.youtube.com/watch?v=ABC123`, el identificador es `ABC123`.
- Revisa el correo de contacto y el enlace de Instagram.
- El botón de WhatsApp es flotante y usa el número +34 678 034 972 con el mensaje solicitado. Al pulsarlo se abre WhatsApp con el texto preparado; la persona debe enviarlo.
- El formulario de contacto, si utiliza `mailto`, abre el programa de correo del visitante; no envía mensajes desde un servidor.

## Publicar en GitHub Pages
Sube el contenido de esta carpeta a un repositorio GitHub y, en **Settings → Pages**, selecciona la rama que contiene `index.html` y la carpeta raíz (`/`).

El sitio es una página única con secciones enlazadas desde el menú; no necesita un HTML separado para cada sección.
