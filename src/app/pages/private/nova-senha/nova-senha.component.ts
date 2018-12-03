import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nova-senha',
  templateUrl: './nova-senha.component.html',
  styleUrls: ['./nova-senha.component.scss']
})
export class NovaSenhaComponent implements OnInit {

  novaSenhaForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.novaSenhaForm = this.formBuilder.group({
      acessToken: [1],
      id: [2],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmSenha: ['', Validators.required]
    });
  }

  get f() { return this.novaSenhaForm.controls; }

  clickConfirma() {
    // if (this.novaSenhaForm.valid) {
      
    // }
    console.log(this.novaSenhaForm.valid);
    console.log(this.novaSenhaForm.value);
  }

}
