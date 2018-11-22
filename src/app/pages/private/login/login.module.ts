import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ProfileComponent } from '../profile/profile.component';
import { AddPetComponent } from './add-pet/add-pet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  exports: [],
  declarations: [
    LoginComponent,
    ProfileComponent,
    AddPetComponent
  ]
})
export class LoginModule { }
