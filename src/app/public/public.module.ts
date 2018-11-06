import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CarouselComponent,
    HomeContentComponent
  ],
  exports: [
    CarouselComponent,
    HomeContentComponent
  ]
})
export class PublicModule { }
