import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { PetService } from 'src/app/services/pet.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { Pet, APIPetFactory } from 'src/app/classes/pets/pet';
import { InputImageComponent } from 'src/app/shared/private/input-image/input-image.component';
import { FormPetComponent } from 'src/app/shared/private/form-pet/form-pet.component';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-edit-pet',
  templateUrl: './edit-pet.component.html',
  styleUrls: ['./edit-pet.component.scss']
})
export class EditPetComponent implements OnInit {
  @ViewChild(AlertComponent) alert;
  @ViewChild(InputImageComponent) imageInput;
  @ViewChild(FormPetComponent) formPet;

  receivedForm: FormGroup;
  pet: Pet;

  idPet: number;

  constructor(private petService: PetService,
      private imageService: ImageService,
      private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.params.subscribe(params => this.idPet = params['id'])
  }

  ngOnInit () { 
    this.petService.getPet(this.idPet).subscribe(ret => {
      this.pet = APIPetFactory(ret)
    });
  }

  receiveFormPet($event) {
    this.receivedForm = $event;

    this.petService.updatePet(this.receivedForm.value, this.idPet).subscribe(
      retPet => {
        if(!!this.imageInput.croppedImage==true){ // se tiver imagem, quer dizer que se quer atualizar
          this.imageService.addPetImage(this.imageInput.croppedImage, retPet.id).subscribe(
            retImage => {},
            errorImage => {
              this.alert.show('danger', 'Problema ao enviar a imagem, mas o pet foi editado :D.');
              console.log(errorImage)
            }
          )
        }
        this.alert.show('success', 'Pet editado com sucesso.');
      },
      errorPet => {
        this.alert.show('danger', 'Não foi possível editar o pet.');
        console.log(errorPet)
      }
    )
  }



}
