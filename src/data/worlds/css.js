// ───────────────────────────── MUNDO 2: CSS ─────────────────────────────
// Los colores se comprueban con getComputedStyle, que siempre devuelve "rgb(r, g, b)".

const TARJETAS_HTML = '<div class="productos">\n  <article class="card">Espresso</article>\n  <article class="card">Capuchino</article>\n  <article class="card">Latte</article>\n</div>\n';
const TARJETAS_BASE = '.card {\n  background: #ecfdf5;\n  border: 2px solid #10b981;\n  border-radius: 12px;\n  padding: 16px;\n  font-weight: bold;\n}\n';

export const CSS = {
  id: 'css',
  short: 'CSS',
  name: 'CSS: el diseño',
  icon: '🎨',
  color: '#3b82f6',
  description: 'Colores, tipografía, cajas, Flexbox, Grid y diseño responsive: la web de Café Pixel se pone guapa.',
  levels: [
    // ─────────────── 1
    {
      id: 'css-selectores',
      icon: '🎯',
      title: 'Sintaxis y selectores',
      lesson: [
        {
          title: 'Anatomía de una regla CSS',
          text: 'CSS (*Cascading Style Sheets*) dice **cómo se ve** cada elemento. Se escribe en **reglas**:',
          code: { lang: 'css', code: 'h1 {                 /* selector: a quién */\n  color: #10b981;     /* propiedad: valor; */\n  font-size: 32px;\n}' },
          points: [
            'El **selector** elige los elementos.',
            'Entre llaves van las **declaraciones** `propiedad: valor;`.',
            'Cada declaración termina en punto y coma.',
          ],
        },
        {
          title: 'Tres formas de añadir CSS',
          codes: [
            { lang: 'html', title: '✅ Archivo externo (recomendado)', code: '<link rel="stylesheet" href="estilos.css">' },
            { lang: 'html', title: 'Etiqueta <style>', code: '<style>\n  p { color: gray; }\n</style>' },
            { lang: 'html', title: '⚠️ En línea (evítalo)', code: '<p style="color: red">Hola</p>' },
          ],
          tip: 'En este juego, la pestaña **estilos.css** funciona como un archivo externo enlazado.',
        },
        {
          title: 'Los selectores más usados',
          table: {
            head: ['Selector', 'Elige…'],
            rows: [
              ['`p`', 'Todas las etiquetas `<p>`'],
              ['`.destacado`', 'Los elementos con `class="destacado"`'],
              ['`#logo`', 'El elemento con `id="logo"`'],
              ['`nav a`', 'Los `<a>` que están **dentro** de un `<nav>`'],
              ['`h1, h2`', 'Los `<h1>` **y** los `<h2>`'],
              ['`a:hover`', 'Los enlaces cuando el ratón está encima'],
              ['`li:first-child`', 'El primer `<li>` de su lista'],
              ['`input[type="email"]`', 'Los inputs con ese atributo'],
            ],
          },
        },
        {
          title: 'La cascada y la especificidad',
          text: 'Cuando varias reglas chocan, ¿cuál gana? CSS decide así:',
          points: [
            '1️⃣ **Especificidad**: `#id` > `.clase` > `etiqueta`.',
            '2️⃣ Si empatan, gana la que esté **escrita después**.',
            '3️⃣ `!important` lo fuerza todo (úsalo casi nunca).',
            'Además, algunas propiedades se **heredan**: si el `body` tiene `color`, sus hijos también.',
          ],
          code: { lang: 'css', code: 'p { color: gray; }          /* especificidad baja  */\n.aviso { color: orange; }   /* gana a p             */\n#alerta { color: red; }     /* gana a todo lo demás */' },
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'El título en verde Café Pixel',
          instructions: 'Escribe una regla para que el `<h1>` tenga el color `#10b981`.',
          files: { html: '<h1>Café Pixel</h1>\n<p>El mejor café de la ciudad.</p>\n', css: '/* Escribe tu regla aquí */\n' },
          editable: ['css'],
          checks: [{ text: 'El `<h1>` es de color `#10b981`', test: "return style('h1', 'color') === 'rgb(16, 185, 129)'" }],
          solution: { css: 'h1 {\n  color: #10b981;\n}\n' },
          hint: '`h1 { color: #10b981; }`',
        },
        {
          type: 'code',
          question: 'Selectores de clase y de id',
          instructions: '1. Los elementos con la clase `destacado` deben tener fondo `#fef3c7`.\n2. El elemento con `id="oferta"` debe tener el texto en color `#dc2626`.',
          files: {
            html: '<p class="destacado">Café del día: Colombia Huila</p>\n<p>Abierto de 7:00 a 20:00</p>\n<p class="destacado">Wifi gratis</p>\n<p id="oferta">¡2x1 los lunes!</p>\n',
            css: '\n',
          },
          editable: ['css'],
          checks: [
            { text: 'Los `.destacado` tienen fondo `#fef3c7`', test: "const d = $$('.destacado'); return d.length === 2 && d.every(e => style(e, 'backgroundColor') === 'rgb(254, 243, 199)')" },
            { text: 'El párrafo sin clase no cambia de fondo', test: "const p = $$('p').find(x => !x.className && !x.id); return style(p, 'backgroundColor') === 'rgba(0, 0, 0, 0)'" },
            { text: '`#oferta` tiene el texto en `#dc2626`', test: "return style('#oferta', 'color') === 'rgb(220, 38, 38)'" },
          ],
          solution: { css: '.destacado {\n  background-color: #fef3c7;\n}\n\n#oferta {\n  color: #dc2626;\n}\n' },
          hint: 'Las clases se seleccionan con punto (`.destacado`) y los ids con almohadilla (`#oferta`).',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿De qué color se verá el párrafo?',
          snippet: { lang: 'html', code: '<style>\n  p { color: gray; }\n  #aviso { color: green; }\n  .nota { color: blue; }\n</style>\n\n<p class="nota" id="aviso">¿Qué color tengo?</p>' },
          options: ['Verde', 'Azul', 'Gris', 'Negro'],
          answer: 0,
          explanation: 'El selector de id (`#aviso`) es el más específico, así que gana aunque la regla `.nota` esté escrita después.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: 'Dos reglas con la **misma** especificidad. ¿De qué color se ve el botón?',
          snippet: { lang: 'css', code: '.boton { background: green; }\n.boton { background: purple; }' },
          options: ['Morado', 'Verde', 'Una mezcla de los dos', 'Ninguno: hay un error'],
          answer: 0,
          explanation: 'Cuando la especificidad empata, gana la regla escrita **después**. Eso es la «cascada».',
        },
        {
          type: 'fill',
          question: 'Completa los selectores',
          lang: 'css',
          code: '/* elementos con class="precio" */\n___precio { font-weight: bold; }\n\n/* el elemento con id="logo" */\n___logo { width: 120px; }\n\n/* enlaces cuando pasas el ratón por encima */\na___ { text-decoration: underline; }',
          blanks: [['.'], ['#'], [':hover']],
          bank: ['.', '#', ':hover', '::', '>', '*'],
          explanation: '`.` para clases, `#` para ids y `:hover` es una pseudoclase de estado.',
        },
        {
          type: 'code',
          question: 'Enlaces del menú',
          instructions: 'Usa un **selector descendiente** para que solo los enlaces que están **dentro del `<nav>`** sean de color `#6366f1` y no tengan subrayado (`text-decoration: none`). El enlace del pie no debe cambiar.',
          files: {
            html: '<nav>\n  <a href="#menu">Menú</a>\n  <a href="#contacto">Contacto</a>\n</nav>\n<p>Síguenos en <a href="#" class="pie">Instagram</a></p>\n',
            css: '\n',
          },
          editable: ['css'],
          checks: [
            { text: 'Los enlaces del `<nav>` son `#6366f1`', test: "return $$('nav a').every(a => style(a, 'color') === 'rgb(99, 102, 241)')" },
            { text: 'Los enlaces del `<nav>` no están subrayados', test: "return $$('nav a').every(a => style(a, 'textDecorationLine') === 'none')" },
            { text: 'El enlace del pie no cambia', test: "return style('a.pie', 'color') !== 'rgb(99, 102, 241)' && style('a.pie', 'textDecorationLine') === 'underline'" },
          ],
          solution: { css: 'nav a {\n  color: #6366f1;\n  text-decoration: none;\n}\n' },
          hint: 'El selector `nav a` significa «los `a` que están dentro de un `nav`».',
        },
      ],
    },

    // ─────────────── 2
    {
      id: 'css-caja',
      icon: '📦',
      title: 'El modelo de caja',
      lesson: [
        {
          title: 'Todo es una caja',
          text: 'Para CSS, **cada elemento es una caja** con cuatro capas, de dentro hacia fuera:',
          demo: {
            html: '<div class="m">margin<div class="b">border<div class="p">padding<div class="c">contenido</div></div></div></div>',
            css: 'body{font:600 13px system-ui;text-align:center}.m{background:#fde68a;padding:14px}.b{background:#1f2937;color:#fff;padding:14px}.p{background:#86efac;padding:14px;color:#14532d}.c{background:#93c5fd;padding:14px;color:#1e3a8a}',
            height: 190,
          },
          points: [
            '**content**: el contenido (`width` y `height`).',
            '**padding**: el relleno **interior**, entre el contenido y el borde.',
            '**border**: el borde.',
            '**margin**: el espacio **exterior**, que separa la caja de las demás.',
          ],
        },
        {
          title: 'Escribir padding, margin y border',
          code: {
            lang: 'css',
            code: '.card {\n  padding: 16px;              /* los 4 lados */\n  padding: 8px 16px;          /* vertical | horizontal */\n  margin: 0 auto;             /* centra horizontalmente un bloque con ancho */\n  margin-bottom: 24px;        /* un solo lado */\n  border: 2px solid #10b981;  /* grosor | estilo | color */\n  border-radius: 12px;        /* esquinas redondeadas */\n}',
          },
        },
        {
          title: 'El truco de box-sizing',
          text: 'Por defecto (`content-box`), `width` es solo el contenido: el padding y el borde se **suman**. Con `border-box`, `width` incluye padding y borde, que es mucho más intuitivo:',
          code: { lang: 'css', code: '*, *::before, *::after {\n  box-sizing: border-box;\n}' },
          tip: 'Casi todos los proyectos profesionales empiezan con esta regla.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'La tarjeta de producto',
          instructions: 'Dale a `.card`:\n• `padding` de **16px**;\n• un borde de **2px**, sólido (`solid`), color `#10b981`;\n• `border-radius` de **12px**;\n• `margin-bottom` de **24px**.',
          files: { html: '<article class="card">\n  <h3>Capuchino</h3>\n  <p>$8.500</p>\n</article>\n<article class="card">\n  <h3>Latte</h3>\n  <p>$9.000</p>\n</article>\n', css: '.card {\n  \n}\n' },
          editable: ['css'],
          checks: [
            { text: 'Padding de 16px', test: "return ['paddingTop','paddingRight','paddingBottom','paddingLeft'].every(p => style('.card', p) === '16px')" },
            { text: 'Borde de 2px', test: "return style('.card', 'borderTopWidth') === '2px' && style('.card', 'borderLeftWidth') === '2px'" },
            { text: 'Borde sólido y color `#10b981`', test: "return style('.card', 'borderTopStyle') === 'solid' && style('.card', 'borderTopColor') === 'rgb(16, 185, 129)'" },
            { text: 'Esquinas redondeadas de 12px', test: "return style('.card', 'borderTopLeftRadius') === '12px'" },
            { text: 'Margen inferior de 24px', test: "return style('.card', 'marginBottom') === '24px'" },
          ],
          solution: { css: '.card {\n  padding: 16px;\n  border: 2px solid #10b981;\n  border-radius: 12px;\n  margin-bottom: 24px;\n}\n' },
          hint: '`border: 2px solid #10b981;` define grosor, estilo y color en una sola línea.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: 'Con `box-sizing: content-box` (el valor por defecto), ¿cuánto mide de ancho la caja en pantalla?',
          snippet: { lang: 'css', code: '.caja {\n  width: 200px;\n  padding: 20px;\n  border: 5px solid black;\n}' },
          options: ['250px', '200px', '220px', '245px'],
          answer: 0,
          explanation: '200 de contenido + 20 + 20 de padding + 5 + 5 de borde = 250px. Con `border-box` mediría 200px exactos.',
        },
        {
          type: 'code',
          question: 'Centra la caja',
          instructions: 'Haz que `.caja` mida **300px** de ancho y quede **centrada horizontalmente** dentro de `.contenedor` usando `margin`.',
          files: { html: '<div class="contenedor">\n  <div class="caja">¡Céntrame!</div>\n</div>\n', css: '.contenedor {\n  background: #e0e7ff;\n  padding: 20px 0;\n}\n\n.caja {\n  background: #6366f1;\n  color: white;\n  padding: 12px;\n  box-sizing: border-box;\n}\n' },
          editable: ['css'],
          checks: [
            { text: 'La caja mide 300px de ancho', test: "return Math.round(rect('.caja').width) === 300" },
            { text: 'Está centrada horizontalmente', test: "const r = rect('.caja'), p = rect('.contenedor'); return Math.abs((r.left - p.left) - (p.right - r.right)) < 2" },
          ],
          solution: { css: '.contenedor {\n  background: #e0e7ff;\n  padding: 20px 0;\n}\n\n.caja {\n  background: #6366f1;\n  color: white;\n  padding: 12px;\n  box-sizing: border-box;\n  width: 300px;\n  margin: 0 auto;\n}\n' },
          hint: 'Un bloque con ancho fijo se centra con `margin: 0 auto;`.',
        },
        {
          type: 'classify',
          question: '¿Padding o margin?',
          bins: [
            { id: 'padding', label: '🟩 padding (interior)' },
            { id: 'margin', label: '🟨 margin (exterior)' },
          ],
          items: [
            { text: 'Separar el texto del borde de un botón', bin: 'padding' },
            { text: 'Separar una tarjeta de la siguiente', bin: 'margin' },
            { text: 'Dejar aire dentro de una tarjeta', bin: 'padding' },
            { text: 'Centrar un bloque con `auto`', bin: 'margin' },
            { text: 'Que el color de fondo cubra el espacio extra', bin: 'padding' },
          ],
          explanation: 'El padding está dentro del borde (y lleva el fondo del elemento). El margin está fuera y es transparente.',
        },
        {
          type: 'fill',
          question: 'Haz que el ancho incluya el padding y el borde',
          lang: 'css',
          code: '*, *::before, *::after {\n  ___: ___;\n}',
          blanks: [['box-sizing'], ['border-box']],
          bank: ['box-sizing', 'border-box', 'content-box', 'display', 'block'],
          explanation: 'Con `box-sizing: border-box`, `width` es el ancho total visible.',
        },
      ],
    },

    // ─────────────── 3
    {
      id: 'css-tipografia',
      icon: '🖋️',
      title: 'Colores, unidades y tipografía',
      lesson: [
        {
          title: 'Formas de escribir un color',
          table: {
            head: ['Formato', 'Ejemplo', 'Notas'],
            rows: [
              ['Nombre', '`tomato`', 'Unos 140 nombres predefinidos'],
              ['Hexadecimal', '`#10b981`', 'Rojo, verde y azul en base 16'],
              ['rgb / rgba', '`rgb(16, 185, 129)` · `rgba(0, 0, 0, 0.5)`', 'La «a» es la opacidad (0 a 1)'],
              ['hsl', '`hsl(160, 84%, 39%)`', 'Tono, saturación y luminosidad: muy intuitivo'],
            ],
          },
        },
        {
          title: 'Unidades de medida',
          table: {
            head: ['Unidad', 'Tipo', 'Relativa a…'],
            rows: [
              ['`px`', 'Absoluta', 'Píxeles de pantalla'],
              ['`%`', 'Relativa', 'El tamaño del elemento padre'],
              ['`em`', 'Relativa', 'El tamaño de letra del **propio elemento** (o el del padre)'],
              ['`rem`', 'Relativa', 'El tamaño de letra de la **raíz** (`<html>`, normalmente 16px)'],
              ['`vw` / `vh`', 'Relativa', '1% del ancho / alto de la ventana'],
            ],
          },
          tip: 'Para tamaños de letra se recomienda `rem`: respeta la configuración de accesibilidad del usuario.',
        },
        {
          title: 'Tipografía',
          code: {
            lang: 'css',
            code: 'body {\n  font-family: "Outfit", system-ui, sans-serif;  /* fuente y alternativas */\n  font-size: 1rem;      /* 16px */\n  line-height: 1.6;     /* interlineado */\n  color: #1f2937;\n}\nh1 {\n  font-size: 2.5rem;    /* 40px */\n  font-weight: 800;     /* grosor: 100 a 900 */\n  text-align: center;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n}',
          },
          demo: {
            html: '<h1>Café Pixel</h1><p>El mejor café de especialidad de la ciudad, recién tostado cada mañana.</p>',
            css: 'body{font-family:system-ui,sans-serif;line-height:1.6;color:#1f2937}h1{font-size:2.5rem;font-weight:800;text-align:center;text-transform:uppercase;letter-spacing:.05em;color:#047857;margin:0 0 8px}',
            height: 150,
          },
        },
      ],
      challenges: [
        {
          type: 'classify',
          question: '¿Unidad absoluta o relativa?',
          bins: [
            { id: 'abs', label: '📏 Absoluta' },
            { id: 'rel', label: '🔁 Relativa' },
          ],
          items: [
            { text: '`px`', bin: 'abs' },
            { text: '`rem`', bin: 'rel' },
            { text: '`%`', bin: 'rel' },
            { text: '`em`', bin: 'rel' },
            { text: '`vw`', bin: 'rel' },
          ],
          explanation: 'Solo `px` es absoluta. Las relativas se adaptan al contexto, algo clave para el diseño responsive.',
        },
        {
          type: 'code',
          question: 'La tipografía de Café Pixel',
          instructions: '1. El `body` usa una fuente `sans-serif` y un `line-height` de **1.6**.\n2. El `h1` mide **2.5rem** (40px), con `font-weight` **800** y centrado.',
          files: { html: '<h1>Café Pixel</h1>\n<p>Café de especialidad, recién tostado cada mañana en el corazón de la ciudad. Te esperamos.</p>\n', css: 'body {\n  \n}\n\nh1 {\n  \n}\n' },
          editable: ['css'],
          checks: [
            { text: 'El `body` usa `sans-serif`', test: "return style('body', 'fontFamily').includes('sans-serif')" },
            { text: 'El `body` tiene `line-height: 1.6`', test: "const lh = parseFloat(style('p', 'lineHeight')), fs = parseFloat(style('p', 'fontSize')); return Math.abs(lh / fs - 1.6) < 0.01" },
            { text: 'El `h1` mide 2.5rem (40px)', test: "return style('h1', 'fontSize') === '40px' && /2\\.5rem/.test(src.css)" },
            { text: 'El `h1` tiene grosor 800', test: "return style('h1', 'fontWeight') === '800'" },
            { text: 'El `h1` está centrado', test: "return style('h1', 'textAlign') === 'center'" },
          ],
          solution: { css: 'body {\n  font-family: system-ui, sans-serif;\n  line-height: 1.6;\n}\n\nh1 {\n  font-size: 2.5rem;\n  font-weight: 800;\n  text-align: center;\n}\n' },
          hint: '`line-height` sin unidad (1.6) multiplica el tamaño de letra.',
        },
        {
          type: 'quiz',
          question: 'Si `<html>` tiene `font-size: 16px`, ¿cuánto mide `1.5rem`?',
          options: ['24px', '16px', '1.5px', '15px'],
          answer: 0,
          explanation: '`rem` se multiplica por el tamaño de letra de la raíz: 1.5 × 16 = 24px.',
        },
        {
          type: 'code',
          question: 'Una capa semitransparente',
          instructions: 'Dale a `.velo` un fondo **negro al 50% de opacidad** usando `rgba`, y el texto en blanco (`white`).',
          files: { html: '<div class="foto">\n  <div class="velo">¡Oferta especial!</div>\n</div>\n', css: '.foto {\n  background: linear-gradient(135deg, #f59e0b, #10b981);\n  padding: 40px;\n}\n\n.velo {\n  padding: 20px;\n  font-size: 24px;\n  text-align: center;\n}\n' },
          editable: ['css'],
          checks: [
            { text: 'El fondo es `rgba(0, 0, 0, 0.5)`', test: "return style('.velo', 'backgroundColor') === 'rgba(0, 0, 0, 0.5)'" },
            { text: 'El texto es blanco', test: "return style('.velo', 'color') === 'rgb(255, 255, 255)'" },
          ],
          solution: { css: '.foto {\n  background: linear-gradient(135deg, #f59e0b, #10b981);\n  padding: 40px;\n}\n\n.velo {\n  padding: 20px;\n  font-size: 24px;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n}\n' },
          hint: 'En `rgba(r, g, b, a)`, el último valor es la opacidad: 0.5 = 50%.',
        },
        {
          type: 'quiz',
          question: '¿Por qué se recomienda `rem` en lugar de `px` para el tamaño de la letra?',
          options: [
            'Porque respeta el tamaño de letra que el usuario configuró en su navegador',
            'Porque `px` ya no funciona en navegadores modernos',
            'Porque `rem` hace la letra siempre más grande',
            'Porque `rem` carga más rápido',
          ],
          answer: 0,
          explanation: 'Si una persona con baja visión agranda la letra en su navegador, los tamaños en `rem` crecen con ella.',
        },
      ],
    },

    // ─────────────── 4
    {
      id: 'css-posicion',
      icon: '📐',
      title: 'Display y posicionamiento',
      lesson: [
        {
          title: 'display: cómo se coloca un elemento',
          table: {
            head: ['Valor', 'Comportamiento', 'Ejemplos por defecto'],
            rows: [
              ['`block`', 'Ocupa todo el ancho y empieza en una línea nueva', '`div`, `p`, `h1`, `section`'],
              ['`inline`', 'Va dentro del texto; ignora `width` y `height`', '`span`, `a`, `strong`'],
              ['`inline-block`', 'En línea, pero acepta ancho y alto', '`button`, `img`'],
              ['`none`', 'Desaparece por completo (no ocupa espacio)', '—'],
              ['`flex` / `grid`', 'Activa Flexbox o Grid en sus hijos', '¡Próximos niveles!'],
            ],
          },
        },
        {
          title: 'position: sacar elementos del flujo',
          table: {
            head: ['Valor', 'Se coloca respecto a…'],
            rows: [
              ['`static`', 'Nada: el flujo normal (por defecto)'],
              ['`relative`', 'Su posición normal; además sirve de **referencia** a sus hijos absolutos'],
              ['`absolute`', 'El ancestro posicionado más cercano'],
              ['`fixed`', 'La ventana: no se mueve al hacer scroll'],
              ['`sticky`', 'Normal hasta que, al hacer scroll, se «pega»'],
            ],
          },
          code: { lang: 'css', code: '.card { position: relative; }\n.etiqueta {\n  position: absolute;\n  top: 8px;\n  right: 8px;   /* esquina superior derecha de la card */\n  z-index: 2;   /* qué capa queda encima */\n}' },
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'La etiqueta «Nuevo»',
          instructions: 'Coloca `.etiqueta` en la **esquina superior derecha** de la tarjeta:\n1. Haz que `.card` sea la referencia (`position: relative`).\n2. Pon `.etiqueta` en `position: absolute` con `top: 8px` y `right: 8px`.',
          files: {
            html: '<article class="card">\n  <span class="etiqueta">Nuevo</span>\n  <h3>Cold brew</h3>\n  <p>Café infusionado en frío durante 18 horas.</p>\n</article>\n',
            css: '.card {\n  width: 280px;\n  padding: 20px;\n  border: 2px solid #3b82f6;\n  border-radius: 12px;\n}\n\n.etiqueta {\n  background: #f97316;\n  color: white;\n  padding: 2px 10px;\n  border-radius: 99px;\n  font-size: 13px;\n}\n',
          },
          editable: ['css'],
          checks: [
            { text: '`.card` tiene `position: relative`', test: "return style('.card', 'position') === 'relative'" },
            { text: '`.etiqueta` tiene `position: absolute`', test: "return style('.etiqueta', 'position') === 'absolute'" },
            { text: 'Está en la esquina superior derecha de la tarjeta', test: "const card = $('.card'), c = rect(card), e = rect('.etiqueta'), b = card.clientTop; return Math.abs(e.top - c.top - b - 8) < 2 && Math.abs(c.right - b - e.right - 8) < 2" },
          ],
          solution: {
            css: '.card {\n  width: 280px;\n  padding: 20px;\n  border: 2px solid #3b82f6;\n  border-radius: 12px;\n  position: relative;\n}\n\n.etiqueta {\n  background: #f97316;\n  color: white;\n  padding: 2px 10px;\n  border-radius: 99px;\n  font-size: 13px;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n}\n',
          },
          hint: 'Sin `position: relative` en la tarjeta, la etiqueta se colocaría respecto a toda la página.',
        },
        {
          type: 'quiz',
          question: '¿Qué diferencia hay entre `display: none` y `visibility: hidden`?',
          options: [
            '`display: none` lo quita y no ocupa espacio; `visibility: hidden` lo oculta pero sigue ocupando su hueco',
            'Son exactamente iguales',
            '`visibility: hidden` borra el elemento del HTML',
            '`display: none` solo funciona con imágenes',
          ],
          answer: 0,
          explanation: 'Con `visibility: hidden` el elemento es invisible pero el espacio se mantiene.',
        },
        {
          type: 'classify',
          question: '¿Qué `position` usarías?',
          bins: [
            { id: 'fixed', label: '`fixed`' },
            { id: 'absolute', label: '`absolute`' },
            { id: 'sticky', label: '`sticky`' },
            { id: 'relative', label: '`relative`' },
          ],
          items: [
            { text: 'Un botón de WhatsApp siempre visible en la esquina de la pantalla', bin: 'fixed' },
            { text: 'Un icono de corazón en la esquina de una foto', bin: 'absolute' },
            { text: 'Un menú que se queda pegado arriba al hacer scroll', bin: 'sticky' },
            { text: 'La tarjeta que sirve de referencia a su etiqueta', bin: 'relative' },
          ],
          explanation: '`fixed` → la ventana; `absolute` → su ancestro posicionado; `sticky` → se pega al hacer scroll; `relative` → sirve de referencia.',
        },
        {
          type: 'code',
          question: 'Oculta el aviso',
          instructions: 'Los elementos con la clase `oculto` deben **desaparecer por completo** (sin dejar hueco).',
          files: { html: '<p>Bienvenidos a Café Pixel</p>\n<p class="oculto">Este aviso no debería verse</p>\n<p>Abierto de 7:00 a 20:00</p>\n', css: '\n' },
          editable: ['css'],
          checks: [
            { text: '`.oculto` tiene `display: none`', test: "return style('.oculto', 'display') === 'none'" },
            { text: 'Los demás párrafos se siguen viendo', test: "return $$('p:not(.oculto)').every(p => style(p, 'display') === 'block')" },
          ],
          solution: { css: '.oculto {\n  display: none;\n}\n' },
          hint: '`display: none` lo quita del todo.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué pasa con el `width` de este enlace?',
          snippet: { lang: 'css', code: 'a {\n  width: 300px;   /* el <a> es inline por defecto */\n  background: yellow;\n}' },
          options: ['Se ignora: los elementos inline no aceptan width', 'El enlace mide 300px', 'El enlace ocupa toda la línea', 'Da un error'],
          answer: 0,
          explanation: 'Para que lo acepte habría que usar `display: inline-block` o `block`.',
        },
      ],
    },

    // ─────────────── 5
    {
      id: 'css-flexbox',
      icon: '🧩',
      title: 'Flexbox',
      lesson: [
        {
          title: 'Flexbox: alinear en una dirección',
          text: 'Con `display: flex` en un **contenedor**, sus hijos se colocan en fila y puedes alinearlos fácilmente.',
          code: { lang: 'css', code: '.productos {\n  display: flex;\n  gap: 16px;\n}' },
          demo: { html: '<div class="productos"><div>Espresso</div><div>Capuchino</div><div>Latte</div></div>', css: '.productos{display:flex;gap:16px}.productos div{background:#dbeafe;border:2px solid #3b82f6;border-radius:10px;padding:14px;font-weight:bold}', height: 90 },
        },
        {
          title: 'Los dos ejes',
          points: [
            '↔️ **Eje principal**: el de `flex-direction` (`row` = horizontal, `column` = vertical).',
            '↕️ **Eje cruzado**: el perpendicular.',
            '`justify-content` alinea en el **eje principal**.',
            '`align-items` alinea en el **eje cruzado**.',
          ],
          table: {
            head: ['Propiedad', 'Valores frecuentes'],
            rows: [
              ['`flex-direction`', '`row` · `column`'],
              ['`justify-content`', '`flex-start` · `center` · `space-between` · `space-around` · `flex-end`'],
              ['`align-items`', '`stretch` · `center` · `flex-start` · `flex-end`'],
              ['`flex-wrap`', '`wrap` para saltar de línea si no caben'],
              ['`gap`', 'Separación entre hijos'],
            ],
          },
        },
        {
          title: 'Ejemplos clásicos',
          codes: [
            { lang: 'css', title: 'Centrar en ambos ejes', code: '.contenedor {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}' },
            { lang: 'css', title: 'Logo a la izquierda, menú a la derecha', code: 'header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}' },
          ],
          demo: { html: '<header><b>☕ Café Pixel</b><nav>Menú · Contacto</nav></header>', css: 'header{display:flex;justify-content:space-between;align-items:center;background:#1e3a8a;color:#fff;padding:14px 18px;border-radius:10px}', height: 80 },
          tip: 'En los hijos, `flex: 1` hace que crezcan para repartir el espacio libre.',
        },
      ],
      challenges: [
        {
          type: 'code',
          kind: 'match',
          question: 'Los productos en fila',
          instructions: 'Coloca las tres tarjetas **en una fila** con una separación (`gap`) de **16px**. Compara tu resultado con el 🎯 objetivo.',
          files: { html: TARJETAS_HTML, css: TARJETAS_BASE + '\n.productos {\n  \n}\n' },
          editable: ['css'],
          target: true,
          previewHeight: 150,
          checks: [
            { text: '`.productos` usa `display: flex`', test: "return style('.productos', 'display') === 'flex'" },
            { text: 'Las tres tarjetas están a la misma altura', test: "const c = $$('.card').map(e => Math.round(rect(e).top)); return c.length === 3 && c.every(t => t === c[0])" },
            { text: 'Separación de 16px', test: "const c = $$('.card').map(e => rect(e)); return Math.round(c[1].left - c[0].right) === 16" },
          ],
          solution: { css: TARJETAS_BASE + '\n.productos {\n  display: flex;\n  gap: 16px;\n}\n' },
          hint: '`display: flex;` y `gap: 16px;` en el contenedor `.productos`.',
        },
        {
          type: 'code',
          kind: 'match',
          question: 'El centrado perfecto',
          instructions: 'Centra `.taza` **horizontal y verticalmente** dentro de `.escenario` usando Flexbox.',
          files: { html: '<div class="escenario">\n  <div class="taza">☕</div>\n</div>\n', css: '.escenario {\n  height: 180px;\n  background: #dbeafe;\n  border-radius: 16px;\n}\n\n.taza {\n  font-size: 48px;\n}\n' },
          editable: ['css'],
          target: true,
          previewHeight: 210,
          checks: [
            { text: '`.escenario` usa `display: flex`', test: "return style('.escenario', 'display') === 'flex'" },
            { text: 'Centrada horizontalmente', test: "const e = rect('.escenario'), t = rect('.taza'); return Math.abs((t.left + t.width / 2) - (e.left + e.width / 2)) < 3" },
            { text: 'Centrada verticalmente', test: "const e = rect('.escenario'), t = rect('.taza'); return Math.abs((t.top + t.height / 2) - (e.top + e.height / 2)) < 3" },
          ],
          solution: { css: '.escenario {\n  height: 180px;\n  background: #dbeafe;\n  border-radius: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.taza {\n  font-size: 48px;\n}\n' },
          hint: '`justify-content` centra en el eje principal y `align-items` en el cruzado.',
        },
        {
          type: 'code',
          kind: 'match',
          question: 'La barra de navegación',
          instructions: 'En el `<header>`: el logo pegado a la **izquierda**, el menú pegado a la **derecha** y ambos **centrados verticalmente**.',
          files: {
            html: '<header>\n  <div class="logo">☕ Café Pixel</div>\n  <nav>\n    <a href="#">Menú</a>\n    <a href="#">Contacto</a>\n  </nav>\n</header>\n',
            css: 'header {\n  background: #1e3a8a;\n  color: white;\n  padding: 12px 20px;\n  height: 70px;\n  box-sizing: border-box;\n}\n\n.logo {\n  font-size: 22px;\n  font-weight: bold;\n}\n\nnav a {\n  color: white;\n  margin-left: 16px;\n}\n',
          },
          editable: ['css'],
          target: true,
          previewHeight: 110,
          checks: [
            { text: '`header` usa Flexbox', test: "return style('header', 'display') === 'flex'" },
            { text: 'El logo está a la izquierda', test: "return Math.abs(rect('.logo').left - rect('header').left - 20) < 2" },
            { text: 'El menú está a la derecha', test: "return Math.abs(rect('header').right - 20 - rect('nav').right) < 2" },
            { text: 'Ambos centrados verticalmente', test: "const h = rect('header'), n = rect('nav'), l = rect('.logo'); const mid = h.top + h.height / 2; return Math.abs(n.top + n.height / 2 - mid) < 3 && Math.abs(l.top + l.height / 2 - mid) < 3" },
          ],
          solution: {
            css: 'header {\n  background: #1e3a8a;\n  color: white;\n  padding: 12px 20px;\n  height: 70px;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.logo {\n  font-size: 22px;\n  font-weight: bold;\n}\n\nnav a {\n  color: white;\n  margin-left: 16px;\n}\n',
          },
          hint: '`justify-content: space-between` empuja el primer hijo a un extremo y el último al otro.',
        },
        {
          type: 'code',
          question: 'Tarjetas en columna',
          instructions: 'Coloca las tarjetas **una debajo de otra** con Flexbox (cambia la dirección del eje principal) y una separación de **12px**.',
          files: { html: TARJETAS_HTML, css: TARJETAS_BASE + '\n.productos {\n  display: flex;\n  \n}\n' },
          editable: ['css'],
          previewHeight: 220,
          checks: [
            { text: '`flex-direction: column`', test: "return style('.productos', 'flexDirection') === 'column'" },
            { text: 'Separación de 12px entre tarjetas', test: "const c = $$('.card').map(e => rect(e)); return Math.round(c[1].top - c[0].bottom) === 12" },
          ],
          solution: { css: TARJETAS_BASE + '\n.productos {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n' },
          hint: '`flex-direction: column;` y `gap: 12px;`',
        },
        {
          type: 'fill',
          question: 'Completa: hijos repartidos con espacio entre ellos y centrados en vertical',
          lang: 'css',
          code: '.barra {\n  display: ___;\n  ___: space-between;\n  ___: center;\n}',
          blanks: [['flex'], ['justify-content'], ['align-items']],
          bank: ['flex', 'justify-content', 'align-items', 'grid', 'text-align', 'align-content'],
          explanation: '`justify-content` actúa en el eje principal (horizontal en una fila) y `align-items` en el cruzado.',
        },
        {
          type: 'quiz',
          question: 'Con `flex-direction: column`, ¿qué propiedad centra los hijos **horizontalmente**?',
          options: ['`align-items: center`', '`justify-content: center`', '`text-align: center`', '`flex-wrap: center`'],
          answer: 0,
          explanation: 'En columna, el eje principal es el vertical, así que el horizontal pasa a ser el eje cruzado: `align-items`.',
        },
      ],
    },

    // ─────────────── 6
    {
      id: 'css-grid',
      icon: '🔲',
      title: 'CSS Grid',
      lesson: [
        {
          title: 'Grid: filas y columnas a la vez',
          text: 'Flexbox trabaja en **una** dimensión. **Grid** trabaja en **dos**: filas y columnas.',
          code: { lang: 'css', code: '.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);  /* 3 columnas iguales */\n  gap: 16px;\n}' },
          demo: { html: '<div class="g"><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div></div>', css: '.g{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}.g div{background:#dbeafe;border:2px solid #3b82f6;border-radius:10px;padding:14px;text-align:center;font-weight:bold}', height: 140 },
          points: ['`fr` = una **fracción** del espacio libre.', '`repeat(3, 1fr)` = `1fr 1fr 1fr`.'],
        },
        {
          title: 'Ocupar varias celdas y nombrar zonas',
          codes: [
            { lang: 'css', title: 'Ocupar 2 columnas', code: '.destacado {\n  grid-column: span 2;\n}' },
            { lang: 'css', title: 'Zonas con nombre', code: '.pagina {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  grid-template-areas:\n    "cabecera cabecera"\n    "lateral  contenido";\n}\nheader { grid-area: cabecera; }\naside  { grid-area: lateral; }\nmain   { grid-area: contenido; }' },
          ],
        },
        {
          title: 'Responsive sin media queries',
          code: { lang: 'css', code: '.productos {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}' },
          tip: 'Crea tantas columnas de al menos 200px como quepan. ¡Se adapta sola al ancho de la pantalla!',
        },
      ],
      challenges: [
        {
          type: 'code',
          kind: 'match',
          question: 'La galería de 3 columnas',
          instructions: 'Convierte `.galeria` en una rejilla de **3 columnas iguales** con `gap` de **12px**.',
          files: {
            html: '<div class="galeria">\n  <div class="item">Espresso</div>\n  <div class="item">Capuchino</div>\n  <div class="item">Latte</div>\n  <div class="item">Mocca</div>\n  <div class="item">Té chai</div>\n  <div class="item">Brownie</div>\n</div>\n',
            css: '.item {\n  background: #dbeafe;\n  border: 2px solid #3b82f6;\n  border-radius: 10px;\n  padding: 14px;\n  text-align: center;\n}\n\n.galeria {\n  \n}\n',
          },
          editable: ['css'],
          target: true,
          previewHeight: 160,
          checks: [
            { text: '`.galeria` usa `display: grid`', test: "return style('.galeria', 'display') === 'grid'" },
            { text: 'Hay 3 columnas (los 3 primeros en la misma fila)', test: "const t = $$('.item').map(e => Math.round(rect(e).top)); return t[0] === t[1] && t[1] === t[2] && t[3] > t[0]" },
            { text: 'Las columnas miden lo mismo', test: "const w = $$('.item').slice(0, 3).map(e => rect(e).width); return Math.max(...w) - Math.min(...w) < 1" },
            { text: 'Separación de 12px', test: "const a = rect($$('.item')[0]), b = rect($$('.item')[1]); return Math.round(b.left - a.right) === 12" },
          ],
          solution: { css: '.item {\n  background: #dbeafe;\n  border: 2px solid #3b82f6;\n  border-radius: 10px;\n  padding: 14px;\n  text-align: center;\n}\n\n.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n' },
          hint: '`grid-template-columns: repeat(3, 1fr);`',
        },
        {
          type: 'code',
          question: 'El producto destacado',
          instructions: 'La rejilla ya tiene 3 columnas. Haz que el elemento `.destacado` ocupe **2 columnas**.',
          files: {
            html: '<div class="galeria">\n  <div class="item destacado">⭐ Café del mes</div>\n  <div class="item">Latte</div>\n  <div class="item">Mocca</div>\n  <div class="item">Té chai</div>\n</div>\n',
            css: '.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n\n.item {\n  background: #dbeafe;\n  border-radius: 10px;\n  padding: 14px;\n}\n\n.destacado {\n  background: #fde68a;\n}\n',
          },
          editable: ['css'],
          previewHeight: 150,
          checks: [
            { text: '`.destacado` ocupa 2 columnas', test: "const d = rect('.destacado'), o = rect($$('.item')[1]); return Math.abs(d.width - (o.width * 2 + 12)) < 2" },
            { text: 'El siguiente elemento queda en su misma fila', test: "return Math.round(rect('.destacado').top) === Math.round(rect($$('.item')[1]).top)" },
          ],
          solution: { css: '.galeria {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n\n.item {\n  background: #dbeafe;\n  border-radius: 10px;\n  padding: 14px;\n}\n\n.destacado {\n  background: #fde68a;\n  grid-column: span 2;\n}\n' },
          hint: '`grid-column: span 2;`',
        },
        {
          type: 'code',
          question: 'El diseño de la página con zonas',
          instructions: 'Usa `grid-template-areas` en `.pagina` para conseguir:\n• una cabecera arriba que ocupe **todo el ancho**;\n• debajo, el `aside` a la **izquierda** (200px) y el `main` a la **derecha** (el resto).\nLas `grid-area` de cada zona ya están escritas.',
          files: {
            html: '<div class="pagina">\n  <header>Cabecera</header>\n  <aside>Promos</aside>\n  <main>Menú del día</main>\n</div>\n',
            css: 'header { grid-area: cabecera; background: #1e3a8a; color: white; }\naside  { grid-area: lateral;  background: #fde68a; }\nmain   { grid-area: contenido; background: #dbeafe; }\nheader, aside, main { padding: 16px; }\n\n.pagina {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  gap: 8px;\n  /* añade grid-template-areas */\n}\n',
          },
          editable: ['css'],
          previewHeight: 160,
          checks: [
            { text: 'La cabecera ocupa todo el ancho', test: "return Math.abs(rect('header').width - rect('.pagina').width) < 2" },
            { text: 'El `aside` está debajo de la cabecera, a la izquierda', test: "const h = rect('header'), a = rect('aside'); return a.top > h.bottom - 1 && Math.abs(a.left - rect('.pagina').left) < 2" },
            { text: 'El `aside` mide 200px', test: "return Math.round(rect('aside').width) === 200" },
            { text: 'El `main` está a la derecha del `aside`', test: "const a = rect('aside'), m = rect('main'); return m.left > a.right && Math.round(m.top) === Math.round(a.top)" },
          ],
          solution: {
            css: 'header { grid-area: cabecera; background: #1e3a8a; color: white; }\naside  { grid-area: lateral;  background: #fde68a; }\nmain   { grid-area: contenido; background: #dbeafe; }\nheader, aside, main { padding: 16px; }\n\n.pagina {\n  display: grid;\n  grid-template-columns: 200px 1fr;\n  gap: 8px;\n  grid-template-areas:\n    "cabecera cabecera"\n    "lateral  contenido";\n}\n',
          },
          hint: 'Cada fila de `grid-template-areas` es un texto entre comillas con el nombre de la zona de cada columna.',
        },
        {
          type: 'fill',
          question: 'Crea tantas columnas de al menos 200px como quepan',
          lang: 'css',
          code: '.productos {\n  display: grid;\n  grid-template-columns: ___(auto-fit, ___(200px, 1fr));\n}',
          blanks: [['repeat'], ['minmax']],
          bank: ['repeat', 'minmax', 'calc', 'span', 'max'],
          explanation: '`repeat(auto-fit, minmax(200px, 1fr))` es el patrón más famoso de Grid responsive.',
        },
        {
          type: 'classify',
          question: '¿Flexbox o Grid?',
          bins: [
            { id: 'flex', label: '🧩 Flexbox' },
            { id: 'grid', label: '🔲 Grid' },
          ],
          items: [
            { text: 'Alinear los botones de una barra', bin: 'flex' },
            { text: 'Una galería de fotos en filas y columnas', bin: 'grid' },
            { text: 'Centrar un elemento dentro de otro', bin: 'flex' },
            { text: 'El diseño general: cabecera, lateral, contenido y pie', bin: 'grid' },
            { text: 'Un menú de navegación horizontal', bin: 'flex' },
          ],
          explanation: 'Regla práctica: **una dimensión** (fila o columna) → Flexbox. **Dos dimensiones** → Grid. ¡Se combinan muy bien!',
        },
      ],
    },

    // ─────────────── 7
    {
      id: 'css-responsive',
      icon: '📱',
      title: 'Diseño responsive',
      lesson: [
        {
          title: 'Una web, todas las pantallas',
          text: 'Más de la mitad de las visitas llegan desde el móvil. Una web **responsive** se adapta a cualquier tamaño.',
          points: [
            '1️⃣ La etiqueta viewport en el `<head>`: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.',
            '2️⃣ Unidades relativas (`%`, `rem`, `fr`) en lugar de anchos fijos.',
            '3️⃣ Imágenes flexibles: `img { max-width: 100%; }`.',
            '4️⃣ **Media queries** para cambiar el diseño según el ancho.',
          ],
        },
        {
          title: 'Media queries y mobile first',
          text: '**Mobile first**: primero escribes los estilos para el móvil y luego los **amplías** para pantallas grandes con `min-width`:',
          code: {
            lang: 'css',
            code: '/* Móvil: una columna */\n.productos {\n  display: grid;\n  grid-template-columns: 1fr;\n}\n\n/* Tablet y escritorio: a partir de 768px, tres columnas */\n@media (min-width: 768px) {\n  .productos {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}',
          },
          tip: 'Puntos de corte habituales: **576px** (móvil grande), **768px** (tablet) y **1024px** (escritorio). Pruébalo con el modo dispositivo de las DevTools (Ctrl + Shift + M).',
        },
      ],
      challenges: [
        {
          type: 'quiz',
          question: '¿Qué significa diseñar *mobile first*?',
          options: [
            'Escribir primero los estilos para móvil y ampliarlos con `min-width` para pantallas grandes',
            'Hacer solo la versión móvil',
            'Hacer primero la app nativa del móvil',
            'Usar solo `max-width` en las media queries',
          ],
          answer: 0,
          explanation: 'Se parte de lo más sencillo (una columna) y se añade complejidad a medida que hay más espacio.',
        },
        {
          type: 'code',
          question: 'Menú responsive',
          instructions: 'Los productos ya están en **una columna** (móvil). Añade una media query para que **a partir de 768px** se muestren en **3 columnas**.\n(La comprobación revisa tu media query y prueba el resultado en una pantalla de 1024px.)',
          files: {
            html: '<div class="productos">\n  <div class="item">Espresso</div>\n  <div class="item">Capuchino</div>\n  <div class="item">Latte</div>\n</div>\n',
            css: '.item {\n  background: #dbeafe;\n  border-radius: 10px;\n  padding: 14px;\n}\n\n.productos {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\n/* Tu media query aquí */\n',
          },
          editable: ['css'],
          previewHeight: 180,
          checks: [
            {
              text: 'Hay una media query con `min-width: 768px`',
              test: "return [...doc.styleSheets].some(s => [...s.cssRules].some(r => r.media && /min-width:\\s*768px/.test(r.media.mediaText)))",
            },
            {
              text: 'Dentro, `.productos` pasa a 3 columnas',
              test: "return [...doc.styleSheets].some(s => [...s.cssRules].some(r => r.media && /min-width:\\s*768px/.test(r.media.mediaText) && [...r.cssRules].some(x => x.selectorText === '.productos' && /repeat\\(\\s*3|1fr 1fr 1fr/.test(x.style.gridTemplateColumns))))",
            },
            { text: 'Fuera de la media query sigue en 1 columna (mobile first)', test: "return [...doc.styleSheets].some(s => [...s.cssRules].some(r => r.selectorText === '.productos' && r.style.gridTemplateColumns === '1fr'))" },
            { text: 'En pantalla de 1024px se ven las 3 en fila', test: "const t = $$('.item').map(e => Math.round(rect(e).top)); return t[0] === t[1] && t[1] === t[2]" },
          ],
          solution: {
            css: '.item {\n  background: #dbeafe;\n  border-radius: 10px;\n  padding: 14px;\n}\n\n.productos {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 12px;\n}\n\n@media (min-width: 768px) {\n  .productos {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n',
          },
          hint: '`@media (min-width: 768px) { .productos { grid-template-columns: repeat(3, 1fr); } }`',
        },
        {
          type: 'fill',
          question: 'Completa la media query para escritorio (desde 1024px)',
          lang: 'css',
          code: '___ (___: 1024px) {\n  .contenedor {\n    max-width: 1100px;\n  }\n}',
          blanks: [['@media'], ['min-width']],
          bank: ['@media', 'min-width', 'max-width', '@screen', 'width'],
          explanation: 'Con *mobile first* se usa `min-width`: «a partir de este ancho».',
        },
        {
          type: 'code',
          question: 'Imágenes flexibles',
          instructions: 'La imagen es más ancha que su tarjeta y se sale. Haz que **nunca supere el ancho de su contenedor** y mantenga su proporción.',
          files: {
            html: '<article class="card">\n  <img src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27800%27 height=%27400%27%3E%3Crect width=%27800%27 height=%27400%27 fill=%27%2310b981%27/%3E%3Ctext x=%27400%27 y=%27220%27 font-size=%2760%27 text-anchor=%27middle%27 fill=%27white%27%3E800 x 400%3C/text%3E%3C/svg%3E" alt="Imagen de 800 por 400 píxeles">\n  <h3>Latte art</h3>\n</article>\n',
            css: '.card {\n  width: 260px;\n  border: 2px solid #3b82f6;\n  border-radius: 12px;\n  padding: 10px;\n}\n\n',
          },
          editable: ['css'],
          previewHeight: 230,
          checks: [
            { text: 'La imagen no se sale de la tarjeta', test: "await sleep(150); const i = rect('img'), c = rect('.card'); return i.width <= c.width - 20 + 1" },
            { text: 'Mantiene la proporción (2:1)', test: "await sleep(150); const i = rect('img'); return i.height > 0 && Math.abs(i.width / i.height - 2) < 0.05" },
          ],
          solution: { css: '.card {\n  width: 260px;\n  border: 2px solid #3b82f6;\n  border-radius: 12px;\n  padding: 10px;\n}\n\nimg {\n  max-width: 100%;\n  height: auto;\n}\n' },
          hint: '`img { max-width: 100%; height: auto; }`',
        },
        {
          type: 'pick',
          question: '¿Qué ayuda a que una web sea responsive?',
          hint: 'Selecciona todas las correctas.',
          options: [
            { text: 'La etiqueta `<meta name="viewport">`', correct: true },
            { text: 'Media queries', correct: true },
            { text: '`max-width: 100%` en las imágenes', correct: true },
            { text: 'Unidades relativas como `%`, `rem` o `fr`', correct: true },
            { text: 'Poner `width: 1200px` a todo', correct: false },
            { text: 'Maquetar con tablas', correct: false },
          ],
          explanation: 'Los anchos fijos y las tablas de maquetación rompen el diseño en pantallas pequeñas.',
        },
      ],
    },

    // ─────────────── 8
    {
      id: 'css-animaciones',
      icon: '✨',
      title: 'Variables y animaciones',
      lesson: [
        {
          title: 'Variables CSS (custom properties)',
          text: 'Define un valor una vez y reutilízalo en todas partes. Si cambias la variable, cambia todo el diseño:',
          code: { lang: 'css', code: ':root {\n  --cafe: #6f4e37;\n  --crema: #fff7ed;\n  --radio: 12px;\n}\n\nh1 { color: var(--cafe); }\n.boton {\n  background: var(--cafe);\n  color: var(--crema);\n  border-radius: var(--radio);\n}' },
          tip: 'Es la base de los **temas** (por ejemplo, el modo oscuro).',
        },
        {
          title: 'Transiciones',
          text: 'Una **transición** anima el cambio de una propiedad, por ejemplo al pasar el ratón:',
          code: { lang: 'css', code: '.boton {\n  transition: transform 0.3s ease, background 0.3s;\n}\n.boton:hover {\n  transform: scale(1.1);\n  background: #10b981;\n}' },
          demo: { html: '<button class="boton">Pasa el ratón ☕</button>', css: '.boton{font-size:18px;padding:12px 22px;border:none;border-radius:12px;background:#6f4e37;color:#fff;cursor:pointer;transition:transform .3s ease,background .3s}.boton:hover{transform:scale(1.1);background:#10b981}', height: 100 },
        },
        {
          title: 'Animaciones con @keyframes',
          code: { lang: 'css', code: '@keyframes latido {\n  0%, 100% { transform: scale(1); }\n  50%      { transform: scale(1.15); }\n}\n\n.corazon {\n  animation: latido 1s ease-in-out infinite;\n}' },
          demo: { html: '<div class="corazon">☕</div>', css: '@keyframes latido{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}.corazon{font-size:60px;width:80px;animation:latido 1s ease-in-out infinite}', height: 110 },
          tip: 'Respeta a quien prefiere menos movimiento: `@media (prefers-reduced-motion: reduce) { … }`.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'El color de la marca en una variable',
          instructions: '1. En `:root`, define la variable `--cafe` con el valor `#6f4e37`.\n2. Úsala con `var(--cafe)` como color del `h1` y como fondo del `.boton`.',
          files: { html: '<h1>Café Pixel</h1>\n<button class="boton">Pedir ahora</button>\n', css: ':root {\n  \n}\n\nh1 {\n  \n}\n\n.boton {\n  color: white;\n  border: none;\n  padding: 10px 18px;\n  \n}\n' },
          editable: ['css'],
          checks: [
            { text: '`--cafe` vale `#6f4e37`', test: "return getComputedStyle(doc.documentElement).getPropertyValue('--cafe').trim().toLowerCase() === '#6f4e37'" },
            { text: 'El `h1` usa la variable', test: "return style('h1', 'color') === 'rgb(111, 78, 55)' && /h1\\s*\\{[^}]*var\\(--cafe\\)/.test(src.css)" },
            { text: 'El botón usa la variable de fondo', test: "return style('.boton', 'backgroundColor') === 'rgb(111, 78, 55)' && /\\.boton\\s*\\{[^}]*var\\(--cafe\\)/.test(src.css)" },
          ],
          solution: { css: ':root {\n  --cafe: #6f4e37;\n}\n\nh1 {\n  color: var(--cafe);\n}\n\n.boton {\n  color: white;\n  border: none;\n  padding: 10px 18px;\n  background: var(--cafe);\n}\n' },
          hint: 'Las variables empiezan por dos guiones: `--cafe: #6f4e37;`.',
        },
        {
          type: 'code',
          question: 'Un botón con efecto',
          instructions: '1. Dale a `.boton` una `transition` de **0.3s** sobre `transform`.\n2. Al pasar el ratón (`:hover`), que crezca con `transform: scale(1.1)`.\nPruébalo en la vista previa.',
          files: { html: '<button class="boton">Pedir ahora ☕</button>\n', css: '.boton {\n  font-size: 18px;\n  padding: 12px 22px;\n  border: none;\n  border-radius: 12px;\n  background: #6f4e37;\n  color: white;\n  cursor: pointer;\n  \n}\n\n' },
          editable: ['css'],
          checks: [
            { text: 'Tiene una transición de 0.3s', test: "return style('.boton', 'transitionDuration').split(',').some(d => d.trim() === '0.3s')" },
            { text: 'La transición incluye `transform`', test: "const p = style('.boton', 'transitionProperty'); return p.includes('transform') || p === 'all'" },
            { text: 'Hay una regla `.boton:hover` con `scale(1.1)`', test: "return [...doc.styleSheets].some(s => [...s.cssRules].some(r => /\\.boton:hover/.test(r.selectorText || '') && /scale\\(1\\.1\\)/.test(r.style.transform)))" },
          ],
          solution: { css: '.boton {\n  font-size: 18px;\n  padding: 12px 22px;\n  border: none;\n  border-radius: 12px;\n  background: #6f4e37;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.3s;\n}\n\n.boton:hover {\n  transform: scale(1.1);\n}\n' },
          hint: '`transition: transform 0.3s;` en `.boton` y `.boton:hover { transform: scale(1.1); }`',
        },
        {
          type: 'fill',
          question: 'Completa la animación que gira el icono sin parar',
          lang: 'css',
          code: '___ girar {\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n}\n\n.cargando {\n  ___: girar 1s linear ___;\n}',
          blanks: [['@keyframes'], ['animation'], ['infinite']],
          bank: ['@keyframes', 'animation', 'infinite', 'transition', '@media', 'forever'],
          explanation: '`@keyframes` define los pasos y `animation` la aplica: nombre, duración, ritmo y repeticiones.',
        },
        {
          type: 'quiz',
          question: '¿Cuál es la gran ventaja de las variables CSS?',
          options: [
            'Cambiar un valor en un solo sitio y que se actualice en todo el diseño',
            'Hacen que la página cargue más rápido',
            'Sustituyen a JavaScript',
            'Solo sirven para animaciones',
          ],
          answer: 0,
          explanation: 'Mantener colores, tamaños y espaciados en variables hace el diseño coherente y fácil de cambiar (¡y permite temas!).',
        },
      ],
    },

    // ─────────────── 9 · Proyecto
    {
      id: 'css-proyecto',
      icon: '☕',
      title: 'Proyecto: Café Pixel con estilo',
      project: true,
      lesson: [
        {
          title: 'Vistamos la web de Café Pixel',
          mood: 'happy',
          text: 'El HTML de Café Pixel ya está listo (es el de tu proyecto anterior). Ahora le toca el **CSS**: colores de marca, cabecera con Flexbox, menú con Grid y un botón con animación.',
          tip: 'Ve comprobación a comprobación y mira cómo cambia la vista previa. ¡Esto es lo más satisfactorio del frontend! 🎨',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'Proyecto: los estilos de Café Pixel',
          instructions: 'Solo puedes tocar **estilos.css**:\n1. En `:root`, define `--cafe: #6f4e37` y `--crema: #fff7ed`.\n2. El `body` usa `--crema` de fondo y una fuente `sans-serif`.\n3. El `header` usa Flexbox: título a la izquierda y `nav` a la derecha (`space-between`), con fondo `var(--cafe)` y texto blanco.\n4. `.productos` es una rejilla de **3 columnas** iguales con `gap` de 16px.\n5. Cada `.card` tiene `padding` de 16px y `border-radius` de 12px.\n6. `.card button` usa `var(--cafe)` de fondo y tiene una `transition`.',
          files: {
            html: '<header>\n  <h1>Café Pixel</h1>\n  <nav>\n    <a href="#menu">Menú</a>\n    <a href="#contacto">Contacto</a>\n  </nav>\n</header>\n<main>\n  <section id="menu">\n    <h2>Menú</h2>\n    <div class="productos">\n      <article class="card"><h3>Espresso</h3><p>$6.000</p><button>Añadir</button></article>\n      <article class="card"><h3>Capuchino</h3><p>$8.500</p><button>Añadir</button></article>\n      <article class="card"><h3>Croissant</h3><p>$5.500</p><button>Añadir</button></article>\n    </div>\n  </section>\n</main>\n',
            css: ':root {\n  \n}\n\nbody {\n  margin: 0;\n}\n\nheader {\n  padding: 12px 24px;\n}\n\nnav a {\n  color: inherit;\n  margin-left: 16px;\n}\n\nmain {\n  padding: 24px;\n}\n\n.card {\n  background: white;\n}\n\n.card button {\n  color: white;\n  border: none;\n  padding: 8px 14px;\n  border-radius: 8px;\n}\n',
          },
          editable: ['css'],
          previewHeight: 320,
          checks: [
            { text: 'Variables `--cafe` y `--crema` definidas', test: "const s = getComputedStyle(doc.documentElement); return s.getPropertyValue('--cafe').trim().toLowerCase() === '#6f4e37' && s.getPropertyValue('--crema').trim().toLowerCase() === '#fff7ed'" },
            { text: 'El `body` tiene fondo crema y fuente sans-serif', test: "return style('body', 'backgroundColor') === 'rgb(255, 247, 237)' && style('body', 'fontFamily').includes('sans-serif')" },
            { text: 'El `header` usa Flexbox con `space-between`', test: "return style('header', 'display') === 'flex' && style('header', 'justifyContent') === 'space-between'" },
            { text: 'El `header` tiene fondo café y texto blanco', test: "return style('header', 'backgroundColor') === 'rgb(111, 78, 55)' && style('header', 'color') === 'rgb(255, 255, 255)'" },
            { text: '`.productos` es una rejilla de 3 columnas', test: "const t = $$('.card').map(e => Math.round(rect(e).top)); return style('.productos', 'display') === 'grid' && t[0] === t[1] && t[1] === t[2]" },
            { text: 'Separación de 16px entre tarjetas', test: "const c = $$('.card').map(e => rect(e)); return Math.round(c[1].left - c[0].right) === 16" },
            { text: 'Las tarjetas tienen padding 16px y esquinas de 12px', test: "return style('.card', 'paddingTop') === '16px' && style('.card', 'borderTopLeftRadius') === '12px'" },
            { text: 'Los botones usan el color café y tienen transición', test: "return style('.card button', 'backgroundColor') === 'rgb(111, 78, 55)' && parseFloat(style('.card button', 'transitionDuration')) > 0" },
          ],
          solution: {
            css: ':root {\n  --cafe: #6f4e37;\n  --crema: #fff7ed;\n}\n\nbody {\n  margin: 0;\n  background: var(--crema);\n  font-family: system-ui, sans-serif;\n}\n\nheader {\n  padding: 12px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: var(--cafe);\n  color: white;\n}\n\nnav a {\n  color: inherit;\n  margin-left: 16px;\n}\n\nmain {\n  padding: 24px;\n}\n\n.productos {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 16px;\n}\n\n.card {\n  background: white;\n  padding: 16px;\n  border-radius: 12px;\n}\n\n.card button {\n  color: white;\n  border: none;\n  padding: 8px 14px;\n  border-radius: 8px;\n  background: var(--cafe);\n  transition: transform 0.2s;\n}\n\n.card button:hover {\n  transform: scale(1.05);\n}\n',
          },
          hint: 'Añade lo que falta en cada regla. Para `.productos`, crea una regla nueva.',
        },
        {
          type: 'quiz',
          question: 'Repaso: ¿qué propiedad elegirías para separar las tarjetas de una rejilla o de un contenedor flex?',
          options: ['`gap`', '`padding`', '`border`', '`line-height`'],
          answer: 0,
          explanation: '`gap` separa los hijos de un contenedor flex o grid sin tener que poner márgenes a cada uno.',
        },
      ],
    },
  ],
};
