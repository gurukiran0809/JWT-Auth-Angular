import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './gurads/auth.guard';

const routes: Routes = [
  {
    component:LoginComponent,
    path:""
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
