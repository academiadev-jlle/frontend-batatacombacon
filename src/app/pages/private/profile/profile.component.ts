import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UsuarioAPI, Usuario, APIUsuarioFactory } from 'src/app/classes/usuario/usuario';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  constructor(private userService: UserService) { }

  receivedForm: FormGroup;

  ngOnInit() {

    // desenvolvimento apenas. Provavelmente o usuario virá
    // estará registrado em algum lugar e bastara chamar ele.
    const idUser = 1;
    
    this.userService.getUser(idUser).subscribe(user => {
      this.usuario = APIUsuarioFactory(user)
      
      //setando id para que eu saiba quem eu vou editar
      this.usuario.id = idUser;});
  }

  receiveClickEditUser($event) {
    this.receivedForm = $event

    // 1) Aqui tem a conversao de form para usuario. è necessario o id e o form nao tem id.
    const sendUser = APIUsuarioFactory(this.usuario)
      sendUser.nome = this.getFormValues('nome');
      sendUser.email = this.getFormValues('email');
      sendUser.senha = this.getFormValues('senha');

    // 2) no subscribe vai o retorno da request. Mesmo ainda retornando undefined, o user é adicionado
    this.userService.updateUser(sendUser).subscribe(ret => console.log(ret))
  }

  getFormValues(att){
    return this.receivedForm.controls[att].value
  }

}
