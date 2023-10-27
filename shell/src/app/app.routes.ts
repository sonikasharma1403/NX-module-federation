import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

export const appRoutes: Route[] = [
  {
    path: 'remote-ipsum',
    loadChildren: () =>
      loadRemoteModule('remote-ipsum', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'remote-lorem',
    loadChildren: () =>
      loadRemoteModule('remote-lorem', './Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
