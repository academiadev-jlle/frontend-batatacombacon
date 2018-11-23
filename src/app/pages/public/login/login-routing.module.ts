import { LoginComponent } from './login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPetComponent } from './edit-pet/edit-pet.component';

// const routes: Routes = [];

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'editpet', component: EditPetComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
