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
    nome: [''],
    especie: [''],
    porte: [''],
    macho: [''],
    objetivo: [''],
    dataPet: [''],
    dataCriacao: ['2018-12-02'],
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

  ClickAddPet() {
    this.petService.addPet(this.petForm.value)
    .subscribe();
  }

}
