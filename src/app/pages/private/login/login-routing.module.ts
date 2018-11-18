import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'editpet', component: EditPetComponent},
  // { path: 'profile', component: ProfileComponent},
  // { path: 'profile', component: ProfileComponent},
  // { path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
