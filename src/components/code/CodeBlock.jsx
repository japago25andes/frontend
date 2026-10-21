import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

const GRAMMAR = { html: 'markup', angular: 'markup', css: 'css', js: 'javascript', ts: 'typescript', bash: null, text: null };

/** Bloque de código de solo lectura con resaltado de sintaxis. */
export default function CodeBlock({ code, lang = 'html', title, className = '' }) {
  const g = GRAMMAR[lang] ?? 'markup';
  const htmlCode = g && Prism.languages[g] ? Prism.highlight(code, Prism.languages[g], g) : escape(code);
  return (
    <div className={`code-block ${className}`}>
      {title && <div className="code-block-title">{title}</div>}
      <pre>
        <code dangerouslySetInnerHTML={{ __html: htmlCode }} />
      </pre>
    </div>
  );
}

export function highlight(code, lang = 'html') {
  const g = GRAMMAR[lang] ?? 'markup';
  return g && Prism.languages[g] ? Prism.highlight(code, Prism.languages[g], g) : escape(code);
}

function escape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
