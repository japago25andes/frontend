import { useState } from 'react';
import { Speech } from './Mascot.jsx';
import { LEVELS, WORLDS } from '../data/levels.js';
import { BADGES } from '../data/game.js';
import { sfx } from '../lib/sound.js';

export default function Welcome({ savedName, onStart, onContinue }) {
  const [name, setName] = useState('');

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    sfx.win();
    onStart(name.trim());
  }

  return (
    <div className="welcome">
      <div className="welcome-hero">
        <div className="logo-badge">
          <span>&lt;/&gt;</span>
        </div>
        <p className="eyebrow">Frontend Quest · Programación Web</p>
        <h1 className="title-xl">
          Misión: <span className="gradient-text">Frontend</span>
        </h1>
        <p className="lead">
          De tu primera etiqueta HTML a una aplicación con Angular. Escribe código de verdad, míralo funcionar al instante y construye la web de
          Café Pixel paso a paso.
        </p>
        <div className="tech-row">
          {WORLDS.filter((w) => w.id !== 'final').map((w) => (
            <span key={w.id} className="tech" style={{ '--level-color': w.color }}>
              {w.icon} {w.short}
            </span>
          ))}
        </div>
      </div>

      <div className="welcome-card">
        <Speech mood="happy" size={120} title="Moka · Mentora en Café Pixel">
          ¡Hola! Soy **Moka**, la taza programadora de **Café Pixel**. Nuestra cafetería necesita una web y tú vas a construirla: primero la
          estructura con **HTML**, luego el diseño con **CSS**, la interactividad con **JavaScript** y, al final, una app con **TypeScript** y
          **Angular**. ¿Preparado/a para tu primer café… y tu primer código?
        </Speech>

        {savedName ? (
          <div className="welcome-actions">
            <button className="btn btn-primary btn-lg glow" onClick={onContinue}>
              Continuar como {savedName} →
            </button>
          </div>
        ) : (
          <form className="welcome-form" onSubmit={submit}>
            <label htmlFor="player-name">¿Cómo te llamas? (aparecerá en tu credencial y tu diploma)</label>
            <div className="input-row">
              <input id="player-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre y apellido" maxLength={40} autoFocus autoComplete="off" />
              <button className="btn btn-primary btn-lg glow" disabled={!name.trim()}>
                ¡Empezar a programar! ☕
              </button>
            </div>
          </form>
        )}

        <div className="feature-row">
          <div>🗺️<span>{WORLDS.length - 1} mundos · {LEVELS.length} niveles</span></div>
          <div>⌨️<span>Editor de código en vivo</span></div>
          <div>🪪<span>Credencial de dev</span></div>
          <div>🎓<span>Diploma final · {BADGES.length} insignias</span></div>
        </div>
      </div>
    </div>
  );
}
