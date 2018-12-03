import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private modalService: NgbModal, private authService: AuthService, private router: Router) { }

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
  
  onSubmit(){
    this.authService
      .login("","")
      .subscribe(ret => {
          this.router.navigate(['']);
      },
      error => console.log(error) //trocar pelo alert.
      );
  }
}
