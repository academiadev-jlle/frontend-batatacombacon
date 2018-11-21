import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent {

  constructor(private fb: FormBuilder ) { }

  petForm = this.fb.group({
    nome: [''],
    especie: [''],
    porte: [''],
    categoria: [''],
    sexo: [''],
    estado: [''],
    data: [''],
    localizacao: [''],
    descricao: [''],
  });

  getNome() {
    console.log(this.petForm.value);
  }

}
