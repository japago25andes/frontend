// Apuntes: chuletas de referencia de cada mundo. Cada tarjeta: { title, text?, rows?: [[sintaxis, descripción]], code?, wide? }

export const NOTES = {
  html: [
    {
      title: 'Esqueleto del documento',
      wide: true,
      code: {
        lang: 'html',
        code: '<!DOCTYPE html>\n<html lang="es">\n  <head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Café Pixel</title>\n    <link rel="stylesheet" href="estilos.css">\n  </head>\n  <body>\n    …\n    <script src="app.js"></script>\n  </body>\n</html>',
      },
    },
    {
      title: 'Texto',
      rows: [
        ['<h1> … <h6>', 'Títulos (un solo `h1` por página, en orden)'],
        ['<p>', 'Párrafo'],
        ['<strong> / <em>', 'Importancia / énfasis'],
        ['<br> / <hr>', 'Salto de línea / separador'],
        ['<!-- … -->', 'Comentario'],
      ],
    },
    {
      title: 'Enlaces, imágenes y listas',
      rows: [
        ['<a href="…">', 'Enlace (`target="_blank"` para otra pestaña)'],
        ['<a href="#id">', 'Ancla a un elemento de la página'],
        ['<img src="…" alt="…">', 'Imagen (¡siempre con `alt`!)'],
        ['<ul> / <ol> + <li>', 'Lista sin orden / ordenada'],
        ['<figure> + <figcaption>', 'Imagen con pie de foto'],
      ],
    },
    {
      title: 'Etiquetas semánticas',
      rows: [
        ['<header>', 'Cabecera'],
        ['<nav>', 'Navegación'],
        ['<main>', 'Contenido principal (uno por página)'],
        ['<section>', 'Sección temática'],
        ['<article>', 'Contenido independiente'],
        ['<aside>', 'Contenido complementario'],
        ['<footer>', 'Pie'],
        ['<div> / <span>', 'Contenedores genéricos (bloque / en línea)'],
      ],
    },
    {
      title: 'Tablas',
      rows: [
        ['<table>', 'Tabla'],
        ['<caption>', 'Título de la tabla'],
        ['<thead> <tbody> <tfoot>', 'Cabecera, cuerpo y pie'],
        ['<tr>', 'Fila'],
        ['<th> / <td>', 'Celda de encabezado / de datos'],
        ['colspan / rowspan', 'Ocupar varias columnas / filas'],
      ],
    },
    {
      title: 'Formularios',
      rows: [
        ['<form>', 'Formulario (`action`, `method`)'],
        ['<label for="id">', 'Etiqueta conectada a un campo'],
        ['<input type="…">', '`text`, `email`, `password`, `number`, `date`, `checkbox`, `radio`…'],
        ['<textarea>', 'Texto largo'],
        ['<select> + <option>', 'Desplegable'],
        ['<button type="submit">', 'Enviar'],
        ['required, min, max', 'Validación nativa'],
      ],
    },
    {
      title: '♿ Accesibilidad',
      wide: true,
      rows: [
        ['alt', 'Texto alternativo en imágenes informativas'],
        ['<label>', 'Todo campo tiene su etiqueta'],
        ['lang="es"', 'Idioma de la página'],
        ['<button>', 'Para acciones (funciona con teclado)'],
        ['aria-label', 'Nombre accesible para botones con solo un icono'],
        ['h1 → h2 → h3', 'Títulos en orden, sin saltos'],
      ],
    },
  ],

  css: [
    {
      title: 'Selectores',
      rows: [
        ['p', 'Etiqueta'],
        ['.clase', 'Clase'],
        ['#id', 'Id'],
        ['nav a', 'Descendiente'],
        ['ul > li', 'Hijo directo'],
        ['h1, h2', 'Varios'],
        [':hover  :focus  :first-child', 'Pseudoclases'],
        ['[type="email"]', 'Atributo'],
      ],
    },
    {
      title: 'Cascada',
      text: 'Gana la regla más **específica**: `#id` > `.clase` > `etiqueta`. Si empatan, la que esté escrita **después**. Algunas propiedades (color, fuente…) se **heredan**.',
    },
    {
      title: 'Modelo de caja',
      rows: [
        ['width / height', 'Tamaño del contenido'],
        ['padding', 'Relleno interior'],
        ['border', 'Borde: `2px solid #000`'],
        ['margin', 'Margen exterior (`0 auto` centra)'],
        ['border-radius', 'Esquinas redondeadas'],
        ['box-sizing: border-box', 'El ancho incluye padding y borde'],
      ],
    },
    {
      title: 'Colores, unidades y texto',
      rows: [
        ['#10b981 · rgb() · hsl()', 'Colores (`rgba` con transparencia)'],
        ['px · % · rem · em · vw', 'Unidades (`rem` para letra)'],
        ['font-family / font-size', 'Fuente y tamaño'],
        ['font-weight', 'Grosor (100–900)'],
        ['line-height', 'Interlineado (1.5–1.7)'],
        ['text-align', 'Alineación'],
      ],
    },
    {
      title: 'Display y position',
      rows: [
        ['display', '`block`, `inline`, `inline-block`, `none`, `flex`, `grid`'],
        ['position: relative', 'Referencia para hijos absolutos'],
        ['position: absolute', 'Respecto al ancestro posicionado'],
        ['position: fixed / sticky', 'Fijo en la ventana / pegajoso al hacer scroll'],
        ['top right bottom left', 'Desplazamientos'],
        ['z-index', 'Orden de las capas'],
      ],
    },
    {
      title: 'Flexbox (1 dimensión)',
      code: { lang: 'css', code: '.contenedor {\n  display: flex;\n  flex-direction: row;          /* o column */\n  justify-content: space-between; /* eje principal */\n  align-items: center;          /* eje cruzado */\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.hijo { flex: 1; }' },
    },
    {
      title: 'Grid (2 dimensiones)',
      code: { lang: 'css', code: '.rejilla {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  /* o: repeat(auto-fit, minmax(200px, 1fr)) */\n  gap: 16px;\n}\n.destacado { grid-column: span 2; }' },
    },
    {
      title: 'Responsive',
      code: { lang: 'css', code: '/* Mobile first */\n.productos { grid-template-columns: 1fr; }\n\n@media (min-width: 768px) {\n  .productos { grid-template-columns: repeat(3, 1fr); }\n}\n\nimg { max-width: 100%; height: auto; }' },
    },
    {
      title: 'Variables y animaciones',
      wide: true,
      code: { lang: 'css', code: ':root { --cafe: #6f4e37; }\nh1 { color: var(--cafe); }\n\n.boton { transition: transform 0.3s; }\n.boton:hover { transform: scale(1.1); }\n\n@keyframes girar { to { transform: rotate(360deg); } }\n.icono { animation: girar 1s linear infinite; }' },
    },
  ],

  js: [
    {
      title: 'Variables y tipos',
      rows: [
        ['const / let', 'Constante / variable (evita `var`)'],
        ['typeof x', "`'string'`, `'number'`, `'boolean'`, `'object'`, `'undefined'`…"],
        ['`Hola ${nombre}`', 'Template literal'],
        ['=== / !==', 'Comparar valor y tipo'],
        ['&& || !', 'Y, o, no'],
        ['cond ? a : b', 'Ternario'],
      ],
    },
    {
      title: 'Control de flujo',
      code: { lang: 'js', code: "if (x > 0) { … } else if (x === 0) { … } else { … }\n\nfor (let i = 0; i < 10; i++) { … }\nfor (const item of lista) { … }\nwhile (condicion) { … }" },
    },
    {
      title: 'Funciones',
      code: { lang: 'js', code: "function sumar(a, b = 0) {\n  return a + b;\n}\n\nconst doble = (n) => n * 2;" },
    },
    {
      title: 'Arrays',
      rows: [
        ['push / pop', 'Añadir / quitar al final'],
        ['includes / indexOf', 'Buscar un valor'],
        ['map(fn)', 'Transformar → array nuevo'],
        ['filter(fn)', 'Filtrar → array nuevo'],
        ['find(fn)', 'Primer elemento que cumple'],
        ['reduce(fn, inicial)', 'Acumular en un valor'],
        ['some / every', '¿Alguno / todos cumplen?'],
      ],
    },
    {
      title: 'Objetos y JSON',
      code: { lang: 'js', code: "const p = { nombre: 'Latte', precio: 9000 };\nconst { nombre, precio } = p;          // desestructurar\nconst copia = { ...p, precio: 8000 };   // spread\n\nJSON.stringify(p);   // objeto → texto\nJSON.parse(texto);   // texto → objeto" },
    },
    {
      title: 'DOM',
      rows: [
        ["document.querySelector('sel')", 'Primer elemento'],
        ["document.querySelectorAll('sel')", 'Todos'],
        ['el.textContent', 'Leer / escribir texto (seguro)'],
        ["el.classList.add('x')", '`remove`, `toggle`, `contains`'],
        ["document.createElement('li')", 'Crear un elemento'],
        ['padre.appendChild(el)', 'Añadirlo'],
        ['el.dataset.precio', 'Leer `data-precio`'],
      ],
    },
    {
      title: 'Eventos',
      code: { lang: 'js', code: "boton.addEventListener('click', () => { … });\ninput.addEventListener('input', () => input.value);\nform.addEventListener('submit', (e) => {\n  e.preventDefault();\n  …\n});" },
    },
    {
      title: 'Asincronía',
      wide: true,
      code: { lang: 'js', code: "async function cargar() {\n  try {\n    const r = await fetch('/api/productos');\n    if (!r.ok) throw new Error('Error ' + r.status);\n    const datos = await r.json();\n  } catch (error) {\n    console.error(error.message);\n  }\n}" },
    },
  ],

  ts: [
    {
      title: 'Tipos básicos',
      rows: [
        ['string · number · boolean', 'Primitivos'],
        ['string[] · Array<number>', 'Arrays'],
        ['number | string', 'Unión'],
        ["'S' | 'M' | 'L'", 'Literales'],
        ['any', 'Sin comprobaciones (evítalo)'],
        ['unknown', 'Desconocido: obliga a comprobar'],
        ['void', 'Función que no devuelve nada'],
      ],
    },
    {
      title: 'Funciones',
      code: { lang: 'ts', code: "function precio(base: number, iva: number = 0.19): number {\n  return base * (1 + iva);\n}\n\nconst saludo = (nombre?: string): string => `Hola ${nombre ?? 'cliente'}`;" },
    },
    {
      title: 'Interfaces y types',
      code: { lang: 'ts', code: "interface Producto {\n  readonly id: number;\n  nombre: string;\n  precio: number;\n  disponible?: boolean;\n}\ninterface Bebida extends Producto { caliente: boolean; }\n\ntype Estado = 'pendiente' | 'listo';" },
    },
    {
      title: 'Clases',
      code: { lang: 'ts', code: "class Pedido {\n  private items: string[] = [];\n  constructor(public cliente: string) {}\n  agregar(item: string): void { this.items.push(item); }\n  get total(): number { return this.items.length; }\n}" },
    },
    {
      title: 'Genéricos y módulos',
      wide: true,
      code: { lang: 'ts', code: "function primero<T>(lista: T[]): T | undefined { return lista[0]; }\n\nexport interface Producto { … }\nimport { Producto } from './producto';" },
    },
  ],

  angular: [
    {
      title: 'Angular CLI',
      rows: [
        ['ng new mi-app', 'Crear proyecto'],
        ['ng serve', 'Desarrollo en http://localhost:4200'],
        ['ng g c nombre', 'Generar componente'],
        ['ng g s nombre', 'Generar servicio'],
        ['ng build', 'Compilar para producción'],
      ],
    },
    {
      title: 'Componente',
      code: { lang: 'ts', code: "@Component({\n  selector: 'app-tarjeta',\n  imports: [OtroComponente],\n  templateUrl: './tarjeta.html',\n  styleUrl: './tarjeta.css',\n})\nexport class Tarjeta { … }" },
    },
    {
      title: 'Bindings',
      rows: [
        ['{{ valor }}', 'Interpolación'],
        ['[propiedad]="expr"', 'Property binding'],
        ['(evento)="metodo()"', 'Event binding'],
        ['[(ngModel)]="campo"', 'Two-way (FormsModule)'],
        ['[class.activo]="cond"', 'Clase condicional'],
        ["{{ x | uppercase }}", 'Pipes: `uppercase`, `currency`, `date`…'],
      ],
    },
    {
      title: 'Control de flujo',
      code: { lang: 'angular', code: "@if (cond) { … } @else { … }\n\n@for (p of productos; track p.id) {\n  <li>{{ $index }} {{ p.nombre }}</li>\n} @empty { <li>Vacío</li> }\n\n@switch (x) { @case ('a') { … } @default { … } }" },
    },
    {
      title: 'Signals',
      code: { lang: 'ts', code: "contador = signal(0);\ncontador();                     // leer\ncontador.set(5);\ncontador.update((n) => n + 1);\ndoble = computed(() => this.contador() * 2);\neffect(() => console.log(this.contador()));" },
    },
    {
      title: 'Inputs y outputs',
      code: { lang: 'ts', code: "producto = input.required<Producto>();\nagregado = output<Producto>();\ncantidad = model(1);\n\nthis.agregado.emit(this.producto());\n\n<!-- padre -->\n<app-tarjeta [producto]=\"p\" (agregado)=\"add($event)\" />" },
    },
    {
      title: 'Servicios',
      code: { lang: 'ts', code: "@Injectable({ providedIn: 'root' })\nexport class CarritoService { … }\n\nexport class Cabecera {\n  carrito = inject(CarritoService);\n}" },
    },
    {
      title: 'Rutas',
      code: { lang: 'ts', code: "export const routes: Routes = [\n  { path: '', component: Inicio },\n  { path: 'producto/:id', component: Detalle },\n  { path: '**', component: NoEncontrado },\n];\n// app.config.ts → provideRouter(routes)\n// <a routerLink=\"/menu\">  ·  <router-outlet />" },
    },
    {
      title: 'HTTP y formularios',
      wide: true,
      code: { lang: 'ts', code: "// app.config.ts → provideHttpClient()\nprivate http = inject(HttpClient);\nlistar() { return this.http.get<Producto[]>('/api/productos'); }\nproductos = toSignal(this.listar(), { initialValue: [] });\n\nform = new FormGroup({\n  correo: new FormControl('', [Validators.required, Validators.email]),\n});\n// <form [formGroup]=\"form\" (ngSubmit)=\"enviar()\"> <input formControlName=\"correo\">" },
    },
  ],
};
