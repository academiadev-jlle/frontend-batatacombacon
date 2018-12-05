import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { PetService } from 'src/app/services/pet.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { InputImageComponent } from 'src/app/shared/private/input-image/input-image.component';
import { AuthService } from 'src/app/services/auth.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent implements OnInit {
  @ViewChild(AlertComponent) alert;
  @ViewChild(InputImageComponent) imageInput;

  receivedForm: FormGroup;
  userId: number;// mudar para number quando o login tiver sendo feito. Any de momento para nao quebrar a aplicação.

  constructor(
    private oauth: AuthService,
    private imageService: ImageService,
    private petService: PetService, 
    private router: Router) { }

  ngOnInit () {
    this.oauth.userLogged.subscribe(ret => ret!==null ? this.userId = ret.id : this.userId=0)
   }

   receiveClickAddPet($event){
      this.imageService.addPetImage(this.imageInput.croppedImage, 1).subscribe(
      ret => console.log('okkkkk'),
      error => console.log(error)
      )
   }

  //  receiveClickAddPet($event) {
  //   this.receivedForm = $event;
  //   //setando idUser aqui para manter o desacoplamento de componentes filhos
  //   this.receivedForm.patchValue({idUsuario: this.userId})

  //   // 1) é preciso criar um pet para depois adicionar a imagem
  //   this.petService.addPet(this.receivedForm.value).subscribe(
  //     retPet => {
  //       console.log('passou liso!', retPet);

  //       this.imageService.addPetImage(this.imageInput.croppedImage, retPet.id).subscribe(
  //         ret => console.log('okkkkk'),
  //         error => console.log('errorrrrr')
  //       )
  //     },
  //     errorPet => console.log('deu pau!', errorPet)
  //   )
    
  // }

}
