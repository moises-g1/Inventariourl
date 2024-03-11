import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {
//   redirectUnauthorizedTo,
//   redirectLoggedInTo,
//   canActivate
// } from '@angular/fire/auth-guard'

// const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo (['']);
// const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    // ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'add-product',
    loadChildren: () => import('./pages/add-product/add-product.module').then( m => m.AddProductPageModule),
    // ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'add-user',
    loadChildren: () => import('./pages/add-user/add-user.module').then( m => m.AddUserPageModule),
    // ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    // ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
