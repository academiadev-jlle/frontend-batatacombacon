import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
<<<<<<< HEAD:src/app/pages/private/login/login.module.ts
import { ProfileComponent } from '../profile/profile.component';
import { AddPetComponent } from './add-pet/add-pet.component';

=======
>>>>>>> ReleaseBranch:src/app/pages/public/login/login.module.ts

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  exports: [],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
