import { rich } from '../../lib/utils.jsx';
import CodeBlock from '../code/CodeBlock.jsx';

const KINDS = {
  quiz: { label: 'Pregunta', icon: '❓' },
  predict: { label: 'Predice el resultado', icon: '🔮' },
  pick: { label: 'Selección múltiple', icon: '☑️' },
  classify: { label: 'Clasifica', icon: '🗂️' },
  order: { label: 'Ordena', icon: '🔢' },
  fill: { label: 'Completa el código', icon: '✏️' },
  code: { label: 'Programa', icon: '⌨️' },
  bug: { label: 'Encuentra el bug', icon: '🐞' },
  match: { label: 'Iguala el diseño', icon: '🎯' },
};

export function kindOf(challenge) {
  return KINDS[challenge.kind || challenge.type] || KINDS.quiz;
}

export default function Shell({ challenge, children, canCheck, revealed, onCheck, actionHint, wide }) {
  const kind = kindOf(challenge);
  return (
    <div className={`challenge type-${challenge.type} ${wide ? 'wide' : ''}`}>
      <div className="ch-kind">
        <span>{kind.icon}</span> {kind.label}
      </div>
      <h2 className="ch-question">{rich(challenge.question)}</h2>
      {challenge.story && <div className="story">☕ {rich(challenge.story)}</div>}
      {challenge.snippet && <CodeBlock code={challenge.snippet.code} lang={challenge.snippet.lang} title={challenge.snippet.title} />}
      {challenge.hint && challenge.type !== 'code' && <p className="ch-hint">{rich(challenge.hint)}</p>}
      {children}
      {onCheck && !revealed && (
        <div className="ch-actions">
          {actionHint && !canCheck && <span className="ch-action-hint">{actionHint}</span>}
          <button className="btn btn-primary btn-lg" disabled={!canCheck} onClick={onCheck}>
            Comprobar
          </button>
        </div>
      )}
    </div>
  );
}
