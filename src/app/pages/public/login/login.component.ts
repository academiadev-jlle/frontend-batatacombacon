import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService
      //.login("","")
      .loginAuth("petcodes@petcodes.com.br","SuperSecreto")
      .subscribe(ret => {
          //this.router.navigate(['']);
      },
      error => console.log(error) //trocar pelo alert.
      );
  }

  test(){
    this.userService.getUser(2).subscribe( ret => {
      console.log(ret)
    })
  }

}
