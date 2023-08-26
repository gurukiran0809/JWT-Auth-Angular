import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './gurads/auth.guard';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ChangePasswordRequestComponent } from './change-password-request/change-password-request.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  {
    component:LoginComponent,
    path:"login"
  },
  {
    component:HomeComponent,
    path:"home"
  },
  {
    component:ProfileComponent,
    path:'profile',
    canActivate: [AuthGuard],
  },
  {
    component:ContactComponent,
    path:'contact'
  },
  {
    component:LogoutComponent,
    path:'logout',
    canActivate: [AuthGuard],
  },
  {
    component:RegisterComponent,
    path:'register',
  },
  {
    component:ChangePasswordRequestComponent,
    path:'resetpassword',
  },
  {
    component:ChangePasswordComponent,
    path:'change-password',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
