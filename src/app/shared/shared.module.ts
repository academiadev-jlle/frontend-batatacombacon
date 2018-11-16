import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './public/navbar/navbar.component';
import { FooterComponent } from './public/footer/footer.component';
import { FooterLoggedComponent } from './private/footer-logged/footer-logged.component';
import { NavbarLoggedComponent } from './private/navbar-logged/navbar-logged.component';
import { PetStatusPipe } from './public/pipe/pet-status.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    FooterLoggedComponent,
    NavbarLoggedComponent,
    PetStatusPipe
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    FooterLoggedComponent,
    NavbarLoggedComponent,
    PetStatusPipe
  ]
})
export class SharedModule { }
