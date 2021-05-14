import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'last-workout',
    loadChildren: () => import('./last-workout/last-workout.module').then( m => m.LastWorkoutPageModule)
  },
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'facebook-login',
    loadChildren: () => import('./facebook-login/facebook-login.module').then( m => m.FacebookLoginPageModule)
  },
  {
    path: 'cal-details',
    loadChildren: () => import('./cal-details/cal-details.module').then( m => m.CalDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
