// ───────────────────────────── MUNDO 5: ANGULAR ─────────────────────────────
// Angular moderno: componentes standalone, control de flujo @if/@for, signals, input()/output() e inject().
// Angular no se puede compilar dentro del juego, así que aquí se trabaja con retos de completar, predecir, ordenar y clasificar.

export const ANGULAR = {
  id: 'angular',
  short: 'Angular',
  name: 'Angular: la aplicación',
  icon: '🅰️',
  color: '#dd0031',
  description: 'El framework de Google para construir aplicaciones web completas con componentes, signals, rutas y servicios.',
  levels: [
    // ─────────────── 1
    {
      id: 'ng-intro',
      icon: '🅰️',
      title: '¿Qué es Angular?',
      lesson: [
        {
          title: 'De páginas a aplicaciones',
          mood: 'wow',
          text: 'Hasta ahora hemos hecho **páginas**. Cuando una web crece (muchas pantallas, datos, usuarios…), manejar todo con `querySelector` se vuelve un caos. Para eso existen los **frameworks** como **Angular**.',
          points: [
            '🏗️ **Angular** es un framework creado por **Google**, escrito en **TypeScript**.',
            '🧩 La aplicación se divide en **componentes** reutilizables.',
            '⚡ Es reactivo: cuando cambian los datos, la pantalla se actualiza **sola**.',
            '🧰 Trae «de serie» rutas, formularios, peticiones HTTP, pruebas…',
          ],
        },
        {
          title: 'SPA: Single Page Application',
          text: 'Una aplicación Angular es una **SPA**: el navegador carga **una sola página** y después Angular cambia el contenido sin recargar.',
          table: {
            head: ['Web tradicional', 'SPA (Angular)'],
            rows: [
              ['Cada clic pide una página nueva al servidor', 'Se cambia el contenido sin recargar'],
              ['Parpadeo en cada navegación', 'Transiciones fluidas, como una app'],
              ['El servidor arma el HTML', 'El navegador arma la vista y pide solo **datos** (JSON)'],
            ],
          },
          tip: '**Librería** vs **framework**: tú llamas a una librería; un framework te llama a ti y marca la estructura de tu app.',
        },
        {
          title: 'Angular CLI',
          text: 'La herramienta de línea de comandos de Angular crea y gestiona los proyectos:',
          code: { lang: 'bash', code: '# 1. Instalar la CLI (una vez; necesita Node.js)\nnpm install -g @angular/cli\n\n# 2. Crear un proyecto\nng new cafe-pixel\n\n# 3. Arrancarlo en modo desarrollo → http://localhost:4200\ncd cafe-pixel\nng serve\n\n# Generar piezas\nng generate component tarjeta      # o: ng g c tarjeta\nng generate service carrito        # o: ng g s carrito\n\n# Compilar para producción\nng build' },
        },
        {
          title: 'La estructura de un proyecto',
          table: {
            head: ['Archivo', 'Para qué sirve'],
            rows: [
              ['`src/index.html`', 'La única página HTML; contiene `<app-root>`'],
              ['`src/main.ts`', 'El punto de entrada: arranca la aplicación'],
              ['`src/app/app.ts`', 'El componente raíz (en versiones anteriores, `app.component.ts`)'],
              ['`src/app/app.config.ts`', 'La configuración global: rutas, HTTP…'],
              ['`src/app/app.routes.ts`', 'Las rutas de la aplicación'],
              ['`src/styles.css`', 'Los estilos globales'],
              ['`angular.json`', 'La configuración del proyecto para la CLI'],
              ['`package.json`', 'Las dependencias (npm)'],
            ],
          },
        },
      ],
      challenges: [
        {
          type: 'quiz',
          question: '¿Qué es una SPA (Single Page Application)?',
          options: [
            'Una aplicación que carga una sola página y cambia el contenido sin recargar',
            'Una web que solo tiene una sección',
            'Una aplicación que no usa JavaScript',
            'Una página sin estilos',
          ],
          answer: 0,
          explanation: 'Tras la primera carga, la SPA solo pide datos al servidor y actualiza la vista en el navegador.',
        },
        {
          type: 'classify',
          question: '¿Qué hace cada comando?',
          bins: [
            { id: 'new', label: 'Crear proyecto' },
            { id: 'serve', label: 'Arrancar en desarrollo' },
            { id: 'gen', label: 'Generar una pieza' },
            { id: 'build', label: 'Compilar para producción' },
          ],
          items: [
            { text: '`ng new cafe-pixel`', bin: 'new' },
            { text: '`ng serve`', bin: 'serve' },
            { text: '`ng generate component menu`', bin: 'gen' },
            { text: '`ng g s carrito`', bin: 'gen' },
            { text: '`ng build`', bin: 'build' },
          ],
          explanation: '`ng new` crea, `ng serve` levanta el servidor de desarrollo en el puerto 4200, `ng generate` (o `ng g`) crea piezas y `ng build` prepara la versión final.',
        },
        {
          type: 'order',
          question: 'Ordena los pasos para crear y ver tu primera app Angular',
          steps: [
            'Instalar Node.js',
            'Instalar la CLI con `npm install -g @angular/cli`',
            'Crear el proyecto con `ng new cafe-pixel`',
            'Entrar en la carpeta con `cd cafe-pixel`',
            'Arrancarlo con `ng serve`',
            'Abrir `http://localhost:4200` en el navegador',
          ],
          explanation: 'Node.js trae npm, que instala la CLI; la CLI crea el proyecto y lo sirve en el puerto 4200.',
        },
        {
          type: 'classify',
          question: '¿Para qué sirve cada archivo?',
          bins: [
            { id: 'main', label: '`main.ts`' },
            { id: 'config', label: '`app.config.ts`' },
            { id: 'routes', label: '`app.routes.ts`' },
            { id: 'index', label: '`index.html`' },
          ],
          items: [
            { text: 'Arranca la aplicación', bin: 'main' },
            { text: 'Registra los proveedores globales (HTTP, router…)', bin: 'config' },
            { text: 'Define qué componente se ve en cada URL', bin: 'routes' },
            { text: 'La única página HTML, con la etiqueta `<app-root>`', bin: 'index' },
          ],
          explanation: '`index.html` carga, `main.ts` arranca con la configuración de `app.config.ts`, que a su vez usa las rutas de `app.routes.ts`.',
        },
        {
          type: 'quiz',
          question: '¿En qué lenguaje se escriben los componentes de Angular?',
          options: ['TypeScript', 'Java', 'Python', 'Solo HTML'],
          answer: 0,
          explanation: 'Angular está escrito en TypeScript y tus componentes también: clases, tipos, decoradores… ¡todo lo que acabas de aprender!',
        },
      ],
    },

    // ─────────────── 2
    {
      id: 'ng-componentes',
      icon: '🧩',
      title: 'Componentes',
      lesson: [
        {
          title: 'Un componente = clase + plantilla + estilos',
          text: 'Un **componente** es una pieza de la interfaz con su propio HTML, CSS y lógica. Se define con una clase y el decorador `@Component`:',
          code: { lang: 'ts', title: 'tarjeta.ts', code: "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-tarjeta',            // la etiqueta HTML del componente\n  templateUrl: './tarjeta.html',      // su plantilla\n  styleUrl: './tarjeta.css',          // sus estilos (solo le afectan a él)\n})\nexport class Tarjeta {\n  nombre = 'Espresso';\n  precio = 6000;\n}" },
        },
        {
          title: 'Usar un componente dentro de otro',
          codes: [
            { lang: 'ts', title: 'menu.ts', code: "import { Component } from '@angular/core';\nimport { Tarjeta } from './tarjeta';\n\n@Component({\n  selector: 'app-menu',\n  imports: [Tarjeta],     // ← lo importamos\n  template: `\n    <h2>Menú</h2>\n    <app-tarjeta />\n    <app-tarjeta />\n  `,\n})\nexport class Menu {}" },
          ],
          points: [
            'Los componentes son **standalone**: cada uno declara en `imports` lo que usa.',
            'La plantilla puede ir en un archivo (`templateUrl`) o en línea (`template`).',
            'La app es un **árbol** de componentes: `App` → `Menu` → `Tarjeta`…',
          ],
        },
        {
          title: 'Generar un componente',
          code: { lang: 'bash', code: 'ng generate component tarjeta\n\n# crea:\n#   tarjeta/tarjeta.ts        → la clase\n#   tarjeta/tarjeta.html      → la plantilla\n#   tarjeta/tarjeta.css       → los estilos\n#   tarjeta/tarjeta.spec.ts   → las pruebas' },
          tip: 'En proyectos creados con versiones anteriores verás los nombres largos: `tarjeta.component.ts` y la clase `TarjetaComponent`. La idea es la misma.',
        },
      ],
      challenges: [
        {
          type: 'fill',
          question: 'Completa el componente',
          lang: 'ts',
          code: "import { Component } from '@angular/core';\n\n@___({\n  ___: 'app-tarjeta',\n  templateUrl: './tarjeta.html',\n  styleUrl: './tarjeta.css',\n})\nexport ___ Tarjeta {\n  nombre = 'Capuchino';\n}",
          blanks: [['Component'], ['selector'], ['class']],
          bank: ['Component', 'selector', 'class', 'Injectable', 'tag', 'function'],
          explanation: '`@Component` decora la clase y `selector` define la etiqueta con la que se usa: `<app-tarjeta />`.',
        },
        {
          type: 'quiz',
          question: 'El componente `Tarjeta` tiene `selector: \'app-tarjeta\'`. ¿Cómo se usa en la plantilla de otro componente?',
          options: [
            '`<app-tarjeta />`, añadiendo `Tarjeta` a los `imports` del componente que lo usa',
            '`<Tarjeta></Tarjeta>`',
            '`{{ Tarjeta }}`',
            '`<div component="tarjeta">`',
          ],
          answer: 0,
          explanation: 'El selector es la etiqueta, y el componente que la usa debe importarlo en su lista `imports`.',
        },
        {
          type: 'classify',
          question: '`ng g c tarjeta` crea cuatro archivos. ¿Qué contiene cada uno?',
          bins: [
            { id: 'ts', label: '`tarjeta.ts`' },
            { id: 'html', label: '`tarjeta.html`' },
            { id: 'css', label: '`tarjeta.css`' },
            { id: 'spec', label: '`tarjeta.spec.ts`' },
          ],
          items: [
            { text: 'La clase con los datos y métodos', bin: 'ts' },
            { text: 'La plantilla con las etiquetas', bin: 'html' },
            { text: 'Los estilos que solo afectan al componente', bin: 'css' },
            { text: 'Las pruebas automáticas', bin: 'spec' },
          ],
          explanation: 'Lógica, vista, estilos y pruebas, cada uno en su archivo.',
        },
        {
          type: 'pick',
          question: '¿Qué información va dentro de `@Component({ … })`?',
          hint: 'Selecciona todas las correctas.',
          options: [
            { text: '`selector`', correct: true },
            { text: '`template` o `templateUrl`', correct: true },
            { text: '`styleUrl` o `styles`', correct: true },
            { text: '`imports`', correct: true },
            { text: 'Los precios de los productos', correct: false },
            { text: 'La contraseña de la base de datos', correct: false },
          ],
          explanation: 'El decorador describe el componente (metadatos). Los datos van en la clase… ¡y las contraseñas nunca en el frontend!',
        },
        {
          type: 'quiz',
          question: '¿Por qué conviene dividir la interfaz en componentes?',
          options: [
            'Para reutilizar piezas, mantener el código ordenado y probar cada parte por separado',
            'Porque Angular no permite plantillas de más de 20 líneas',
            'Para que la página cargue sin internet',
            'Solo por estética',
          ],
          answer: 0,
          explanation: 'Una `Tarjeta` bien hecha se usa para todos los productos: un solo sitio para mantener y probar.',
        },
      ],
    },

    // ─────────────── 3
    {
      id: 'ng-plantillas',
      icon: '🔗',
      title: 'Plantillas y bindings',
      lesson: [
        {
          title: 'Conectar la clase con la vista',
          text: 'El **binding** (enlace) conecta los datos de la clase con el HTML. Hay cuatro tipos:',
          table: {
            head: ['Sintaxis', 'Nombre', 'Dirección'],
            rows: [
              ['`{{ nombre }}`', 'Interpolación', 'clase → vista (texto)'],
              ['`[src]="imagen"`', 'Property binding', 'clase → vista (propiedad)'],
              ['`(click)="pedir()"`', 'Event binding', 'vista → clase (evento)'],
              ['`[(ngModel)]="nota"`', 'Two-way binding', 'en los dos sentidos'],
            ],
          },
        },
        {
          title: 'Ejemplo completo',
          codes: [
            { lang: 'ts', title: 'tarjeta.ts', code: "export class Tarjeta {\n  nombre = 'Latte';\n  precio = 9000;\n  imagen = 'latte.jpg';\n  agotado = false;\n\n  pedir() {\n    console.log('Pedido:', this.nombre);\n  }\n}" },
            { lang: 'angular', title: 'tarjeta.html', code: '<h3>{{ nombre }}</h3>\n<img [src]="imagen" [alt]="nombre">\n<p>{{ precio * 1.19 }}</p>\n\n<button (click)="pedir()" [disabled]="agotado">\n  Pedir\n</button>\n\n<p [class.oferta]="precio < 7000">…</p>' },
          ],
        },
        {
          title: 'Pipes: transformar al mostrar',
          code: { lang: 'angular', code: "{{ nombre | uppercase }}                              → LATTE\n{{ precio | currency:'COP':'symbol-narrow':'1.0-0' }}  → $9,000\n{{ hoy | date:'dd/MM/yyyy' }}                          → 21/10/2026" },
          tip: 'El formato de números y fechas depende del idioma (*locale*) configurado en la app. `[(ngModel)]` necesita importar `FormsModule` en el componente.',
        },
      ],
      challenges: [
        {
          type: 'classify',
          question: '¿Qué tipo de binding es cada uno?',
          bins: [
            { id: 'interp', label: 'Interpolación' },
            { id: 'prop', label: 'Property binding' },
            { id: 'event', label: 'Event binding' },
            { id: 'two', label: 'Two-way' },
          ],
          items: [
            { text: '`{{ titulo }}`', bin: 'interp' },
            { text: '`[disabled]="agotado"`', bin: 'prop' },
            { text: '`(click)="comprar()"`', bin: 'event' },
            { text: '`[(ngModel)]="nombre"`', bin: 'two' },
            { text: '`[src]="producto.imagen"`', bin: 'prop' },
            { text: '`(input)="buscar()"`', bin: 'event' },
          ],
          explanation: 'Llaves dobles = texto; corchetes = propiedad; paréntesis = evento; «banana en una caja» `[()]` = los dos sentidos.',
        },
        {
          type: 'fill',
          question: 'Completa la plantilla de la tarjeta',
          lang: 'angular',
          code: '<h3>___ producto.nombre ___</h3>\n<img ___="producto.imagen" [alt]="producto.nombre">\n<button ___="agregar(producto)">Añadir</button>',
          blanks: [['{{'], ['}}'], ['[src]'], ['(click)']],
          bank: ['{{', '}}', '[src]', '(click)', '(src)', '[click]'],
          explanation: 'Interpolación para el texto, property binding para la imagen y event binding para el clic.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué se muestra en pantalla?',
          snippet: { lang: 'angular', code: "<!-- en la clase: nombre = 'mocca'; precio = 5000; cantidad = 2; -->\n\n<p>{{ nombre | uppercase }}: {{ precio * cantidad }}</p>" },
          options: ['MOCCA: 10000', 'mocca: 5000 * 2', 'MOCCA: 50002', '{{ nombre }}: 10000'],
          answer: 0,
          explanation: 'Dentro de `{{ }}` se evalúan expresiones: el pipe `uppercase` pasa a mayúsculas y `precio * cantidad` da 10000.',
        },
        {
          type: 'quiz',
          question: 'Usas `[(ngModel)]` en un input y Angular da error. ¿Qué falta?',
          options: ['Importar `FormsModule` en los `imports` del componente', 'Instalar jQuery', 'Usar `{{ }}` en lugar de `[()]`', 'Reiniciar el ordenador'],
          answer: 0,
          explanation: 'La directiva `ngModel` vive en `FormsModule`. Hay que importarlo en el componente que la usa.',
        },
        {
          type: 'fill',
          question: 'Aplica una clase solo cuando el producto esté en oferta',
          lang: 'angular',
          code: '<article ___="producto.precio < 7000">\n  {{ producto.nombre }}\n</article>',
          blanks: [['[class.oferta]']],
          explanation: '`[class.nombre]="condición"` añade la clase cuando la condición es verdadera.',
        },
      ],
    },

    // ─────────────── 4
    {
      id: 'ng-control',
      icon: '🔀',
      title: 'Control de flujo: @if y @for',
      lesson: [
        {
          title: '@if: mostrar según una condición',
          code: { lang: 'angular', code: '@if (productos.length > 0) {\n  <p>Tenemos {{ productos.length }} productos</p>\n} @else if (cargando) {\n  <p>Cargando…</p>\n} @else {\n  <p>No hay productos</p>\n}' },
        },
        {
          title: '@for: repetir por cada elemento',
          code: { lang: 'angular', code: '<ul>\n  @for (producto of productos; track producto.id) {\n    <li>{{ $index + 1 }}. {{ producto.nombre }}</li>\n  } @empty {\n    <li>El menú está vacío</li>\n  }\n</ul>' },
          points: [
            '`track` es **obligatorio**: le dice a Angular cómo identificar cada elemento para actualizar solo lo que cambia.',
            '`$index`, `$first`, `$last`, `$even`… son variables que te da el bucle.',
            '`@empty` se muestra si la lista está vacía.',
          ],
        },
        {
          title: '@switch y la sintaxis antigua',
          codes: [
            { lang: 'angular', title: '@switch', code: "@switch (tamano) {\n  @case ('pequeño') { <span>☕</span> }\n  @case ('grande')  { <span>☕☕☕</span> }\n  @default          { <span>☕☕</span> }\n}" },
            { lang: 'angular', title: 'Antes de Angular 17 (aún la verás)', code: '<p *ngIf="activo">…</p>\n<li *ngFor="let p of productos">\n  {{ p.nombre }}\n</li>' },
          ],
          tip: '`@defer { … }` carga una parte de la plantilla más tarde (por ejemplo, cuando se ve en pantalla) para que la app arranque más rápido.',
        },
      ],
      challenges: [
        {
          type: 'fill',
          question: 'Muestra la lista de productos o un mensaje si está vacía',
          lang: 'angular',
          code: '<ul>\n  ___ (producto of productos; ___ producto.id) {\n    <li>{{ producto.nombre }}</li>\n  } ___ {\n    <li>No hay productos</li>\n  }\n</ul>',
          blanks: [['@for'], ['track'], ['@empty']],
          bank: ['@for', 'track', '@empty', '@if', '@else', 'let', 'key'],
          explanation: '`@for` recorre, `track` identifica cada elemento y `@empty` cubre el caso de la lista vacía.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: 'Si `stock = 0` y `reservado = true`, ¿qué se muestra?',
          snippet: { lang: 'angular', code: '@if (stock > 0) {\n  <p>Disponible</p>\n} @else if (reservado) {\n  <p>Reservado para ti</p>\n} @else {\n  <p>Agotado</p>\n}' },
          options: ['Reservado para ti', 'Disponible', 'Agotado', 'Nada'],
          answer: 0,
          explanation: 'La primera condición es falsa (stock 0), la segunda verdadera: se muestra «Reservado para ti».',
        },
        {
          type: 'quiz',
          question: '¿Para qué sirve `track` en un `@for`?',
          options: [
            'Para que Angular identifique cada elemento y solo actualice en el DOM lo que cambió',
            'Para contar cuántas vueltas da el bucle',
            'Para ordenar la lista alfabéticamente',
            'Es opcional y no hace nada',
          ],
          answer: 0,
          explanation: 'Con un buen `track` (normalmente un id único), Angular reutiliza los elementos del DOM y la app va mucho más rápida.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué se muestra con `cafes = [\'Espresso\', \'Latte\', \'Mocca\']`?',
          snippet: { lang: 'angular', code: "@for (cafe of cafes; track cafe) {\n  @if ($last) {\n    <b>{{ cafe }}</b>\n  } @else {\n    <span>{{ cafe }}, </span>\n  }\n}" },
          options: ['Espresso, Latte, **Mocca** (el último en negrita)', 'Solo Mocca', 'Espresso, Latte, Mocca, (con coma al final)', '**Espresso**, Latte, Mocca'],
          answer: 0,
          explanation: '`$last` es verdadero solo en la última vuelta del bucle.',
        },
        {
          type: 'classify',
          question: 'Sintaxis nueva (Angular 17+) y su equivalente antiguo',
          bins: [
            { id: 'if', label: '`@if`' },
            { id: 'for', label: '`@for`' },
            { id: 'switch', label: '`@switch`' },
          ],
          items: [
            { text: '`*ngIf="activo"`', bin: 'if' },
            { text: '`*ngFor="let p of productos"`', bin: 'for' },
            { text: '`[ngSwitch]` con `*ngSwitchCase`', bin: 'switch' },
            { text: 'Mostrar un mensaje si no hay sesión', bin: 'if' },
            { text: 'Pintar una tarjeta por producto', bin: 'for' },
          ],
          explanation: 'El control de flujo con `@` es el estándar actual: más legible y más rápido que las directivas antiguas.',
        },
      ],
    },

    // ─────────────── 5
    {
      id: 'ng-signals',
      icon: '📡',
      title: 'Signals',
      lesson: [
        {
          title: 'Signals: datos reactivos',
          text: 'Un **signal** es una caja que contiene un valor y **avisa** cuando cambia. Angular sabe exactamente qué partes de la pantalla dependen de cada signal y solo actualiza esas.',
          code: { lang: 'ts', code: "import { Component, signal } from '@angular/core';\n\n@Component({\n  selector: 'app-contador',\n  template: `\n    <p>Cafés: {{ cafes() }}</p>\n    <button (click)=\"sumar()\">+1</button>\n  `,\n})\nexport class Contador {\n  cafes = signal(0);\n\n  sumar() {\n    this.cafes.update((n) => n + 1);\n  }\n}" },
          points: ['Se **lee** llamándolo como función: `cafes()`.', 'Se **cambia** con `.set(valor)` o `.update(v => nuevo)`.'],
        },
        {
          title: 'computed y effect',
          code: { lang: 'ts', code: "precio = signal(6000);\ncantidad = signal(2);\n\n// valor derivado: se recalcula solo cuando cambian sus signals\ntotal = computed(() => this.precio() * this.cantidad());\n\n// efecto secundario: se ejecuta cuando cambian sus signals\nconstructor() {\n  effect(() => console.log('Nuevo total:', this.total()));\n}" },
          table: {
            head: ['Función', 'Para…', '¿Se puede escribir?'],
            rows: [
              ['`signal()`', 'Guardar estado', 'Sí: `set` / `update`'],
              ['`computed()`', 'Calcular a partir de otros signals', 'No: es de solo lectura'],
              ['`effect()`', 'Hacer algo cuando cambian (log, guardar…)', '—'],
            ],
          },
        },
      ],
      challenges: [
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué muestra la consola?',
          snippet: { lang: 'ts', code: 'const tazas = signal(1);\ntazas.set(5);\ntazas.update((n) => n * 2);\nconsole.log(tazas());' },
          options: ['10', '5', '2', '1'],
          answer: 0,
          explanation: '`set(5)` pone 5 y `update` lo duplica: 10. Para leer el valor se llama al signal: `tazas()`.',
        },
        {
          type: 'fill',
          question: 'Completa el componente del carrito con signals',
          lang: 'ts',
          code: 'export class Carrito {\n  cantidad = ___(0);\n  precio = signal(6000);\n  total = ___(() => this.cantidad() * this.precio());\n\n  agregar() {\n    this.cantidad.___((n) => n + 1);\n  }\n}',
          blanks: [['signal'], ['computed'], ['update']],
          bank: ['signal', 'computed', 'update', 'effect', 'set', 'get'],
          explanation: '`signal` guarda el estado, `computed` deriva el total y `update` calcula el nuevo valor a partir del anterior.',
        },
        {
          type: 'quiz',
          question: '¿Cómo se muestra el valor de un signal `total` en la plantilla?',
          options: ['`{{ total() }}`', '`{{ total }}`', '`{{ total.value }}`', '`{{ $total }}`'],
          answer: 0,
          explanation: 'Un signal se lee llamándolo como una función, también en la plantilla.',
        },
        {
          type: 'classify',
          question: '¿signal, computed o effect?',
          bins: [
            { id: 'signal', label: '`signal`' },
            { id: 'computed', label: '`computed`' },
            { id: 'effect', label: '`effect`' },
          ],
          items: [
            { text: 'La cantidad de productos en el carrito', bin: 'signal' },
            { text: 'El total = precio × cantidad', bin: 'computed' },
            { text: 'Guardar el carrito en localStorage cada vez que cambie', bin: 'effect' },
            { text: 'El texto que escribe el usuario en el buscador', bin: 'signal' },
            { text: 'La lista de productos filtrada por ese texto', bin: 'computed' },
          ],
          explanation: 'Estado → `signal`; valores derivados → `computed`; efectos secundarios → `effect`.',
        },
        {
          type: 'quiz',
          question: '¿Se puede hacer `total.set(0)` si `total` es un `computed`?',
          options: [
            'No: un computed es de solo lectura; cambia cuando cambian los signals de los que depende',
            'Sí, como cualquier signal',
            'Solo dentro de un effect',
            'Solo si el valor es 0',
          ],
          answer: 0,
          explanation: 'Para cambiar el total, cambia sus fuentes (precio o cantidad) y el computed se recalcula solo.',
        },
      ],
    },

    // ─────────────── 6
    {
      id: 'ng-comunicacion',
      icon: '📣',
      title: 'Comunicación entre componentes',
      lesson: [
        {
          title: 'Datos hacia abajo, eventos hacia arriba',
          text: 'Un componente **padre** pasa datos al **hijo** con **inputs**, y el hijo avisa al padre con **outputs** (eventos).',
          codes: [
            { lang: 'ts', title: 'tarjeta.ts (hijo)', code: "import { Component, input, output } from '@angular/core';\n\nexport class Tarjeta {\n  producto = input.required<Producto>();  // dato que llega\n  agregado = output<Producto>();          // evento que sale\n\n  agregar() {\n    this.agregado.emit(this.producto());\n  }\n}" },
            { lang: 'angular', title: 'menu.html (padre)', code: '@for (p of productos(); track p.id) {\n  <app-tarjeta\n    [producto]="p"\n    (agregado)="alCarrito($event)" />\n}' },
          ],
          tip: 'Un `input()` es un signal: en el hijo se lee con `producto()`. `$event` es el valor que se emitió.',
        },
        {
          title: 'model(): enlace en los dos sentidos',
          code: { lang: 'ts', code: "// contador.ts (hijo)\ncantidad = model(1);\n\n// padre.html\n<app-contador [(cantidad)]=\"unidades\" />" },
          tip: 'Antes de los signals se usaban los decoradores `@Input()` y `@Output()` con `EventEmitter`: los verás en proyectos más antiguos.',
        },
      ],
      challenges: [
        {
          type: 'fill',
          question: 'Completa el componente hijo',
          lang: 'ts',
          code: 'export class Tarjeta {\n  producto = ___.required<Producto>();\n  agregado = ___<Producto>();\n\n  agregar() {\n    this.agregado.___(this.producto());\n  }\n}',
          blanks: [['input'], ['output'], ['emit']],
          bank: ['input', 'output', 'emit', 'signal', 'send', 'model'],
          explanation: '`input()` recibe datos del padre, `output()` declara un evento y `.emit()` lo dispara.',
        },
        {
          type: 'fill',
          question: 'Completa el uso del hijo en la plantilla del padre',
          lang: 'angular',
          code: '<app-tarjeta\n  ___="cafeDelDia"\n  ___="anadirAlCarrito($event)" />',
          blanks: [['[producto]'], ['(agregado)']],
          bank: ['[producto]', '(agregado)', '(producto)', '[agregado]', '{{producto}}'],
          explanation: 'Los inputs se pasan con corchetes y los outputs se escuchan con paréntesis, igual que las propiedades y eventos del HTML.',
        },
        {
          type: 'quiz',
          question: 'En el padre: `(agregado)="alCarrito($event)"`. ¿Qué es `$event`?',
          options: ['El valor que el hijo pasó a `emit()`', 'El evento de clic del ratón', 'El componente hijo completo', 'Siempre `undefined`'],
          answer: 0,
          explanation: 'En un output de componente, `$event` es exactamente lo que se emitió: aquí, el producto.',
        },
        {
          type: 'quiz',
          question: '¿Cuál es el flujo correcto de comunicación?',
          options: [
            'Padre → hijo con inputs; hijo → padre con outputs',
            'Hijo → padre con inputs; padre → hijo con outputs',
            'Los componentes no se pueden comunicar',
            'Siempre a través de variables globales',
          ],
          answer: 0,
          explanation: '«Datos hacia abajo, eventos hacia arriba»: un flujo predecible y fácil de depurar.',
        },
      ],
    },

    // ─────────────── 7
    {
      id: 'ng-servicios',
      icon: '💉',
      title: 'Servicios e inyección de dependencias',
      lesson: [
        {
          title: '¿Dónde guardo la lógica compartida?',
          text: 'Si el **carrito** se usa en la cabecera, en el menú y en el pago, sus datos no deben vivir en un componente. Van en un **servicio**:',
          code: { lang: 'ts', title: 'carrito.ts', code: "import { Injectable, signal, computed } from '@angular/core';\n\n@Injectable({ providedIn: 'root' })   // una única instancia para toda la app\nexport class CarritoService {\n  private items = signal<Producto[]>([]);\n  cantidad = computed(() => this.items().length);\n\n  agregar(p: Producto) {\n    this.items.update((lista) => [...lista, p]);\n  }\n}" },
        },
        {
          title: 'Inyectar el servicio',
          text: 'Los componentes **piden** el servicio y Angular se lo **entrega** (inyección de dependencias):',
          code: { lang: 'ts', code: "import { Component, inject } from '@angular/core';\n\nexport class Cabecera {\n  carrito = inject(CarritoService);\n}\n\n// cabecera.html\n// 🛒 {{ carrito.cantidad() }}" },
          points: [
            'Todos los componentes que inyectan `CarritoService` reciben **la misma instancia** (*singleton*).',
            'Se genera con `ng generate service carrito`.',
            'También se puede inyectar en el constructor: `constructor(private carrito: CarritoService) {}`.',
          ],
        },
      ],
      challenges: [
        {
          type: 'fill',
          question: 'Completa el servicio y su uso',
          lang: 'ts',
          code: "@___({ providedIn: 'root' })\nexport class MenuService {\n  productos = signal<Producto[]>([]);\n}\n\nexport class Menu {\n  menu = ___(MenuService);\n}",
          blanks: [['Injectable'], ['inject']],
          bank: ['Injectable', 'inject', 'Component', 'Service', 'new', 'provide'],
          explanation: '`@Injectable` marca la clase como servicio y `inject()` la obtiene dentro de un componente.',
        },
        {
          type: 'quiz',
          question: "¿Qué significa `providedIn: 'root'`?",
          options: [
            'Que hay una única instancia del servicio compartida por toda la aplicación',
            'Que solo lo puede usar el componente raíz',
            'Que se crea una instancia nueva cada vez',
            'Que el servicio vive en el servidor',
          ],
          answer: 0,
          explanation: 'Así todos los componentes ven los mismos datos: si el menú añade algo al carrito, la cabecera lo ve.',
        },
        {
          type: 'classify',
          question: '¿Dónde pondrías cada cosa?',
          bins: [
            { id: 'comp', label: '🧩 Componente' },
            { id: 'serv', label: '💉 Servicio' },
          ],
          items: [
            { text: 'Si un desplegable está abierto o cerrado', bin: 'comp' },
            { text: 'Los productos del carrito (los usan varias pantallas)', bin: 'serv' },
            { text: 'Las peticiones HTTP a la API', bin: 'serv' },
            { text: 'Qué pestaña está seleccionada en esta tarjeta', bin: 'comp' },
            { text: 'Los datos del usuario que ha iniciado sesión', bin: 'serv' },
          ],
          explanation: 'Estado de la vista local → componente. Datos compartidos y acceso a la API → servicio.',
        },
        {
          type: 'order',
          question: 'Ordena los pasos para usar un servicio',
          steps: [
            'Generar el servicio con `ng g s carrito`',
            "Decorarlo con `@Injectable({ providedIn: 'root' })`",
            'Escribir sus datos y métodos',
            'Inyectarlo en el componente con `inject(CarritoService)`',
            'Usarlo en la plantilla: `{{ carrito.cantidad() }}`',
          ],
          explanation: 'Crear, decorar, implementar, inyectar y usar.',
        },
      ],
    },

    // ─────────────── 8
    {
      id: 'ng-rutas',
      icon: '🧭',
      title: 'Rutas',
      lesson: [
        {
          title: 'Varias pantallas en una SPA',
          text: 'El **router** de Angular muestra un componente distinto según la URL, sin recargar la página:',
          code: { lang: 'ts', title: 'app.routes.ts', code: "import { Routes } from '@angular/router';\n\nexport const routes: Routes = [\n  { path: '', component: Inicio },\n  { path: 'menu', component: Menu },\n  { path: 'producto/:id', component: DetalleProducto },  // parámetro\n  { path: 'admin', loadComponent: () => import('./admin').then(m => m.Admin) }, // carga diferida\n  { path: '**', component: NoEncontrado },                // cualquier otra\n];" },
        },
        {
          title: 'Activar y usar el router',
          codes: [
            { lang: 'ts', title: 'app.config.ts', code: "export const appConfig: ApplicationConfig = {\n  providers: [provideRouter(routes)],\n};" },
            { lang: 'angular', title: 'app.html', code: '<nav>\n  <a routerLink="/" routerLinkActive="activo">Inicio</a>\n  <a routerLink="/menu" routerLinkActive="activo">Menú</a>\n</nav>\n\n<router-outlet />   <!-- aquí aparece la pantalla de la ruta -->' },
          ],
          tip: 'Usa `routerLink` en lugar de `href`: así no se recarga la página. El parámetro `:id` se lee con `ActivatedRoute` o como un `input()` (activando `withComponentInputBinding()`).',
        },
      ],
      challenges: [
        {
          type: 'fill',
          question: 'Completa las rutas',
          lang: 'ts',
          code: "export const routes: Routes = [\n  { path: '', component: Inicio },\n  { ___: 'menu', ___: Menu },\n  { path: 'producto/___', component: Detalle },\n  { path: '___', component: NoEncontrado },\n];",
          blanks: [['path'], ['component'], [':id'], ['**']],
          bank: ['path', 'component', ':id', '**', 'url', '*', '{id}'],
          explanation: '`path` es la URL, `component` qué se muestra, `:id` un parámetro y `**` captura cualquier ruta no definida.',
        },
        {
          type: 'quiz',
          question: '¿Para qué sirve `<router-outlet />`?',
          options: [
            'Marca el lugar donde el router pinta el componente de la ruta actual',
            'Crea un enlace a otra página',
            'Define las rutas',
            'Recarga la aplicación',
          ],
          answer: 0,
          explanation: 'Todo lo que está fuera del outlet (por ejemplo, la cabecera) se mantiene; lo de dentro cambia con la URL.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: 'Con estas rutas, ¿qué componente se muestra en `/producto/7`?',
          snippet: { lang: 'ts', code: "[\n  { path: '', component: Inicio },\n  { path: 'menu', component: Menu },\n  { path: 'producto/:id', component: Detalle },\n  { path: '**', component: NoEncontrado },\n]" },
          options: ['`Detalle`, con id = 7', '`NoEncontrado`', '`Menu`', '`Inicio`'],
          answer: 0,
          explanation: '`producto/:id` coincide con cualquier `producto/<algo>` y guarda ese valor en el parámetro `id`.',
        },
        {
          type: 'quiz',
          question: '¿Por qué se usa `routerLink="/menu"` en lugar de `href="/menu"`?',
          options: [
            'Porque `routerLink` navega dentro de la SPA sin recargar la página',
            'Porque `href` no funciona en Angular',
            'Porque `routerLink` abre una pestaña nueva',
            'Es lo mismo',
          ],
          answer: 0,
          explanation: 'Con `href` el navegador pediría la página al servidor y la app se recargaría entera, perdiendo el estado.',
        },
      ],
    },

    // ─────────────── 9
    {
      id: 'ng-http',
      icon: '🌐',
      title: 'Peticiones HTTP',
      lesson: [
        {
          title: 'HttpClient',
          text: 'Angular trae su propio cliente HTTP. Primero se activa en la configuración:',
          code: { lang: 'ts', title: 'app.config.ts', code: 'providers: [\n  provideRouter(routes),\n  provideHttpClient(),\n]' },
        },
        {
          title: 'Un servicio para la API',
          code: { lang: 'ts', code: "@Injectable({ providedIn: 'root' })\nexport class ProductosService {\n  private http = inject(HttpClient);\n\n  listar() {\n    return this.http.get<Producto[]>('/api/productos');  // Observable<Producto[]>\n  }\n}" },
          points: [
            '`get<T>()` devuelve un **Observable**: un flujo de datos de la librería **RxJS**.',
            'Un Observable es **perezoso**: la petición **no se hace** hasta que alguien se suscribe.',
          ],
        },
        {
          title: 'Usarlo en un componente',
          codes: [
            { lang: 'ts', title: 'Con subscribe', code: "export class Menu {\n  productos = signal<Producto[]>([]);\n  private api = inject(ProductosService);\n\n  ngOnInit() {\n    this.api.listar().subscribe({\n      next: (lista) => this.productos.set(lista),\n      error: (e) => console.error(e),\n    });\n  }\n}" },
            { lang: 'ts', title: 'Con toSignal', code: "import { toSignal } from '@angular/core/rxjs-interop';\n\nexport class Menu {\n  private api = inject(ProductosService);\n  productos = toSignal(this.api.listar(), {\n    initialValue: [],\n  });\n}" },
          ],
          tip: '`ngOnInit` es un *hook* del ciclo de vida: se ejecuta cuando el componente se inicializa.',
        },
      ],
      challenges: [
        {
          type: 'fill',
          question: 'Completa el servicio de productos',
          lang: 'ts',
          code: "export class ProductosService {\n  private http = inject(___);\n\n  listar() {\n    return this.http.___<Producto[]>('/api/productos');\n  }\n}",
          blanks: [['HttpClient'], ['get']],
          bank: ['HttpClient', 'get', 'fetch', 'post', 'Http', 'request'],
          explanation: 'Se inyecta `HttpClient` y se usa `get<T>()` para leer datos. Para crear, `post<T>(url, cuerpo)`.',
        },
        {
          type: 'quiz',
          question: 'Llamas a `this.api.listar()` pero no te suscribes. ¿Qué pasa?',
          options: [
            'No se hace ninguna petición: los Observables de HttpClient son perezosos',
            'Se hace la petición pero se pierde la respuesta',
            'Da un error de compilación',
            'Se hace la petición dos veces',
          ],
          answer: 0,
          explanation: 'Hasta que alguien se suscribe (con `subscribe`, `toSignal` o el pipe `async`), la petición no sale.',
        },
        {
          type: 'quiz',
          question: '¿Dónde se activa `provideHttpClient()`?',
          options: ['En los `providers` de `app.config.ts`', 'En cada componente', 'En `index.html`', 'En `angular.json`'],
          answer: 0,
          explanation: 'Es configuración global de la aplicación, junto a `provideRouter(routes)`.',
        },
        {
          type: 'order',
          question: 'Ordena el recorrido de los datos desde la API hasta la pantalla',
          steps: [
            'El componente inyecta `ProductosService`',
            'Llama a `listar()`, que usa `http.get<Producto[]>(url)`',
            'Se suscribe al Observable (o usa `toSignal`)',
            'Llega la respuesta JSON y se guarda en un signal',
            'La plantilla la pinta con `@for`',
          ],
          explanation: 'Servicio → Observable → suscripción → signal → plantilla.',
        },
      ],
    },

    // ─────────────── 10
    {
      id: 'ng-formularios',
      icon: '📝',
      title: 'Formularios',
      lesson: [
        {
          title: 'Dos enfoques',
          table: {
            head: ['', 'Plantilla (template-driven)', 'Reactivos (reactive)'],
            rows: [
              ['Módulo', '`FormsModule`', '`ReactiveFormsModule`'],
              ['Dónde vive la lógica', 'En el HTML (`ngModel`)', 'En la clase (`FormGroup`)'],
              ['Ideal para', 'Formularios sencillos', 'Formularios complejos y con validación'],
            ],
          },
        },
        {
          title: 'Formulario reactivo',
          codes: [
            { lang: 'ts', title: 'reserva.ts', code: "import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';\n\nexport class Reserva {\n  form = new FormGroup({\n    nombre: new FormControl('', Validators.required),\n    correo: new FormControl('', [Validators.required, Validators.email]),\n    personas: new FormControl(2, [Validators.min(1), Validators.max(10)]),\n  });\n\n  enviar() {\n    if (this.form.valid) console.log(this.form.value);\n  }\n}" },
            { lang: 'angular', title: 'reserva.html', code: '<form [formGroup]="form" (ngSubmit)="enviar()">\n  <input formControlName="nombre">\n  <input formControlName="correo" type="email">\n  <input formControlName="personas" type="number">\n\n  @if (form.controls.correo.invalid && form.controls.correo.touched) {\n    <small>Correo no válido</small>\n  }\n\n  <button [disabled]="form.invalid">Reservar</button>\n</form>' },
          ],
        },
      ],
      challenges: [
        {
          type: 'fill',
          question: 'Completa el formulario reactivo',
          lang: 'ts',
          code: "form = new ___({\n  correo: new ___('', [Validators.required, Validators.___]),\n});",
          blanks: [['FormGroup'], ['FormControl'], ['email']],
          bank: ['FormGroup', 'FormControl', 'email', 'Form', 'Input', 'mail'],
          explanation: 'Un `FormGroup` agrupa `FormControl`s, cada uno con su valor inicial y sus validadores.',
        },
        {
          type: 'fill',
          question: 'Conecta la plantilla con el formulario',
          lang: 'angular',
          code: '<form ___="form" ___="enviar()">\n  <input ___="correo">\n  <button>Enviar</button>\n</form>',
          blanks: [['[formGroup]'], ['(ngSubmit)'], ['formControlName']],
          bank: ['[formGroup]', '(ngSubmit)', 'formControlName', '(submit)', 'ngModel', 'name'],
          explanation: '`[formGroup]` enlaza el formulario, `formControlName` cada campo y `(ngSubmit)` el envío.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: 'El usuario deja el nombre vacío y escribe un correo correcto. ¿Cuánto vale `form.valid`?',
          snippet: { lang: 'ts', code: "form = new FormGroup({\n  nombre: new FormControl('', Validators.required),\n  correo: new FormControl('', Validators.email),\n});" },
          options: ['`false`: el nombre es obligatorio', '`true`', '`undefined`', 'Da un error'],
          answer: 0,
          explanation: 'Un formulario solo es válido si **todos** sus controles lo son.',
        },
        {
          type: 'classify',
          question: '¿Plantilla o reactivo?',
          bins: [
            { id: 'tpl', label: '📄 Template-driven' },
            { id: 'rx', label: '⚙️ Reactivo' },
          ],
          items: [
            { text: 'Usa `[(ngModel)]`', bin: 'tpl' },
            { text: 'Usa `FormGroup` y `FormControl`', bin: 'rx' },
            { text: 'Importa `FormsModule`', bin: 'tpl' },
            { text: 'Importa `ReactiveFormsModule`', bin: 'rx' },
            { text: 'La validación se define en la clase', bin: 'rx' },
          ],
          explanation: 'Los dos son válidos. Los reactivos dan más control y son más fáciles de probar.',
        },
      ],
    },

    // ─────────────── 11 · Proyecto
    {
      id: 'ng-proyecto',
      icon: '☕',
      title: 'Proyecto: Café Pixel en Angular',
      project: true,
      lesson: [
        {
          title: 'De página a aplicación',
          mood: 'happy',
          text: 'Vamos a diseñar la **app de Café Pixel en Angular**: un servicio con los datos, componentes con signals y rutas. ¡Todo lo que construiste en HTML, CSS y JavaScript, ahora como una aplicación de verdad!',
          code: { lang: 'text', code: 'App (cabecera + <router-outlet />)\n ├─ /            → Inicio\n ├─ /menu        → Menu\n │                  └─ Tarjeta (una por producto)\n └─ /carrito     → Carrito\n\nServicios: ProductosService (API) · CarritoService (estado)' },
        },
      ],
      challenges: [
        {
          type: 'classify',
          question: 'Café Pixel: ¿componente, servicio o configuración?',
          bins: [
            { id: 'comp', label: '🧩 Componente' },
            { id: 'serv', label: '💉 Servicio' },
            { id: 'conf', label: '⚙️ Configuración' },
          ],
          items: [
            { text: 'La tarjeta que muestra un producto', bin: 'comp' },
            { text: 'Pedir los productos a `/api/productos`', bin: 'serv' },
            { text: 'Guardar qué hay en el carrito', bin: 'serv' },
            { text: 'Las rutas `/`, `/menu` y `/carrito`', bin: 'conf' },
            { text: 'La pantalla del menú con la lista de tarjetas', bin: 'comp' },
            { text: '`provideHttpClient()`', bin: 'conf' },
          ],
          explanation: 'Vista → componentes; datos y lógica compartida → servicios; arranque y proveedores → `app.config.ts` y `app.routes.ts`.',
        },
        {
          type: 'fill',
          question: 'El componente Menu',
          lang: 'ts',
          code: "@Component({\n  selector: 'app-menu',\n  imports: [Tarjeta],\n  templateUrl: './menu.html',\n})\nexport class Menu {\n  private productosService = ___(ProductosService);\n  private carrito = inject(CarritoService);\n\n  productos = toSignal(this.productosService.listar(), { initialValue: [] });\n  busqueda = ___('');\n  filtrados = ___(() =>\n    this.productos().filter((p) => p.nombre.toLowerCase().includes(this.busqueda().toLowerCase()))\n  );\n\n  alCarrito(p: Producto) {\n    this.carrito.agregar(p);\n  }\n}",
          blanks: [['inject'], ['signal'], ['computed']],
          bank: ['inject', 'signal', 'computed', 'effect', 'new', 'input'],
          explanation: 'Se inyecta el servicio, la búsqueda es estado (`signal`) y la lista filtrada se deriva (`computed`).',
        },
        {
          type: 'fill',
          question: 'La plantilla del menú',
          lang: 'angular',
          code: '<input placeholder="Buscar…" [value]="busqueda()" (input)="busqueda.set($any($event.target).value)">\n\n___ (p of filtrados(); track p.id) {\n  <app-tarjeta ___="p" ___="alCarrito($event)" />\n} @empty {\n  <p>No encontramos ese café ☕</p>\n}',
          blanks: [['@for'], ['[producto]'], ['(agregado)']],
          bank: ['@for', '[producto]', '(agregado)', '@if', '(producto)', '[agregado]'],
          explanation: 'Una tarjeta por producto filtrado: el producto baja por el input y el evento sube por el output.',
        },
        {
          type: 'order',
          question: 'Ordena cómo se construiría la app desde cero',
          steps: [
            'Crear el proyecto con `ng new cafe-pixel`',
            'Definir la interfaz `Producto` en TypeScript',
            'Crear `ProductosService` con `HttpClient`',
            'Crear los componentes `Tarjeta` y `Menu`',
            'Configurar las rutas en `app.routes.ts`',
            'Probar con `ng serve` en `http://localhost:4200`',
          ],
          explanation: 'Modelo → servicio → componentes → rutas → ¡a probar!',
        },
      ],
    },
  ],
};
