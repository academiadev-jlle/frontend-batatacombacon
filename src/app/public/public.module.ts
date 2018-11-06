import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { ContatoFormsComponent } from './contato-forms/contato-forms.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselComponent,
    HomeContentComponent,
    ContatoFormsComponent
  ],
  exports: [
    CarouselComponent,
    HomeContentComponent,
    ContatoFormsComponent
  ]
})
export class PublicModule { }
