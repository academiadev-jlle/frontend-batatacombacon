import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ProfileComponent } from '../profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [],
  declarations: [
    LoginComponent,
    ProfileComponent
  ]
})
export class LoginModule { }
