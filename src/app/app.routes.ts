import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  
  {
    path: 'basic-info-page',
    loadComponent: () => import('./basic-info-page/basic-info-page.page').then( m => m.BasicInfoPagePage)
  },
  {
    path: "**",
    redirectTo: 'login'
  }
];
