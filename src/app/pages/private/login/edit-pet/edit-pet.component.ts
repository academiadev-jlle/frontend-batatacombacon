import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/classes/pets/pet';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent {

  pet : Pet = new Pet;

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
    this.petService.updatePet(this.petForm.value)
    .subscribe();
  }

}
