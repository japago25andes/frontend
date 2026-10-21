import { HTML } from './worlds/html.js';
import { CSS } from './worlds/css.js';
import { JS } from './worlds/js.js';
import { TS } from './worlds/ts.js';
import { ANGULAR } from './worlds/angular.js';
import { FINAL } from './worlds/final.js';

/*
  Cada mundo: { id, short, name, icon, color, description, levels: [...] }
  Cada nivel: { id, icon, title, subtitle, project?, boss?, lesson: [...], challenges: [...] }
*/
export const WORLDS = [HTML, CSS, JS, TS, ANGULAR, FINAL];

export const LEVELS = WORLDS.flatMap((w) => w.levels.map((l) => ({ ...l, world: w.id })));

export const worldOf = (level) => WORLDS.find((w) => w.id === level.world);
