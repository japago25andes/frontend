import { transform } from 'sucrase';

/*
  Ejecuta el código del estudiante dentro de un iframe aislado (sandbox, sin acceso a la página).
  - buildDoc(): arma el documento HTML a partir de los archivos html / css / js (o ts).
  - runChecks(): carga el documento en un iframe oculto, ejecuta las comprobaciones y devuelve los resultados.

  Dentro de cada comprobación (checks[i].test) están disponibles:
    $ (querySelector), $$ (querySelectorAll como array), text(sel), style(sel|el, prop), rect(sel),
    click(sel), type(sel, valor), sleep(ms), logs (console.log capturados), errors, src (código fuente), doc.
*/

// Datos de la API simulada de Café Pixel (para los niveles de fetch).
const API_DATA = {
  productos: [
    { id: 1, nombre: 'Espresso', precio: 6000, categoria: 'cafe', disponible: true },
    { id: 2, nombre: 'Capuchino', precio: 8500, categoria: 'cafe', disponible: true },
    { id: 3, nombre: 'Latte', precio: 9000, categoria: 'cafe', disponible: false },
    { id: 4, nombre: 'Croissant', precio: 5500, categoria: 'panaderia', disponible: true },
    { id: 5, nombre: 'Brownie', precio: 7000, categoria: 'postres', disponible: true },
    { id: 6, nombre: 'Té chai', precio: 8000, categoria: 'te', disponible: true },
  ],
};

const RUNTIME = `
(function () {
  window.__logs = [];
  window.__errors = [];
  var fmt = function (v) {
    if (typeof v === 'string') return v;
    if (v === undefined) return 'undefined';
    if (typeof v === 'function') return 'function';
    try { return JSON.stringify(v); } catch (e) { return String(v); }
  };
  // Como máximo 500 mensajes por ejecución, para que un bucle con console.log no congele la página.
  var count = 0;
  ['log', 'info', 'warn', 'error'].forEach(function (k) {
    var orig = console[k].bind(console);
    console[k] = function () {
      count++;
      if (count > 500) {
        if (count === 501) {
          window.__logs.push('… (demasiados mensajes: se omiten los siguientes)');
          try { parent.postMessage({ __fq: 'log', level: 'warn', text: '… (demasiados mensajes: se omiten los siguientes)' }, '*'); } catch (e) {}
        }
        return;
      }
      var args = Array.prototype.slice.call(arguments);
      var line = args.map(fmt).join(' ');
      window.__logs.push(line);
      try { parent.postMessage({ __fq: 'log', level: k, text: line }, '*'); } catch (e) {}
      orig.apply(null, args);
    };
  });
  window.addEventListener('error', function (e) {
    window.__errors.push(e.message);
    try { parent.postMessage({ __fq: 'log', level: 'error', text: e.message }, '*'); } catch (err) {}
  });
  window.addEventListener('unhandledrejection', function (e) {
    var msg = (e.reason && e.reason.message) || String(e.reason);
    window.__errors.push(msg);
    try { parent.postMessage({ __fq: 'log', level: 'error', text: msg }, '*'); } catch (err) {}
  });

  // API simulada: GET /api/productos, GET /api/productos/:id, POST /api/pedidos
  var DB = ${JSON.stringify(API_DATA)};
  var respond = function (status, body) {
    return {
      ok: status >= 200 && status < 300,
      status: status,
      json: function () { return Promise.resolve(JSON.parse(JSON.stringify(body))); },
      text: function () { return Promise.resolve(JSON.stringify(body)); }
    };
  };
  window.fetch = function (url, opts) {
    opts = opts || {};
    var method = (opts.method || 'GET').toUpperCase();
    var path = String(url).replace(/^https?:\\/\\/[^/]+/, '');
    return new Promise(function (resolve) {
      setTimeout(function () {
        var m;
        if (method === 'GET' && /^\\/api\\/productos\\/?$/.test(path)) return resolve(respond(200, DB.productos));
        if (method === 'GET' && (m = path.match(/^\\/api\\/productos\\/(\\d+)$/))) {
          var p = DB.productos.filter(function (x) { return x.id === Number(m[1]); })[0];
          return resolve(p ? respond(200, p) : respond(404, { error: 'Producto no encontrado' }));
        }
        if (method === 'POST' && /^\\/api\\/pedidos\\/?$/.test(path)) {
          var body = {};
          try { body = JSON.parse(opts.body || '{}'); } catch (e) {}
          return resolve(respond(201, Object.assign({ id: 101, estado: 'recibido' }, body)));
        }
        resolve(respond(404, { error: 'Ruta no encontrada' }));
      }, 150);
    });
  };
})();
`;

const CHECK_RUNNER = `
window.addEventListener('load', function () {
  setTimeout(async function () {
    var AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
    var $ = function (s) { return document.querySelector(s); };
    var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };
    var el = function (x) { return typeof x === 'string' ? $(x) : x; };
    var text = function (s) { var e = el(s); return e ? e.textContent.replace(/\\s+/g, ' ').trim() : ''; };
    var style = function (s, p) { var e = el(s); return e ? getComputedStyle(e)[p] : ''; };
    var rect = function (s) { var e = el(s); return e ? e.getBoundingClientRect() : null; };
    var sleep = function (ms) { return new Promise(function (r) { setTimeout(r, ms); }); };
    var click = async function (s) { var e = el(s); if (e) e.click(); await sleep(60); };
    var type = async function (s, v) {
      var e = el(s); if (!e) return;
      e.value = v;
      e.dispatchEvent(new Event('input', { bubbles: true }));
      e.dispatchEvent(new Event('change', { bubbles: true }));
      await sleep(40);
    };
    var results = [];
    for (var i = 0; i < __CHECKS.length; i++) {
      var ok = false, err = null;
      try {
        var fn = new AsyncFunction('$', '$$', 'text', 'style', 'rect', 'click', 'type', 'sleep', 'logs', 'errors', 'src', 'doc', __CHECKS[i]);
        ok = !!(await fn($, $$, text, style, rect, click, type, sleep, window.__logs, window.__errors, __SRC, document));
      } catch (e) { ok = false; err = e && e.message; }
      results.push({ ok: ok, err: err });
    }
    parent.postMessage({ __fq: 'checks', nonce: __NONCE, results: results }, '*');
  }, 80);
});
`;

const BASE_CSS = `body{font-family:system-ui,-apple-system,'Segoe UI',sans-serif;margin:12px;color:#1f2937;background:#fff}`;

const safeJson = (v) => JSON.stringify(v).replace(/<\//g, '<\\/').replace(/<!--/g, '<\\!--');

// Devuelve el índice donde termina un literal o comentario que empieza en i (o -1 si no hay ninguno).
function skipLiteral(code, i) {
  const c = code[i];
  const n = code.length;
  if (c === '"' || c === "'" || c === '`') {
    let j = i + 1;
    while (j < n && code[j] !== c) j += code[j] === '\\' ? 2 : 1;
    return j + 1;
  }
  if (c === '/' && code[i + 1] === '/') {
    const j = code.indexOf('\n', i);
    return j === -1 ? n : j;
  }
  if (c === '/' && code[i + 1] === '*') {
    const j = code.indexOf('*/', i + 2);
    return j === -1 ? n : j + 2;
  }
  return -1;
}

// Índice del carácter que cierra el par abierto en `start` ('(' o '{').
function findClosing(code, start) {
  const open = code[start];
  const close = open === '(' ? ')' : '}';
  let depth = 0;
  for (let i = start; i < code.length; ) {
    const end = skipLiteral(code, i);
    if (end !== -1) {
      i = end;
      continue;
    }
    if (code[i] === open) depth++;
    else if (code[i] === close && --depth === 0) return i;
    i++;
  }
  return -1;
}

let loopId = 0;

/**
 * Protege los bucles `for` y `while` con llaves: cada uno se envuelve en un bloque con su propio
 * contador y, si pasa de 100 000 vueltas, se detiene con un error en vez de congelar la página.
 */
export function protectLoops(code) {
  let out = '';
  let i = 0;
  const n = code.length;
  while (i < n) {
    const end = skipLiteral(code, i);
    if (end !== -1) {
      out += code.slice(i, end);
      i = end;
      continue;
    }
    const m = /^(for|while)\s*\(/.exec(code.slice(i, i + 12));
    const prev = code[i - 1];
    if (m && !(prev && /[\w$.]/.test(prev))) {
      const parenOpen = i + m[0].length - 1;
      const parenClose = findClosing(code, parenOpen);
      let k = parenClose + 1;
      while (k < n && /\s/.test(code[k])) k++;
      const braceClose = code[k] === '{' ? findClosing(code, k) : -1;
      if (parenClose !== -1 && braceClose !== -1) {
        const v = `__lp${loopId++}`;
        out +=
          `{let ${v}=0;` +
          code.slice(i, k + 1) +
          `if(++${v}>100000)throw new Error('Bucle infinito detectado: se detuvo la ejecución');` +
          protectLoops(code.slice(k + 1, braceClose)) +
          '}}';
        i = braceClose + 1;
        continue;
      }
    }
    out += code[i];
    i++;
  }
  return out;
}

/** Convierte TypeScript en JavaScript (sin comprobar tipos). */
export function compileTs(code) {
  return transform(code, { transforms: ['typescript'], disableESTransforms: true }).code;
}

/** Prepara el JS que se ejecutará: compila TS si hace falta y protege los bucles. */
export function prepareScript(files, lang) {
  let js = files.js || '';
  if (lang === 'ts') js = compileTs(js);
  return protectLoops(js);
}

/** Construye el documento completo para el iframe. */
export function buildDoc(files, { lang, checks, nonce } = {}) {
  const html = files.html || '';
  const css = files.css || '';
  let script = '';
  let compileError = null;
  try {
    script = prepareScript(files, lang);
  } catch (e) {
    compileError = e.message;
  }

  const head = `<meta charset="utf-8"><style>${BASE_CSS}</style><script>${RUNTIME}</script><style>${css}</style>`;
  const userScript = script ? `<script>\n${script}\n</script>` : '';
  const errScript = compileError
    ? `<script>window.__errors.push(${safeJson('Error de sintaxis: ' + compileError)});parent.postMessage({__fq:'log',level:'error',text:${safeJson('Error de sintaxis: ' + compileError)}},'*');</script>`
    : '';
  const checkScript = checks
    ? `<script>var __CHECKS=${safeJson(checks)};var __SRC=${safeJson(files)};var __NONCE=${safeJson(nonce)};${CHECK_RUNNER}</script>`
    : '';
  const tail = errScript + userScript + checkScript;

  // Si el estudiante escribió un documento completo, respetarlo e inyectar lo necesario.
  if (/<html[\s>]/i.test(html) || /<!doctype/i.test(html)) {
    // Se usan funciones en replace() para que los "$" del código no se interpreten como patrones.
    const headTag = /<head(\s[^>]*)?>/i;
    let doc = html;
    doc = headTag.test(doc) ? doc.replace(headTag, (m) => m + head) : head + doc;
    doc = /<\/body>/i.test(doc) ? doc.replace(/<\/body>/i, () => tail + '</body>') : doc + tail;
    return doc;
  }
  return `<!doctype html><html lang="es"><head>${head}</head><body>${html}${tail}</body></html>`;
}

/** Ejecuta las comprobaciones en un iframe oculto. Devuelve [{ ok, err }]. */
export function runChecks(files, checks, { lang, timeout = 5000 } = {}) {
  return new Promise((resolve) => {
    const nonce = Math.random().toString(36).slice(2);
    // El iframe de comprobación debe estar "en pantalla" para que el navegador calcule su diseño
    // (los iframes aislados fuera de pantalla no se maquetan). Se muestra a través de una ventana
    // de 1×1 píxel casi transparente en una esquina: invisible para el usuario.
    const holder = document.createElement('div');
    holder.setAttribute('aria-hidden', 'true');
    holder.style.cssText = 'position:fixed;right:0;bottom:0;width:1px;height:1px;overflow:hidden;opacity:0.01;pointer-events:none;z-index:2147483647';
    const frame = document.createElement('iframe');
    frame.setAttribute('sandbox', 'allow-scripts allow-forms');
    frame.tabIndex = -1;
    frame.style.cssText = 'position:absolute;left:0;top:0;width:1024px;height:768px;border:0';
    holder.appendChild(frame);
    const done = (results) => {
      window.removeEventListener('message', onMsg);
      clearTimeout(timer);
      holder.remove();
      resolve(results);
    };
    const onMsg = (e) => {
      if (e.source === frame.contentWindow && e.data && e.data.__fq === 'checks' && e.data.nonce === nonce) {
        done(e.data.results);
      }
    };
    const timer = setTimeout(
      () => done(checks.map(() => ({ ok: false, err: 'Tiempo agotado: revisa si hay un bucle infinito o un error' }))),
      timeout,
    );
    window.addEventListener('message', onMsg);
    frame.srcdoc = buildDoc(files, { lang, checks, nonce });
    document.body.appendChild(holder);
  });
}
