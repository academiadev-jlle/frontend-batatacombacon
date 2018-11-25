import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './public/navbar/navbar.component';
import { FooterComponent } from './public/footer/footer.component';
import { NavbarLoggedComponent } from './private/navbar-logged/navbar-logged.component';
import { PetStatusPipe } from './public/pipe/pet-status.pipe';
import { FormUserComponent } from './form-user/form-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './public/loader/loader.component';
import { AlertComponent } from './alert/alert.component';
import { FormPetComponent } from './private/form-pet/form-pet.component';
import { DragNDropComponent } from './private/drag-n-drop/drag-n-drop.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent,
    PetStatusPipe,
    NavbarLoggedComponent,
    FormUserComponent,
    LoaderComponent,
    AlertComponent
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent,
    PetStatusPipe,
    FormUserComponent,
    LoaderComponent,
    AlertComponent,
    FormPetComponent,
    DragNDropComponent
  ]

})
export class SharedModule { }
