
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule
  ],
  exports: [],
  declarations: [
    LoginComponent,
    ProfileComponent,
    EditPetComponent
  ]
})
export class LoginModule { }
