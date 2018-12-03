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
  @Input() buttonText: string;
  @Output() messageEvent = new EventEmitter<FormGroup>();

  petForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  get f() {
    return this.petForm.controls;
  }

  ngOnInit() {
    this.petForm = this.formBuilder.group({
      nome: ['', Validators.required],
      especie: ['', Validators.required],
      porte: ['', Validators.required],
      sexo: ['', Validators.required],
      objetivo: ['', Validators.required],
      // dataPet: [''],
      // dataCriacao: [''],
      localPet: ['', Validators.required],
      // descricao: [''],
      fotos: [],
      idUsuario: [1]
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
      porte: this.petProfile.porte,
      sexo: this.petProfile.sexo,
      objetivo: this.petProfile.objetivo,
      // dataPet: this.petProfile.dataPet,
      localPet: this.petProfile.localPet,
      // descricao: 'oi',
      fotos: this.petProfile.fotos,
    });
  }

  sendMessage() {
    this.messageEvent.emit(this.petForm);
  }

  submitPet($event) {
    // variavel que torna o botao de submit disponivel ou 
    // nao somente ao terminar todo o form
    this.submitted = true;

    if ( this.petForm.valid ) {
      this.sendMessage();
    }
  }
}
