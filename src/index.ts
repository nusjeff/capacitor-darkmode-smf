import { registerPlugin } from '@capacitor/core';
import type { DarkModePlugin } from './definitions';

const DarkMode = registerPlugin<DarkModePlugin>('App', {
  web: () => import('./web').then(m => new m.DarkModeWeb()),
});

export * from './definitions';

export { DarkMode };
