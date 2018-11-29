import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogged$: Observable<boolean>; 
  navbarOpen = false;  

  constructor(private authService: AuthService) {  }

  ngOnInit() {
    this.isLogged$ = this.authService.isLogged;
  }
  
  onLogout(){
    this.authService.logout();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  
}
