import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AuthenticationGuard } from './helpers/guards/auth/authentication.guard';
import { SigninGuard } from './helpers/guards/auth/signin.guard';

const routes: Routes = [
  {path:'' , component:HomeComponent},
  {path:'signup' , component:SignupComponent},
  {path:'signin' , component:SigninComponent ,canActivate:[SigninGuard]},
  {path:'dashboard' , component:DashboardComponent , canActivate : [AuthenticationGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
