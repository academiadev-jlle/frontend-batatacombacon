import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService
      .login("","")
      .subscribe(ret => {
          console.log("from authService", this.authService.access_token);
          //redirect to home with login changed to Username :D
      },
      error => console.log(error) //trocar pelo alert.
      );

    

  }

}
