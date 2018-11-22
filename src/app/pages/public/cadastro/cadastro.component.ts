import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';
import { Usuario } from 'src/app/classes/usuario/usuario';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  
  usuario: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService) { }

  // convenience getter for easy access to form fields
  get f() { return this.usuario.controls; }
  
  ngOnInit() {
    this.usuario = this.formBuilder.group({
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
    if (this.usuario.valid) {
      this.userService.addUser(this.usuario.value).subscribe(user => console.log(user));
    }
  }
  
}
