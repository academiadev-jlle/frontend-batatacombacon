<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
=======
import { Component} from '@angular/core';
>>>>>>> 91571b1261c5dc275043ec49704c6526923f304f

@Component({
  selector: 'app-pet-forms',
  templateUrl: './pet-forms.component.html',
  styleUrls: ['./pet-forms.component.scss']
})
export class PetFormsComponent {

  constructor(private fb: FormBuilder) { }

  petForm = this.fb.group({
    nome: [''],
    especie: [''],
    Porte: [''],
    Categoria: [''],
    Sexo: [''],
    Estado: [''],
    Data: [''],
    Localização: [''],
    Descrição: [''],
  })


}
