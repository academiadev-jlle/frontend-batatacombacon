import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { ConfirmPasswordValidator } from 'src/app/shared/form-user/confirm-password.validator';
import { UserService } from 'src/app/services/user.service';
import { AlertComponent } from 'src/app/shared/alert/alert.component';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.scss']
})
export class NovaSenhaComponent implements OnInit {
  @ViewChild(AlertComponent) alert;

  novaSenhaForm: FormGroup;
  submitSenha: FormGroup;
  submitted = false;
  token: any;
  id: any;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( params => {
      this.id = params.id;
      this.token = params.token;
    });
    this.novaSenhaForm = this.formBuilder.group({
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmSenha: ['', Validators.required]
    },{
      validator: ConfirmPasswordValidator.MatchPassword
    });
    this.submitSenha = this.formBuilder.group({
      token: [this.token],
      id: [this.id],
      senha: ['']});
  }

  get f() { return this.novaSenhaForm.controls; }

  clickConfirma($event) {
    this.submitted = true;
    if (this.novaSenhaForm.valid) {
      this.submitSenha.value.senha = this.novaSenhaForm.value.senha;
      this.userService.resetUserPassword(this.submitSenha.value).subscribe(
        ret => {
          this.router.navigate(['login']);
        },
        error => {
          this.alert.show('danger', error.message);
        }
      );
    }
  }

}
