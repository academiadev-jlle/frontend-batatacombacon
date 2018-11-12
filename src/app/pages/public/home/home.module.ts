import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { UiModule } from '../../ui/ui.module';
import { HomeComponent } from './home.component';
import { HomeContentComponent } from './home-content/home-content.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    HomeRoutingModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    HomeContentComponent
  ]
})
export class HomeModule { }
