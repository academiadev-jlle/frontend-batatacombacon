import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './public/navbar/navbar.component';
import { FooterComponent } from './public/footer/footer.component';
import { NavbarLoggedComponent } from './private/navbar-logged/navbar-logged.component';
import { PetStatusPipe } from './public/pipe/pet-status.pipe';
import { LoaderComponent } from './public/loader/loader.component';


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
    NavbarLoggedComponent,
    LoaderComponent
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent,
    PetStatusPipe,
    LoaderComponent
  ]

})
export class SharedModule { }
