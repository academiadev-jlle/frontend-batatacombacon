import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup } from '@angular/forms';
import { AlertComponent } from 'src/app/shared/alert/alert.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  @ViewChild(AlertComponent) alert;

  receivedForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }
  
  ngOnInit() {
  }
  
  receiveClickAddUser($event) {
    this.receivedForm = $event

    // 1) Enviando direto os campos do form. Sem conversao para usuario     
    // 2) no subscribe vai o retorno da request. Mesmo ainda retornando undefined, o user é adicionado
    this.userService.addUser(this.receivedForm.value)
      .subscribe(
        ret => {
          this.alert.show('success', ret.message)
          this.userService.newUser = {nome: ret.nome, email: ret.email, acabouDeRegistrar: true};
          this.router.navigate(['bem-vindo']);
        },
        error => {
          this.alert.show('danger', error.message)
        });
  }



}
