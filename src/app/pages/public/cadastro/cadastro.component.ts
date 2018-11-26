import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormGroup } from '@angular/forms';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  @ViewChild(AlertComponent) alert;

  receivedForm: FormGroup;

  constructor(private userService: UserService) { }
  
  ngOnInit() {
  }
  
  receiveClickAddUser($event) {
    this.receivedForm = $event

    // 1) Enviando direto os campos do form. Sem conversao para usuario     
    // 2) no subscribe vai o retorno da request. Mesmo ainda retornando undefined, o user é adicionado
    this.userService.addUser(this.receivedForm.value)
      .subscribe(
        ret => {
        this.alert.show('success')
        console.log(ret);
        },
        error => {
          this.alert.show('danger')
        });
  }



}
