import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { AddPetComponent } from './add-pet/add-pet.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'editpet', component: EditPetComponent},
  { path: 'addpet', component: AddPetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
