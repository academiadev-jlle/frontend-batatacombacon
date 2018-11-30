import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { Usuario } from 'src/app/classes/usuario/usuario';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss']
})
export class EsqueceuSenhaComponent implements OnInit {

  users: any;

  formEmail = this.fb.group({
    email: ['']
  })

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  requestNovaSenha() {
      console.log(this.formEmail.value.email);
    // console.log(this.users);
  }
}
