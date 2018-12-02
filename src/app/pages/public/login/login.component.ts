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
    this.modalService.open(EsqueceuSenhaComponent, { centered: true });
    // this.modalService.open(EsqueceuSenhaComponent, { centered: true }).componentInstance.messageEvent
    // .subscribe((e) => {
    //   this.showAlert = e.get(0);
    //   this.errorMessage = e.get(1);
    //   this.messageAlert = e.get(2);
    // });
    // console.log(this.errorMessage);
    // if (this.showAlert) {
    //   if (this.errorMessage) {
    //     this.alert.show('success', this.messageAlert);
    //   }
    //   this.alert.show('error', this.messageAlert);
    // }
    // console.log('oi');
  }
}
