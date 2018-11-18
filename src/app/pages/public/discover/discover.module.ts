import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { FilterListItemComponent } from './filter-list-item/filter-list-item.component';
import { PetsListItemComponent } from './pets-list-item/pets-list-item.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { DiscoverComponent } from './discover.component';
import { PetJsonComponent } from './pets-detail/pets-detail-content/pet-json/pet-json.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    DiscoverRoutingModule,
    FormsModule,
    SharedModule,
    NgbTypeaheadModule,
  ],
  exports: [],
  declarations: [
    FilterListItemComponent,
    PetsListItemComponent,
    PetsDetailComponent,
    DiscoverComponent,
    PetJsonComponent
  ]
})
export class DiscoverModule { }
