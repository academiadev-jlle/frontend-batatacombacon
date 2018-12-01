import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { PetService } from 'src/app/services/pet.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {
  @ViewChild(AlertComponent) alert;

  receivedForm: FormGroup;

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit () { }


  receiveClickAddUser($event) {
    this.receivedForm = $event;

    this.petService.addPet(this.receivedForm.value)
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
