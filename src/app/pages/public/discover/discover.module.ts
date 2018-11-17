import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiscoverRoutingModule } from './discover-routing.module';

import { FilterListItemComponent } from './filter-list-item/filter-list-item.component';
import { PetsListItemComponent } from './pets-list-item/pets-list-item.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { DiscoverComponent } from './discover.component';
import { PetJsonComponent } from './pets-detail/pets-detail-content/pet-json/pet-json.component';
import { PetNotFoundComponent } from './pets-detail/pets-detail-content/pet-not-found/pet-not-found.component';

import { FormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';


@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    FormsModule,
    TypeaheadModule.forRoot()
  ],
  exports: [],
  declarations: [
    FilterListItemComponent,
    PetsListItemComponent,
    PetsDetailComponent,
    DiscoverComponent,
    PetJsonComponent,
    PetNotFoundComponent
  ]
})
export class DiscoverModule { }
