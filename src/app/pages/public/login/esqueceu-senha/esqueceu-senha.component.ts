import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-esqueceu-senha',
  templateUrl: './esqueceu-senha.component.html',
  styleUrls: ['./esqueceu-senha.component.scss']
})
export class EsqueceuSenhaComponent implements OnInit {

  formEmail: FormGroup;
  submitted = false;

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder,
    private userService: UserService) {}

  get f() { return this.formEmail.controls; }

  ngOnInit() {
    this.formEmail = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  requestNovaSenha() {
    this.submitted = true;
    if (this.formEmail.valid) {
      this.activeModal.close();
      // this.userService.addUser(this.receivedForm.value)
      // .subscribe(
      //   ret => {
      //     this.alert.show('success', ret.message)
      //     this.router.navigate(['bem-vindo']);
      //   },
      //   error => {
      //     this.alert.show('danger', error.message)
      //   });
    }
    // console.log(this.users);
    //esperar
  }
}
