import { Component } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private modalService: NgbModal) {}

  openEsqueceuSenha() {
    this.modalService.open(EsqueceuSenhaComponent);
  }

}
