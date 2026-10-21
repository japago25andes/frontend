import { LEVELS, WORLDS } from './levels.js';

export const MAX_HEARTS = 3;
export const STAR_BONUS = 50;
export const STREAK_STEP = 10;
export const STREAK_CAP = 5;

// Rangos: la carrera de un/a dev frontend.
export const RANKS = [
  { min: 0, name: 'Aprendiz web', icon: '🥚' },
  { min: 3000, name: 'Maquetador/a', icon: '🧱' },
  { min: 8000, name: 'Diseñador/a web', icon: '🎨' },
  { min: 14000, name: 'Dev JavaScript', icon: '⚡' },
  { min: 20000, name: 'Dev TypeScript', icon: '🔷' },
  { min: 26000, name: 'Dev Angular', icon: '🅰️' },
  { min: 32000, name: 'Leyenda Frontend', icon: '👑' },
];

export function rankFor(xp) {
  let i = 0;
  while (i + 1 < RANKS.length && xp >= RANKS[i + 1].min) i++;
  const current = RANKS[i];
  const next = RANKS[i + 1] || null;
  const progress = next ? (xp - current.min) / (next.min - current.min) : 1;
  return { current, next, progress };
}

export const totalXp = (p) => Object.values(p.levels).reduce((s, l) => s + (l.bestXp || 0), 0);
export const totalStars = (p) => Object.values(p.levels).reduce((s, l) => s + (l.stars || 0), 0);
export const completedCount = (p) => Object.values(p.levels).filter((l) => l.completed).length;
export const MAX_STARS = LEVELS.length * 3;

export function worldCompleted(p, worldId) {
  const w = WORLDS.find((x) => x.id === worldId);
  return !!w && w.levels.every((l) => p.levels[l.id]?.completed);
}

export function worldProgress(p, world) {
  const done = world.levels.filter((l) => p.levels[l.id]?.completed).length;
  const stars = world.levels.reduce((s, l) => s + (p.levels[l.id]?.stars || 0), 0);
  return { done, total: world.levels.length, stars, maxStars: world.levels.length * 3 };
}

const worldBadge = (id, icon, name) => ({
  id: `mundo-${id}`,
  icon,
  name,
  desc: `Completa todos los niveles del mundo ${name.replace('Maestro/a ', '')}.`,
  test: (p) => worldCompleted(p, id),
});

export const BADGES = [
  { id: 'primer-paso', icon: '🚀', name: 'Primer paso', desc: 'Completa tu primer nivel.', test: (p) => completedCount(p) >= 1 },
  { id: 'hola-mundo', icon: '👋', name: 'Hola, mundo', desc: 'Supera tu primer reto de programación.', test: (p) => (p.codeWins || 0) >= 1 },
  { id: 'programador', icon: '⌨️', name: 'Manos al teclado', desc: 'Supera 25 retos de programación.', test: (p) => (p.codeWins || 0) >= 25 },
  { id: 'hacker', icon: '💻', name: 'Picacódigo', desc: 'Supera 60 retos de programación.', test: (p) => (p.codeWins || 0) >= 60 },
  { id: 'en-racha', icon: '🔥', name: 'En racha', desc: 'Consigue 5 aciertos seguidos.', test: (p) => p.bestStreak >= 5 },
  { id: 'imparable', icon: '⚡', name: 'Imparable', desc: 'Consigue 15 aciertos seguidos.', test: (p) => p.bestStreak >= 15 },
  { id: 'en-llamas', icon: '☄️', name: 'En llamas', desc: 'Consigue 30 aciertos seguidos.', test: (p) => p.bestStreak >= 30 },
  { id: 'perfeccionista', icon: '💎', name: 'Perfeccionista', desc: 'Consigue 3 estrellas en un nivel.', test: (p) => Object.values(p.levels).some((l) => l.stars === 3) },
  worldBadge('html', '🧱', 'Maestro/a HTML'),
  worldBadge('css', '🎨', 'Maestro/a CSS'),
  worldBadge('js', '⚡', 'Maestro/a JavaScript'),
  worldBadge('ts', '🔷', 'Maestro/a TypeScript'),
  worldBadge('angular', '🅰️', 'Maestro/a Angular'),
  { id: 'cazajefes', icon: '👾', name: 'Cazador/a de jefes', desc: 'Derrota al jefe final.', test: (p) => worldCompleted(p, 'final') },
  { id: 'coleccionista', icon: '🌟', name: 'Coleccionista', desc: `Consigue las ${MAX_STARS} estrellas.`, test: (p) => totalStars(p) >= MAX_STARS },
  { id: 'leyenda', icon: '👑', name: 'Leyenda Frontend', desc: 'Alcanza el rango máximo.', test: (p) => totalXp(p) >= RANKS[RANKS.length - 1].min },
];

export const earnedBadges = (p) => BADGES.filter((b) => b.test(p)).map((b) => b.id);

export const isUnlocked = (p, index) => index === 0 || !!p.levels[LEVELS[index - 1].id]?.completed;
