import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/app/main/main.component';

const routes: Routes = [
  {path: '', loadChildren: () => import('./components/entry-page/entry-page.module').then(m => m.EntryPageModule)},
  {path: 'login', 
  loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule
    )},
  {path: 'register', loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule)},
  {path: 'home', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }