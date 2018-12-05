import { Component, OnInit, OnChanges, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Pet } from 'src/app/classes/pets/pet';
import { FilterService } from 'src/app/services/filter.service';
import { Especie } from 'src/app/classes/especie/especies';
import { Objetivo } from 'src/app/classes/objetivo/objetivo';
import { Porte } from 'src/app/classes/porte/porte';
import { Sexo } from 'src/app/classes/sexo/sexo';
import { CepService } from 'src/app/services/cep.service';
import { Cep } from 'src/app/classes/cep/cep';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.scss']
})
export class FormPetComponent implements OnInit, OnChanges {

  @Input() petProfile: Pet;
  @Input() buttonText: string;
  @Output() messageEvent = new EventEmitter<FormGroup>();
  
  cepSubject: Subject<string> = new Subject();
  wsCep: Cep;
  loadingCep: boolean=false;

  petForm: FormGroup;
  submitted = false;

  especies: Especie[]=[];
  objetivos: Objetivo[]=[];
  portes: Porte[]=[];
  sexos: Sexo[]=[];

  constructor(
    private formBuilder: FormBuilder, 
    private filterService: FilterService,
    private cepService: CepService) { }

  get f() {
    return this.petForm.controls;
  }

  ngOnInit() {
    this.fillOptions();

    this.petForm = this.formBuilder.group({
      // nome: ['', Validators.required],
      // especie: ['', Validators.required],
      // porte: ['', Validators.required],
      // sexo: ['', Validators.required],
      // objetivo: ['', Validators.required],
      // // dataPet: [''],
      // // dataCriacao: [''],
      // localPet: ['', Validators.required],
      // descricao: [''],
      // fotos: [],
      // idUsuario: [1]

      nome: [''],
      especie: [''],
      porte: [''],
      sexo: [''],
      objetivo: [''],
      // dataPet: [''],
      // dataCriacao: [''],
      localPet: [''],
      descricao: [''],
      fotos: [],
      idUsuario: [1],

      cepNum: [''],
      cepRua: ['']
    });

    this.cepSubject
            .pipe(debounceTime(1000))
            .subscribe(cep => {
              this.getCep(cep)
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
    console.log('send form', this.petForm)
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

  fillOptions(){
    this.filterService.getEspecies().subscribe( ret => this.especies = ret, error => console.log(error))
    this.filterService.getObjetivos().subscribe( ret => this.objetivos = ret, error => console.log(error))
    this.filterService.getPortes().subscribe( ret => this.portes = ret, error => console.log(error))
    this.filterService.getSexos().subscribe( ret => this.sexos = ret, error => console.log(error))
  }

  getCep(cep: string){
    this.loadingCep=true;
    this.cepService.getCep(cep)
    .subscribe(
      ret => {

        this.petForm.patchValue({
          cepRua: ret.logradouro
        });

        this.loadingCep=false;
      }, 
      error => {
        this.loadingCep=false;
    })
  }

  keyUp(event) {
    this.loadingCep=true;
    this.cepSubject.next(event.target.value);
  }

}
