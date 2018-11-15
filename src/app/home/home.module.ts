import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    CarouselComponent,
    HomeContentComponent
  ]
})
export class HomeModule { }
