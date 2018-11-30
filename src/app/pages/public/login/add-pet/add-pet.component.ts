import { Component, HostListener, Renderer2, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { PetService } from 'src/app/services/pet.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';




@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {

  imageSrc: string | ArrayBuffer;
  background = document.getElementsByClassName('preview-image-container');
  showBtn: Boolean = true;

  @ViewChild('imagePreview') imagePreview;
  @ViewChild(AlertComponent) alert;

  receivedForm: FormGroup;
  pet: FormGroup;

  constructor(private petService: PetService,
    private renderer: Renderer2, private router: Router ) { }

  ngOnInit () {
    // this.usuario = this.userService.getUser(1);
  }


  receiveClickAddUser($event) {
    this.receivedForm = $event;
  }

  clickAddPet() {
    console.log(this.receivedForm.value);
    // this.petService.addPet(this.receivedForm.value)
    //   .subscribe(
    //     ret => {
    //       this.alert.show('success')
    //       this.router.navigate(['/addpet']);
    //     },
    //     error => {
    //       this.alert.show('danger', error.message);
    //     });
  }
  // readURL(event): void {
  //   if (event.target.files && event.target.files[0]) {
  //     const file = event.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = e => this.imageSrc = reader.result;

  //     this.hideBtn();
  //     reader.readAsDataURL(file);
  //   }
  // }

  // hideBtn() {
  //   this.showBtn = !this.showBtn;
  // }

  // unPreviewFile() {
  //   this.imageSrc = '';
  //   this.hideBtn();
  // }



  // onDragOver(event: Event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.renderer.setStyle(this.background[0], 'background-color', '#999');
  // }

  // onDragLeave(event: Event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.renderer.setStyle(this.background[0], 'background-color', '#FFF');
  // }

  // onDrop(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   this.renderer.setStyle(this.background[0], 'background-color', '#FFF');
  //   let file = event.dataTransfer.files[0];
  //   let reader = new FileReader();
  //   reader.onload =  (event) => {
  //     this.imageSrc = reader.result;
  //   };
  //   this.hideBtn();
  //   reader.readAsDataURL(file);
  // }

  // ClickAddPet() {
  //   this.petService.addPet(this.petForm.value)
  //   .subscribe();
  // }
}
