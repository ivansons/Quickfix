import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./pages/book/book.module').then( m => m.BookPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'form',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
