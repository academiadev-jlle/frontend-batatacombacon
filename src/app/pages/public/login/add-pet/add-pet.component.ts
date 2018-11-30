import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  receivedForm: FormGroup;

  constructor(private petService: PetService) { }

  ngOnInit () {}


  receiveClickAddUser($event) {
    this.receivedForm = $event;
  }

  clickAddPet() {
    this.petService.addPet(this.receivedForm.value)
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
