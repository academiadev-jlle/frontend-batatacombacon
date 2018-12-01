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

  ngOnInit () {
    const idPet = 1;

    this.petService.getPet(idPet).subscribe(pet =>
      this.petForEdit = pet
    );
  }

  receiveClickAddUser($event) {
    this.receivedForm = $event;
  }

  clickEditPet() {
    this.petService.updatePet(this.receivedForm.value)
      .subscribe(
        ret => {
          this.alert.show('success');
          this.router.navigate(['/addpet']);
        },
        error => {
          this.alert.show('danger', error.message);
        });
  }
}
