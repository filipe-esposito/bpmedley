import { Routes } from '@angular/router';
import { SongList } from './song-list/song-list';
import { SongForm } from './song-form/song-form';

export const songRoutes: Routes = [
  {
    path: '',
    component: SongList,

    children: [
      {
        path: 'new',
        component: SongForm,
      },
      {
        path: 'edit/:id',
        component: SongForm,
      },
    ],
  },
];
