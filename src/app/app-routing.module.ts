import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'create-event',
    // component: CreateEventPage,
    loadChildren: () => import('./features/create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  { path: 'auth', loadChildren: () => import('./features/login/login.module').then( m => m.LoginModule)},
  { path: 'create-event', loadChildren: './features/create-event/create-event.module#CreateEventPageModule' },
  
  
  
];





@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }








