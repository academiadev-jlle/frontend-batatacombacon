import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { PetService } from 'src/app/services/pet.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { Pet } from 'src/app/classes/pets/pet';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {
  @ViewChild(AlertComponent) alert;

  receivedForm: FormGroup;
  petForEdit: Pet;

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit () { }

  receiveClickEditPet($event) {
    this.receivedForm = $event;
  }

}
