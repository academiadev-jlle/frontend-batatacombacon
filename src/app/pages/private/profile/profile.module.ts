import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ProfileComponent } from './profile.component';
import { PetsListComponent } from './pets-list/pets-list.component';

import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPetComponent } from './add-pet/add-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgbAccordionModule
  ],
  declarations: [
    ProfileComponent,
    PetsListComponent,
    AddPetComponent,
    EditPetComponent
  ]
})
export class ProfileModule { }
