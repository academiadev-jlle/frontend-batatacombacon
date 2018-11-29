import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss']
})
export class EsqueceuSenhaComponent {

  formEmail = this.fb.group({
    email: ['']
  })

  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}

  requestNovaSenha() {
    console.log(this.formEmail.value.email);
  }
}
