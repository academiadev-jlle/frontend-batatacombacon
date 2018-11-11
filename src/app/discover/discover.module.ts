import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';
import { DiscoverComponent } from './discover.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { PetsListItemComponent } from './pets-list-item/pets-list-item.component';
import { FilterListItemComponent } from './filter-list-item/filter-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule
  ],
  exports: [],
  declarations: [
    DiscoverComponent,
    PetsDetailComponent,
    PetsListItemComponent,
    FilterListItemComponent
  ]
})
export class DiscoverModule { }
