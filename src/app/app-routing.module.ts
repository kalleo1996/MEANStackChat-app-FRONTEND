import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import {AuthguardGuard} from './services/authguard.guard';

const routes: Routes = [
  { path: 'home',component: HomeComponent },
  { path: 'register',component: RegisterComponent },
  { path: 'login',component:  LoginComponent },
  { path: 'dashboard',component:DashboardComponent , canActivate:[AuthguardGuard]},
  { path: 'profile',component: ProfileComponent , canActivate:[AuthguardGuard] }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
