import { useEffect, useMemo, useState } from 'react';
import Shell from './Shell.jsx';
import CodeEditor from '../code/CodeEditor.jsx';
import CodeBlock from '../code/CodeBlock.jsx';
import Preview from '../code/Preview.jsx';
import { runChecks } from '../../lib/runner.js';
import { rich } from '../../lib/utils.jsx';
import { sfx } from '../../lib/sound.js';

export const FILE_NAMES = { html: 'index.html', css: 'estilos.css', js: 'app.js', ts: 'app.ts' };

/*
  Reto de programación: editor + vista previa + lista de comprobaciones que se evalúa en vivo.
  challenge = {
    files: { html, css, js },      código inicial
    editable: ['css'],             pestañas editables (por defecto, todas)
    lang: 'js' | 'ts',             lenguaje del archivo de script
    checks: [{ text, test }],      comprobaciones (test = cuerpo de una función async que devuelve true/false)
    solution: { css: '...' },      solución (se mezcla con files)
    hint, target (mostrar el objetivo), console (mostrar la consola), instructions
  }
*/
export default function Code({ challenge, revealed, onCheck }) {
  const lang = challenge.lang || 'js';
  const tabs = Object.keys(challenge.files);
  const editable = challenge.editable || tabs;
  const [files, setFiles] = useState(() => ({ ...challenge.files }));
  const [active, setActive] = useState(editable[0]);
  const [results, setResults] = useState(() => challenge.checks.map(() => null));
  const [running, setRunning] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const filesKey = JSON.stringify(files);
  const solutionFiles = useMemo(() => ({ ...challenge.files, ...challenge.solution }), [challenge]);
  const hasScript = tabs.includes('js');

  // Comprobaciones en vivo mientras se escribe
  useEffect(() => {
    let cancelled = false;
    setRunning(true);
    const t = setTimeout(async () => {
      const r = await runChecks(files, challenge.checks.map((c) => c.test), { lang });
      if (!cancelled) {
        setResults(r);
        setRunning(false);
      }
    }, 650);
    return () => {
      cancelled = true;
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filesKey]);

  const passed = results.filter((r) => r?.ok).length;
  const total = challenge.checks.length;
  const allOk = passed === total;

  function submit() {
    onCheck(passed / total, { hint: showHint });
  }

  function giveUp() {
    if (!window.confirm('¿Rendirte? Perderás una vida, pero verás una solución.')) return;
    onCheck(0, { gaveUp: true });
    setShowSolution(true);
  }

  const tabLabel = (t) => (t === 'js' && lang === 'ts' ? FILE_NAMES.ts : FILE_NAMES[t]);

  return (
    <Shell challenge={challenge} revealed={revealed} wide>
      {challenge.instructions && <div className="instructions">{rich(challenge.instructions)}</div>}

      <div className={`code-layout ${challenge.target ? 'with-target' : ''}`}>
        <div className="editor-panel">
          <div className="editor-tabs">
            {tabs.map((t) => (
              <button key={t} className={`editor-tab ${active === t ? 'active' : ''} ${editable.includes(t) ? '' : 'locked'}`} onClick={() => setActive(t)}>
                {tabLabel(t)} {!editable.includes(t) && <span title="Solo lectura">🔒</span>}
              </button>
            ))}
            <button
              className="editor-reset"
              title="Volver al código inicial"
              disabled={revealed}
              onClick={() => {
                if (window.confirm('¿Volver al código inicial? Perderás tus cambios.')) setFiles({ ...challenge.files });
              }}
            >
              ↺ Reiniciar
            </button>
          </div>
          <CodeEditor
            docKey={`${active}`}
            lang={active === 'js' ? lang : active}
            value={files[active]}
            readOnly={revealed || !editable.includes(active)}
            onChange={(v) => setFiles((f) => ({ ...f, [active]: v }))}
          />
        </div>

        <div className="preview-panel">
          <Preview files={files} lang={lang} showConsole={challenge.console ?? hasScript} height={challenge.previewHeight || 230} />
          {challenge.target && <Preview files={solutionFiles} lang={lang} height={challenge.previewHeight || 230} label="🎯 Objetivo" delay={0} />}
        </div>
      </div>

      <div className="checklist">
        <div className="checklist-head">
          <span>✅ Comprobaciones</span>
          <span className={`checklist-count ${allOk ? 'all' : ''}`}>
            {running ? '⏳ ' : ''}
            {passed}/{total}
          </span>
        </div>
        <div className="checklist-bar">
          <div style={{ width: `${(passed / total) * 100}%` }} />
        </div>
        <ul>
          {challenge.checks.map((c, i) => {
            const r = results[i];
            return (
              <li key={i} className={r == null ? 'pending' : r.ok ? 'ok' : 'bad'}>
                <span className="check-icon">{r == null ? '○' : r.ok ? '✓' : '✗'}</span>
                <span>{rich(c.text)}</span>
              </li>
            );
          })}
        </ul>
      </div>

      {showHint && challenge.hint && <div className="tip">💡 {rich(challenge.hint)}</div>}

      {!revealed && (
        <div className="ch-actions code-actions">
          {challenge.hint && !showHint && (
            <button className="btn btn-ghost" onClick={() => { sfx.click(); setShowHint(true); }} title="Usar la pista reduce el XP de este reto">
              💡 Pista (−30% XP)
            </button>
          )}
          <button className="btn btn-ghost danger" onClick={giveUp}>
            🏳️ Me rindo
          </button>
          <span className="ch-action-hint">{allOk ? '¡Todo en verde! Ya puedes entregar.' : 'Puedes entregar cuando quieras: se puntúa lo que esté en verde.'}</span>
          <button className={`btn btn-primary btn-lg ${allOk ? 'glow' : ''}`} onClick={submit}>
            Entregar ✓
          </button>
        </div>
      )}

      {revealed && challenge.solution && (
        <div className="solution">
          <button className="btn btn-ghost btn-sm" onClick={() => setShowSolution((s) => !s)}>
            {showSolution ? 'Ocultar' : 'Ver'} una solución posible
          </button>
          {showSolution &&
            Object.entries(challenge.solution).map(([k, code]) => (
              <CodeBlock key={k} code={code} lang={k === 'js' ? lang : k} title={tabLabel(k)} />
            ))}
        </div>
      )}
    </Shell>
  );
}
