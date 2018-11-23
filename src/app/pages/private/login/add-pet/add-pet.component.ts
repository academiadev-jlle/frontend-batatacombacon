import { Component, HostListener, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent {

  imageSrc: String;
  background = document.getElementsByClassName('preview-image-container');
  img = document.getElementsByClassName('preview-image-url');

  constructor(private fb: FormBuilder, private petService: PetService, private renderer: Renderer2) { }

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

  @ViewChild('imagePreview') imagePreview;

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload =  (event) => {
        console.log('readfiles event ===== ', event);
        const fileReader = event.target as FileReader;
        let image = new Image();
        image.src = fileReader.result;
        image.insertAdjacentHTML( 'afterbegin' , 'class="preview-image-url" ');
        this.imagePreview.nativeElement.appendChild(image);
      };
      reader.readAsDataURL(file);
      // const reader = new FileReader();
      // reader.onload = e => this.imageSrc = reader.result;

      // reader.readAsDataURL(file);
    }
  }

  onDragOver(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.renderer.setStyle(this.background[0], 'background-color', '#999');
  }

  onDragLeave(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.renderer.setStyle(this.background[0], 'background-color', '#FFF');
  }

  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.renderer.setStyle(this.background[0], 'background-color', '#FFF');
    let file = event.dataTransfer.files[0];
    let reader = new FileReader();
    reader.onload =  (event) => {
      console.log('readfiles event ===== ', event);
      const fileReader = event.target as FileReader;
      let image = new Image();
      image.src = fileReader.result;
    //   this.imageSrc = reader.result;
    //   document.getElementsByClassName("preview-image-url").src = image.src;
      image.insertAdjacentHTML( 'afterbegin' , 'class="preview-image-url" ');
    //   image.setAttribute('class', 'preview-image-url');
      this.imagePreview.nativeElement.appendChild(image);
    };
    reader.readAsDataURL(file);
  }

  ClickAddPet() {
    this.petService.addPet(this.petForm.value)
    .subscribe();
  }
}
