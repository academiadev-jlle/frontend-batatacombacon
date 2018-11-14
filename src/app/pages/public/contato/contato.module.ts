import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoFormsComponent } from './contato-forms/contato-forms.component';
import { ContatoComponent } from './contato.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: [
    ContatoComponent,
    ContatoFormsComponent
  ]
})
export class ContatoModule { }
