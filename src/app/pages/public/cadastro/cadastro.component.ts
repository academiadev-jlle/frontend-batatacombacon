import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  user: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  // convenience getter for easy access to form fields
  get f() { return this.user.controls; }
  
  ngOnInit() {
    this.user = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: [''],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmSenha: ['', Validators.required]
    },{
      validator: ConfirmPasswordValidator.MatchPassword
    });
  }
  
  submit() {
    if (this.user.valid) {
      //his.userService.create(this.user.value).subscribe(user => console.log(user));
      // this.userService.get().subscribe(value => console.log(value));
      console.log(this.user.value);
    }
  }
  
}
