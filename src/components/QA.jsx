import { useEffect, useState } from 'react';
import { LEVELS } from '../data/levels.js';
import { runChecks } from '../lib/runner.js';

/*
  Modo de control de calidad (se abre con ?qa en la URL).
  Para cada reto de programación comprueba que:
   1) la solución pasa TODAS las comprobaciones;
   2) el código inicial NO las pasa todas (si no, el reto sería trivial).
  También revisa que los retos de completar huecos y de preguntas estén bien formados.
*/
export default function QA() {
  const [rows, setRows] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const out = [];
      for (const level of LEVELS) {
        for (const [i, ch] of level.challenges.entries()) {
          const where = `${level.id} #${i + 1}`;
          if (ch.type === 'code') {
            const tests = ch.checks.map((c) => c.test);
            const sol = await runChecks({ ...ch.files, ...ch.solution }, tests, { lang: ch.lang });
            const start = await runChecks(ch.files, tests, { lang: ch.lang });
            const failing = sol.map((r, k) => (r.ok ? null : `${ch.checks[k].text}${r.err ? ` (${r.err})` : ''}`)).filter(Boolean);
            const trivial = start.every((r) => r.ok);
            out.push({ where, title: ch.question, ok: failing.length === 0 && !trivial, detail: [...failing.map((f) => `Solución falla: ${f}`), ...(trivial ? ['El código inicial ya pasa todo'] : [])] });
          } else {
            const problems = [];
            if (ch.type === 'quiz' && (ch.answer == null || !ch.options?.[ch.answer])) problems.push('answer fuera de rango');
            if (ch.type === 'fill' && ch.code.split('___').length - 1 !== ch.blanks.length) problems.push('nº de huecos ≠ nº de respuestas');
            if (ch.type === 'pick' && !ch.options.some((o) => o.correct)) problems.push('ninguna opción correcta');
            if (ch.type === 'classify' && ch.items.some((it) => !ch.bins.some((b) => b.id === it.bin))) problems.push('item con bin inexistente');
            if (!ch.explanation && ch.type !== 'code') problems.push('sin explicación');
            out.push({ where, title: ch.question, ok: problems.length === 0, detail: problems });
          }
          if (cancelled) return;
          setRows([...out]);
        }
      }
      setDone(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const bad = rows.filter((r) => !r.ok);
  return (
    <div className="page qa">
      <h1>🧪 Control de calidad de los retos</h1>
      <p id="qa-summary" data-done={done} data-bad={bad.length} data-total={rows.length}>
        {done ? '✅ Terminado' : '⏳ Ejecutando…'} · {rows.length} retos revisados · <b>{bad.length} con problemas</b>
      </p>
      <table className="spec-table">
        <tbody>
          {rows.map((r) => (
            <tr key={r.where} className={r.ok ? 'qa-ok' : 'qa-bad'}>
              <td>{r.ok ? '✅' : '❌'}</td>
              <td>{r.where}</td>
              <td>
                {r.title}
                {r.detail.map((d, k) => (
                  <div key={k} className="qa-detail">{d}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
