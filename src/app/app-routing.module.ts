import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/backoffice/log-in/log-in.component';
import { HomeComponent } from './components/backoffice/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'backoffice/login' },
  { path: 'backoffice/login', component: LogInComponent },
  { path: 'backoffice/home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
