import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './public/navbar/navbar.component';
import { FooterComponent } from './public/footer/footer.component';
import { NavbarLoggedComponent } from './private/navbar-logged/navbar-logged.component';
import { PetStatusPipe } from './public/pipe/pet-status.pipe';


@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent,
    PetStatusPipe,
    NavbarLoggedComponent
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent,
    PetStatusPipe
  ]

})
export class SharedModule { }
