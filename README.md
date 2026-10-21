# 🌐 Misión: Frontend

> **Programación Web** · De la primera etiqueta HTML a una aplicación con Angular.

Una web gamificada en español para aprender **desarrollo frontend escribiendo código de verdad**. El estudiante construye, paso a paso, la web de una cafetería ficticia, **Café Pixel**, guiado por **Moka**, una taza programadora:

1. 🧱 **HTML**: la estructura de la página.
2. 🎨 **CSS**: el diseño, con Flexbox, Grid y responsive.
3. ⚡ **JavaScript**: la interactividad (carrito, filtros, peticiones a una API).
4. 🔷 **TypeScript**: el modelo de datos con tipos.
5. 🅰️ **Angular**: la aplicación completa con componentes, signals, rutas y servicios.

Incluye un **editor de código en vivo** con vista previa y una **lista de comprobaciones** que se pone en verde mientras el estudiante escribe. Además, una **credencial de desarrollador/a** que evoluciona y un **diploma** final imprimible.

---

## 📑 Índice

1. [Resumen rápido](#-resumen-rápido)
2. [Requisitos](#-requisitos)
3. [Puertos](#-puertos)
4. [Cómo levantarlo con Docker](#-cómo-levantarlo-con-docker)
5. [Comprobar, detener y actualizar](#-comprobar-detener-y-actualizar)
6. [Usarlo en clase](#-usarlo-en-clase)
7. [Contenido: 5 mundos y 45 niveles](#-contenido-5-mundos-y-45-niveles)
8. [Tipos de reto](#-tipos-de-reto)
9. [Mecánica de juego](#-mecánica-de-juego)
10. [Editar o ampliar el contenido](#-editar-o-ampliar-el-contenido)
11. [Control de calidad de los retos (`?qa`)](#-control-de-calidad-de-los-retos-qa)
12. [Estructura del proyecto](#-estructura-del-proyecto)
13. [Solución de problemas](#-solución-de-problemas)
14. [Tecnología](#-tecnología)

---

## ⚡ Resumen rápido

| Qué | Valor |
|---|---|
| Dirección del juego | **http://localhost:8083** |
| Arrancar (Windows) | Doble clic en **`iniciar.bat`** |
| Detener (Windows) | Doble clic en **`detener.bat`** |
| Arrancar (terminal) | `docker compose up -d --build` |
| Detener (terminal) | `docker compose down` |
| Contenedor | `frontend-quest` |
| Requisito único | **Docker Desktop** abierto |

---

## 🧰 Requisitos

Solo **Docker**. No hace falta instalar Node.js, Angular ni nada más.

| Sistema | Qué instalar |
|---|---|
| **Windows 10/11** | [Docker Desktop](https://www.docker.com/products/docker-desktop/) (usa WSL 2) |
| **macOS** | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |
| **Linux** | Docker Engine + plugin **Docker Compose v2** |

- **Internet la primera vez**, para descargar las imágenes y las librerías. Después funciona sin conexión.
- Navegador moderno (**Chrome, Edge o Firefox**) en un **ordenador**: el editor de código está pensado para teclado y pantalla grande.

Comprueba que Docker funciona:

```bash
docker --version
```

```bash
docker compose version
```

---

## 🔌 Puertos

| Puerto | Para qué |
|---|---|
| **8083** | **Versión para clase** (la web compilada, servida con Nginx) |
| **5175** | Versión de **desarrollo** con recarga automática (solo para editar contenidos) |

**¿El 8083 está ocupado?**

1. En `docker-compose.yml`, cambia el número de la **izquierda**: `"9083:80"`. El 80 de la derecha no se toca.
2. Cambia también la dirección en `iniciar.bat`.
3. Vuelve a arrancar.

---

## 🚀 Cómo levantarlo con Docker

### Windows: doble clic

1. Abre **Docker Desktop** y espera a *Engine running*.
2. Haz doble clic en **`iniciar.bat`**. La primera vez tarda 1–3 minutos (compila la web).
3. Se abre el navegador en **http://localhost:8083**.

### Cualquier sistema: terminal

Desde la carpeta del proyecto:

```bash
docker compose up -d --build
```

Después abre **http://localhost:8083**.

### ¿Qué hace Docker?

El `Dockerfile` trabaja en dos etapas:

1. **Node 20** instala las dependencias y compila la web (`npm run build`).
2. **Nginx** sirve la carpeta compilada en el puerto 80 del contenedor, que `docker-compose.yml` publica en el **8083**.

El contenedor se reinicia solo al encender el ordenador, siempre que Docker Desktop esté abierto.

---

## ✅ Comprobar, detener y actualizar

| Acción | Comando |
|---|---|
| Ver el estado | `docker compose ps` |
| Ver los mensajes | `docker compose logs -f web` |
| Detener | `docker compose down` (o `detener.bat`) |
| Aplicar cambios del contenido | `docker compose up -d --build` (o `iniciar.bat`) |
| Reconstruir desde cero | `docker compose build --no-cache` y luego `docker compose up -d` |

---

## 🏫 Usarlo en clase

- **Cada estudiante en su ordenador** (recomendado): clona o descarga el repositorio y ejecuta `iniciar.bat`.
- **Un ordenador para toda la clase**: levántalo en el tuyo y comparte `http://TU-IP:8083`. Para ver tu IP en Windows, ejecuta `ipconfig` (*Dirección IPv4*). Si no carga, abre el puerto en el firewall con PowerShell como administrador:
  ```powershell
  New-NetFirewallRule -DisplayName "Mision Frontend 8083" -Direction Inbound -Protocol TCP -LocalPort 8083 -Action Allow
  ```

### Progreso, credencial y diploma

- El progreso se guarda en el **navegador** de cada estudiante (`localStorage`): no hay cuentas ni base de datos. Si cambia de navegador, empieza de cero.
- 🪪 **Credencial**: una tarjeta de identificación de Café Pixel con:
  - el nombre y el rango del estudiante;
  - un **sello por cada mundo completado**;
  - XP, estrellas, insignias y retos de código superados;
  - un código de barras.

  Al vencer al jefe final se vuelve **dorada**. Se puede imprimir.
- 🎓 **Diploma**: aparece al derrotar al jefe final. Lleva el nombre, las tecnologías dominadas y las estadísticas, y se puede imprimir o guardar en PDF.

---

## 📚 Contenido: 5 mundos y 45 niveles

Cada mundo termina con un **☕ proyecto** que añade una pieza a la web de Café Pixel.

| Mundo | Niveles | Retos |
|---|---|---|
| 🧱 **HTML** | Cómo funciona la web · Estructura y texto · Enlaces, imágenes y listas · HTML semántico · Tablas · Formularios · Accesibilidad · ☕ Proyecto: la web de Café Pixel | 44 |
| 🎨 **CSS** | Sintaxis y selectores · Modelo de caja · Colores, unidades y tipografía · Display y posicionamiento · Flexbox · Grid · Responsive · Variables y animaciones · ☕ Proyecto: Café Pixel con estilo | 43 |
| ⚡ **JavaScript** | Variables y tipos · Operadores y condicionales · Bucles · Funciones · Arrays · Objetos y JSON · El DOM · Eventos y formularios · Asincronía y fetch · ☕ Proyecto: el carrito | 48 |
| 🔷 **TypeScript** | Por qué TypeScript · Funciones y uniones · Interfaces y types · Clases · Genéricos, módulos y decoradores · ☕ Proyecto: el modelo de datos | 24 |
| 🅰️ **Angular** | Qué es Angular (SPA, CLI, estructura) · Componentes · Plantillas y bindings · `@if` / `@for` / `@switch` · Signals · `input()` / `output()` / `model()` · Servicios e `inject()` · Rutas · HTTP · Formularios · ☕ Proyecto: Café Pixel en Angular | 49 |
| 👾 **Jefe final** | La gran inauguración: un reto mixto con todo lo anterior | 8 |
| **Total** | **45 niveles** | **216 retos (72 de programación)** |

- **Angular moderno**: componentes *standalone*, control de flujo `@if` / `@for`, *signals*, `input()` / `output()` e `inject()`. También se menciona la sintaxis antigua (`*ngIf`, `@Input()`), que los estudiantes encontrarán en proyectos existentes.
- **Apuntes** 📘: una chuleta de referencia por mundo, con tablas y ejemplos, siempre a mano desde el menú.

---

## 🧩 Tipos de reto

| Tipo | Cómo funciona |
|---|---|
| ⌨️ **Programa** | Editor con pestañas (`index.html`, `estilos.css`, `app.js` / `app.ts`), vista previa en vivo, consola y comprobaciones automáticas en tiempo real |
| 🎯 **Iguala el diseño** | Reto de CSS con una segunda vista previa del **objetivo** para comparar |
| 🐞 **Encuentra el bug** | Código que no funciona y hay que arreglar |
| ✏️ **Completa el código** | Huecos en un fragmento de código, con banco de palabras opcional |
| 🔮 **Predice el resultado** | ¿Qué muestra la consola o la pantalla? |
| ❓ ☑️ 🗂️ 🔢 | Pregunta, selección múltiple, clasificar y ordenar |

En los retos de programación:

- Las **comprobaciones** se evalúan mientras se escribe.
- **💡 Pista**: ayuda, a cambio de **−30% de XP** en ese reto.
- **🏳️ Me rindo**: muestra una solución, pero cuesta una vida.
- **Entregar**: puntúa la proporción de comprobaciones en verde.
- El código del estudiante se ejecuta **aislado** (iframe *sandbox*), con protección contra **bucles infinitos** y una **API simulada de Café Pixel** para practicar `fetch`:

| Petición | Respuesta |
|---|---|
| `GET /api/productos` | El array de 6 productos (`id`, `nombre`, `precio` en COP, `categoria`, `disponible`) |
| `GET /api/productos/:id` | Un producto, o **404** si no existe |
| `POST /api/pedidos` | Crea un pedido y lo devuelve con `id` |

---

## 🎮 Mecánica de juego

| Elemento | Cómo funciona |
|---|---|
| **Lecciones** | Diapositivas con código resaltado y **demos en vivo** del resultado. Se pueden saltar si el nivel ya está superado |
| **Vidas** | 3 ❤️ por nivel |
| **XP** | 100 por acierto, 120 en los proyectos y 150 en el jefe final. Los aciertos parciales dan algo de XP pero cuestan una vida |
| **Racha 🔥** | +10 XP por acierto seguido (máximo +50) |
| **Estrellas** | ⭐⭐⭐ sin fallos, ⭐⭐ con 1 fallo, ⭐ con 2. Cada estrella suma 50 XP |
| **Mejor marca** | Repetir un nivel solo cuenta si se mejora |
| **Rangos** | 🥚 Aprendiz web → 🧱 Maquetador/a → 🎨 Diseñador/a web → ⚡ Dev JavaScript → 🔷 Dev TypeScript → 🅰️ Dev Angular → 👑 Leyenda Frontend |
| **Insignias** | 16, entre ellas: Hola, mundo · Manos al teclado · Picacódigo · una por cada mundo · Cazador/a de jefes · Leyenda Frontend |
| **Desbloqueo** | Los niveles se desbloquean en orden |

---

## ✏️ Editar o ampliar el contenido

| Archivo | Contenido |
|---|---|
| `src/data/worlds/html.js` · `css.js` · `js.js` · `ts.js` · `angular.js` · `final.js` | Los niveles de cada mundo: lecciones y retos |
| `src/data/notes.js` | Los apuntes (chuletas) |
| `src/data/game.js` | Rangos, insignias y puntuaciones |
| `src/lib/runner.js` | El ejecutor de código y la API simulada |

### Modo desarrollo (con recarga automática)

```bash
docker compose --profile dev up dev
```

Abre **http://localhost:5175**. Cuando termines, actualiza la versión de clase con `iniciar.bat`.

### Ejemplo de reto de programación

```js
{
  type: 'code',
  question: 'Los productos en fila',
  instructions: 'Coloca las tarjetas en una fila con `gap` de **16px**.',
  files: { html: '<div class="productos">…</div>', css: '.productos {\n  \n}\n' },
  editable: ['css'],              // pestañas que el estudiante puede editar
  target: true,                   // muestra la vista previa del objetivo (la solución)
  checks: [
    { text: 'Usa `display: flex`', test: "return style('.productos', 'display') === 'flex'" },
    { text: 'Separación de 16px',  test: "const c = $$('.card').map(rect); return Math.round(c[1].left - c[0].right) === 16" },
  ],
  solution: { css: '.productos {\n  display: flex;\n  gap: 16px;\n}\n' },
  hint: '`display: flex;` y `gap: 16px;`',
}
```

- Para TypeScript se añade `lang: 'ts'`; el archivo sigue llamándose `js` en `files`.
- Cada `test` es el cuerpo de una función `async` que devuelve `true` o `false`. Tiene a mano estas herramientas:

| Herramienta | Qué hace |
|---|---|
| `$(sel)` · `$$(sel)` | Buscar un elemento / todos (como array) |
| `text(sel)` | Texto de un elemento (sin espacios sobrantes) |
| `style(sel, prop)` | Estilo calculado (`getComputedStyle`) |
| `rect(sel)` | Posición y tamaño en pantalla |
| `click(sel)` · `type(sel, valor)` | Simular un clic o escribir en un campo |
| `sleep(ms)` | Esperar (por ejemplo, a un `fetch`) |
| `logs` · `errors` | Lo escrito en consola y los errores |
| `src` | El código fuente del estudiante (`src.html`, `src.css`, `src.js`) |
| Globales del estudiante | Sus funciones y variables (por ejemplo, `sumar(2, 3)`) |

Los demás tipos (`quiz`, `pick`, `classify`, `order`, `fill`) siguen el mismo formato que verás en los archivos de cada mundo.

---

## 🧪 Control de calidad de los retos (`?qa`)

Abre **http://localhost:8083/?qa** (o `http://localhost:5175/?qa` en desarrollo). La página revisa automáticamente **todos los retos**:

- la **solución** de cada reto de programación pasa **todas** sus comprobaciones;
- el **código inicial** no las pasa todas, para que el reto no sea trivial;
- las preguntas, huecos y clasificaciones están bien formados.

Úsala siempre que añadas o modifiques retos. Al publicar esta versión, el resultado era **216 retos revisados, 0 con problemas**.

> Ten esa pestaña **visible** mientras se ejecuta: los navegadores no maquetan las páginas de pestañas ocultas, y los retos que miden posiciones (Flexbox, Grid…) fallarían.

---

## 🗂️ Estructura del proyecto

```
frontend-quest/
├── iniciar.bat / detener.bat      ← arrancar y parar (Windows)
├── docker-compose.yml             ← puertos 8083 (clase) y 5175 (desarrollo)
├── Dockerfile · nginx.conf        ← compilación y servidor
└── src/
    ├── data/
    │   ├── worlds/                ← el contenido de cada mundo
    │   ├── notes.js               ← apuntes
    │   └── game.js                ← rangos, insignias y reglas
    ├── lib/runner.js              ← ejecuta el código en un iframe aislado + API simulada
    ├── components/
    │   ├── challenges/            ← Code, Fill, Quiz, Pick, Classify, Order
    │   ├── code/                  ← editor (CodeMirror), bloques de código (Prism), vista previa
    │   ├── LevelMap.jsx           ← mapa de mundos
    │   ├── LevelPlayer.jsx        ← lección, retos, vidas y resultados
    │   ├── Credential.jsx         ← credencial de dev
    │   ├── Certificate.jsx        ← diploma
    │   └── QA.jsx                 ← control de calidad (?qa)
    ├── styles.css
    └── frontend.css
```

---

## 🩺 Solución de problemas

| Problema | Solución |
|---|---|
| *"No se pudo arrancar"* | Abre Docker Desktop y espera a *Engine running* |
| `port is already allocated` | Cambia el puerto (ver [Puertos](#-puertos)) |
| Error de red al construir la primera vez | Comprueba la conexión a internet y repite |
| No veo mis cambios | `docker compose up -d --build` y recarga con `Ctrl + F5` |
| Un reto de código se queda «pensando» | Probablemente hay un bucle infinito. El guardián lo detiene a las 100 000 vueltas y lo avisa en la consola |
| Un estudiante perdió su progreso | El progreso vive en cada navegador; debe usar siempre el mismo |
| La consola dice «demasiados mensajes» | Se muestran como máximo 500 mensajes por ejecución, para no congelar la página |

---

## 🛠️ Tecnología

- **React 18 + Vite 5**: la interfaz del juego.
- **CodeMirror 6**: el editor de código.
- **Prism**: el resaltado de sintaxis.
- **Sucrase**: compila TypeScript a JavaScript en el navegador.
- **Iframes *sandbox***: ejecutan el código del estudiante de forma aislada.
- **canvas-confetti** y **Web Audio API**: celebraciones y sonidos, sin archivos de audio.
- Fuentes **Outfit** y **JetBrains Mono**, incluidas en el proyecto.
- **Docker** (Node 20 para compilar y Nginx para servir).
