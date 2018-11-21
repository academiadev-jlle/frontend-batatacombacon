import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {

  constructor(private fb: FormBuilder, private petService: PetService) { }

  petForm = this.fb.group({
    name: [''],
    especie: [''],
    porte: [''],
    categoria: [''],
    sexo: [''],
    estado: [''],
    data: [''],
    localizacao: [''],
    descricao: [''],
  });

  editPet() {
    this.petService.addPet(this.petForm.value)
    .subscribe();
  }

}
