// ───────────────────────────── MUNDO 4: TYPESCRIPT ─────────────────────────────
// Los retos de código usan lang: 'ts'. El código se compila a JavaScript en el navegador (sin comprobar tipos),
// así que las comprobaciones revisan los tipos en el código fuente (src.js) y el comportamiento al ejecutarse.

export const TS = {
  id: 'ts',
  short: 'TS',
  name: 'TypeScript: código con tipos',
  icon: '🔷',
  color: '#3178c6',
  description: 'JavaScript con superpoderes: tipos, interfaces y clases. El lenguaje con el que se escribe Angular.',
  levels: [
    // ─────────────── 1
    {
      id: 'ts-intro',
      icon: '🔷',
      title: '¿Por qué TypeScript?',
      lesson: [
        {
          title: 'JavaScript… con tipos',
          mood: 'wow',
          text: '**TypeScript** (de Microsoft) es JavaScript **más un sistema de tipos**. Todo código JavaScript válido es TypeScript válido, pero TypeScript detecta errores **antes** de ejecutar.',
          codes: [
            { lang: 'js', title: '😱 JavaScript: el error aparece al ejecutar', code: "function total(precio, cantidad) {\n  return precio * cantidad;\n}\ntotal('6000', 2);   // 12000… por suerte\ntotal(6000);        // NaN 🤯" },
            { lang: 'ts', title: '😌 TypeScript: el editor te avisa al escribir', code: "function total(precio: number, cantidad: number): number {\n  return precio * cantidad;\n}\ntotal('6000', 2);  // ❌ string no es number\ntotal(6000);       // ❌ falta un argumento" },
          ],
        },
        {
          title: 'Cómo funciona',
          points: [
            '✍️ Escribes archivos `.ts`.',
            '⚙️ El **compilador** (`tsc`) revisa los tipos y genera JavaScript normal.',
            '🌐 El navegador ejecuta ese JavaScript: **no entiende TypeScript** directamente.',
            '🅰️ **Angular está escrito en TypeScript** y tus componentes también lo estarán.',
          ],
          tip: 'En este juego, el código TypeScript se convierte a JavaScript al momento para ejecutarlo. Las comprobaciones revisan además que hayas escrito los tipos.',
        },
        {
          title: 'Anotaciones de tipo e inferencia',
          code: { lang: 'ts', code: "let nombre: string = 'Moka';\nlet precio: number = 6000;\nlet disponible: boolean = true;\nlet etiquetas: string[] = ['café', 'caliente'];\n\nlet total = 0;      // inferido: number\ntotal = 'gratis';   // ❌ error: es number" },
          tip: 'Si TypeScript puede **inferir** el tipo por el valor inicial, no hace falta escribirlo.',
        },
        {
          title: 'any y unknown',
          codes: [
            { lang: 'ts', title: '⚠️ any: apaga los tipos', code: 'let dato: any = 5;\ndato.lo.que.sea();  // compila… y falla al ejecutar' },
            { lang: 'ts', title: '✅ unknown: obliga a comprobar', code: "let dato: unknown = obtener();\nif (typeof dato === 'string') {\n  dato.toUpperCase(); // ✅ aquí sí es string\n}" },
          ],
          tip: 'Evita `any`: es como desactivar TypeScript.',
        },
      ],
      challenges: [
        {
          type: 'quiz',
          question: '¿Puede un navegador ejecutar directamente un archivo `.ts`?',
          options: ['No: primero se compila a JavaScript', 'Sí, todos los navegadores modernos lo entienden', 'Solo Chrome', 'Solo si se usa Angular'],
          answer: 0,
          explanation: 'TypeScript se **compila** (transpila) a JavaScript. Los tipos desaparecen en el resultado: solo existen mientras programas.',
        },
        {
          type: 'classify',
          question: '¿Compila o da error de TypeScript?',
          bins: [
            { id: 'ok', label: '✅ Compila' },
            { id: 'error', label: '❌ Error' },
          ],
          items: [
            { text: "`let precio: number = '5000';`", bin: 'error' },
            { text: "`let nombre = 'Moka'; nombre = 3;`", bin: 'error' },
            { text: "`const tags: string[] = ['café'];`", bin: 'ok' },
            { text: "`let x: any = 5; x = 'hola';`", bin: 'ok' },
            { text: "`function f(n: number) {}  f('2');`", bin: 'error' },
            { text: '`let activo: boolean = false;`', bin: 'ok' },
          ],
          explanation: 'TypeScript avisa cuando el valor no encaja con el tipo (declarado o inferido). Con `any` no hay comprobaciones.',
        },
        {
          type: 'code',
          question: 'Tus primeras variables tipadas',
          instructions: 'Declara con su tipo:\n• `nombre: string` con **Capuchino**\n• `precio: number` con **8500**\n• `disponible: boolean` con **true**\n• `etiquetas: string[]` con al menos dos etiquetas\nY muestra el nombre en la consola.',
          lang: 'ts',
          files: { js: '// Declara aquí tus variables con tipo\n\n' },
          checks: [
            { text: '`nombre: string` = «Capuchino»', test: "return /nombre\\s*:\\s*string/.test(src.js) && nombre === 'Capuchino'" },
            { text: '`precio: number` = 8500', test: 'return /precio\\s*:\\s*number/.test(src.js) && precio === 8500' },
            { text: '`disponible: boolean` = true', test: 'return /disponible\\s*:\\s*boolean/.test(src.js) && disponible === true' },
            { text: '`etiquetas: string[]` con 2 o más', test: 'return /etiquetas\\s*:\\s*string\\[\\]/.test(src.js) && etiquetas.length >= 2' },
            { text: 'La consola muestra «Capuchino»', test: "return logs.includes('Capuchino')" },
          ],
          solution: { js: "const nombre: string = 'Capuchino';\nconst precio: number = 8500;\nconst disponible: boolean = true;\nconst etiquetas: string[] = ['café', 'leche'];\n\nconsole.log(nombre);\n" },
          hint: "La anotación va después del nombre: `const precio: number = 8500;`",
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué tipo infiere TypeScript para `total`?',
          snippet: { lang: 'ts', code: 'let total = 0;' },
          options: ['`number`', '`any`', '`unknown`', '`string`'],
          answer: 0,
          explanation: 'Por el valor inicial (0), TypeScript infiere `number`. Si después intentas asignarle un texto, dará error.',
        },
        {
          type: 'quiz',
          question: '¿Por qué es mejor `unknown` que `any`?',
          options: [
            '`unknown` obliga a comprobar el tipo antes de usar el valor; `any` desactiva todas las comprobaciones',
            '`unknown` es más rápido',
            '`any` no existe en TypeScript moderno',
            'Son exactamente iguales',
          ],
          answer: 0,
          explanation: 'Con `unknown` el compilador no te deja usar el valor hasta que demuestres qué es (`typeof`, `instanceof`…).',
        },
      ],
    },

    // ─────────────── 2
    {
      id: 'ts-funciones',
      icon: '🧮',
      title: 'Funciones y tipos unión',
      lesson: [
        {
          title: 'Funciones tipadas',
          code: { lang: 'ts', code: "function conIva(precio: number): number {\n  return Math.round(precio * 1.19);\n}\n\n// parámetro opcional (?) y por defecto\nfunction saludar(nombre?: string, saludo: string = 'Hola'): string {\n  return `${saludo}, ${nombre ?? 'cliente'}`;\n}\n\n// función flecha tipada\nconst doble = (n: number): number => n * 2;" },
          tip: '`void` indica que una función no devuelve nada: `function log(msg: string): void { … }`.',
        },
        {
          title: 'Tipos unión y literales',
          code: { lang: 'ts', code: "let id: number | string;      // uno u otro\nid = 42;\nid = 'A-42';\n\ntype Tamano = 'pequeño' | 'mediano' | 'grande';  // solo estos valores\nlet t: Tamano = 'mediano';\nt = 'gigante';   // ❌ error" },
          tip: 'Los **tipos literales** evitan errores de escritura: el editor te sugiere solo los valores válidos.',
        },
        {
          title: 'Estrechamiento (narrowing)',
          code: { lang: 'ts', code: "function formatear(valor: number | string): string {\n  if (typeof valor === 'number') {\n    return `$${valor}`;        // aquí valor es number\n  }\n  return valor.toUpperCase();  // aquí valor es string\n}" },
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'El precio final tipado',
          instructions: 'Escribe `precioFinal(precio: number, descuento: number = 0): number` que devuelva el precio con el descuento (en %) aplicado.',
          lang: 'ts',
          files: { js: '// function precioFinal(...)\n\n\nconsole.log(precioFinal(10000));      // 10000\nconsole.log(precioFinal(10000, 20));  // 8000\n' },
          checks: [
            { text: 'Los parámetros están tipados como `number`', test: 'return /precio\\s*:\\s*number/.test(src.js) && /descuento\\s*:\\s*number\\s*=\\s*0/.test(src.js)' },
            { text: 'Declara que devuelve `number`', test: 'return /\\)\\s*:\\s*number/.test(src.js)' },
            { text: '`precioFinal(10000)` → 10000', test: 'return precioFinal(10000) === 10000' },
            { text: '`precioFinal(10000, 20)` → 8000', test: 'return precioFinal(10000, 20) === 8000' },
          ],
          solution: { js: 'function precioFinal(precio: number, descuento: number = 0): number {\n  return precio - (precio * descuento) / 100;\n}\n\nconsole.log(precioFinal(10000));      // 10000\nconsole.log(precioFinal(10000, 20));  // 8000\n' },
          hint: 'El tipo de retorno va después de los paréntesis: `(...): number {`',
        },
        {
          type: 'fill',
          question: 'Define un tipo con los tamaños permitidos',
          lang: 'ts',
          code: "___ Tamano = 'pequeño' ___ 'mediano' ___ 'grande';\n\nlet pedido: Tamano = 'mediano';",
          blanks: [['type'], ['|'], ['|']],
          bank: ['type', '|', '&', 'interface', 'enum', ','],
          explanation: '`type` crea un alias y `|` une los valores posibles en un tipo unión.',
        },
        {
          type: 'code',
          question: 'Formatear un id',
          instructions: "Escribe `formatearId(id: number | string): string`:\n• si `id` es un número, devuelve `'#' + id` (por ejemplo, `'#7'`);\n• si es un texto, devuélvelo en mayúsculas.",
          lang: 'ts',
          files: { js: '// function formatearId(...)\n\n\nconsole.log(formatearId(7));       // #7\nconsole.log(formatearId(\'ab-12\'));  // AB-12\n' },
          checks: [
            { text: 'El parámetro es `number | string`', test: 'return /id\\s*:\\s*(number\\s*\\|\\s*string|string\\s*\\|\\s*number)/.test(src.js)' },
            { text: "`formatearId(7)` → '#7'", test: "return formatearId(7) === '#7'" },
            { text: "`formatearId('ab-12')` → 'AB-12'", test: "return formatearId('ab-12') === 'AB-12'" },
            { text: 'Usas `typeof` para distinguir', test: 'return src.js.includes(\'typeof\')' },
          ],
          solution: { js: "function formatearId(id: number | string): string {\n  if (typeof id === 'number') {\n    return '#' + id;\n  }\n  return id.toUpperCase();\n}\n\nconsole.log(formatearId(7));       // #7\nconsole.log(formatearId('ab-12'));  // AB-12\n" },
          hint: "`if (typeof id === 'number') { … }`",
        },
        {
          type: 'classify',
          question: "Con `type Tamano = 'pequeño' | 'mediano' | 'grande'`, ¿compila?",
          bins: [
            { id: 'ok', label: '✅ Compila' },
            { id: 'error', label: '❌ Error' },
          ],
          items: [
            { text: "`let t: Tamano = 'grande';`", bin: 'ok' },
            { text: "`let t: Tamano = 'gigante';`", bin: 'error' },
            { text: "`let t: Tamano = 'Mediano';`", bin: 'error' },
            { text: "`let t: Tamano | null = null;`", bin: 'ok' },
          ],
          explanation: "Los literales son exactos: 'Mediano' con mayúscula no es 'mediano'.",
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué pasa con la segunda llamada?',
          snippet: { lang: 'ts', code: "function saludar(nombre: string, saludo?: string): string {\n  return `${saludo ?? 'Hola'}, ${nombre}`;\n}\n\nsaludar('Moka', 'Buenos días');\nsaludar('Moka');" },
          options: ["Compila y devuelve 'Hola, Moka'", 'Error: falta el segundo argumento', "Devuelve 'undefined, Moka'", 'Error: saludo no existe'],
          answer: 0,
          explanation: 'El `?` hace el parámetro **opcional**. El operador `??` usa `Hola` cuando `saludo` es `undefined`.',
        },
      ],
    },

    // ─────────────── 3
    {
      id: 'ts-interfaces',
      icon: '📐',
      title: 'Interfaces y types',
      lesson: [
        {
          title: 'Describir la forma de los objetos',
          text: 'Una **interfaz** define qué propiedades (y de qué tipo) debe tener un objeto:',
          code: { lang: 'ts', code: "interface Producto {\n  readonly id: number;      // no se puede cambiar\n  nombre: string;\n  precio: number;\n  disponible?: boolean;     // opcional\n}\n\nconst latte: Producto = { id: 3, nombre: 'Latte', precio: 9000 };\nlatte.id = 4;   // ❌ readonly\n\nconst menu: Producto[] = [latte];" },
        },
        {
          title: 'Extender interfaces',
          code: { lang: 'ts', code: "interface Bebida extends Producto {\n  temperatura: 'fria' | 'caliente';\n}\n\nconst coldBrew: Bebida = {\n  id: 7, nombre: 'Cold brew', precio: 9500, temperatura: 'fria',\n};" },
        },
        {
          title: 'interface o type',
          code: { lang: 'ts', code: "type Punto = { x: number; y: number };   // también describe objetos\ntype Id = number | string;                // ¡y uniones!" },
          tip: 'En Angular verás mucho `interface` para modelos de datos (lo que llega de una API) y `type` para uniones.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'El modelo Producto',
          instructions: 'Define la interfaz `Producto` con `id: number`, `nombre: string`, `precio: number` y `disponible?: boolean` (opcional).\nCrea `menu: Producto[]` con **al menos 2** productos y la función `buscar(id: number): Producto | undefined`.',
          lang: 'ts',
          files: { js: '// interface Producto { ... }\n\n// const menu: Producto[] = [ ... ];\n\n// function buscar(id: number): Producto | undefined { ... }\n\n' },
          checks: [
            { text: 'Hay una `interface Producto`', test: 'return /interface\\s+Producto\\s*\\{/.test(src.js)' },
            { text: 'Tiene id, nombre y precio tipados', test: 'return /id\\s*:\\s*number/.test(src.js) && /nombre\\s*:\\s*string/.test(src.js) && /precio\\s*:\\s*number/.test(src.js)' },
            { text: '`disponible` es opcional (`?:`)', test: 'return /disponible\\?\\s*:\\s*boolean/.test(src.js)' },
            { text: '`menu: Producto[]` con 2 o más', test: 'return /menu\\s*:\\s*Producto\\[\\]/.test(src.js) && Array.isArray(menu) && menu.length >= 2' },
            { text: '`buscar` encuentra por id y devuelve `undefined` si no existe', test: 'return buscar(menu[0].id) === menu[0] && buscar(-999) === undefined && /Producto\\s*\\|\\s*undefined/.test(src.js)' },
          ],
          solution: { js: "interface Producto {\n  id: number;\n  nombre: string;\n  precio: number;\n  disponible?: boolean;\n}\n\nconst menu: Producto[] = [\n  { id: 1, nombre: 'Espresso', precio: 6000, disponible: true },\n  { id: 2, nombre: 'Latte', precio: 9000 },\n];\n\nfunction buscar(id: number): Producto | undefined {\n  return menu.find((p) => p.id === id);\n}\n" },
          hint: 'Dentro de la interfaz, cada propiedad termina en `;`. La opcional se escribe `disponible?: boolean;`.',
        },
        {
          type: 'classify',
          question: 'Con la interfaz `Producto { id: number; nombre: string; precio: number; disponible?: boolean }`, ¿compila?',
          bins: [
            { id: 'ok', label: '✅ Compila' },
            { id: 'error', label: '❌ Error' },
          ],
          items: [
            { text: "`{ id: 1, nombre: 'Latte', precio: 9000 }`", bin: 'ok' },
            { text: "`{ id: 1, nombre: 'Latte' }`", bin: 'error' },
            { text: "`{ id: '1', nombre: 'Latte', precio: 9000 }`", bin: 'error' },
            { text: "`{ id: 1, nombre: 'Latte', precio: 9000, disponible: false }`", bin: 'ok' },
          ],
          explanation: 'Faltar `precio` o poner el `id` como texto rompe el contrato de la interfaz. `disponible` es opcional.',
        },
        {
          type: 'fill',
          question: 'Una bebida es un producto con temperatura',
          lang: 'ts',
          code: "interface Bebida ___ Producto {\n  ___ codigo: string;   // no se podrá modificar\n  temperatura: 'fria' | 'caliente';\n  azucar___: boolean;    // opcional\n}",
          blanks: [['extends'], ['readonly'], ['?']],
          bank: ['extends', 'readonly', '?', 'implements', 'const', '!'],
          explanation: '`extends` hereda las propiedades, `readonly` impide modificarla y `?` la hace opcional.',
        },
        {
          type: 'quiz',
          question: '¿Para qué se usan las interfaces en una app Angular?',
          options: [
            'Para describir la forma de los datos, por ejemplo lo que devuelve una API',
            'Para crear componentes visuales',
            'Para dar estilos',
            'Para hacer peticiones HTTP',
          ],
          answer: 0,
          explanation: 'Si la API devuelve productos, una `interface Producto` permite que el editor te ayude y detecte errores en todo el código.',
        },
      ],
    },

    // ─────────────── 4
    {
      id: 'ts-clases',
      icon: '🏗️',
      title: 'Clases',
      lesson: [
        {
          title: 'Clases con tipos',
          code: { lang: 'ts', code: "class Pedido {\n  private items: string[] = [];\n  readonly creado = new Date();\n\n  constructor(public cliente: string) {}  // crea y asigna this.cliente\n\n  agregar(item: string): void {\n    this.items.push(item);\n  }\n\n  get cantidad(): number {\n    return this.items.length;\n  }\n}\n\nconst p = new Pedido('Ana');\np.agregar('Latte');\np.cantidad;   // 1\np.items;      // ❌ private" },
          points: [
            '`public`: accesible desde fuera (por defecto).',
            '`private`: solo dentro de la clase.',
            '`readonly`: no se puede reasignar.',
            '`constructor(public cliente: string)`: atajo que declara y asigna la propiedad.',
          ],
        },
        {
          title: 'Herencia e implements',
          code: { lang: 'ts', code: "interface Imprimible {\n  imprimir(): string;\n}\n\nclass PedidoParaLlevar extends Pedido implements Imprimible {\n  constructor(cliente: string, public direccion: string) {\n    super(cliente);   // llama al constructor del padre\n  }\n  imprimir(): string {\n    return `${this.cliente} → ${this.direccion}`;\n  }\n}" },
          tip: 'Los **componentes** y **servicios** de Angular son clases de TypeScript.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'La clase Pedido',
          instructions: 'Crea la clase `Pedido`:\n• `constructor(public cliente: string)`\n• una propiedad **privada** `items` (array de `{ nombre: string; precio: number }`) que empieza vacía;\n• `agregar(nombre: string, precio: number): void`;\n• un getter `total` que devuelva la suma de los precios.',
          lang: 'ts',
          files: { js: "// class Pedido { ... }\n\n\nconst p = new Pedido('Ana');\np.agregar('Latte', 9000);\np.agregar('Brownie', 7000);\nconsole.log(p.cliente, p.total);  // Ana 16000\n" },
          checks: [
            { text: '`Pedido` es una clase con `constructor(public cliente: string)`', test: "return /class\\s+Pedido/.test(src.js) && /constructor\\s*\\(\\s*public\\s+cliente\\s*:\\s*string/.test(src.js) && new Pedido('Luis').cliente === 'Luis'" },
            { text: '`items` es privada', test: 'return /private\\s+items/.test(src.js)' },
            { text: '`agregar` tiene sus parámetros tipados', test: 'return /agregar\\s*\\(\\s*nombre\\s*:\\s*string\\s*,\\s*precio\\s*:\\s*number\\s*\\)/.test(src.js)' },
            { text: 'El getter `total` suma los precios', test: "const q = new Pedido('X'); q.agregar('A', 1000); q.agregar('B', 2500); return q.total === 3500 && /get\\s+total\\s*\\(/.test(src.js)" },
            { text: 'Un pedido nuevo tiene total 0', test: "return new Pedido('Y').total === 0" },
          ],
          solution: { js: "class Pedido {\n  private items: { nombre: string; precio: number }[] = [];\n\n  constructor(public cliente: string) {}\n\n  agregar(nombre: string, precio: number): void {\n    this.items.push({ nombre, precio });\n  }\n\n  get total(): number {\n    return this.items.reduce((suma, item) => suma + item.precio, 0);\n  }\n}\n\nconst p = new Pedido('Ana');\np.agregar('Latte', 9000);\np.agregar('Brownie', 7000);\nconsole.log(p.cliente, p.total);  // Ana 16000\n" },
          hint: 'Un getter se escribe `get total(): number { … }` y se usa sin paréntesis: `p.total`.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué dice TypeScript sobre la última línea?',
          snippet: { lang: 'ts', code: "class Cafetera {\n  private presion = 9;\n}\n\nconst c = new Cafetera();\nconsole.log(c.presion);" },
          options: ['Error: `presion` es privada', 'Muestra 9', 'Muestra undefined', 'Error: falta el constructor'],
          answer: 0,
          explanation: '`private` impide usar la propiedad desde fuera de la clase.',
        },
        {
          type: 'fill',
          question: 'Usa el atajo del constructor para declarar y asignar las propiedades',
          lang: 'ts',
          code: 'class Cliente {\n  ___(___ nombre: string, private puntos: number) {}\n}\n\nconst c = ___ Cliente(\'Ana\', 120);\nconsole.log(c.nombre);',
          blanks: [['constructor'], ['public'], ['new']],
          bank: ['constructor', 'public', 'new', 'private', 'this', 'function'],
          explanation: 'Con `constructor(public nombre: string)`, TypeScript crea y asigna `this.nombre` automáticamente.',
        },
        {
          type: 'quiz',
          question: '¿Qué significa `class Latte extends Bebida implements Imprimible`?',
          options: [
            'Latte hereda de Bebida y se compromete a cumplir el contrato de Imprimible',
            'Latte hereda de Bebida y de Imprimible',
            'Imprimible hereda de Latte',
            'Es un error: no se pueden combinar',
          ],
          answer: 0,
          explanation: '`extends` hereda la implementación de una clase; `implements` obliga a cumplir una interfaz.',
        },
      ],
    },

    // ─────────────── 5
    {
      id: 'ts-genericos',
      icon: '🧬',
      title: 'Genéricos, módulos y decoradores',
      lesson: [
        {
          title: 'Genéricos: tipos como parámetros',
          text: 'Un **genérico** permite escribir código que funciona con **cualquier tipo**, sin perder la información del tipo:',
          code: { lang: 'ts', code: "function primero<T>(lista: T[]): T | undefined {\n  return lista[0];\n}\n\nconst a = primero([1, 2, 3]);          // number | undefined\nconst b = primero(['café', 'té']);    // string | undefined\n\nconst ids: Array<number> = [1, 2];\nconst respuesta: Promise<Producto[]> = cargar();" },
          tip: 'En Angular los verás todo el rato: `signal<number>(0)`, `http.get<Producto[]>(url)`, `input<string>()`…',
        },
        {
          title: 'Módulos: import y export',
          codes: [
            { lang: 'ts', title: 'producto.ts', code: "export interface Producto {\n  id: number;\n  nombre: string;\n}\n\nexport const IVA = 0.19;" },
            { lang: 'ts', title: 'menu.ts', code: "import { Producto, IVA } from './producto';\n\nconst menu: Producto[] = [];" },
          ],
        },
        {
          title: 'Decoradores',
          text: 'Un **decorador** es una función que se escribe con `@` delante de una clase (o propiedad) y le añade **metadatos** o comportamiento. Angular los usa para saber qué es cada clase:',
          code: { lang: 'ts', code: "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-menu',\n  templateUrl: './menu.html',\n})\nexport class Menu {}" },
          tip: '¡Esto ya es Angular! El decorador `@Component` convierte una clase normal en un componente.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'Una función genérica',
          instructions: 'Escribe la función genérica `ultimo<T>(lista: T[]): T | undefined` que devuelva el **último** elemento de la lista.',
          lang: 'ts',
          files: { js: "// function ultimo<T>(...)\n\n\nconsole.log(ultimo([1, 2, 3]));            // 3\nconsole.log(ultimo(['café', 'té', 'chai'])); // chai\n" },
          checks: [
            { text: 'Es genérica: `ultimo<T>(lista: T[])`', test: 'return /ultimo\\s*<\\s*T\\s*>\\s*\\(\\s*lista\\s*:\\s*T\\[\\]\\s*\\)/.test(src.js)' },
            { text: 'Devuelve `T | undefined`', test: 'return /:\\s*T\\s*\\|\\s*undefined/.test(src.js)' },
            { text: '`ultimo([1, 2, 3])` → 3', test: 'return ultimo([1, 2, 3]) === 3' },
            { text: '`ultimo([])` → undefined', test: 'return ultimo([]) === undefined' },
          ],
          solution: { js: "function ultimo<T>(lista: T[]): T | undefined {\n  return lista[lista.length - 1];\n}\n\nconsole.log(ultimo([1, 2, 3]));            // 3\nconsole.log(ultimo(['café', 'té', 'chai'])); // chai\n" },
          hint: 'El último índice es `lista.length - 1`.',
        },
        {
          type: 'fill',
          question: 'Completa los tipos genéricos',
          lang: 'ts',
          code: "const precios: ___<number> = [6000, 8500];\n\nasync function cargar(): ___<string[]> {\n  return ['Espresso', 'Latte'];\n}",
          blanks: [['Array'], ['Promise']],
          bank: ['Array', 'Promise', 'List', 'Async', 'Observable'],
          explanation: '`Array<number>` equivale a `number[]`. Una función `async` siempre devuelve una `Promise`.',
        },
        {
          type: 'quiz',
          question: '¿Qué hace el decorador `@Component` en Angular?',
          options: [
            'Añade metadatos a la clase para que Angular la trate como un componente',
            'Hace que la clase sea privada',
            'Compila el TypeScript',
            'Crea una base de datos',
          ],
          answer: 0,
          explanation: 'El decorador le dice a Angular el selector, la plantilla, los estilos… de esa clase.',
        },
        {
          type: 'fill',
          question: 'Comparte la interfaz entre archivos',
          lang: 'ts',
          code: "// producto.ts\n___ interface Producto { id: number; nombre: string; }\n\n// carrito.ts\n___ { Producto } ___ './producto';",
          blanks: [['export'], ['import'], ['from']],
          bank: ['export', 'import', 'from', 'require', 'public', 'include'],
          explanation: 'Lo que se `export`a en un archivo se puede `import`ar en otro.',
        },
      ],
    },

    // ─────────────── 6 · Proyecto
    {
      id: 'ts-proyecto',
      icon: '☕',
      title: 'Proyecto: el modelo de Café Pixel',
      project: true,
      lesson: [
        {
          title: 'Datos con tipos',
          mood: 'happy',
          text: 'Antes de pasar a Angular, vamos a escribir el **modelo de datos** de Café Pixel en TypeScript: las interfaces y la clase del carrito. Será exactamente el tipo de código que usarás dentro de los servicios de Angular.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'Proyecto: el carrito tipado',
          instructions: 'Escribe:\n1. `interface Producto { id: number; nombre: string; precio: number }`\n2. `interface Linea { producto: Producto; cantidad: number }`\n3. La clase `Carrito` con:\n   • `private lineas: Linea[] = []`\n   • `agregar(producto: Producto, cantidad: number = 1): void` (si el producto ya está, suma la cantidad)\n   • `total(): number`\n   • `vaciar(): void`',
          lang: 'ts',
          files: { js: "// Tu modelo aquí\n\n\nconst espresso = { id: 1, nombre: 'Espresso', precio: 6000 };\nconst latte = { id: 3, nombre: 'Latte', precio: 9000 };\n\nconst carrito = new Carrito();\ncarrito.agregar(espresso, 2);\ncarrito.agregar(latte);\nconsole.log(carrito.total()); // 21000\n" },
          checks: [
            { text: 'Interfaces `Producto` y `Linea`', test: 'return /interface\\s+Producto/.test(src.js) && /interface\\s+Linea/.test(src.js) && /producto\\s*:\\s*Producto/.test(src.js)' },
            { text: '`private lineas: Linea[]`', test: 'return /private\\s+lineas\\s*:\\s*Linea\\[\\]/.test(src.js)' },
            { text: '`agregar` con cantidad por defecto 1', test: 'return /cantidad\\s*:\\s*number\\s*=\\s*1/.test(src.js)' },
            { text: 'El total es correcto (21000)', test: "const c = new Carrito(); c.agregar({ id: 1, nombre: 'E', precio: 6000 }, 2); c.agregar({ id: 3, nombre: 'L', precio: 9000 }); return c.total() === 21000" },
            { text: 'Agregar el mismo producto suma la cantidad (no duplica la línea)', test: "const c = new Carrito(); const p = { id: 1, nombre: 'E', precio: 6000 }; c.agregar(p); c.agregar(p, 2); return c.total() === 18000 && c.lineas.length === 1" },
            { text: '`vaciar()` deja el total en 0', test: "const c = new Carrito(); c.agregar({ id: 1, nombre: 'E', precio: 6000 }); c.vaciar(); return c.total() === 0" },
          ],
          solution: { js: "interface Producto {\n  id: number;\n  nombre: string;\n  precio: number;\n}\n\ninterface Linea {\n  producto: Producto;\n  cantidad: number;\n}\n\nclass Carrito {\n  private lineas: Linea[] = [];\n\n  agregar(producto: Producto, cantidad: number = 1): void {\n    const linea = this.lineas.find((l) => l.producto.id === producto.id);\n    if (linea) {\n      linea.cantidad += cantidad;\n    } else {\n      this.lineas.push({ producto, cantidad });\n    }\n  }\n\n  total(): number {\n    return this.lineas.reduce((suma, l) => suma + l.producto.precio * l.cantidad, 0);\n  }\n\n  vaciar(): void {\n    this.lineas = [];\n  }\n}\n\nconst espresso = { id: 1, nombre: 'Espresso', precio: 6000 };\nconst latte = { id: 3, nombre: 'Latte', precio: 9000 };\n\nconst carrito = new Carrito();\ncarrito.agregar(espresso, 2);\ncarrito.agregar(latte);\nconsole.log(carrito.total()); // 21000\n" },
          hint: 'En `agregar`, busca primero con `find` si ya hay una línea con ese `producto.id`.',
        },
        {
          type: 'quiz',
          question: 'Repaso: ¿qué palabra impide modificar una propiedad después de crearla?',
          options: ['`readonly`', '`private`', '`const`', '`static`'],
          answer: 0,
          explanation: '`readonly` permite asignarla al crearla (o en el constructor), pero no después. `private` solo limita **quién** puede acceder.',
        },
      ],
    },
  ],
};
