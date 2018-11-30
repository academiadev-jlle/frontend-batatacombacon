import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pet } from 'src/app/classes/pets/pet';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.scss']
})
export class FormPetComponent implements OnInit, OnChanges {

  @Input() petProfile: Pet;
  @Output() messageEvent = new EventEmitter<FormGroup>();

  petForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.petForm = this.formBuilder.group({
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
      idUser: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges) {

    // verificando se usuarioProfile esta na lista de changese e se ele nao for nulo
    // se ele for nulo quer dizer que é um cadastro novo. Não tem que preencher.
    if("petProfile" in changes && this.petProfile!==undefined){
      this.fillPet();
    }
  }

  fillPet(){ //preenche o form quando faz a edição
    this.petForm.patchValue({
      nome: this.petProfile.nome,
      especie: this.petProfile.especie,
      porte: this.petProfile.dataCriacao,
      macho: this.petProfile.macho,
      objetivo: this.petProfile.objetivo,
      dataPet: this.petProfile.dataPet,
      localPet: this.petProfile.localPet,
      descricao: 'oi',
      imagem: this.petProfile.imagem,
    });
  }

  sendMessage() {
    this.messageEvent.emit(this.petForm);
  }

  submitClick($event) {
    // variavel que torna o botao de submit disponivel ou 
    // nao somente ao terminar todo o form
    this.submitted = true;

    if ( this.petForm.valid ) {
      this.sendMessage();
    }
  }
}
