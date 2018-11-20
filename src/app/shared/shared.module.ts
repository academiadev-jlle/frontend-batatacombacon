import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './public/navbar/navbar.component';
import { FooterComponent } from './public/footer/footer.component';
import { NavbarLoggedComponent } from './private/navbar-logged/navbar-logged.component';
import { PetStatusPipe } from './public/pipe/pet-status.pipe';
import { PetFormsComponent } from './private/pet-forms/pet-forms.component';
import { DragNDropImageComponent } from './private/drag-n-drop-image/drag-n-drop-image.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent,
    PetStatusPipe,
    PetFormsComponent,
    DragNDropImageComponent
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarLoggedComponent,
    PetStatusPipe,
    PetFormsComponent,
    DragNDropImageComponent
  ]
})
export class SharedModule { }
