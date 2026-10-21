// ───────────────────────────── MUNDO 3: JAVASCRIPT ─────────────────────────────
// Las comprobaciones pueden usar las funciones y variables globales del estudiante,
// `logs` (lo impreso con console.log) y simular clics con click(sel) o escritura con type(sel, valor).

const PRODUCTOS_JS = `const productos = [
  { id: 1, nombre: 'Espresso', precio: 6000, categoria: 'cafe', disponible: true },
  { id: 2, nombre: 'Capuchino', precio: 8500, categoria: 'cafe', disponible: true },
  { id: 3, nombre: 'Latte', precio: 9000, categoria: 'cafe', disponible: false },
  { id: 4, nombre: 'Croissant', precio: 5500, categoria: 'panaderia', disponible: true },
  { id: 5, nombre: 'Brownie', precio: 7000, categoria: 'postres', disponible: true },
];
`;

export const JS = {
  id: 'js',
  short: 'JS',
  name: 'JavaScript: la interactividad',
  icon: '⚡',
  color: '#eab308',
  description: 'Variables, funciones, arrays, el DOM, eventos y peticiones: la web de Café Pixel cobra vida.',
  levels: [
    // ─────────────── 1
    {
      id: 'js-variables',
      icon: '📦',
      title: 'Variables y tipos',
      lesson: [
        {
          title: 'JavaScript: el lenguaje de la web',
          text: 'JavaScript es el **único lenguaje de programación** que entienden todos los navegadores. Con él, la página reacciona, calcula y se comunica con servidores.',
          code: { lang: 'js', code: "console.log('¡Hola desde JavaScript!');" },
          tip: '`console.log()` escribe en la **consola**. Es tu mejor amiga para ver qué está pasando. En los retos, la verás debajo de la vista previa.',
        },
        {
          title: 'Variables: cajas con nombre',
          code: { lang: 'js', code: "const nombre = 'Café Pixel';  // no se puede reasignar\nlet clientes = 0;             // se puede reasignar\nclientes = clientes + 1;\n\n// var: la forma antigua. ¡Evítala!" },
          points: ['Usa **`const` por defecto**.', 'Usa `let` solo si el valor va a cambiar.', 'Los nombres van en *camelCase*: `precioTotal`, `esSocio`.'],
        },
        {
          title: 'Los tipos de datos',
          table: {
            head: ['Tipo', 'Ejemplo', '`typeof`'],
            rows: [
              ['Texto (string)', "`'Espresso'`, `\"Latte\"`", "`'string'`"],
              ['Número', '`6000`, `3.5`, `-2`', "`'number'`"],
              ['Booleano', '`true`, `false`', "`'boolean'`"],
              ['Indefinido', '`undefined`', "`'undefined'`"],
              ['Nulo', '`null`', "`'object'` (¡un error histórico!)"],
              ['Objeto / array', "`{ nombre: 'Moka' }`, `[1, 2, 3]`", "`'object'`"],
            ],
          },
        },
        {
          title: 'Template literals',
          text: 'Con comillas invertidas (`` ` ``) puedes meter variables dentro del texto con `${}`:',
          code: { lang: 'js', code: "const producto = 'Espresso';\nconst precio = 6000;\nconsole.log(`El ${producto} cuesta $${precio}`);\n// → El Espresso cuesta $6000" },
          demo: { js: "const producto = 'Espresso';\nconst precio = 6000;\nconsole.log(`El ${producto} cuesta $${precio}`);\nconsole.log(typeof precio);", html: '<p>Mira la consola 👇</p>', console: true, height: 50 },
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'Tus primeras variables',
          instructions: '1. Crea una constante `nombre` con el texto **Café Pixel**.\n2. Crea una variable `let precio` con el número **6000**.\n3. Muestra en la consola exactamente: `Café Pixel: espresso a 6000` usando un *template literal*.',
          files: { js: '// Escribe tu código aquí\n\n' },
          checks: [
            { text: '`nombre` es una constante con «Café Pixel»', test: "return /const\\s+nombre\\s*=/.test(src.js) && nombre === 'Café Pixel'" },
            { text: '`precio` se declara con `let` y vale 6000', test: "return /let\\s+precio\\s*=/.test(src.js) && precio === 6000 && typeof precio === 'number'" },
            { text: 'La consola muestra `Café Pixel: espresso a 6000`', test: "return logs.includes('Café Pixel: espresso a 6000')" },
            { text: 'Usas un template literal (comillas invertidas)', test: "return /`[^`]*\\$\\{[^}]+\\}[^`]*`/.test(src.js)" },
          ],
          solution: { js: "const nombre = 'Café Pixel';\nlet precio = 6000;\nconsole.log(`${nombre}: espresso a ${precio}`);\n" },
          hint: 'console.log(`${nombre}: espresso a ${precio}`);',
        },
        {
          type: 'classify',
          question: '¿De qué tipo es cada valor?',
          bins: [
            { id: 'string', label: "`'string'`" },
            { id: 'number', label: "`'number'`" },
            { id: 'boolean', label: "`'boolean'`" },
            { id: 'object', label: "`'object'`" },
          ],
          items: [
            { text: "`'Capuchino'`", bin: 'string' },
            { text: '`8500`', bin: 'number' },
            { text: '`true`', bin: 'boolean' },
            { text: "`['café', 'té']`", bin: 'object' },
            { text: "`'42'`", bin: 'string' },
            { text: '`null`', bin: 'object' },
          ],
          explanation: "Ojo: `'42'` entre comillas es texto, los arrays son objetos y `typeof null` devuelve `'object'` por un error histórico de JavaScript.",
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué pasa al ejecutar este código?',
          snippet: { lang: 'js', code: "const tienda = 'Café Pixel';\ntienda = 'Pixel Café';" },
          options: ['Da un error: no se puede reasignar una constante', 'tienda pasa a valer «Pixel Café»', 'tienda vale undefined', 'No pasa nada'],
          answer: 0,
          explanation: '`TypeError: Assignment to constant variable.` Si necesitas reasignar, usa `let`.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué muestra la consola?',
          snippet: { lang: 'js', code: "console.log('5' + 3);\nconsole.log('5' * 3);" },
          options: ['`53` y `15`', '`8` y `15`', '`53` y `53`', '`8` y `8`'],
          answer: 0,
          explanation: 'Con `+` y un texto, JavaScript **concatena** («53»). Con `*` convierte a número (15). ¡Cuidado con los tipos!',
        },
        {
          type: 'fill',
          question: 'Completa con la palabra correcta',
          lang: 'js',
          code: "___ IVA = 0.19;          // nunca cambia\n___ total = 0;           // va a cambiar\ntotal = 6000 * (1 + IVA);\nconsole.log(___ total);  // muestra 'number'",
          blanks: [['const'], ['let'], ['typeof']],
          bank: ['const', 'let', 'typeof', 'var', 'type'],
          explanation: '`const` para lo que no cambia, `let` para lo que sí, y `typeof` para preguntar el tipo.',
        },
      ],
    },

    // ─────────────── 2
    {
      id: 'js-condicionales',
      icon: '🔀',
      title: 'Operadores y condicionales',
      lesson: [
        {
          title: 'Comparar y combinar',
          table: {
            head: ['Operador', 'Significado', 'Ejemplo'],
            rows: [
              ['`===` / `!==`', 'Igual / distinto (valor **y** tipo)', '`edad === 18`'],
              ['`>` `<` `>=` `<=`', 'Mayor, menor…', '`precio >= 5000`'],
              ['`&&`', 'Y (las dos)', '`esSocio && tieneCupon`'],
              ['`||`', 'O (al menos una)', '`esLunes || esMartes`'],
              ['`!`', 'No (invierte)', '`!agotado`'],
            ],
          },
          tip: 'Usa siempre `===`. El doble `==` convierte tipos y da sorpresas: `0 == false` es `true`.',
        },
        {
          title: 'if, else if, else',
          code: { lang: 'js', code: "function saludo(hora) {\n  if (hora < 12) {\n    return 'Buenos días';\n  } else if (hora < 19) {\n    return 'Buenas tardes';\n  } else {\n    return 'Buenas noches';\n  }\n}" },
          tip: 'En estos retos te damos la **función** ya creada: tú escribes lo que va dentro. En el nivel de funciones veremos cómo se crean.',
        },
        {
          title: 'El operador ternario y switch',
          codes: [
            { lang: 'js', title: 'Ternario: condición ? sí : no', code: "const estado = stock > 0 ? 'Disponible' : 'Agotado';" },
            { lang: 'js', title: 'switch: muchos casos', code: "switch (tamano) {\n  case 'pequeño':\n    precio = 6000;\n    break;\n  case 'grande':\n    precio = 9000;\n    break;\n  default:\n    precio = 7500;\n}" },
          ],
        },
        {
          title: 'Truthy y falsy',
          text: 'En una condición, todo valor se convierte en verdadero o falso. Estos son **falsy** (cuentan como falso):',
          code: { lang: 'js', code: "false   0   ''   null   undefined   NaN" },
          tip: 'Todo lo demás es *truthy*, ¡incluidos `\'0\'`, `\'false\'`, `[]` y `{}`!',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: '¿Qué tamaño de café?',
          instructions: 'Completa la función `categoria(edad)` para que devuelva:\n• `\'niño\'` si la edad es menor de 12;\n• `\'joven\'` si es menor de 18;\n• `\'adulto\'` en cualquier otro caso.',
          files: { js: "function categoria(edad) {\n  // tu código aquí\n  \n}\n\nconsole.log(categoria(8));\nconsole.log(categoria(15));\nconsole.log(categoria(30));\n" },
          checks: [
            { text: "`categoria(8)` devuelve `'niño'`", test: "return categoria(8) === 'niño'" },
            { text: "`categoria(15)` devuelve `'joven'`", test: "return categoria(15) === 'joven'" },
            { text: "`categoria(30)` devuelve `'adulto'`", test: "return categoria(30) === 'adulto'" },
            { text: 'Los límites funcionan: 12 → joven y 18 → adulto', test: "return categoria(12) === 'joven' && categoria(18) === 'adulto'" },
          ],
          solution: { js: "function categoria(edad) {\n  if (edad < 12) {\n    return 'niño';\n  } else if (edad < 18) {\n    return 'joven';\n  } else {\n    return 'adulto';\n  }\n}\n\nconsole.log(categoria(8));\nconsole.log(categoria(15));\nconsole.log(categoria(30));\n" },
          hint: 'Comprueba primero la condición más pequeña (`edad < 12`) y después `edad < 18`.',
        },
        {
          type: 'code',
          question: 'Disponible o agotado',
          instructions: "Completa `estado(stock)` usando el **operador ternario**: si el stock es mayor que 0 devuelve `'Disponible'`, y si no, `'Agotado'`.",
          files: { js: "function estado(stock) {\n  return /* tu ternario aquí */;\n}\n\nconsole.log(estado(5));\nconsole.log(estado(0));\n" },
          checks: [
            { text: "`estado(5)` → `'Disponible'`", test: "return estado(5) === 'Disponible'" },
            { text: "`estado(0)` → `'Agotado'`", test: "return estado(0) === 'Agotado'" },
            { text: 'Usas el operador ternario (`? :`)', test: "return /\\?[^:]+:/.test(src.js)" },
          ],
          solution: { js: "function estado(stock) {\n  return stock > 0 ? 'Disponible' : 'Agotado';\n}\n\nconsole.log(estado(5));\nconsole.log(estado(0));\n" },
          hint: "condición ? 'Disponible' : 'Agotado'",
        },
        {
          type: 'code',
          question: 'El descuento de socio',
          instructions: 'Completa `precioFinal(precio, esSocio, esLunes)`:\n• Los **socios** tienen un 10% de descuento.\n• Los **lunes**, si además es socio, el descuento es del 20%.\n• Si no es socio, paga el precio completo.',
          files: { js: "function precioFinal(precio, esSocio, esLunes) {\n  // tu código aquí\n  \n}\n\nconsole.log(precioFinal(10000, false, true)); // 10000\nconsole.log(precioFinal(10000, true, false)); // 9000\nconsole.log(precioFinal(10000, true, true));  // 8000\n" },
          checks: [
            { text: 'No socio: paga 10000', test: "return precioFinal(10000, false, true) === 10000 && precioFinal(10000, false, false) === 10000" },
            { text: 'Socio: paga 9000', test: "return precioFinal(10000, true, false) === 9000" },
            { text: 'Socio en lunes: paga 8000', test: "return precioFinal(10000, true, true) === 8000" },
            { text: 'Usas el operador `&&`', test: "return src.js.includes('&&')" },
          ],
          solution: { js: "function precioFinal(precio, esSocio, esLunes) {\n  if (esSocio && esLunes) {\n    return precio * 0.8;\n  } else if (esSocio) {\n    return precio * 0.9;\n  }\n  return precio;\n}\n\nconsole.log(precioFinal(10000, false, true)); // 10000\nconsole.log(precioFinal(10000, true, false)); // 9000\nconsole.log(precioFinal(10000, true, true));  // 8000\n" },
          hint: 'Comprueba primero el caso más específico: `esSocio && esLunes`.',
        },
        {
          type: 'classify',
          question: '¿Truthy o falsy?',
          bins: [
            { id: 't', label: '✅ truthy' },
            { id: 'f', label: '❌ falsy' },
          ],
          items: [
            { text: '`0`', bin: 'f' },
            { text: "`''` (texto vacío)", bin: 'f' },
            { text: "`'0'`", bin: 't' },
            { text: '`[]` (array vacío)', bin: 't' },
            { text: '`null`', bin: 'f' },
            { text: "`'false'`", bin: 't' },
          ],
          explanation: 'Solo hay seis valores falsy: `false`, `0`, `""`, `null`, `undefined` y `NaN`. Un texto con algo dentro (aunque sea `"0"` o `"false"`) y los arrays vacíos son truthy.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué muestran estas comparaciones?',
          snippet: { lang: 'js', code: 'console.log(0 == false);\nconsole.log(0 === false);' },
          options: ['`true` y `false`', '`true` y `true`', '`false` y `false`', '`false` y `true`'],
          answer: 0,
          explanation: '`==` convierte los tipos (0 y false se consideran iguales). `===` compara también el tipo: número ≠ booleano.',
        },
      ],
    },

    // ─────────────── 3
    {
      id: 'js-bucles',
      icon: '🔁',
      title: 'Bucles',
      lesson: [
        {
          title: 'Repetir sin copiar y pegar',
          codes: [
            { lang: 'js', title: 'for clásico', code: 'for (let i = 1; i <= 3; i++) {\n  console.log(`Taza número ${i}`);\n}' },
            { lang: 'js', title: 'while', code: 'let tazas = 3;\nwhile (tazas > 0) {\n  console.log(`Quedan ${tazas}`);\n  tazas--;\n}' },
          ],
          points: ['`for (inicio; condición; paso)`: ideal cuando sabes cuántas vueltas.', '`while (condición)`: mientras se cumpla.', '`i++` suma 1; `i--` resta 1.'],
        },
        {
          title: 'Recorrer listas con for...of',
          code: { lang: 'js', code: "const cafes = ['Espresso', 'Latte', 'Mocca'];\n\nfor (const cafe of cafes) {\n  console.log(cafe);\n}" },
          demo: { js: "const cafes = ['Espresso', 'Latte', 'Mocca'];\nfor (const cafe of cafes) {\n  console.log('☕ ' + cafe);\n}", html: '<p>Mira la consola 👇</p>', console: true, height: 50 },
          tip: '`break` sale del bucle y `continue` salta a la siguiente vuelta.',
        },
        {
          title: '⚠️ Los bucles infinitos',
          text: 'Si la condición **nunca** se vuelve falsa, el bucle no termina y la página se congela. En este juego hay un guardián que lo detiene, pero en la vida real… ¡cuidado!',
          code: { lang: 'js', code: 'let i = 0;\nwhile (i < 10) {\n  console.log(i);\n  // ¡olvidamos i++! → bucle infinito\n}' },
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'La suma del 1 al 100',
          instructions: 'Usa un bucle para sumar todos los números del **1 al 100** en la variable `total` y muéstrala con `console.log(total)`.',
          files: { js: 'let total = 0;\n\n// tu bucle aquí\n\nconsole.log(total);\n' },
          checks: [
            { text: '`total` vale 5050', test: 'return total === 5050' },
            { text: 'Se muestra 5050 en la consola', test: "return logs.includes('5050')" },
            { text: 'Usas un bucle (`for` o `while`)', test: 'return /\\b(for|while)\\s*\\(/.test(src.js)' },
          ],
          solution: { js: 'let total = 0;\n\nfor (let i = 1; i <= 100; i++) {\n  total += i;\n}\n\nconsole.log(total);\n' },
          hint: '`for (let i = 1; i <= 100; i++) { total += i; }`',
        },
        {
          type: 'code',
          question: 'La tabla de multiplicar',
          instructions: 'Completa `tablaDel(n)` para que **devuelva un array** con los 10 primeros múltiplos de `n`.\nPor ejemplo, `tablaDel(3)` → `[3, 6, 9, …, 30]`.',
          files: { js: 'function tablaDel(n) {\n  const resultado = [];\n  // tu bucle aquí: usa resultado.push(...)\n\n  return resultado;\n}\n\nconsole.log(tablaDel(3));\n' },
          checks: [
            { text: '`tablaDel(3)` devuelve 10 elementos', test: 'return tablaDel(3).length === 10' },
            { text: '`tablaDel(3)` → [3, 6, …, 30]', test: 'return JSON.stringify(tablaDel(3)) === JSON.stringify([3,6,9,12,15,18,21,24,27,30])' },
            { text: 'Funciona con otros números: `tablaDel(7)`', test: 'const t = tablaDel(7); return t[0] === 7 && t[9] === 70' },
          ],
          solution: { js: 'function tablaDel(n) {\n  const resultado = [];\n  for (let i = 1; i <= 10; i++) {\n    resultado.push(n * i);\n  }\n  return resultado;\n}\n\nconsole.log(tablaDel(3));\n' },
          hint: '`resultado.push(n * i)` añade un elemento al final del array.',
        },
        {
          type: 'code',
          kind: 'bug',
          question: 'El bucle que nunca acaba',
          instructions: 'Este código debería mostrar una cuenta atrás **5, 4, 3, 2, 1** y luego «¡Café listo!», pero se queda colgado (el guardián lo detiene). Encuentra y arregla el error.',
          files: { js: "let segundos = 5;\n\nwhile (segundos > 0) {\n  console.log(segundos);\n  segundos++;\n}\n\nconsole.log('¡Café listo!');\n" },
          checks: [
            { text: 'La cuenta atrás es 5, 4, 3, 2, 1', test: "return logs.slice(0, 5).join(',') === '5,4,3,2,1'" },
            { text: 'Termina con «¡Café listo!»', test: "return logs[logs.length - 1] === '¡Café listo!' && logs.length === 6" },
            { text: 'No hay errores', test: 'return errors.length === 0' },
          ],
          solution: { js: "let segundos = 5;\n\nwhile (segundos > 0) {\n  console.log(segundos);\n  segundos--;\n}\n\nconsole.log('¡Café listo!');\n" },
          hint: 'Si `segundos` sube en vez de bajar, nunca llega a 0.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Cuántas veces se ejecuta el `console.log`?',
          snippet: { lang: 'js', code: 'for (let i = 0; i < 10; i += 2) {\n  console.log(i);\n}' },
          options: ['5 veces (0, 2, 4, 6, 8)', '10 veces', '4 veces', '6 veces'],
          answer: 0,
          explanation: 'Empieza en 0 y sube de 2 en 2 mientras sea menor que 10: 0, 2, 4, 6 y 8.',
        },
        {
          type: 'fill',
          question: 'Recorre el array con for...of',
          lang: 'js',
          code: "const pedidos = ['Latte', 'Brownie', 'Té chai'];\n\n___ (const pedido ___ pedidos) {\n  console.log(pedido);\n}",
          blanks: [['for'], ['of']],
          bank: ['for', 'of', 'in', 'while', 'each'],
          explanation: '`for...of` recorre los **valores** de un array. (`for...in` recorre las claves: no es lo que queremos aquí.)',
        },
      ],
    },

    // ─────────────── 4
    {
      id: 'js-funciones',
      icon: '🧮',
      title: 'Funciones',
      lesson: [
        {
          title: 'Funciones: código reutilizable',
          text: 'Una función agrupa código con un nombre. Recibe **parámetros** y puede **devolver** (`return`) un valor.',
          code: { lang: 'js', code: "function conIva(precio) {\n  return precio * 1.19;\n}\n\nconst total = conIva(10000);  // 11900" },
        },
        {
          title: 'Tres formas de escribirlas',
          codes: [
            { lang: 'js', title: 'Declaración', code: 'function doble(n) {\n  return n * 2;\n}' },
            { lang: 'js', title: 'Expresión', code: 'const doble = function (n) {\n  return n * 2;\n};' },
            { lang: 'js', title: 'Función flecha', code: 'const doble = (n) => n * 2;\n// si solo hay un return,\n// sobran las llaves' },
          ],
          tip: 'Las **funciones flecha** son las más usadas hoy, sobre todo como *callbacks* (funciones que pasas a otras funciones).',
        },
        {
          title: 'Parámetros por defecto y ámbito',
          code: { lang: 'js', code: "function saludar(nombre = 'cliente') {\n  const mensaje = `¡Hola, ${nombre}!`;  // solo existe dentro\n  return mensaje;\n}\n\nsaludar();          // '¡Hola, cliente!'\nsaludar('Moka');    // '¡Hola, Moka!'\nconsole.log(mensaje); // ❌ ReferenceError: no existe fuera" },
          tip: 'Las variables declaradas dentro de una función (o de unas llaves `{}`) solo existen ahí: es su **ámbito** (*scope*).',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'El IVA con una función flecha',
          instructions: 'Crea una **función flecha** llamada `conIva` que reciba un precio y devuelva el precio con el 19% de IVA, **redondeado** con `Math.round`.',
          files: { js: '// const conIva = ...\n\n\nconsole.log(conIva(10000)); // 11900\n' },
          checks: [
            { text: '`conIva` existe y es una función', test: "return typeof conIva === 'function'" },
            { text: 'Es una función flecha', test: 'return /conIva\\s*=\\s*\\(?\\s*\\w*\\s*\\)?\\s*=>/.test(src.js)' },
            { text: '`conIva(10000)` → 11900', test: 'return conIva(10000) === 11900' },
            { text: '`conIva(8500)` → 10115 (redondeado)', test: 'return conIva(8500) === 10115' },
          ],
          solution: { js: 'const conIva = (precio) => Math.round(precio * 1.19);\n\nconsole.log(conIva(10000)); // 11900\n' },
          hint: '`const conIva = (precio) => Math.round(precio * 1.19);`',
        },
        {
          type: 'code',
          question: 'El total del pedido',
          instructions: 'Crea la función `total(precios, descuento = 0)`:\n• recibe un **array de precios** y suma todos;\n• `descuento` es un porcentaje (por ejemplo, 10 = 10%) con valor **por defecto 0**;\n• devuelve el total con el descuento aplicado.',
          files: { js: '// function total(precios, descuento = 0) { ... }\n\n\nconsole.log(total([6000, 8500]));      // 14500\nconsole.log(total([6000, 8500], 10));  // 13050\n' },
          checks: [
            { text: "`total` es una función", test: "return typeof total === 'function'" },
            { text: '`total([6000, 8500])` → 14500', test: 'return total([6000, 8500]) === 14500' },
            { text: '`total([6000, 8500], 10)` → 13050', test: 'return total([6000, 8500], 10) === 13050' },
            { text: 'Funciona con un array vacío (→ 0)', test: 'return total([]) === 0' },
            { text: 'El descuento tiene valor por defecto 0', test: 'return /descuento\\s*=\\s*0/.test(src.js)' },
          ],
          solution: { js: 'function total(precios, descuento = 0) {\n  let suma = 0;\n  for (const precio of precios) {\n    suma += precio;\n  }\n  return suma - (suma * descuento) / 100;\n}\n\nconsole.log(total([6000, 8500]));      // 14500\nconsole.log(total([6000, 8500], 10));  // 13050\n' },
          hint: 'Primero suma con un bucle; luego resta `suma * descuento / 100`.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué muestra la consola?',
          snippet: { lang: 'js', code: 'function cuadrado(n) {\n  n * n;\n}\n\nconsole.log(cuadrado(4));' },
          options: ['`undefined`', '`16`', '`4`', 'Un error'],
          answer: 0,
          explanation: '¡Falta el `return`! Sin él, la función calcula `n * n` pero no devuelve nada, así que devuelve `undefined`.',
        },
        {
          type: 'fill',
          question: 'Convierte la función en una función flecha',
          lang: 'js',
          code: '// function triple(n) { return n * 3; }\n\nconst triple = (n) ___ n * 3;\n\n// function saludo() { return "Hola"; }\n\nconst saludo = ___ => "Hola";',
          blanks: [['=>'], ['()']],
          bank: ['=>', '()', '->', '{}', 'function'],
          explanation: 'Si no hay parámetros, se escriben paréntesis vacíos: `() => …`.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué ocurre al ejecutar la última línea?',
          snippet: { lang: 'js', code: "function preparar() {\n  const receta = 'espresso doble';\n  return 'listo';\n}\n\npreparar();\nconsole.log(receta);" },
          options: ['Un ReferenceError: `receta` no existe fuera de la función', "Muestra 'espresso doble'", "Muestra 'listo'", 'Muestra undefined'],
          answer: 0,
          explanation: '`receta` vive dentro del ámbito de la función. Fuera, no existe.',
        },
      ],
    },

    // ─────────────── 5
    {
      id: 'js-arrays',
      icon: '📚',
      title: 'Arrays',
      lesson: [
        {
          title: 'Listas de datos',
          code: { lang: 'js', code: "const cafes = ['Espresso', 'Latte', 'Mocca'];\n\ncafes[0];           // 'Espresso' (¡se cuenta desde 0!)\ncafes.length;       // 3\ncafes.push('Chai'); // añade al final\ncafes.pop();        // quita el último\ncafes.includes('Latte');  // true" },
        },
        {
          title: 'Los métodos estrella',
          text: 'Reciben una función (*callback*) que se aplica a cada elemento:',
          table: {
            head: ['Método', 'Devuelve', 'Ejemplo'],
            rows: [
              ['`map`', 'Un array **transformado** (mismo largo)', '`precios.map(p => p * 2)`'],
              ['`filter`', 'Un array con los que **cumplen**', '`productos.filter(p => p.disponible)`'],
              ['`find`', 'El **primero** que cumple (o `undefined`)', '`productos.find(p => p.id === 3)`'],
              ['`reduce`', 'Un **único valor** acumulado', '`precios.reduce((suma, p) => suma + p, 0)`'],
              ['`forEach`', 'Nada: solo recorre', '`cafes.forEach(c => console.log(c))`'],
              ['`some` / `every`', '`true` o `false`', '`precios.some(p => p > 8000)`'],
            ],
          },
        },
        {
          title: 'Encadenar métodos',
          code: { lang: 'js', code: "const nombresBaratos = productos\n  .filter(p => p.precio < 7000)\n  .map(p => p.nombre);\n// ['Espresso', 'Croissant']" },
          tip: 'Ninguno de estos métodos (salvo `push`, `pop`, `sort`…) modifica el array original: devuelven uno **nuevo**.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'Solo los disponibles',
          instructions: 'Usa `filter` para crear la constante `disponibles` con los productos que tienen `disponible: true`.',
          files: { js: PRODUCTOS_JS + '\nconst disponibles = /* tu código */;\n\nconsole.log(disponibles.length);\n' },
          checks: [
            { text: '`disponibles` tiene 4 productos', test: 'return Array.isArray(disponibles) && disponibles.length === 4' },
            { text: 'No incluye el Latte (agotado)', test: "return !disponibles.some(p => p.nombre === 'Latte')" },
            { text: 'Usas `filter`', test: 'return /\\.filter\\(/.test(src.js)' },
          ],
          solution: { js: PRODUCTOS_JS + '\nconst disponibles = productos.filter((p) => p.disponible);\n\nconsole.log(disponibles.length);\n' },
          hint: '`productos.filter(p => p.disponible)`',
        },
        {
          type: 'code',
          question: 'Los nombres del menú',
          instructions: 'Usa `map` para crear `nombres`: un array solo con los **nombres** de los productos.',
          files: { js: PRODUCTOS_JS + '\nconst nombres = /* tu código */;\n\nconsole.log(nombres);\n' },
          checks: [
            { text: '`nombres` es un array de 5 textos', test: "return Array.isArray(nombres) && nombres.length === 5 && nombres.every(n => typeof n === 'string')" },
            { text: 'Contiene los nombres en orden', test: "return nombres.join(',') === 'Espresso,Capuchino,Latte,Croissant,Brownie'" },
            { text: 'Usas `map`', test: 'return /\\.map\\(/.test(src.js)' },
          ],
          solution: { js: PRODUCTOS_JS + '\nconst nombres = productos.map((p) => p.nombre);\n\nconsole.log(nombres);\n' },
          hint: '`productos.map(p => p.nombre)`',
        },
        {
          type: 'code',
          question: 'El precio total con reduce',
          instructions: 'Usa `reduce` para calcular `total`: la suma de los precios de **todos** los productos.',
          files: { js: PRODUCTOS_JS + '\nconst total = /* tu código */;\n\nconsole.log(total);\n' },
          checks: [
            { text: '`total` vale 36000', test: 'return total === 36000' },
            { text: 'Usas `reduce`', test: 'return /\\.reduce\\(/.test(src.js)' },
          ],
          solution: { js: PRODUCTOS_JS + '\nconst total = productos.reduce((suma, p) => suma + p.precio, 0);\n\nconsole.log(total);\n' },
          hint: '`productos.reduce((suma, p) => suma + p.precio, 0)`: el 0 es el valor inicial.',
        },
        {
          type: 'code',
          question: 'Buscar por id',
          instructions: 'Completa la función `buscar(id)` usando `find` para devolver el producto con ese `id` (o `undefined` si no existe).',
          files: { js: PRODUCTOS_JS + '\nfunction buscar(id) {\n  // tu código aquí\n}\n\nconsole.log(buscar(4));\n' },
          checks: [
            { text: "`buscar(4).nombre` es 'Croissant'", test: "return buscar(4)?.nombre === 'Croissant'" },
            { text: '`buscar(99)` devuelve `undefined`', test: 'return buscar(99) === undefined' },
            { text: 'Usas `find`', test: 'return /\\.find\\(/.test(src.js)' },
          ],
          solution: { js: PRODUCTOS_JS + '\nfunction buscar(id) {\n  return productos.find((p) => p.id === id);\n}\n\nconsole.log(buscar(4));\n' },
          hint: '`return productos.find(p => p.id === id);`',
        },
        {
          type: 'classify',
          question: '¿Qué devuelve cada método?',
          bins: [
            { id: 'array', label: '📚 Un array nuevo' },
            { id: 'uno', label: '1️⃣ Un elemento o valor' },
            { id: 'bool', label: '✅ true / false' },
          ],
          items: [
            { text: '`map`', bin: 'array' },
            { text: '`filter`', bin: 'array' },
            { text: '`find`', bin: 'uno' },
            { text: '`reduce`', bin: 'uno' },
            { text: '`some`', bin: 'bool' },
            { text: '`includes`', bin: 'bool' },
          ],
          explanation: '`map` y `filter` devuelven arrays; `find` un elemento; `reduce` un valor acumulado; `some` e `includes` un booleano.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué muestra la consola?',
          snippet: { lang: 'js', code: 'const n = [1, 2, 3, 4];\nconsole.log(n.filter(x => x % 2 === 0).map(x => x * 10));' },
          options: ['`[20, 40]`', '`[10, 20, 30, 40]`', '`[2, 4]`', '`60`'],
          answer: 0,
          explanation: '`filter` deja los pares `[2, 4]` y `map` los multiplica por 10.',
        },
      ],
    },

    // ─────────────── 6
    {
      id: 'js-objetos',
      icon: '🗂️',
      title: 'Objetos y JSON',
      lesson: [
        {
          title: 'Objetos: datos con nombre',
          code: { lang: 'js', code: "const producto = {\n  nombre: 'Latte',\n  precio: 9000,\n  etiquetas: ['café', 'leche'],\n  descripcion() {\n    return `${this.nombre}: $${this.precio}`;\n  },\n};\n\nproducto.nombre;          // 'Latte'\nproducto['precio'];       // 9000\nproducto.precio = 9500;   // modificar\nproducto.descripcion();   // 'Latte: $9500'" },
          tip: 'Dentro de un método, `this` es el propio objeto.',
        },
        {
          title: 'Desestructuración y spread',
          codes: [
            { lang: 'js', title: 'Desestructurar', code: "const { nombre, precio } = producto;\n\nconst [primero, segundo] = ['Espresso', 'Latte'];" },
            { lang: 'js', title: 'Spread (...)', code: "const conDescuento = { ...producto, precio: 8000 };\n\nconst todos = [...cafes, ...postres];" },
          ],
        },
        {
          title: 'JSON: el idioma de los datos',
          text: '**JSON** es un formato de texto para intercambiar datos (por ejemplo, entre el servidor y el navegador). Se parece a un objeto de JavaScript, pero las claves van siempre entre comillas dobles.',
          code: { lang: 'js', code: "const texto = JSON.stringify(producto);  // objeto → texto\n// '{\"nombre\":\"Latte\",\"precio\":9000,…}'\n\nconst objeto = JSON.parse(texto);        // texto → objeto" },
          tip: '`Object.keys(obj)`, `Object.values(obj)` y `Object.entries(obj)` convierten un objeto en arrays.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'Tu primer objeto',
          instructions: "Crea una constante `producto` con:\n• `nombre: 'Capuchino'`\n• `precio: 8500`\n• `categoria: 'cafe'`\n• un método `descripcion()` que devuelva `'Capuchino - $8500'` usando `this`.",
          files: { js: '// const producto = { ... };\n\n\nconsole.log(producto.descripcion());\n' },
          checks: [
            { text: '`producto` tiene nombre, precio y categoría', test: "return producto.nombre === 'Capuchino' && producto.precio === 8500 && producto.categoria === 'cafe'" },
            { text: "`descripcion()` devuelve 'Capuchino - $8500'", test: "return producto.descripcion() === 'Capuchino - $8500'" },
            { text: 'El método usa `this` (si cambia el precio, cambia la descripción)', test: "producto.precio = 9000; const ok = producto.descripcion() === 'Capuchino - $9000'; producto.precio = 8500; return ok" },
          ],
          solution: { js: "const producto = {\n  nombre: 'Capuchino',\n  precio: 8500,\n  categoria: 'cafe',\n  descripcion() {\n    return `${this.nombre} - $${this.precio}`;\n  },\n};\n\nconsole.log(producto.descripcion());\n" },
          hint: 'Dentro del método: return `${this.nombre} - $${this.precio}`;',
        },
        {
          type: 'code',
          question: 'Leer un JSON del servidor',
          instructions: 'La variable `respuesta` es un **texto** JSON que llegó del servidor. Conviértelo en objeto con `JSON.parse`, guárdalo en `pedido` y muestra en la consola el **nombre del cliente**.',
          files: { js: 'const respuesta = \'{"id":101,"cliente":"Ana","items":["Latte","Brownie"],"total":16000}\';\n\nconst pedido = /* tu código */;\n\n// muestra el nombre del cliente\n' },
          checks: [
            { text: '`pedido` es un objeto (no un texto)', test: "return typeof pedido === 'object' && pedido !== null" },
            { text: '`pedido.items` tiene 2 elementos', test: 'return Array.isArray(pedido.items) && pedido.items.length === 2' },
            { text: 'La consola muestra «Ana»', test: "return logs.includes('Ana')" },
          ],
          solution: { js: 'const respuesta = \'{"id":101,"cliente":"Ana","items":["Latte","Brownie"],"total":16000}\';\n\nconst pedido = JSON.parse(respuesta);\n\nconsole.log(pedido.cliente);\n' },
          hint: '`JSON.parse(respuesta)` y luego `console.log(pedido.cliente)`.',
        },
        {
          type: 'fill',
          question: 'Desestructura el objeto',
          lang: 'js',
          code: "const cliente = { nombre: 'Luis', puntos: 120, nivel: 'oro' };\n\nconst ___ nombre, puntos ___ = cliente;\nconsole.log(nombre, puntos);  // Luis 120",
          blanks: [['{'], ['}']],
          bank: ['{', '}', '[', ']', '(', ')'],
          explanation: 'Los objetos se desestructuran con llaves `{}` y los arrays con corchetes `[]`.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué muestra la consola?',
          snippet: { lang: 'js', code: "const base = { nombre: 'Latte', precio: 9000 };\nconst oferta = { ...base, precio: 7000 };\n\nconsole.log(base.precio, oferta.precio);" },
          options: ['`9000 7000`', '`7000 7000`', '`9000 9000`', '`undefined 7000`'],
          answer: 0,
          explanation: 'El *spread* crea un objeto **nuevo** copiando las propiedades. El original no cambia.',
        },
        {
          type: 'quiz',
          question: '¿Cuál de estos textos es JSON válido?',
          options: ['`{"nombre": "Moka", "edad": 3}`', "`{nombre: 'Moka', edad: 3}`", "`{'nombre': 'Moka'}`", '`{"nombre": "Moka",}`'],
          answer: 0,
          explanation: 'En JSON las claves y los textos van con **comillas dobles**, y no se permiten comas al final.',
        },
      ],
    },

    // ─────────────── 7
    {
      id: 'js-dom',
      icon: '🌳',
      title: 'El DOM',
      lesson: [
        {
          title: 'El DOM: la página como objetos',
          text: 'Cuando el navegador lee el HTML, crea el **DOM** (*Document Object Model*): un árbol de objetos que JavaScript puede leer y modificar.',
          code: { lang: 'js', code: "const titulo = document.querySelector('h1');       // el primero que coincida\nconst cards = document.querySelectorAll('.card');  // todos\nconst menu = document.getElementById('menu');" },
          tip: '`querySelector` usa **los mismos selectores que CSS**: `.clase`, `#id`, `nav a`…',
        },
        {
          title: 'Modificar elementos',
          code: { lang: 'js', code: "titulo.textContent = 'Café Pixel abierto';\ntitulo.classList.add('activo');      // remove, toggle, contains\ntitulo.style.color = 'green';\nimg.setAttribute('alt', 'Logo');" },
          tip: '⚠️ `innerHTML` interpreta HTML: **nunca** lo uses con texto que escriba el usuario, porque permite inyectar código (ataque XSS). Para texto, usa `textContent`.',
        },
        {
          title: 'Crear elementos',
          code: { lang: 'js', code: "const lista = document.querySelector('#menu');\n\nfor (const cafe of ['Espresso', 'Latte']) {\n  const li = document.createElement('li');\n  li.textContent = cafe;\n  lista.appendChild(li);\n}" },
          demo: { html: '<ul id="menu"></ul>', js: "const lista = document.querySelector('#menu');\nfor (const cafe of ['Espresso', 'Latte', 'Mocca']) {\n  const li = document.createElement('li');\n  li.textContent = '☕ ' + cafe;\n  lista.appendChild(li);\n}", height: 110 },
        },
      ],
      challenges: [
        {
          type: 'code',
          question: '¡Abrimos!',
          instructions: 'Con JavaScript:\n1. Cambia el texto del `<h1>` a **Café Pixel: ¡abierto!**\n2. Añádele la clase `abierto` (que lo pinta de verde).',
          files: {
            html: '<h1>Café Pixel: cerrado</h1>\n',
            css: 'h1 { color: #dc2626; }\nh1.abierto { color: #16a34a; }\n',
            js: '// tu código aquí\n\n',
          },
          editable: ['js'],
          checks: [
            { text: 'El título dice «Café Pixel: ¡abierto!»', test: "return text('h1') === 'Café Pixel: ¡abierto!'" },
            { text: 'El título tiene la clase `abierto`', test: "return $('h1').classList.contains('abierto')" },
            { text: 'El HTML original no se tocó (se hizo con JavaScript)', test: "return src.html.includes('cerrado')" },
          ],
          solution: { js: "const titulo = document.querySelector('h1');\ntitulo.textContent = 'Café Pixel: ¡abierto!';\ntitulo.classList.add('abierto');\n" },
          hint: "`document.querySelector('h1')` y luego `.textContent` y `.classList.add('abierto')`.",
        },
        {
          type: 'code',
          question: 'El menú desde los datos',
          instructions: 'Recorre el array `cafes` y, por cada uno, crea un `<li>` con su nombre dentro de la lista `#menu`.',
          files: {
            html: '<h2>Menú</h2>\n<ul id="menu"></ul>\n',
            js: "const cafes = ['Espresso', 'Capuchino', 'Latte', 'Mocca'];\nconst lista = document.querySelector('#menu');\n\n// tu código aquí\n",
          },
          editable: ['js'],
          checks: [
            { text: 'La lista tiene 4 `<li>`', test: "return $$('#menu li').length === 4" },
            { text: 'Los textos coinciden con el array', test: "return $$('#menu li').map(li => li.textContent.trim()).join(',') === 'Espresso,Capuchino,Latte,Mocca'" },
            { text: 'Usas `createElement`', test: "return src.js.includes('createElement')" },
          ],
          solution: { js: "const cafes = ['Espresso', 'Capuchino', 'Latte', 'Mocca'];\nconst lista = document.querySelector('#menu');\n\nfor (const cafe of cafes) {\n  const li = document.createElement('li');\n  li.textContent = cafe;\n  lista.appendChild(li);\n}\n" },
          hint: "Dentro de un `for...of`: `createElement('li')`, `textContent` y `lista.appendChild(li)`.",
        },
        {
          type: 'code',
          question: 'Resalta las ofertas',
          instructions: "Selecciona **todas** las tarjetas `.card` cuyo precio (atributo `data-precio`) sea **menor de 7000** y añádeles la clase `oferta`.",
          files: {
            html: '<div class="card" data-precio="6000">Espresso</div>\n<div class="card" data-precio="8500">Capuchino</div>\n<div class="card" data-precio="5500">Croissant</div>\n<div class="card" data-precio="9000">Latte</div>\n',
            css: '.card { padding: 8px 12px; margin: 6px 0; border-radius: 8px; background: #f3f4f6; }\n.card.oferta { background: #fef08a; font-weight: bold; }\n.card.oferta::after { content: " 🔥 oferta"; }\n',
            js: "const cards = document.querySelectorAll('.card');\n\n// tu código aquí: lee el precio con card.dataset.precio\n",
          },
          editable: ['js'],
          checks: [
            { text: 'Espresso y Croissant tienen la clase `oferta`', test: "const o = $$('.card.oferta').map(c => c.textContent.trim()); return o.length === 2 && o.includes('Espresso') && o.includes('Croissant')" },
            { text: 'Capuchino y Latte no la tienen', test: "return $$('.card').filter(c => Number(c.dataset.precio) >= 7000).every(c => !c.classList.contains('oferta'))" },
          ],
          solution: { js: "const cards = document.querySelectorAll('.card');\n\nfor (const card of cards) {\n  if (Number(card.dataset.precio) < 7000) {\n    card.classList.add('oferta');\n  }\n}\n" },
          hint: "`card.dataset.precio` es un texto: conviértelo con `Number(...)` antes de comparar.",
        },
        {
          type: 'quiz',
          question: '¿Por qué es peligroso usar `innerHTML` con texto escrito por el usuario?',
          options: [
            'Porque interpreta HTML y alguien podría inyectar código malicioso (XSS)',
            'Porque es más lento que un bucle',
            'Porque no funciona en Chrome',
            'No es peligroso',
          ],
          answer: 0,
          explanation: 'Si alguien escribe `<img src=x onerror="robarDatos()">` y lo metes con `innerHTML`, ese código se ejecuta. `textContent` lo trata como texto plano.',
        },
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿Qué texto queda en la consola?',
          snippet: { lang: 'html', code: '<p class="nota">Primera</p>\n<p class="nota">Segunda</p>\n\n<script>\n  console.log(document.querySelector(\'.nota\').textContent);\n</script>' },
          options: ['Primera', 'Segunda', 'Primera y Segunda', 'null'],
          answer: 0,
          explanation: '`querySelector` devuelve solo el **primer** elemento que coincide. Para todos, usa `querySelectorAll`.',
        },
      ],
    },

    // ─────────────── 8
    {
      id: 'js-eventos',
      icon: '🖱️',
      title: 'Eventos y formularios',
      lesson: [
        {
          title: 'Reaccionar al usuario',
          text: 'Un **evento** es algo que ocurre: un clic, una tecla, un envío… Con `addEventListener` le decimos a un elemento qué hacer cuando ocurre.',
          code: { lang: 'js', code: "const boton = document.querySelector('#pedir');\n\nboton.addEventListener('click', () => {\n  console.log('¡Pedido recibido!');\n});" },
          demo: { html: '<button id="pedir">Pedir café ☕</button> <span id="n">0</span> cafés', js: "let n = 0;\ndocument.querySelector('#pedir').addEventListener('click', () => {\n  n++;\n  document.querySelector('#n').textContent = n;\n});", height: 70 },
        },
        {
          title: 'Eventos frecuentes',
          table: {
            head: ['Evento', 'Cuándo ocurre'],
            rows: [
              ['`click`', 'Al hacer clic'],
              ['`input`', 'Cada vez que cambia el texto de un campo'],
              ['`change`', 'Cuando un campo cambia y pierde el foco (o en un select)'],
              ['`submit`', 'Al enviar un formulario'],
              ['`keydown`', 'Al pulsar una tecla'],
              ['`mouseover`', 'Al pasar el ratón por encima'],
            ],
          },
        },
        {
          title: 'Formularios y preventDefault',
          text: 'Al enviar un formulario, el navegador **recarga la página**. Para gestionarlo con JavaScript, lo evitamos:',
          code: { lang: 'js', code: "form.addEventListener('submit', (evento) => {\n  evento.preventDefault();        // ¡no recargues!\n  const correo = input.value;     // leer lo escrito\n  mensaje.textContent = `Gracias, ${correo}`;\n});" },
          tip: 'El objeto `evento` trae información útil: `evento.target` es el elemento que lo disparó.',
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'El contador de cafés',
          instructions: 'Cada vez que se haga clic en el botón `#sumar`, el número de `#contador` debe aumentar en 1.',
          files: {
            html: '<button id="sumar">+1 café ☕</button>\n<p>Cafés servidos: <span id="contador">0</span></p>\n',
            js: "let cafes = 0;\nconst boton = document.querySelector('#sumar');\nconst contador = document.querySelector('#contador');\n\n// tu código aquí\n",
          },
          editable: ['js'],
          checks: [
            { text: 'Al principio muestra 0', test: "return text('#contador') === '0'" },
            { text: 'Tras un clic muestra 1', test: "await click('#sumar'); return text('#contador') === '1'" },
            { text: 'Tras otros dos clics muestra 3', test: "await click('#sumar'); await click('#sumar'); return text('#contador') === '3'" },
            { text: 'Usas `addEventListener`', test: "return src.js.includes('addEventListener')" },
          ],
          solution: { js: "let cafes = 0;\nconst boton = document.querySelector('#sumar');\nconst contador = document.querySelector('#contador');\n\nboton.addEventListener('click', () => {\n  cafes++;\n  contador.textContent = cafes;\n});\n" },
          hint: "Dentro del listener: suma 1 a `cafes` y escribe el valor en `contador.textContent`.",
        },
        {
          type: 'code',
          question: 'Saludo en vivo',
          instructions: 'Mientras el usuario escribe su nombre en `#nombre`, el párrafo `#saludo` debe mostrar **Hola, [nombre]** (evento `input`).',
          files: {
            html: '<label for="nombre">Tu nombre</label>\n<input id="nombre" placeholder="Escribe aquí…">\n<p id="saludo">Hola, cliente</p>\n',
            js: "const input = document.querySelector('#nombre');\nconst saludo = document.querySelector('#saludo');\n\n// tu código aquí\n",
          },
          editable: ['js'],
          checks: [
            { text: 'Al escribir «Moka» muestra «Hola, Moka»', test: "await type('#nombre', 'Moka'); return text('#saludo') === 'Hola, Moka'" },
            { text: 'Se actualiza con cada cambio («Ana»)', test: "await type('#nombre', 'Ana'); return text('#saludo') === 'Hola, Ana'" },
            { text: 'Usas el evento `input`', test: "return /addEventListener\\(\\s*['\"]input['\"]/.test(src.js)" },
          ],
          solution: { js: "const input = document.querySelector('#nombre');\nconst saludo = document.querySelector('#saludo');\n\ninput.addEventListener('input', () => {\n  saludo.textContent = `Hola, ${input.value}`;\n});\n" },
          hint: '`input.value` contiene lo que el usuario ha escrito.',
        },
        {
          type: 'code',
          question: 'La suscripción al boletín',
          instructions: 'Al enviar el formulario:\n1. Evita que la página se recargue.\n2. Si el correo está **vacío**, muestra en `#mensaje` el texto **Escribe tu correo**.\n3. Si no, muestra **Gracias, [correo]**.',
          files: {
            html: '<form id="boletin">\n  <label for="correo">Correo</label>\n  <input id="correo" type="text">\n  <button type="submit">Suscribirme</button>\n</form>\n<p id="mensaje"></p>\n',
            js: "const form = document.querySelector('#boletin');\nconst correo = document.querySelector('#correo');\nconst mensaje = document.querySelector('#mensaje');\n\n// tu código aquí\n",
          },
          editable: ['js'],
          checks: [
            { text: 'Con el correo vacío avisa «Escribe tu correo»', test: "await type('#correo', ''); await click('#boletin button'); await sleep(80); return text('#mensaje') === 'Escribe tu correo'" },
            { text: 'Con un correo responde «Gracias, ana@mail.com»', test: "await type('#correo', 'ana@mail.com'); await click('#boletin button'); await sleep(80); return text('#mensaje') === 'Gracias, ana@mail.com'" },
            { text: 'Usas `preventDefault()`', test: "return src.js.includes('preventDefault()')" },
          ],
          solution: { js: "const form = document.querySelector('#boletin');\nconst correo = document.querySelector('#correo');\nconst mensaje = document.querySelector('#mensaje');\n\nform.addEventListener('submit', (evento) => {\n  evento.preventDefault();\n  if (correo.value.trim() === '') {\n    mensaje.textContent = 'Escribe tu correo';\n  } else {\n    mensaje.textContent = `Gracias, ${correo.value}`;\n  }\n});\n" },
          hint: "Escucha el evento `submit` del **formulario** (no el clic del botón) y empieza con `evento.preventDefault()`.",
        },
        {
          type: 'classify',
          question: '¿Qué evento escucharías?',
          bins: [
            { id: 'click', label: '`click`' },
            { id: 'input', label: '`input`' },
            { id: 'submit', label: '`submit`' },
            { id: 'keydown', label: '`keydown`' },
          ],
          items: [
            { text: 'Añadir un producto al pulsar un botón', bin: 'click' },
            { text: 'Buscar mientras el usuario escribe', bin: 'input' },
            { text: 'Validar un formulario al enviarlo', bin: 'submit' },
            { text: 'Cerrar un modal con la tecla Escape', bin: 'keydown' },
            { text: 'Contar los caracteres de un comentario en vivo', bin: 'input' },
          ],
          explanation: 'Elegir el evento adecuado hace que la interfaz responda justo cuando debe.',
        },
        {
          type: 'quiz',
          question: '¿Para qué sirve `evento.preventDefault()` en un `submit`?',
          options: [
            'Evita el comportamiento por defecto: que el navegador recargue la página',
            'Borra el formulario',
            'Envía los datos al servidor',
            'Detiene todos los eventos de la página',
          ],
          answer: 0,
          explanation: 'Así podemos procesar los datos con JavaScript sin perder lo que hay en pantalla.',
        },
      ],
    },

    // ─────────────── 9
    {
      id: 'js-async',
      icon: '🌐',
      title: 'Asincronía y fetch',
      lesson: [
        {
          title: 'Esperar sin bloquear',
          text: 'Algunas tareas tardan: pedir datos al servidor, esperar un temporizador… JavaScript no se queda parado: **sigue** con lo siguiente y retoma la tarea cuando termina.',
          code: { lang: 'js', code: "console.log('1. Pido el café');\nsetTimeout(() => console.log('3. ¡Café listo!'), 1000);\nconsole.log('2. Mientras tanto, leo el periódico');" },
          demo: { js: "console.log('1. Pido el café');\nsetTimeout(() => console.log('3. ¡Café listo!'), 1000);\nconsole.log('2. Mientras tanto, leo el periódico');", html: '<p>Mira el orden en la consola 👇</p>', console: true, height: 50 },
        },
        {
          title: 'Promesas y async/await',
          text: 'Una **promesa** representa un valor que llegará en el futuro. Puede estar *pendiente*, *cumplida* o *rechazada*. Con `async/await` se escribe como si fuera código normal:',
          code: { lang: 'js', code: "async function cargarMenu() {\n  try {\n    const respuesta = await fetch('/api/productos');\n    if (!respuesta.ok) throw new Error('Error ' + respuesta.status);\n    const productos = await respuesta.json();\n    console.log(productos);\n  } catch (error) {\n    console.error('No se pudo cargar:', error.message);\n  }\n}" },
        },
        {
          title: 'La API de Café Pixel',
          text: 'En estos retos tienes una **API simulada** de Café Pixel:',
          table: {
            head: ['Petición', 'Respuesta'],
            rows: [
              ['`GET /api/productos`', 'El array de los 6 productos (`id`, `nombre`, `precio`, `categoria`, `disponible`)'],
              ['`GET /api/productos/2`', 'El producto con id 2'],
              ['`GET /api/productos/99`', 'Error **404**: no existe'],
              ['`POST /api/pedidos`', 'Crea un pedido y lo devuelve con un `id`'],
            ],
          },
          tip: 'Cada petición tarda un poquito, como en la vida real.',
        },
      ],
      challenges: [
        {
          type: 'quiz',
          kind: 'predict',
          question: '¿En qué orden aparecen los mensajes?',
          snippet: { lang: 'js', code: "console.log('A');\nsetTimeout(() => console.log('B'), 0);\nconsole.log('C');" },
          options: ['A, C, B', 'A, B, C', 'B, A, C', 'C, A, B'],
          answer: 0,
          explanation: 'Aunque el tiempo sea 0, `setTimeout` deja la tarea para **después** de que termine el código actual.',
        },
        {
          type: 'code',
          question: 'Cargar el menú desde la API',
          instructions: 'Completa `cargarMenu()`: pide `/api/productos` con `fetch` y `await`, convierte la respuesta con `.json()` y crea un `<li>` con el **nombre** de cada producto dentro de `#menu`.',
          files: {
            html: '<h2>Menú</h2>\n<ul id="menu"></ul>\n',
            js: "async function cargarMenu() {\n  const lista = document.querySelector('#menu');\n  // tu código aquí\n\n}\n\ncargarMenu();\n",
          },
          editable: ['js'],
          checks: [
            { text: 'Se muestran los 6 productos', test: "await sleep(700); return $$('#menu li').length === 6" },
            { text: 'Los nombres vienen de la API (Espresso… Té chai)', test: "await sleep(100); const t = $$('#menu li').map(l => l.textContent); return t.some(x => x.includes('Espresso')) && t.some(x => x.includes('Té chai'))" },
            { text: 'Usas `fetch` y `await`', test: "return src.js.includes('fetch(') && src.js.includes('await')" },
          ],
          solution: { js: "async function cargarMenu() {\n  const lista = document.querySelector('#menu');\n  const respuesta = await fetch('/api/productos');\n  const productos = await respuesta.json();\n\n  for (const p of productos) {\n    const li = document.createElement('li');\n    li.textContent = p.nombre;\n    lista.appendChild(li);\n  }\n}\n\ncargarMenu();\n" },
          hint: "`const respuesta = await fetch('/api/productos');` y después `const productos = await respuesta.json();`",
        },
        {
          type: 'code',
          question: 'Gestionar los errores',
          instructions: "Pide el producto `/api/productos/99` (que **no existe**).\n• Si `respuesta.ok` es falso, lanza un error con `throw new Error('Producto no encontrado')`.\n• Captúralo con `try/catch` y muestra el mensaje del error en `#error`.",
          files: {
            html: '<p id="producto">Cargando…</p>\n<p id="error" style="color:#dc2626"></p>\n',
            js: "async function verProducto(id) {\n  // tu código aquí (try / catch)\n\n}\n\nverProducto(99);\n",
          },
          editable: ['js'],
          checks: [
            { text: '`#error` muestra «Producto no encontrado»', test: "await sleep(700); return text('#error') === 'Producto no encontrado'" },
            { text: 'Usas `try` y `catch`', test: "return /try\\s*\\{/.test(src.js) && /catch\\s*\\(/.test(src.js)" },
            { text: 'Compruebas `respuesta.ok`', test: "return src.js.includes('.ok')" },
            { text: 'No queda ningún error sin capturar', test: 'await sleep(100); return errors.length === 0' },
          ],
          solution: { js: "async function verProducto(id) {\n  try {\n    const respuesta = await fetch(`/api/productos/${id}`);\n    if (!respuesta.ok) {\n      throw new Error('Producto no encontrado');\n    }\n    const producto = await respuesta.json();\n    document.querySelector('#producto').textContent = producto.nombre;\n  } catch (error) {\n    document.querySelector('#error').textContent = error.message;\n  }\n}\n\nverProducto(99);\n" },
          hint: 'Dentro del `catch (error)`, el texto está en `error.message`.',
        },
        {
          type: 'fill',
          question: 'Completa la función asíncrona',
          lang: 'js',
          code: "___ function cargar() {\n  const r = ___ fetch('/api/productos/1');\n  const producto = await r.___();\n  return producto.nombre;\n}",
          blanks: [['async'], ['await'], ['json']],
          bank: ['async', 'await', 'json', 'then', 'promise', 'text'],
          explanation: '`await` solo se puede usar dentro de una función `async`. `.json()` también devuelve una promesa.',
        },
        {
          type: 'quiz',
          question: '¿En qué estados puede estar una promesa?',
          options: ['Pendiente, cumplida o rechazada', 'Abierta o cerrada', 'Síncrona o asíncrona', 'Cargando o vacía'],
          answer: 0,
          explanation: 'Una promesa empieza *pending* y termina *fulfilled* (con un valor) o *rejected* (con un error).',
        },
      ],
    },

    // ─────────────── 10 · Proyecto
    {
      id: 'js-proyecto',
      icon: '☕',
      title: 'Proyecto: el carrito de Café Pixel',
      project: true,
      lesson: [
        {
          title: '¡Que funcione el carrito!',
          mood: 'happy',
          text: 'La web de Café Pixel ya tiene estructura y estilo. Ahora le damos **vida**: un carrito que suma productos y unos filtros por categoría.',
          points: ['Cada botón tiene sus datos en atributos `data-*`: `data-nombre` y `data-precio`.', 'Léelos con `boton.dataset.nombre` y `Number(boton.dataset.precio)`.'],
        },
      ],
      challenges: [
        {
          type: 'code',
          question: 'Proyecto: el carrito',
          instructions: 'Programa el carrito:\n1. Al pulsar cualquier botón `.agregar`, suma su precio al total y aumenta la cantidad.\n2. Muestra la cantidad en `#cantidad` y el total en `#total` (solo el número).\n3. El botón `#vaciar` pone ambos a 0.',
          files: {
            html: '<div class="productos">\n  <article class="card"><h3>Espresso</h3><p>$6.000</p><button class="agregar" data-nombre="Espresso" data-precio="6000">Añadir</button></article>\n  <article class="card"><h3>Capuchino</h3><p>$8.500</p><button class="agregar" data-nombre="Capuchino" data-precio="8500">Añadir</button></article>\n  <article class="card"><h3>Croissant</h3><p>$5.500</p><button class="agregar" data-nombre="Croissant" data-precio="5500">Añadir</button></article>\n</div>\n<aside class="carrito">\n  🛒 <span id="cantidad">0</span> productos · Total: $<span id="total">0</span>\n  <button id="vaciar">Vaciar</button>\n</aside>\n',
            css: 'body { font-family: system-ui, sans-serif; background: #fff7ed; }\n.productos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }\n.card { background: white; border-radius: 12px; padding: 12px; }\n.card h3 { margin: 0; }\nbutton { background: #6f4e37; color: white; border: none; border-radius: 8px; padding: 6px 12px; cursor: pointer; }\n.carrito { margin-top: 16px; padding: 12px; background: #6f4e37; color: white; border-radius: 12px; font-weight: bold; }\n.carrito button { background: white; color: #6f4e37; margin-left: 8px; }\n',
            js: "let cantidad = 0;\nlet total = 0;\n\nconst botones = document.querySelectorAll('.agregar');\nconst spanCantidad = document.querySelector('#cantidad');\nconst spanTotal = document.querySelector('#total');\n\n// tu código aquí\n",
          },
          editable: ['js'],
          previewHeight: 260,
          checks: [
            { text: 'Al añadir un Espresso: 1 producto, total 6000', test: "await click($$('.agregar')[0]); return text('#cantidad') === '1' && text('#total') === '6000'" },
            { text: 'Al añadir un Capuchino: 2 productos, total 14500', test: "await click($$('.agregar')[1]); return text('#cantidad') === '2' && text('#total') === '14500'" },
            { text: 'Al añadir un Croissant: 3 productos, total 20000', test: "await click($$('.agregar')[2]); return text('#cantidad') === '3' && text('#total') === '20000'" },
            { text: 'Vaciar pone todo a 0', test: "await click('#vaciar'); return text('#cantidad') === '0' && text('#total') === '0'" },
            { text: 'Después de vaciar sigue funcionando', test: "await click($$('.agregar')[0]); return text('#cantidad') === '1' && text('#total') === '6000'" },
          ],
          solution: { js: "let cantidad = 0;\nlet total = 0;\n\nconst botones = document.querySelectorAll('.agregar');\nconst spanCantidad = document.querySelector('#cantidad');\nconst spanTotal = document.querySelector('#total');\n\nfunction pintar() {\n  spanCantidad.textContent = cantidad;\n  spanTotal.textContent = total;\n}\n\nfor (const boton of botones) {\n  boton.addEventListener('click', () => {\n    cantidad++;\n    total += Number(boton.dataset.precio);\n    pintar();\n  });\n}\n\ndocument.querySelector('#vaciar').addEventListener('click', () => {\n  cantidad = 0;\n  total = 0;\n  pintar();\n});\n" },
          hint: 'Recorre `botones` con `for...of` y añade un listener de `click` a cada uno. Una función `pintar()` que actualice los dos spans te ahorrará repetir código.',
        },
        {
          type: 'code',
          question: 'Proyecto: filtros por categoría',
          instructions: 'Al pulsar un botón de filtro, muestra solo las tarjetas de esa categoría (y oculta las demás con la clase `oculto`).\n• Cada botón tiene `data-categoria` (`cafe`, `postres` o `todos`).\n• Cada tarjeta tiene `data-categoria`.\n• Con «Todos» se ven todas.',
          files: {
            html: '<div class="filtros">\n  <button data-categoria="todos">Todos</button>\n  <button data-categoria="cafe">Café</button>\n  <button data-categoria="postres">Postres</button>\n</div>\n<div class="productos">\n  <article class="card" data-categoria="cafe">Espresso</article>\n  <article class="card" data-categoria="cafe">Latte</article>\n  <article class="card" data-categoria="postres">Brownie</article>\n  <article class="card" data-categoria="postres">Cheesecake</article>\n</div>\n',
            css: '.filtros button { margin-right: 6px; padding: 6px 12px; }\n.productos { display: flex; gap: 8px; margin-top: 12px; }\n.card { padding: 12px; background: #fef3c7; border-radius: 10px; }\n.oculto { display: none; }\n',
            js: "const botones = document.querySelectorAll('.filtros button');\nconst cards = document.querySelectorAll('.card');\n\n// tu código aquí\n",
          },
          editable: ['js'],
          previewHeight: 150,
          checks: [
            { text: '«Café» deja solo los 2 cafés', test: "await click('[data-categoria=\"cafe\"]'); const v = $$('.card').filter(c => !c.classList.contains('oculto')).map(c => c.textContent); return v.length === 2 && v.includes('Espresso') && v.includes('Latte')" },
            { text: '«Postres» deja solo los 2 postres', test: "await click('.filtros [data-categoria=\"postres\"]'); const v = $$('.card').filter(c => !c.classList.contains('oculto')).map(c => c.textContent); return v.length === 2 && v.includes('Brownie')" },
            { text: '«Todos» vuelve a mostrar las 4', test: "await click('[data-categoria=\"todos\"]'); return $$('.card.oculto').length === 0" },
          ],
          solution: { js: "const botones = document.querySelectorAll('.filtros button');\nconst cards = document.querySelectorAll('.card');\n\nfor (const boton of botones) {\n  boton.addEventListener('click', () => {\n    const categoria = boton.dataset.categoria;\n    for (const card of cards) {\n      const visible = categoria === 'todos' || card.dataset.categoria === categoria;\n      card.classList.toggle('oculto', !visible);\n    }\n  });\n}\n" },
          hint: '`classList.toggle(\'oculto\', condicion)` añade la clase si la condición es verdadera y la quita si es falsa.',
        },
      ],
    },
  ],
};
