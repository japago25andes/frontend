import { useEffect, useRef } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from '@codemirror/state';
import { keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const LANGS = {
  html: () => html(),
  css: () => css(),
  js: () => javascript(),
  ts: () => javascript({ typescript: true }),
};

const theme = EditorView.theme({
  '&': { fontSize: '14.5px', height: '100%' },
  '.cm-scroller': { fontFamily: "'JetBrains Mono', 'Cascadia Code', Consolas, monospace", lineHeight: '1.6' },
  '.cm-content': { paddingBottom: '40px' },
});

/** Editor de código (CodeMirror 6). Se recrea si cambia `docKey`. */
export default function CodeEditor({ value, lang = 'html', onChange, readOnly = false, docKey }) {
  const host = useRef(null);
  const view = useRef(null);
  const changeRef = useRef(onChange);
  changeRef.current = onChange;

  useEffect(() => {
    const state = EditorState.create({
      doc: value,
      extensions: [
        basicSetup,
        keymap.of([indentWithTab]),
        (LANGS[lang] || LANGS.html)(),
        oneDark,
        theme,
        EditorView.lineWrapping,
        EditorState.readOnly.of(readOnly),
        EditorView.editable.of(!readOnly),
        EditorView.updateListener.of((u) => {
          if (u.docChanged) changeRef.current?.(u.state.doc.toString());
        }),
      ],
    });
    view.current = new EditorView({ state, parent: host.current });
    return () => view.current.destroy();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [docKey, lang, readOnly]);

  // Reemplazar el contenido cuando cambia desde fuera (por ejemplo, "Reiniciar código").
  useEffect(() => {
    const v = view.current;
    if (v && value !== v.state.doc.toString()) {
      v.dispatch({ changes: { from: 0, to: v.state.doc.length, insert: value } });
    }
  }, [value]);

  return <div className={`code-editor ${readOnly ? 'readonly' : ''}`} ref={host} />;
}
