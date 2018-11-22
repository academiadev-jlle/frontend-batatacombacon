import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {
  
  @Output() messageEvent = new EventEmitter<FormGroup>();
  usuario: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder) { }
    
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
    
    sendMessage() {
      this.messageEvent.emit(this.usuario);
    }
    
    submitClick($event) {
      if (this.usuario.valid) {
        this.sendMessage();
      }
      
    }
  }
  