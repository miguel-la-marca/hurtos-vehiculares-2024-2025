import { Routes } from '@angular/router';

import { SECTIONS } from './features/section/sections.data';

/**
 * Cada seccion declarada en SECTIONS genera su ruta automaticamente.
 * La vista se completa en la sesion de trabajo correspondiente.
 */
const sectionRoutes: Routes = SECTIONS.map((section) => ({
  path: section.slug,
  loadComponent: () =>
    import('./features/section/section.component').then((m) => m.SectionComponent),
  data: { titulo: section.titulo },
}));

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  ...sectionRoutes,
  { path: '**', redirectTo: '' },
];
