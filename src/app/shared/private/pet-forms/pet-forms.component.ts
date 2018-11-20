import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pet-forms',
  templateUrl: './pet-forms.component.html',
  styleUrls: ['./pet-forms.component.scss']
})
export class PetFormsComponent implements OnInit {

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

  ngOnInit() {
  }

}
