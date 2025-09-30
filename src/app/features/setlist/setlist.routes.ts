import { Routes } from '@angular/router';
import { SetlistList } from './setlist-list/setlist-list';
import { SetlistNew } from './setlist-new/setlist-new';
import { SetlistDetails } from './setlist-details/setlist-details';
import { SetlistEdit } from './setlist-edit/setlist-edit';

export const setlistRoutes: Routes = [
  {
    path: '',
    component: SetlistList,

    children: [
      {
        path: 'new',
        component: SetlistNew,
      },
      {
        path: ':id',
        component: SetlistDetails,
      },
      {
        path: 'edit/:id',
        component: SetlistEdit,
      },
    ],
  },
];
