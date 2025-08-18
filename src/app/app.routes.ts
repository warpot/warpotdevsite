import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  { 
    path: 'about', 
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  { 
    path: 'portfolio', 
    loadComponent: () => import('./components/portfolio/portfolio.component').then(m => m.PortfolioComponent)
  },
  { 
    path: 'services', 
    loadComponent: () => import('./components/services/services.component').then(m => m.ServicesComponent)
  },
  { 
    path: 'contact', 
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  { path: '**', redirectTo: '/home' }
];
