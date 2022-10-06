import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/user-page/main/main.component';
import { IsAuthGuard } from './components/auth/guards/isAtuh.guard';
import { LoginGuard } from './components/auth/guards/login.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/entry-page/entry-page.module').then(m => m.EntryPageModule), canActivate: [IsAuthGuard]},
  {path: 'login', 
  loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule
    ), canActivate: [IsAuthGuard]},
  {path: 'register', loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule), canActivate: [IsAuthGuard]},
  {path: 'home',loadChildren: () => import('./components/user-page/main/main.module').then(m => m.MainPageModule), canActivate: [LoginGuard]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }