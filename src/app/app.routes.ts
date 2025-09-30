import { Routes } from '@angular/router';
import { Metronome } from '@bpmedley/shared/components';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'metronome',
    pathMatch: 'full',
  },
  {
    path: 'metronome',
    component: Metronome,
  },
  {
    path: 'setlists',
    loadChildren: () => import('@bpmedley/features/setlist').then((m) => m.setlistRoutes),
  },
  {
    path: 'songs',
    loadChildren: () => import('@bpmedley/features/song').then((m) => m.songRoutes),
  },
];
