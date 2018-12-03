import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ConfirmPasswordValidator } from 'src/app/shared/form-user/confirm-password.validator';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.scss']
})
export class NovaSenhaComponent implements OnInit {

  novaSenhaForm: FormGroup;
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
      acessToken: [this.token],
      id: [this.id],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmSenha: ['', Validators.required]
    },{
      validator: ConfirmPasswordValidator.MatchPassword
    });
  }

  get f() { return this.novaSenhaForm.controls; }

  clickConfirma($event) {
    this.submitted = true;
    // if (this.novaSenhaForm.valid) {
      // this.userService.
      // this.router.navigate(['/login']);
    // }
    console.log(this.novaSenhaForm.controls);
    console.log(this.novaSenhaForm.valid);
    console.log(this.novaSenhaForm.value);
  }

}
