import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  exports: [],
  declarations: [
    DiscoverComponent
  ]
})
export class DiscoverModule { }
