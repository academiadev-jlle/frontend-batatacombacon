import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent {

  constructor(private fb: FormBuilder, private petService: PetService) {}


  petForm = this.fb.group({
    nome: [''],
    especie: [''],
    porte: [''],
    macho: [''],
    objetivo: [''],
    dataPet: [''],
    dataCriacao: [''],
    localPet: [''],
    descricao: [''],
    imagem: [''],
    usuario: this.fb.group({
      email: [''],
      id: ['1'],
      nome: [''],
      senha: ['']
    }),
  });

  ClickEditPet() {
    console.log(this.petForm.value);
    // this.petService.updatePet(this.petForm.value)
    // .subscribe();
  }
}
