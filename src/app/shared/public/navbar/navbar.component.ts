import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  
  navbarOpen = false;
  itemsList = [];
  
  constructor(private authService: AuthService) {  }

  ngOnInit() {
    
    this.itemsList = [
      {
        text: "Minha conta",
        link: "/profile",
        show: true
      },
      {
        text: "Cadastro",
        link: "/cadastro",
        show: true
      },
      {
        text: "Login",
        link: "/login",
        show: true
      },
      {
        text: "Contato",
        link: "/contato",
        show: true
      }
    ]
  }
  

  
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
}
