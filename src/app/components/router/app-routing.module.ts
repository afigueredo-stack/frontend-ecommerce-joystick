import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../view/backoffice/log-in/log-in.component';
import { HomeComponent } from '../view/backoffice/home/index/home.component';
import { AuthGuard } from '../helpers/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'backoffice/login' },
  { path: 'backoffice/login', component: LogInComponent },
  { path: 'backoffice/home', component: HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
