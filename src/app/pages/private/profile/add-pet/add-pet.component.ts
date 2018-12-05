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


  receiveClickAddPet($event) {
    //console.log(this.imageInput.croppedImage) // nao eh croppedImage, tem uma function que retorna o Form!
    this.receivedForm = $event;
    console.log('event$', this.receivedForm)

    this.petService.addPet(this.receivedForm.value).subscribe(
      ret => console.log('passou liso!', ret),
      error => console.log('deu pau!', error)
    )
  
  }

}
