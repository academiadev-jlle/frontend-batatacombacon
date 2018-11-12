import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterListItemComponent } from './filter-list-item/filter-list-item.component';
import { PetsListItemComponent } from './pets-list-item/pets-list-item.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { DiscoverComponent } from './discover.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [
    FilterListItemComponent,
    PetsListItemComponent,
    PetsDetailComponent,
    DiscoverComponent
  ]
})
export class DiscoverModule { }
