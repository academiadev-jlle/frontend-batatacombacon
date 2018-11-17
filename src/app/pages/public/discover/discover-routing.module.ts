import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverComponent } from './discover.component';
import { PetsDetailComponent } from './pets-detail/pets-detail.component';
import { PetNotFoundComponent } from './pets-detail/pets-detail-content/pet-not-found/pet-not-found.component';

const routes: Routes = [
  { path: '', component: DiscoverComponent},
  { path: 'pet/:id', component: PetsDetailComponent }
  // { path: '**', component: PetNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }
