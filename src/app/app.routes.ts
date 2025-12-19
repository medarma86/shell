import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
  //  {
  //   path: '',
  //   pathMatch: 'full',
  //   component: App,  // or loadComponent() if standalone
  // },
      {
        
    path: 'mfe', // host route path
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then(
        (m) => m.App
      ),
  },
{
  path: 'quote',
  loadChildren: () =>
    loadRemoteModule('mfe1', './QuoteRoutes').then(m => m.QUOTE_ROUTES),
}
];
