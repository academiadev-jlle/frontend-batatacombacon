import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuario, APIUsuarioFactory } from 'src/app/classes/usuario/usuario';
import { Pet } from 'src/app/classes/pets/pet';
import { FormGroup } from '@angular/forms';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @ViewChild(AlertComponent) alert;
  
  usuario: Usuario;
  receivedForm: FormGroup;
  pets: Pet[]=[];

  constructor(private userService: UserService) { }

  ngOnInit() {

    // desenvolvimento apenas. Provavelmente o usuario 
    // estará registrado em algum lugar e bastara chamar ele.
    const idUser = 1;
    
    this.userService.getUser(idUser).subscribe(user => {
      this.usuario = APIUsuarioFactory(user)
      
      //setando id para que eu saiba quem eu vou editar
      this.usuario.id = idUser;
    });

    // loading pets of user
    this.userService.getPetsUser(idUser).subscribe(pets => {
      console.log(pets);
      return this.pets = pets;
    })

  }
  
  receiveClickEditUser($event) {
    this.receivedForm = $event

    // 1) Aqui tem a conversao de form para usuario. è necessario o id e o form nao tem id.
    const sendUser = APIUsuarioFactory(this.usuario)
      sendUser.nome = this.getFormValues('nome');
      sendUser.email = this.getFormValues('email');
      sendUser.senha = this.getFormValues('senha');

    // 2) no subscribe vai o retorno da request. Mesmo ainda retornando undefined, o user é adicionado
    this.userService.updateUser(sendUser)
      .subscribe(ret => {
        this.alert.show('success')
        console.log(ret);
        },
        error => {
          this.alert.show('danger')
        });
  }

  getFormValues(att){
    return this.receivedForm.controls[att].value
  }

}
