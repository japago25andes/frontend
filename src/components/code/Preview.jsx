import { useEffect, useMemo, useRef, useState } from 'react';
import { buildDoc } from '../../lib/runner.js';

/**
 * Vista previa en vivo del código (iframe aislado). Opcionalmente muestra la consola.
 * Se actualiza con un pequeño retardo mientras el estudiante escribe.
 */
export default function Preview({ files, lang, showConsole = false, height = 300, delay = 400, label = 'Resultado' }) {
  const frame = useRef(null);
  const [doc, setDoc] = useState(() => buildDoc(files, { lang }));
  const [logs, setLogs] = useState([]);
  const filesKey = useMemo(() => JSON.stringify(files), [files]);

  useEffect(() => {
    const t = setTimeout(() => {
      setLogs([]);
      setDoc(buildDoc(files, { lang }));
    }, delay);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filesKey, lang, delay]);

  useEffect(() => {
    const onMsg = (e) => {
      if (frame.current && e.source === frame.current.contentWindow && e.data?.__fq === 'log') {
        setLogs((l) => [...l.slice(-199), { level: e.data.level, text: e.data.text }]);
      }
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, []);

  return (
    <div className="preview">
      <div className="preview-bar">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="preview-label">{label}</span>
        <button className="preview-reload" onClick={() => { setLogs([]); setDoc(buildDoc(files, { lang }) + ' '); }} title="Volver a ejecutar">
          ↻
        </button>
      </div>
      <iframe ref={frame} title={label} sandbox="allow-scripts allow-modals allow-forms" srcDoc={doc} style={{ height }} />
      {showConsole && (
        <div className="console">
          <div className="console-title">Consola</div>
          {logs.length === 0 ? (
            <div className="console-empty">(sin mensajes)</div>
          ) : (
            logs.map((l, i) => (
              <div key={i} className={`console-line ${l.level}`}>
                <span className="console-caret">›</span> {l.text}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
