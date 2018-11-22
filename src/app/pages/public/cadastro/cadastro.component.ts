import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/classes/usuario/usuario';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  constructor(private userService: UserService) { }

  receivedForm: FormGroup;
  
  ngOnInit() {
  }
  
  convertFormToUser(){
  // post new user
  this.userService.addUser(this.receivedForm.value).subscribe(user => console.log(user));
  }

  receiveClickAddUser($event) {
    console.log($event)
    this.receivedForm = $event
  }


}
