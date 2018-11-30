import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {

  receivedForm: FormGroup;

  constructor(private petService: PetService) { }

  ngOnInit () {}


  receiveClickAddUser($event) {
    this.receivedForm = $event;
  }

  clickEditPet() {
    this.petService.updatePet(this.receivedForm.value)
      .subscribe();
        // ret => {
        //   this.alert.show('success');
        //   this.router.navigate(['/addpet']);
        // },
        // error => {
        //   this.alert.show('danger', error.message);
        // });
  }
}
