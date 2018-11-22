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
    LoaderComponent
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent,
    PetStatusPipe,
    FormUserComponent,
    LoaderComponent
  ]

})
export class SharedModule { }
