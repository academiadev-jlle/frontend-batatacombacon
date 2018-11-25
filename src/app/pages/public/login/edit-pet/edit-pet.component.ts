import { Component, HostListener, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PetService } from 'src/app/services/pet.service';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {

  imageSrc: string | ArrayBuffer;
  background = document.getElementsByClassName('preview-image-container');
  showBtn: Boolean = true;

  @ViewChild('imagePreview') imagePreview;

  constructor(private fb: FormBuilder,
    private petService: PetService,
    private renderer: Renderer2 ) { }

  ngOnInit () {
    // this.usuario = this.userService.getUser(1);
  }

  petForm = this.fb.group({
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
    usuario: this.fb.group({
      email: [''],
      id: [''],
      nome: [''],
      senha: ['']
    }),
  });

  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;

      this.hideBtn();
      reader.readAsDataURL(file);
    }
  }

  hideBtn() {
    this.showBtn = !this.showBtn;
  }

  unPreviewFile() {
    this.imageSrc = '';
    this.hideBtn();
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
      this.imageSrc = reader.result;
    };
    this.hideBtn();
    reader.readAsDataURL(file);
  }

  ClickEditPet() {
    this.petService.updatePet(this.petForm.value)
    .subscribe();
  }
}
