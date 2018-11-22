import { Component, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {

  imageSrc: string;
  background = document.getElementsByClassName('preview-image-container');

  constructor(private fb: FormBuilder, private petService: PetService) { }

  readURL(event: Event): void {
    if ((<HTMLInputElement>event.target).files && (<HTMLInputElement>event.target).files[0]) {
        const file = (<HTMLInputElement>event.target).files[0];

        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;

        reader.readAsDataURL(file);
    }
  };

  mouse() {
    console.log(this.background);
    // this.background.style.background-color = '#999';
  }

  // @HostListener('dragover', ['$event']) public onDragOver(evt){
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   this.background.style.background-color = '#999';
  // }
  // @HostListener('dragleave', ['$event']) public onDragLeave(evt){
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   this.background = '#eee'
  // }
  // @HostListener('drop', ['$event']) public onDrop(evt){
  //   evt.preventDefault();
  //   evt.stopPropagation();
  //   let files = evt.dataTransfer.files;
  //   if(files.length > 0){
  //     this.background = '#eee'
  //   }
  // }

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
