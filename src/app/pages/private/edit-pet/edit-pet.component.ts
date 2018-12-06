import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PetService } from 'src/app/services/pet.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { Pet, APIPetFactory } from 'src/app/classes/pets/pet';
import { InputImageComponent } from 'src/app/shared/private/input-image/input-image.component';
import { FormPetComponent } from 'src/app/shared/private/form-pet/form-pet.component';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {
  @ViewChild(AlertComponent) alert;
  @ViewChild(InputImageComponent) imageInput;
  @ViewChild(FormPetComponent) formPet;

  receivedForm: FormGroup;
  petForEdit: Pet;

  idPet: number;

  constructor(private petService: PetService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => this.idPet = params['id'])
  }

  ngOnInit () { 

    console.log(this.idPet)

    this.petService.getPet(this.idPet).subscribe(ret => {
      this.petForEdit =  APIPetFactory(ret)
      console.log(this.petForEdit)
    })

  }

  receiveClickEditPet($event) {
    this.receivedForm = $event;
  }

}
