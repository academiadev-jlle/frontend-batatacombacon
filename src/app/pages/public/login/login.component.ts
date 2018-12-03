import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EsqueceuSenhaComponent } from './esqueceu-senha/esqueceu-senha.component';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(AlertComponent) alert;
  
  loginUser: FormGroup;
  submitted = false;
  
  constructor(private modalService: NgbModal, 
    private authService: AuthService, 
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder) { }
    
  // convenience getter for easy access to form fields
  get f() { return this.loginUser.controls; }
  
  ngOnInit() {
    this.loginUser = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    })
  }
  
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
    
  submitClick($event) {
    // variavel que torna o botao de submit disponivel ou 
    // nao somente ao terminar todo o form
    this.submitted = true; 
    
    if (this.loginUser.valid){
      this.authService
        .loginAuth(this.loginUser.controls['email'].value, this.loginUser.controls['senha'].value)
        .subscribe(
          ret => {
            this.router.navigate(['']);
          },
          error => {
            //this.alert.show('danger', error.message);
            this.alert.show('danger', 'Você não tem autorização para entrar. Cadastre-se ou confirme seu email antes.');
          }
        );
    }
    
    
  }
}
  
  
  