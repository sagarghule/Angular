import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { RegisterformComponent } from './components/registerForm/registerform.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './services/auth.guard';
import { AddMomentComponent } from './components/add-moment/add-moment.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  {
    path:'Home', 
    canActivate: [AuthGuard],
    component:HomeComponent
  },
  {path:'ResetPassword', component:ResetPasswordComponent},
  {path:'Login', component:LoginComponent},
  {path:'Register', component:RegisterformComponent},
  {path:'Header', component:HeaderComponent},
  {path:'Profile', component:ProfileComponent},
  {path:'AddMoment', component:AddMomentComponent},
  {path:'UpdateMoment/:id', component:AddMomentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
