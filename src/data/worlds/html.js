// ───────────────────────────── MUNDO 1: HTML ─────────────────────────────
// En las comprobaciones (test) hay disponibles: $, $$, text, style, rect, click, type, sleep, logs, errors, src, doc.

export const HTML = {
  id: 'html',
  short: 'HTML',
  name: 'HTML: la estructura',
  icon: '🧱',
  color: '#f97316',
  description: 'El esqueleto de toda página web: etiquetas, semántica, formularios y accesibilidad.',
  levels: [
    // ─────────────── 1
    {
      id: 'html-web',
      icon: '🌍',
      title: '¿Cómo funciona la web?',
      lesson: [
        {
          title: '¡Bienvenido/a a Café Pixel!',
          mood: 'happy',
          text: 'Soy **Moka**. Café Pixel necesita una web y la vamos a construir juntos, desde cero. Pero antes de escribir código, entendamos qué pasa cuando abres una página.',
          points: [
            '🧑‍💻 Tu **navegador** (Chrome, Firefox, Edge…) es el **cliente**.',
            '🗄️ La página vive en un **servidor**, un ordenador conectado a internet.',
            '📨 El navegador **pide** la página con el protocolo **HTTP** (o **HTTPS**, su versión segura).',
            '📦 El servidor **responde** con archivos: HTML, CSS, JavaScript, imágenes…',
            '🎨 El navegador **interpreta** esos archivos y **dibuja** la página en tu pantalla (la *renderiza*).',
          ],
        },
        {
          title: 'Los tres pilares del frontend',
          text: 'Toda página web se construye con tres lenguajes, cada uno con su trabajo:',
          table: {
            head: ['Lenguaje', 'Se encarga de…', 'Si fuera una persona…'],
            rows: [
              ['🧱 **HTML**', 'La **estructura** y el contenido', 'El esqueleto'],
              ['🎨 **CSS**', 'La **presentación**: colores, tamaños, posiciones', 'La ropa y el estilo'],
              ['⚡ **JavaScript**', 'El **comportamiento**: reaccionar a clics, pedir datos…', 'Los músculos'],
            ],
          },
          tip: 'El **frontend** es todo lo que se ejecuta en el navegador. El **backend** es lo que se ejecuta en el servidor (bases de datos, lógica de negocio…).',
        },
        {
          title: 'Anatomía de una URL',
          text: 'Cada página tiene una dirección única, la **URL**:',
          code: { lang: 'text', code: 'https://www.cafepixel.co/menu?categoria=cafe#postres' },
          table: {
            head: ['Parte', 'Ejemplo', 'Qué es'],
            rows: [
              ['Protocolo', '`https://`', 'Cómo se comunican navegador y servidor'],
              ['Dominio', '`www.cafepixel.co`', 'El nombre del servidor'],
              ['Ruta', '`/menu`', 'Qué recurso pedimos'],
              ['Parámetros (query)', '`?categoria=cafe`', 'Datos extra para el servidor'],
              ['Fragmento (ancla)', '`#postres`', 'Una sección dentro de la página'],
            ],
          },
        },
        {
          title: 'Tu primera herramienta: las DevTools',
          text: 'Pulsa **F12** en cualquier página para abrir las **herramientas de desarrollo** del navegador. Te acompañarán siempre:',
          points: [
            '**Elements**: el HTML y el CSS de la página (¡y puedes editarlos en vivo!).',
            '**Console**: mensajes y errores de JavaScript.',
            '**Network**: todas las peticiones que hace la página.',
          ],
          tip: 'En este juego tienes un **editor** y una **vista previa**: lo que escribas se dibuja al instante.',
        },
      ],
      challenges: [
        {
          type: 'quiz',
          question: '¿Qué hace el navegador cuando recibe un archivo HTML del servidor?',
          options: ['Lo interpreta y dibuja la página en pantalla', 'Lo guarda en la base de datos', 'Lo envía a otros usuarios', 'Lo compila a código máquina'],
          answer: 0,
          explanation: 'El navegador interpreta (renderiza) el HTML, el CSS y el JavaScript para mostrar la página.',
        },
        {
          type: 'classify',
          question: '¿Qué lenguaje se encarga de cada tarea?',
          bins: [
            { id: 'html', label: '🧱 HTML' },
            { id: 'css', label: '🎨 CSS' },
            { id: 'js', label: '⚡ JavaScript' },
          ],
          items: [
            { text: 'Indicar que hay un título y un párrafo', bin: 'html' },
            { text: 'Poner el título en color verde', bin: 'css' },
            { text: 'Mostrar un mensaje al hacer clic en un botón', bin: 'js' },
            { text: 'Organizar los productos en tres columnas', bin: 'css' },
            { text: 'Validar un formulario antes de enviarlo', bin: 'js' },
            { text: 'Incluir la imagen del logo', bin: 'html' },
          ],
          explanation: 'HTML = estructura y contenido, CSS = presentación, JavaScript = comportamiento.',
        },
        {
          type: 'quiz',
          question: 'En `https://cafepixel.co/menu?categoria=cafe#postres`, ¿qué es `?categoria=cafe`?',
          options: ['Los parámetros de consulta (query)', 'El dominio', 'El protocolo', 'Un fragmento de la página'],
          answer: 0,
          explanation: 'Todo lo que va después de `?` son parámetros de consulta: datos extra que viajan en la URL.',
        },
        {
          type: 'quiz',
          question: '¿Qué parte de una aplicación web se ejecuta en el navegador del usuario?',
          options: ['El frontend', 'El backend', 'La base de datos', 'El servidor DNS'],
          answer: 0,
          explanation: 'El frontend (HTML, CSS y JavaScript) se ejecuta en el navegador. El backend se ejecuta en el servidor.',
        },
        {
          type: 'pick',
          question: '¿Qué puedes hacer con las herramientas de desarrollo del navegador (F12)?',
          hint: 'Selecciona todas las correctas.',
          options: [
            { text: 'Ver y editar en vivo el HTML de la página', correct: true },
            { text: 'Ver los errores de JavaScript en la consola', correct: true },
            { text: 'Ver las peticiones que hace la página', correct: true },
            { text: 'Modificar el código que está en el servidor', correct: false },
            { text: 'Ver la base de datos del servidor', correct: false },
          ],
          explanation: 'Las DevTools muestran y permiten modificar lo que llega al navegador, pero no tocan el servidor ni su base de datos.',
        },
        {
          type: 'code',
          question: 'Tu primer código: escribe un título',
          instructions: 'Escribe la etiqueta `<h1>` con el texto **Café Pixel** dentro. Así: `<h1>Café Pixel</h1>`.\nFíjate cómo aparece en la vista previa.',
          files: { html: '<!-- Escribe tu título aquí debajo -->\n\n' },
          checks: [
            { text: 'Hay un título `<h1>`', test: "return !!$('h1')" },
            { text: 'El título dice **Café Pixel**', test: "return text('h1') === 'Café Pixel'" },
          ],
          solution: { html: '<h1>Café Pixel</h1>\n' },
          hint: 'Las etiquetas se abren con `<h1>` y se cierran con `</h1>`. El texto va en medio.',
          explanation: '¡Felicidades por tu primer HTML! 🎉',
        },
      ],
    },

    // ─────────────── 2
    {
      id: 'html-estructura',
      icon: '📄',
      title: 'Estructura y texto',
      lesson: [
        {
          title: 'Etiquetas y elementos',
          text: 'HTML se escribe con **etiquetas**. Casi todas tienen apertura y cierre, y entre ellas va el contenido. Todo junto es un **elemento**.',
          code: { lang: 'html', code: '<p>Bienvenidos a Café Pixel</p>\n<!-- ↑ apertura   contenido   cierre ↑ -->\n\n<br>   <!-- elemento vacío: no tiene cierre -->\n<img src="logo.png" alt="Logo">' },
          points: ['Las etiquetas se pueden **anidar**: una dentro de otra.', 'Se cierran en **orden inverso**: la última que abres es la primera que cierras.'],
          tip: 'Bien anidado: `<p>Hola <strong>mundo</strong></p>`. Mal: `<p>Hola <strong>mundo</p></strong>`.',
        },
        {
          title: 'El esqueleto de un documento',
          text: 'Toda página completa tiene esta estructura:',
          code: {
            lang: 'html',
            code: '<!DOCTYPE html>\n<html lang="es">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Café Pixel</title>\n  </head>\n  <body>\n    <h1>Café Pixel</h1>\n    <p>El mejor café de la ciudad.</p>\n  </body>\n</html>',
          },
          points: [
            '`<!DOCTYPE html>`: avisa de que es HTML5.',
            '`<html lang="es">`: la raíz; `lang` indica el idioma.',
            '`<head>`: información **sobre** la página (título de la pestaña, codificación…). No se ve.',
            '`<body>`: todo lo que **se ve** en la página.',
          ],
        },
        {
          title: 'Títulos, párrafos y énfasis',
          text: 'Hay seis niveles de título, de `<h1>` (el más importante) a `<h6>`. El texto va en párrafos `<p>`.',
          code: { lang: 'html', code: '<h1>Café Pixel</h1>\n<h2>Nuestro menú</h2>\n<p>Café <strong>recién tostado</strong> y\n   <em>siempre</em> orgánico.</p>\n<hr>\n<p>Abierto de 7:00 a 20:00<br>de lunes a sábado.</p>' },
          demo: { html: '<h1>Café Pixel</h1>\n<h2>Nuestro menú</h2>\n<p>Café <strong>recién tostado</strong> y <em>siempre</em> orgánico.</p>\n<hr>\n<p>Abierto de 7:00 a 20:00<br>de lunes a sábado.</p>', height: 230 },
          tip: '`<strong>` = importancia y `<em>` = énfasis. Se ven en negrita y cursiva, pero **significan** algo, por eso se prefieren a `<b>` e `<i>`.',
        },
        {
          title: 'Atributos y comentarios',
          text: 'Los **atributos** dan información extra a una etiqueta. Van en la apertura con la forma `nombre="valor"`.',
          code: { lang: 'html', code: '<p id="horario" class="destacado" title="Horario de apertura">\n  Abierto todos los días\n</p>\n\n<!-- Esto es un comentario: el navegador lo ignora -->' },
          points: ['`id`: identificador **único** en la página.', '`class`: una o varias clases (para dar estilos con CSS).', '`title`: texto que aparece al pasar el ratón.'],
        },
      ],
      challenges: [
        {
          type: 'quiz',
          question: '¿Para qué sirve `<!DOCTYPE html>`?',
          options: ['Indica al navegador que el documento es HTML5', 'Crea el título de la pestaña', 'Importa los estilos CSS', 'Es un comentario'],
          answer: 0,
          explanation: 'Es la primera línea de todo documento HTML moderno y activa el modo estándar del navegador.',
        },
        {
          type: 'classify',
          question: '¿Dónde va cada elemento: en `<head>` o en `<body>`?',
          bins: [
            { id: 'head', label: '🧠 head (no se ve)' },
            { id: 'body', label: '👀 body (se ve)' },
          ],
          items: [
            { text: '`<title>Café Pixel</title>`', bin: 'head' },
            { text: '`<meta charset="UTF-8">`', bin: 'head' },
            { text: '`<h1>Bienvenidos</h1>`', bin: 'body' },
            { text: '`<link rel="stylesheet" href="estilos.css">`', bin: 'head' },
            { text: '`<p>Nuestro menú…</p>`', bin: 'body' },
            { text: '`<img src="logo.png" alt="Logo">`', bin: 'body' },
          ],
          explanation: 'En `<head>` va la información sobre la página (título, codificación, estilos). En `<body>`, el contenido visible.',
        },
        {
          type: 'fill',
          question: 'Completa el esqueleto del documento',
          lang: 'html',
          code: '<!DOCTYPE html>\n<html lang="es">\n<___>\n  <meta charset="UTF-8">\n  <title>Café Pixel</title>\n</___>\n<___>\n  <h1>Bienvenidos</h1>\n</___>\n</html>',
          blanks: [['head'], ['/head'], ['body'], ['/body']],
          bank: ['head', '/head', 'body', '/body', 'title', 'main'],
          explanation: 'Primero `<head>` (información) y después `<body>` (contenido). Las etiquetas de cierre llevan `/`.',
        },
        {
          type: 'code',
          question: 'Completa la página de Café Pixel',
          instructions: 'Este documento está incompleto. Añade:\n1. Un `<title>` con el texto **Café Pixel** dentro de `<head>`.\n2. Un `<h1>` con el texto **Café Pixel** dentro de `<body>`.\n3. Un párrafo `<p>` con cualquier texto de bienvenida.',
          files: {
            html: '<!DOCTYPE html>\n<html lang="es">\n  <head>\n    <meta charset="UTF-8">\n    <!-- 1. Añade aquí el title -->\n  </head>\n  <body>\n    <!-- 2. Añade aquí el h1 -->\n\n    <!-- 3. Añade aquí el párrafo -->\n  </body>\n</html>\n',
          },
          checks: [
            { text: 'El título de la pestaña es **Café Pixel**', test: "return doc.title.trim() === 'Café Pixel'" },
            { text: 'Hay un `<h1>` con el texto **Café Pixel**', test: "return text('h1') === 'Café Pixel'" },
            { text: 'Hay un párrafo `<p>` con texto', test: "return $$('body p').some(p => p.textContent.trim().length > 0)" },
          ],
          solution: {
            html: '<!DOCTYPE html>\n<html lang="es">\n  <head>\n    <meta charset="UTF-8">\n    <title>Café Pixel</title>\n  </head>\n  <body>\n    <h1>Café Pixel</h1>\n    <p>¡Bienvenidos al mejor café de la ciudad!</p>\n  </body>\n</html>\n',
          },
          hint: 'El `<title>` no se ve en la página, sino en la pestaña del navegador. Escríbelo dentro de `<head>`.',
        },
        {
          type: 'code',
          question: 'Texto con énfasis',
          instructions: 'Escribe un párrafo que diga: Nuestro café es **recién tostado** y *orgánico*.\nUsa `<strong>` para «recién tostado» y `<em>` para «orgánico».',
          files: { html: '<h2>Nuestro café</h2>\n\n' },
          checks: [
            { text: 'Hay un párrafo `<p>`', test: "return !!$('p')" },
            { text: '«recién tostado» está dentro de `<strong>`', test: "return text('p strong') === 'recién tostado'" },
            { text: '«orgánico» está dentro de `<em>`', test: "return text('p em') === 'orgánico'" },
          ],
          solution: { html: '<h2>Nuestro café</h2>\n<p>Nuestro café es <strong>recién tostado</strong> y <em>orgánico</em>.</p>\n' },
          hint: 'Las etiquetas `<strong>` y `<em>` van **dentro** del `<p>`.',
        },
        {
          type: 'code',
          kind: 'bug',
          question: 'El título que no era un título',
          instructions: 'El becario hizo el título principal con un párrafo en negrita, y eso es un error: para el navegador y los buscadores **no es un título**.\nCámbialo por un `<h1>` y quita la etiqueta `<b>`.',
          files: { html: '<p><b>Menú del día</b></p>\n<p>Espresso, capuchino y croissant recién horneado.</p>\n' },
          checks: [
            { text: 'Hay un `<h1>` con el texto **Menú del día**', test: "return text('h1') === 'Menú del día'" },
            { text: 'Ya no se usa `<b>`', test: "return !$('b')" },
            { text: 'El párrafo de la descripción sigue ahí', test: "return $$('p').some(p => p.textContent.includes('Espresso'))" },
          ],
          solution: { html: '<h1>Menú del día</h1>\n<p>Espresso, capuchino y croissant recién horneado.</p>\n' },
          hint: 'Sustituye `<p><b>…</b></p>` por `<h1>…</h1>`.',
        },
        {
          type: 'quiz',
          question: '¿Cuántos `<h1>` debería tener, normalmente, una página?',
          options: ['Uno: el título principal', 'Tantos como párrafos', 'Ninguno', 'Seis, del h1 al h6'],
          answer: 0,
          explanation: 'Lo habitual es un único `<h1>` como título principal y, debajo, una jerarquía ordenada de `<h2>`, `<h3>`…',
        },
      ],
    },

    // ─────────────── 3
    {
      id: 'html-enlaces',
      icon: '🔗',
      title: 'Enlaces, imágenes y listas',
      lesson: [
        {
          title: 'Enlaces: la «H» de HTML',
          text: 'HTML significa *HyperText Markup Language*. El **hipertexto** son los enlaces, que se crean con `<a>` y su atributo `href`:',
          code: {
            lang: 'html',
            code: '<a href="https://angular.dev">Web de Angular</a>        <!-- absoluta -->\n<a href="menu.html">Ver el menú</a>                 <!-- relativa -->\n<a href="#contacto">Ir a contacto</a>               <!-- ancla -->\n<a href="mailto:hola@cafepixel.co">Escríbenos</a>  <!-- correo -->\n<a href="https://angular.dev" target="_blank">Abrir en otra pestaña</a>',
          },
          tip: 'Un ancla `#contacto` salta al elemento que tenga `id="contacto"`.',
        },
        {
          title: 'Imágenes',
          text: 'La etiqueta `<img>` no tiene cierre. Necesita dos atributos imprescindibles:',
          code: { lang: 'html', code: '<img src="img/espresso.jpg" alt="Taza de espresso humeante" width="300">' },
          points: [
            '`src`: la ruta de la imagen.',
            '`alt`: el **texto alternativo**. Lo leen los lectores de pantalla y aparece si la imagen no carga.',
            '`width` / `height`: tamaño opcional (mejor controlarlo con CSS).',
          ],
          tip: 'Una imagen sin `alt` es un error de **accesibilidad**. Si la imagen es solo decorativa, usa `alt=""`.',
        },
        {
          title: 'Listas',
          text: 'Hay dos tipos de lista. Cada elemento va en un `<li>`:',
          codes: [
            { lang: 'html', title: 'Sin orden: <ul>', code: '<ul>\n  <li>Espresso</li>\n  <li>Capuchino</li>\n  <li>Latte</li>\n</ul>' },
            { lang: 'html', title: 'Ordenada: <ol>', code: '<ol>\n  <li>Moler el café</li>\n  <li>Calentar el agua</li>\n  <li>Preparar</li>\n</ol>' },
          ],
          demo: { html: '<ul><li>Espresso</li><li>Capuchino</li><li>Latte</li></ul><ol><li>Moler el café</li><li>Calentar el agua</li><li>Preparar</li></ol>', height: 190 },
          tip: 'Los menús de navegación se hacen casi siempre con una `<ul>` llena de enlaces.',
        },
      ],
      challenges: [
        {
          type: 'quiz',
          question: '¿Qué atributo indica el destino de un enlace?',
          options: ['`href`', '`src`', '`link`', '`target`'],
          answer: 0,
          explanation: '`href` (hypertext reference) es el destino. `target="_blank"` solo indica que se abra en otra pestaña.',
        },
        {
          type: 'code',
          question: 'El menú de navegación',
          instructions: 'Crea una lista sin orden (`<ul>`) con 3 elementos. Cada `<li>` debe contener un enlace:\n• **Inicio** → `#inicio`\n• **Menú** → `#menu`\n• **Contacto** → `#contacto`',
          files: { html: '<nav>\n  <!-- Tu lista de enlaces aquí -->\n\n</nav>\n' },
          checks: [
            { text: 'Hay una lista `<ul>`', test: "return !!$('ul')" },
            { text: 'La lista tiene exactamente 3 `<li>`', test: "return $$('ul > li').length === 3" },
            { text: 'Cada `<li>` contiene un enlace `<a>`', test: "return $$('ul > li').length === 3 && $$('ul > li').every(li => li.querySelector('a'))" },
            { text: 'Enlace **Inicio** → `#inicio`', test: "return $$('a').some(a => a.textContent.trim() === 'Inicio' && a.getAttribute('href') === '#inicio')" },
            { text: 'Enlace **Menú** → `#menu`', test: "return $$('a').some(a => a.textContent.trim() === 'Menú' && a.getAttribute('href') === '#menu')" },
            { text: 'Enlace **Contacto** → `#contacto`', test: "return $$('a').some(a => a.textContent.trim() === 'Contacto' && a.getAttribute('href') === '#contacto')" },
          ],
          solution: {
            html: '<nav>\n  <ul>\n    <li><a href="#inicio">Inicio</a></li>\n    <li><a href="#menu">Menú</a></li>\n    <li><a href="#contacto">Contacto</a></li>\n  </ul>\n</nav>\n',
          },
          hint: 'Un elemento se ve así: `<li><a href="#inicio">Inicio</a></li>`.',
        },
        {
          type: 'code',
          question: 'Una imagen accesible',
          instructions: 'Añade una imagen con `src="img/espresso.jpg"` y un texto alternativo que describa la imagen e incluya la palabra **espresso**.\n(La imagen no existe, así que verás el texto alternativo: ¡justo para eso sirve `alt`!)',
          files: { html: '<h2>Espresso</h2>\n\n<p>Intenso y aromático.</p>\n' },
          checks: [
            { text: 'Hay una imagen `<img>`', test: "return !!$('img')" },
            { text: 'Su `src` es `img/espresso.jpg`', test: "return $('img')?.getAttribute('src') === 'img/espresso.jpg'" },
            { text: 'Tiene un `alt` descriptivo que incluye «espresso»', test: "const a = ($('img')?.getAttribute('alt') || '').toLowerCase(); return a.includes('espresso') && a.length >= 10" },
          ],
          solution: { html: '<h2>Espresso</h2>\n<img src="img/espresso.jpg" alt="Taza de espresso recién servida">\n<p>Intenso y aromático.</p>\n' },
          hint: '`<img src="img/espresso.jpg" alt="Taza de espresso recién servida">`',
        },
        {
          type: 'quiz',
          question: '¿Para qué sirve el atributo `alt` de una imagen?',
          options: [
            'Describe la imagen para lectores de pantalla y se muestra si no carga',
            'Cambia el tamaño de la imagen',
            'Indica la ruta del archivo',
            'Añade un borde',
          ],
          answer: 0,
          explanation: 'El texto alternativo hace la imagen accesible para personas ciegas y para los buscadores.',
        },
        {
          type: 'fill',
          question: 'Completa el enlace para que abra Angular en una pestaña nueva',
          lang: 'html',
          code: '<a ___="https://angular.dev" ___="_blank">Documentación de Angular</a>',
          blanks: [['href'], ['target']],
          bank: ['href', 'target', 'src', 'alt', 'link'],
          explanation: '`href` es el destino y `target="_blank"` lo abre en otra pestaña.',
        },
        {
          type: 'classify',
          question: '¿Lista ordenada o sin orden?',
          bins: [
            { id: 'ol', label: '🔢 `<ol>` ordenada' },
            { id: 'ul', label: '• `<ul>` sin orden' },
          ],
          items: [
            { text: 'Los pasos de una receta', bin: 'ol' },
            { text: 'Los ingredientes de un sándwich', bin: 'ul' },
            { text: 'El top 3 de los cafés más vendidos', bin: 'ol' },
            { text: 'Los enlaces del menú de navegación', bin: 'ul' },
            { text: 'Las instrucciones para montar una cafetera', bin: 'ol' },
          ],
          explanation: 'Si el orden importa (pasos, rankings), usa `<ol>`. Si no, `<ul>`.',
        },
        {
          type: 'code',
          question: 'La receta del capuchino',
          instructions: 'Crea una **lista ordenada** con al menos 3 pasos para preparar un capuchino, debajo del título.',
          files: { html: '<h2>Cómo preparar un capuchino</h2>\n\n' },
          checks: [
            { text: 'Hay una lista ordenada `<ol>`', test: "return !!$('ol')" },
            { text: 'Tiene al menos 3 pasos (`<li>`)', test: "return $$('ol > li').length >= 3" },
            { text: 'Ningún paso está vacío', test: "return $$('ol > li').length > 0 && $$('ol > li').every(li => li.textContent.trim().length > 0)" },
          ],
          solution: { html: '<h2>Cómo preparar un capuchino</h2>\n<ol>\n  <li>Preparar un espresso</li>\n  <li>Calentar y espumar la leche</li>\n  <li>Verter la leche sobre el café</li>\n</ol>\n' },
          hint: 'Igual que `<ul>`, pero con `<ol>`.',
        },
      ],
    },

    // ─────────────── 4
    {
      id: 'html-semantica',
      icon: '🏛️',
      title: 'HTML semántico',
      lesson: [
        {
          title: '¿Div para todo? ¡No!',
          text: '`<div>` (bloque) y `<span>` (en línea) son **contenedores genéricos**: no dicen nada de su contenido. HTML5 trae etiquetas **semánticas** que sí lo dicen:',
          table: {
            head: ['Etiqueta', 'Significado'],
            rows: [
              ['`<header>`', 'Cabecera (de la página o de una sección): logo, título, navegación'],
              ['`<nav>`', 'Bloque de enlaces de navegación'],
              ['`<main>`', 'El contenido **principal** (solo uno por página)'],
              ['`<section>`', 'Una sección temática, normalmente con su título'],
              ['`<article>`', 'Contenido **independiente**: un post, una tarjeta de producto…'],
              ['`<aside>`', 'Contenido complementario: barra lateral, promociones'],
              ['`<footer>`', 'Pie: contacto, copyright, enlaces legales'],
            ],
          },
        },
        {
          title: 'Una página semántica',
          code: {
            lang: 'html',
            code: '<header>\n  <h1>Café Pixel</h1>\n  <nav>…</nav>\n</header>\n<main>\n  <section id="menu">\n    <h2>Menú</h2>\n    <article>\n      <h3>Espresso</h3>\n      <p>Intenso y aromático.</p>\n    </article>\n  </section>\n  <aside>¡2x1 los lunes!</aside>\n</main>\n<footer>\n  <p>© 2026 Café Pixel</p>\n</footer>',
          },
          points: [
            '♿ **Accesibilidad**: los lectores de pantalla permiten saltar directamente al `<main>` o al `<nav>`.',
            '🔍 **SEO**: los buscadores entienden mejor la página.',
            '👩‍💻 **Legibilidad**: el código se entiende de un vistazo.',
          ],
        },
        {
          title: 'Otras etiquetas con significado',
          code: {
            lang: 'html',
            code: '<figure>\n  <img src="latte.jpg" alt="Latte con arte de corazón">\n  <figcaption>Nuestro latte art</figcaption>\n</figure>\n\n<p>Abrimos el <time datetime="2026-10-21">21 de octubre</time>.</p>',
          },
          tip: 'Pregúntate siempre: **¿qué ES este contenido?** Si existe una etiqueta que lo describe, úsala. Si no, `<div>`.',
        },
      ],
      challenges: [
        {
          type: 'classify',
          question: '¿Qué etiqueta semántica usarías para cada contenido?',
          bins: [
            { id: 'header', label: '`<header>`' },
            { id: 'nav', label: '`<nav>`' },
            { id: 'main', label: '`<main>`' },
            { id: 'article', label: '`<article>`' },
            { id: 'aside', label: '`<aside>`' },
            { id: 'footer', label: '`<footer>`' },
          ],
          items: [
            { text: 'Logo y título en la parte superior', bin: 'header' },
            { text: 'Los enlaces Inicio, Menú y Contacto', bin: 'nav' },
            { text: 'Todo el contenido principal de la página', bin: 'main' },
            { text: 'Una tarjeta de producto independiente', bin: 'article' },
            { text: 'Una barra lateral con promociones', bin: 'aside' },
            { text: 'Copyright y redes sociales al final', bin: 'footer' },
          ],
          explanation: 'Cada etiqueta semántica describe el papel de su contenido dentro de la página.',
        },
        {
          type: 'code',
          question: 'Adiós a la «sopa de divs»',
          instructions: 'Esta página funciona, pero todo son `<div>`. Cámbialos por etiquetas semánticas:\n• `div.cabecera` → `<header>`\n• `div.navegacion` → `<nav>`\n• `div.contenido` → `<main>`\n• `div.pie` → `<footer>`',
          files: {
            html: '<div class="cabecera">\n  <h1>Café Pixel</h1>\n  <div class="navegacion">\n    <a href="#menu">Menú</a>\n    <a href="#contacto">Contacto</a>\n  </div>\n</div>\n\n<div class="contenido">\n  <h2>Bienvenidos</h2>\n  <p>El mejor café de la ciudad.</p>\n</div>\n\n<div class="pie">\n  <p>© 2026 Café Pixel</p>\n</div>\n',
          },
          checks: [
            { text: 'El título está dentro de un `<header>`', test: "return !!$('header h1')" },
            { text: 'Los enlaces están dentro de un `<nav>`', test: "return $$('nav a').length === 2" },
            { text: 'El contenido principal está en `<main>`', test: "return !!$('main h2') && text('main h2') === 'Bienvenidos'" },
            { text: 'El copyright está en `<footer>`', test: "return text('footer').includes('©')" },
            { text: 'Ya no queda ningún `<div>`', test: "return $$('div').length === 0" },
          ],
          solution: {
            html: '<header>\n  <h1>Café Pixel</h1>\n  <nav>\n    <a href="#menu">Menú</a>\n    <a href="#contacto">Contacto</a>\n  </nav>\n</header>\n\n<main>\n  <h2>Bienvenidos</h2>\n  <p>El mejor café de la ciudad.</p>\n</main>\n\n<footer>\n  <p>© 2026 Café Pixel</p>\n</footer>\n',
          },
          hint: 'Cambia también las etiquetas de cierre: `</div>` → `</header>`, `</nav>`… El atributo `class` ya no hace falta.',
        },
        {
          type: 'pick',
          question: '¿Cuáles de estas etiquetas son semánticas?',
          hint: 'Selecciona todas las correctas.',
          options: [
            { text: '`<article>`', correct: true },
            { text: '`<nav>`', correct: true },
            { text: '`<div>`', correct: false },
            { text: '`<footer>`', correct: true },
            { text: '`<span>`', correct: false },
            { text: '`<section>`', correct: true },
          ],
          explanation: '`<div>` y `<span>` son contenedores genéricos sin significado. Las demás describen su contenido.',
        },
        {
          type: 'quiz',
          question: '¿Cuál es la diferencia entre `<div>` y `<span>`?',
          options: [
            '`<div>` es un contenedor de bloque y `<span>` uno en línea',
            '`<div>` es semántico y `<span>` no',
            '`<span>` solo sirve para imágenes',
            'Son idénticos',
          ],
          answer: 0,
          explanation: 'Un bloque ocupa todo el ancho y empieza en una línea nueva. Un elemento en línea se queda dentro del texto.',
        },
        {
          type: 'fill',
          question: 'Completa la imagen con su pie de foto',
          lang: 'html',
          code: '<___>\n  <img src="latte.jpg" alt="Latte con arte de corazón">\n  <___>Nuestro latte art</___>\n</___>',
          blanks: [['figure'], ['figcaption'], ['/figcaption'], ['/figure']],
          bank: ['figure', '/figure', 'figcaption', '/figcaption', 'caption', 'div'],
          explanation: '`<figure>` agrupa una imagen (o gráfico, o código) con su `<figcaption>`.',
        },
        {
          type: 'quiz',
          question: '¿Por qué conviene usar HTML semántico?',
          options: [
            'Mejora la accesibilidad, el SEO y la legibilidad del código',
            'Hace que la página cargue el doble de rápido',
            'Es obligatorio o la página no funciona',
            'Pone colores automáticamente',
          ],
          answer: 0,
          explanation: 'Con `<div>` la página también funciona, pero el HTML semántico la hace comprensible para personas, lectores de pantalla y buscadores.',
        },
      ],
    },

    // ─────────────── 5
    {
      id: 'html-tablas',
      icon: '📊',
      title: 'Tablas',
      lesson: [
        {
          title: 'Datos en filas y columnas',
          text: 'Las tablas sirven para mostrar **datos tabulares**: horarios, precios, comparativas…',
          code: {
            lang: 'html',
            code: '<table>\n  <caption>Precios</caption>\n  <thead>\n    <tr>\n      <th>Producto</th>\n      <th>Precio</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Espresso</td>\n      <td>$6.000</td>\n    </tr>\n    <tr>\n      <td>Capuchino</td>\n      <td>$8.500</td>\n    </tr>\n  </tbody>\n</table>',
          },
          demo: {
            html: '<table><caption>Precios</caption><thead><tr><th>Producto</th><th>Precio</th></tr></thead><tbody><tr><td>Espresso</td><td>$6.000</td></tr><tr><td>Capuchino</td><td>$8.500</td></tr></tbody></table>',
            css: 'table{border-collapse:collapse}th,td{border:1px solid #cbd5e1;padding:6px 14px}th{background:#ecfdf5}caption{font-weight:bold;margin-bottom:6px}',
            height: 150,
          },
        },
        {
          title: 'Las piezas de una tabla',
          table: {
            head: ['Etiqueta', 'Uso'],
            rows: [
              ['`<table>`', 'La tabla completa'],
              ['`<caption>`', 'El título de la tabla (accesibilidad)'],
              ['`<thead>` / `<tbody>` / `<tfoot>`', 'Cabecera, cuerpo y pie'],
              ['`<tr>`', 'Una fila (*table row*)'],
              ['`<th>`', 'Una celda de **encabezado**'],
              ['`<td>`', 'Una celda de **datos**'],
              ['`colspan` / `rowspan`', 'Una celda que ocupa varias columnas o filas'],
            ],
          },
          tip: '⚠️ Hace años se maquetaban páginas enteras con tablas. **Hoy no**: la maquetación se hace con CSS (Flexbox y Grid).',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'La tabla de precios',
          instructions: 'Crea una tabla con:\n• un `<caption>` con el texto **Precios**;\n• un `<thead>` con dos encabezados `<th>`: **Producto** y **Precio**;\n• un `<tbody>` con al menos **3 filas** de productos.',
          files: { html: '<h2>Nuestro menú</h2>\n\n' },
          checks: [
            { text: 'Hay una `<table>`', test: "return !!$('table')" },
            { text: 'El `<caption>` dice **Precios**', test: "return text('table caption') === 'Precios'" },
            { text: 'El `<thead>` tiene los encabezados Producto y Precio', test: "const th = $$('thead th').map(t => t.textContent.trim()); return th.length === 2 && th[0] === 'Producto' && th[1] === 'Precio'" },
            { text: 'El `<tbody>` tiene al menos 3 filas', test: "return $$('tbody tr').length >= 3" },
            { text: 'Cada fila del cuerpo tiene 2 celdas `<td>`', test: "const rows = $$('tbody tr'); return rows.length >= 3 && rows.every(r => r.querySelectorAll('td').length === 2)" },
          ],
          solution: {
            html: '<h2>Nuestro menú</h2>\n<table>\n  <caption>Precios</caption>\n  <thead>\n    <tr><th>Producto</th><th>Precio</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Espresso</td><td>$6.000</td></tr>\n    <tr><td>Capuchino</td><td>$8.500</td></tr>\n    <tr><td>Croissant</td><td>$5.500</td></tr>\n  </tbody>\n</table>\n',
          },
          hint: 'Cada fila es `<tr>`. En el encabezado las celdas son `<th>` y en el cuerpo `<td>`.',
        },
        {
          type: 'quiz',
          question: '¿Qué diferencia hay entre `<th>` y `<td>`?',
          options: ['`<th>` es una celda de encabezado y `<td>` una celda de datos', '`<th>` es una fila y `<td>` una columna', 'No hay diferencia', '`<td>` solo se usa en `<thead>`'],
          answer: 0,
          explanation: '`<th>` (table header) describe una columna o fila; `<td>` (table data) contiene los datos.',
        },
        {
          type: 'quiz',
          question: '¿Se deben usar tablas para maquetar el diseño de una página (columnas, menú lateral…)?',
          options: ['No: las tablas son para datos; el diseño se hace con CSS', 'Sí, es la forma recomendada', 'Solo en móviles', 'Solo si hay imágenes'],
          answer: 0,
          explanation: 'Maquetar con tablas es una práctica antigua que daña la accesibilidad. Hoy se usan Flexbox y Grid.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Cuántas columnas ocupa la celda «Horario»?',
          snippet: { lang: 'html', code: '<table>\n  <tr>\n    <th colspan="3">Horario</th>\n  </tr>\n  <tr>\n    <td>Lunes</td><td>Martes</td><td>Miércoles</td>\n  </tr>\n</table>' },
          options: ['3', '1', '2', '6'],
          answer: 0,
          explanation: '`colspan="3"` hace que la celda se extienda sobre 3 columnas.',
        },
        {
          type: 'fill',
          question: 'Completa una fila de la tabla',
          lang: 'html',
          code: '<___>\n  <___>Latte</td>\n  <td>$9.000</___>\n</tr>',
          blanks: [['tr'], ['td'], ['/td']],
          bank: ['tr', 'td', '/td', 'th', 'table'],
          explanation: 'Una fila `<tr>` contiene celdas `<td>`.',
        },
      ],
    },

    // ─────────────── 6
    {
      id: 'html-formularios',
      icon: '📝',
      title: 'Formularios',
      lesson: [
        {
          title: 'Recoger datos del usuario',
          text: 'Los formularios permiten que el usuario escriba y envíe información.',
          code: {
            lang: 'html',
            code: '<form action="/reservar" method="post">\n  <label for="nombre">Nombre</label>\n  <input type="text" id="nombre" name="nombre" required>\n\n  <label for="correo">Correo</label>\n  <input type="email" id="correo" name="correo" placeholder="tu@correo.com">\n\n  <button type="submit">Reservar</button>\n</form>',
          },
          points: [
            '`action` y `method`: a dónde y cómo se envían los datos.',
            '`<label for="x">` se conecta con el campo que tiene `id="x"`: al hacer clic en la etiqueta se enfoca el campo, y los lectores de pantalla lo anuncian.',
            '`name`: el nombre con el que se envía el dato.',
          ],
        },
        {
          title: 'Tipos de campo',
          table: {
            head: ['Tipo', 'Para…'],
            rows: [
              ['`type="text"`', 'Texto corto'],
              ['`type="email"`', 'Correos (valida el formato)'],
              ['`type="password"`', 'Contraseñas (oculta el texto)'],
              ['`type="number"`', 'Números (con `min`, `max`, `step`)'],
              ['`type="date"`', 'Fechas (muestra un calendario)'],
              ['`type="checkbox"`', 'Casillas: marcar varias opciones'],
              ['`type="radio"`', 'Elegir **una** opción de un grupo (mismo `name`)'],
              ['`<textarea>`', 'Texto largo'],
              ['`<select>` + `<option>`', 'Lista desplegable'],
            ],
          },
        },
        {
          title: 'Validación incluida',
          text: 'HTML valida algunos datos **sin escribir JavaScript**:',
          code: { lang: 'html', code: '<input type="email" required>\n<input type="number" min="1" max="10">\n<input type="text" minlength="3" maxlength="40">' },
          demo: {
            html: '<form><label>Personas (1-10): <input type="number" min="1" max="10" value="12"></label> <button>Enviar</button></form><p style="color:#6b7280;font-size:14px">Prueba a pulsar «Enviar» con un valor fuera de rango.</p>',
            height: 110,
          },
          tip: '⚠️ La validación del navegador ayuda al usuario, pero **el servidor siempre debe volver a validar**: cualquiera puede saltársela.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'El formulario de contacto',
          instructions: 'Dentro del `<form>`, crea:\n1. Un `<label>` **Nombre** conectado a un `<input type="text" id="nombre">`.\n2. Un campo de correo `<input type="email">` **obligatorio** (`required`) con `id="correo"` y su `<label>`.\n3. Un `<textarea>` para el mensaje.\n4. Un `<button type="submit">` para enviar.',
          files: { html: '<h2>Contáctanos</h2>\n<form>\n  \n</form>\n' },
          checks: [
            { text: 'Hay un `<input type="text">` con `id="nombre"`', test: "return $('form input#nombre')?.type === 'text'" },
            { text: 'Un `<label for="nombre">` está conectado al nombre', test: "return !!$('form label[for=\"nombre\"]')" },
            { text: 'El correo es `type="email"` y obligatorio', test: "const c = $('form input#correo'); return !!c && c.type === 'email' && c.required" },
            { text: 'Un `<label for="correo">` está conectado al correo', test: "return !!$('form label[for=\"correo\"]')" },
            { text: 'Hay un `<textarea>`', test: "return !!$('form textarea')" },
            { text: 'Hay un botón de envío', test: "const b = $('form button'); return !!b && (b.type === 'submit')" },
          ],
          solution: {
            html: '<h2>Contáctanos</h2>\n<form>\n  <label for="nombre">Nombre</label>\n  <input type="text" id="nombre" name="nombre">\n\n  <label for="correo">Correo</label>\n  <input type="email" id="correo" name="correo" required>\n\n  <label for="mensaje">Mensaje</label>\n  <textarea id="mensaje" name="mensaje"></textarea>\n\n  <button type="submit">Enviar</button>\n</form>\n',
          },
          hint: 'El valor de `for` en el `<label>` debe ser igual al `id` del campo.',
        },
        {
          type: 'classify',
          question: '¿Qué tipo de campo usarías para cada dato?',
          bins: [
            { id: 'email', label: '`email`' },
            { id: 'number', label: '`number`' },
            { id: 'date', label: '`date`' },
            { id: 'password', label: '`password`' },
            { id: 'checkbox', label: '`checkbox`' },
            { id: 'radio', label: '`radio`' },
          ],
          items: [
            { text: 'El correo del cliente', bin: 'email' },
            { text: 'Número de personas de la reserva', bin: 'number' },
            { text: 'Día de la reserva', bin: 'date' },
            { text: 'Contraseña de la cuenta', bin: 'password' },
            { text: 'Acepto los términos y condiciones', bin: 'checkbox' },
            { text: 'Tamaño del café: pequeño, mediano o grande (solo uno)', bin: 'radio' },
          ],
          explanation: 'Elegir bien el tipo mejora la validación y el teclado que aparece en el móvil.',
        },
        {
          type: 'quiz',
          question: '¿Para qué sirve conectar un `<label>` con su campo mediante `for` e `id`?',
          options: [
            'Para que los lectores de pantalla anuncien el campo y al hacer clic en el texto se enfoque',
            'Para enviar el formulario más rápido',
            'Para dar color al campo',
            'Es obligatorio o el formulario no se envía',
          ],
          answer: 0,
          explanation: 'Es una pieza clave de la accesibilidad de los formularios, y además amplía la zona clicable.',
        },
        {
          type: 'code',
          question: 'Elige tu tamaño',
          instructions: 'Crea una lista desplegable `<select>` con `id="tamano"` y tres opciones: **pequeño**, **mediano** y **grande**. Añade también su `<label>` conectado.',
          files: { html: '<form>\n  \n</form>\n' },
          checks: [
            { text: 'Hay un `<select id="tamano">`', test: "return !!$('select#tamano')" },
            { text: 'Tiene exactamente 3 opciones', test: "return $$('#tamano option').length === 3" },
            { text: 'Las opciones son pequeño, mediano y grande', test: "const o = $$('#tamano option').map(x => x.textContent.trim().toLowerCase()); return ['pequeño','mediano','grande'].every(v => o.includes(v))" },
            { text: 'Tiene un `<label for="tamano">`', test: "return !!$('label[for=\"tamano\"]')" },
          ],
          solution: {
            html: '<form>\n  <label for="tamano">Tamaño</label>\n  <select id="tamano" name="tamano">\n    <option>Pequeño</option>\n    <option>Mediano</option>\n    <option>Grande</option>\n  </select>\n</form>\n',
          },
          hint: '`<select id="tamano"><option>Pequeño</option>…</select>`',
        },
        {
          type: 'fill',
          question: 'Completa el campo para el número de personas (de 1 a 10)',
          lang: 'html',
          code: '<label for="personas">Personas</label>\n<input type="___" id="personas" ___="1" ___="10">',
          blanks: [['number'], ['min'], ['max']],
          bank: ['number', 'min', 'max', 'text', 'step', 'range'],
          explanation: '`type="number"` con `min` y `max` limita el valor sin escribir JavaScript.',
        },
      ],
    },

    // ─────────────── 7
    {
      id: 'html-accesibilidad',
      icon: '♿',
      title: 'Accesibilidad',
      lesson: [
        {
          title: 'Una web para todas las personas',
          text: 'La **accesibilidad** (a11y) busca que cualquier persona pueda usar la web: personas ciegas que usan lectores de pantalla, quienes navegan solo con teclado, personas con baja visión o daltonismo…',
          points: [
            'El estándar internacional son las pautas **WCAG** (*Web Content Accessibility Guidelines*).',
            'En muchos países es **obligatoria** para webs públicas.',
            'Una web accesible es mejor para **todos**: también se usa mejor en el móvil o con el sol de frente.',
          ],
        },
        {
          title: 'Las reglas de oro',
          points: [
            '🖼️ Toda imagen informativa tiene un `alt` descriptivo.',
            '🏷️ Todo campo de formulario tiene su `<label>`.',
            '🔤 `<html lang="es">` para que el lector use la pronunciación correcta.',
            '📑 Títulos en orden: `h1` → `h2` → `h3`, sin saltos.',
            '🖱️ Usa `<button>` para acciones y `<a>` para navegar. Un `<div>` con un clic **no** funciona con teclado.',
            '🎨 Contraste suficiente entre texto y fondo.',
            '🔘 Los botones que solo tienen un icono necesitan un `aria-label`.',
          ],
          code: { lang: 'html', code: '<button aria-label="Añadir al carrito">🛒</button>' },
        },
        {
          title: 'Pruébalo tú',
          text: 'Prueba a recorrer cualquier web solo con la tecla **Tab**: ¿ves en todo momento dónde estás? ¿Puedes llegar a todos los botones? Así navegan muchas personas.',
          tip: 'Las DevTools de Chrome incluyen **Lighthouse**, que audita la accesibilidad de una página en un clic.',
        },
      ],
      challenges: [
        {
          type: 'code',
          kind: 'bug',
          question: 'Arregla la accesibilidad',
          instructions: 'Esta tarjeta tiene tres problemas de accesibilidad. Corrígelos:\n1. La imagen no tiene `alt`: añade uno descriptivo.\n2. El campo de correo no tiene etiqueta: añade un `<label for="correo">`.\n3. El botón del carrito solo tiene un icono: añádele `aria-label="Añadir al carrito"`.',
          files: {
            html: '<article>\n  <img src="brownie.jpg">\n  <h3>Brownie</h3>\n  <button>🛒</button>\n</article>\n\n<form>\n  <input type="email" id="correo" placeholder="Tu correo">\n  <button type="submit">Suscribirme</button>\n</form>\n',
          },
          checks: [
            { text: 'La imagen tiene un `alt` descriptivo', test: "return ($('img')?.getAttribute('alt') || '').trim().length >= 5" },
            { text: 'El campo de correo tiene un `<label for="correo">`', test: "return !!$('label[for=\"correo\"]') && text('label[for=\"correo\"]').length > 0" },
            { text: 'El botón del carrito tiene `aria-label`', test: "const b = $$('button').find(x => x.textContent.includes('🛒')); return !!b && (b.getAttribute('aria-label') || '').trim().length > 0" },
          ],
          solution: {
            html: '<article>\n  <img src="brownie.jpg" alt="Brownie de chocolate con nueces">\n  <h3>Brownie</h3>\n  <button aria-label="Añadir al carrito">🛒</button>\n</article>\n\n<form>\n  <label for="correo">Correo</label>\n  <input type="email" id="correo" placeholder="Tu correo">\n  <button type="submit">Suscribirme</button>\n</form>\n',
          },
          hint: 'El `placeholder` desaparece al escribir: **no sustituye** a un `<label>`.',
        },
        {
          type: 'pick',
          question: '¿Cuáles son buenas prácticas de accesibilidad?',
          hint: 'Selecciona todas las correctas.',
          options: [
            { text: 'Indicar el idioma con `<html lang="es">`', correct: true },
            { text: 'Usar `<button>` para las acciones', correct: true },
            { text: 'Mantener los títulos en orden (h1, h2, h3…)', correct: true },
            { text: 'Usar solo el color para indicar un error', correct: false },
            { text: 'Poner `placeholder` en lugar de `<label>`', correct: false },
            { text: 'Texto gris claro sobre fondo blanco', correct: false },
          ],
          explanation: 'El color por sí solo no basta (daltonismo), el `placeholder` desaparece al escribir y el bajo contraste dificulta la lectura.',
        },
        {
          type: 'quiz',
          question: '¿Qué son las WCAG?',
          options: ['Las pautas internacionales de accesibilidad web', 'Un framework de CSS', 'Un tipo de etiqueta HTML', 'Una herramienta para comprimir imágenes'],
          answer: 0,
          explanation: 'Las *Web Content Accessibility Guidelines* del W3C definen cómo hacer contenido web accesible.',
        },
        {
          type: 'quiz',
          question: '¿Por qué es mejor `<button>` que un `<div>` al que se le pone un evento de clic?',
          options: [
            'El botón se puede usar con teclado (Tab, Enter) y los lectores lo anuncian como botón',
            'El `<div>` no se puede pintar con CSS',
            'El botón carga más rápido',
            'No hay ninguna diferencia',
          ],
          answer: 0,
          explanation: '`<button>` trae gratis el foco, el teclado y el rol accesible. Un `<div>` hay que arreglarlo a mano (y casi nunca se hace bien).',
        },
        {
          type: 'classify',
          question: '¿Accesible o no accesible?',
          bins: [
            { id: 'si', label: '✅ Accesible' },
            { id: 'no', label: '❌ No accesible' },
          ],
          items: [
            { text: '`<img src="logo.png" alt="Logo de Café Pixel">`', bin: 'si' },
            { text: '`<img src="logo.png">`', bin: 'no' },
            { text: 'Un enlace que dice «haz clic aquí»', bin: 'no' },
            { text: 'Un enlace que dice «Ver el menú completo»', bin: 'si' },
            { text: '`<button aria-label="Cerrar">✕</button>`', bin: 'si' },
            { text: 'Pasar de un `<h1>` directamente a un `<h4>`', bin: 'no' },
          ],
          explanation: 'Los enlaces deben tener sentido fuera de contexto, porque los lectores de pantalla los listan sueltos.',
        },
      ],
    },

    // ─────────────── 8 · Proyecto
    {
      id: 'html-proyecto',
      icon: '☕',
      title: 'Proyecto: la web de Café Pixel',
      project: true,
      lesson: [
        {
          title: '¡Hora de construir!',
          mood: 'happy',
          text: 'Ya sabes lo necesario para hacer la **estructura completa** de la web de Café Pixel. Este es el plan:',
          code: {
            lang: 'html',
            code: 'header\n ├─ h1 «Café Pixel»\n └─ nav → ul → 3 enlaces\nmain\n ├─ section#menu\n │   ├─ h2 «Menú»\n │   └─ article (uno por producto)\n └─ section#contacto\n     └─ form\nfooter\n └─ p con ©',
          },
          tip: 'Todavía no tiene estilos: será fea, pero **bien estructurada**. En el mundo CSS la pondremos preciosa. 💅',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'Proyecto: estructura de Café Pixel',
          instructions: 'Construye la página completa:\n• `<header>` con un `<h1>` **Café Pixel** y un `<nav>` con una lista de **3 enlaces**.\n• `<main>` con una `<section id="menu">` que tenga un `<h2>` **Menú** y al menos **3 `<article>`** (cada uno con un `<h3>`).\n• Una `<section id="contacto">` con un `<form>` que tenga un campo de correo obligatorio y un botón.\n• Un `<footer>` con el símbolo ©.',
          files: { html: '<!-- Construye aquí la página de Café Pixel -->\n\n' },
          checks: [
            { text: '`<header>` con el `<h1>` **Café Pixel**', test: "return text('header h1') === 'Café Pixel'" },
            { text: '`<nav>` con 3 enlaces en una lista', test: "return $$('nav ul li a').length === 3" },
            { text: '`<main>` con `<section id="menu">`', test: "return !!$('main section#menu')" },
            { text: 'La sección del menú tiene el `<h2>` **Menú**', test: "return text('#menu h2') === 'Menú'" },
            { text: 'Al menos 3 `<article>` con su `<h3>`', test: "const a = $$('#menu article'); return a.length >= 3 && a.every(x => x.querySelector('h3'))" },
            { text: '`<section id="contacto">` con un `<form>`', test: "return !!$('section#contacto form')" },
            { text: 'El formulario tiene un correo obligatorio', test: "const c = $('#contacto input[type=\"email\"]'); return !!c && c.required" },
            { text: 'El formulario tiene un botón', test: "return !!$('#contacto form button')" },
            { text: '`<footer>` con el símbolo ©', test: "return text('footer').includes('©')" },
          ],
          solution: {
            html: '<header>\n  <h1>Café Pixel</h1>\n  <nav>\n    <ul>\n      <li><a href="#inicio">Inicio</a></li>\n      <li><a href="#menu">Menú</a></li>\n      <li><a href="#contacto">Contacto</a></li>\n    </ul>\n  </nav>\n</header>\n\n<main>\n  <section id="menu">\n    <h2>Menú</h2>\n    <article>\n      <h3>Espresso</h3>\n      <p>$6.000</p>\n    </article>\n    <article>\n      <h3>Capuchino</h3>\n      <p>$8.500</p>\n    </article>\n    <article>\n      <h3>Croissant</h3>\n      <p>$5.500</p>\n    </article>\n  </section>\n\n  <section id="contacto">\n    <h2>Contacto</h2>\n    <form>\n      <label for="correo">Correo</label>\n      <input type="email" id="correo" required>\n      <button type="submit">Enviar</button>\n    </form>\n  </section>\n</main>\n\n<footer>\n  <p>© 2026 Café Pixel</p>\n</footer>\n',
          },
          hint: 'Ve paso a paso: cada comprobación que se pone en verde es un avance. ¡No hace falta escribirlo todo de golpe!',
        },
        {
          type: 'code',
          question: 'Proyecto: la tarjeta de producto',
          instructions: 'Crea la tarjeta del capuchino como un `<article>` con:\n• una `<figure>` con una `<img>` (con `alt`) y un `<figcaption>`;\n• un `<h3>` **Capuchino**;\n• un párrafo con la clase `precio` que contenga **8.500**;\n• un `<button>` **Añadir al pedido**.',
          files: { html: '' },
          checks: [
            { text: 'Hay un `<article>`', test: "return !!$('article')" },
            { text: 'Tiene una `<figure>` con `<img>` y `<figcaption>`', test: "return !!$('article figure img') && !!$('article figure figcaption')" },
            { text: 'La imagen tiene `alt`', test: "return ($('article img')?.getAttribute('alt') || '').trim().length > 0" },
            { text: 'Tiene el `<h3>` **Capuchino**', test: "return text('article h3') === 'Capuchino'" },
            { text: 'Tiene un `<p class="precio">` con 8.500', test: "return text('article p.precio').includes('8.500')" },
            { text: 'Tiene el botón **Añadir al pedido**', test: "return text('article button') === 'Añadir al pedido'" },
          ],
          solution: {
            html: '<article>\n  <figure>\n    <img src="capuchino.jpg" alt="Capuchino con espuma de leche">\n    <figcaption>Recién preparado</figcaption>\n  </figure>\n  <h3>Capuchino</h3>\n  <p class="precio">$8.500</p>\n  <button>Añadir al pedido</button>\n</article>\n',
          },
          hint: 'Recuerda: `class="precio"` se escribe dentro de la etiqueta de apertura del `<p>`.',
        },
        {
          type: 'quiz',
          question: 'Repaso: ¿qué elemento debería envolver el contenido principal de la página (solo uno por página)?',
          options: ['`<main>`', '`<section>`', '`<body>`', '`<article>`'],
          answer: 0,
          explanation: '`<main>` marca el contenido principal. Los lectores de pantalla permiten saltar directamente a él.',
        },
      ],
    },
  ],
};
