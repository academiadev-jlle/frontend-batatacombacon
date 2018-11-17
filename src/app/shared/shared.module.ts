import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './public/navbar/navbar.component';
import { FooterComponent } from './public/footer/footer.component';
import { NavbarLoggedComponent } from './private/navbar-logged/navbar-logged.component';


@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent
  ]
})
export class SharedModule { }
