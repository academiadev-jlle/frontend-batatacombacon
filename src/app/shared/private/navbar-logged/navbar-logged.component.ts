import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-logged',
  templateUrl: './navbar-logged.component.html',
  styleUrls: ['./navbar-logged.component.scss']
})
export class NavbarLoggedComponent {

  navbarOpenLogged = false;
  dropdownPerfil = false;

  toggleNavbarLogged() {
    this.navbarOpenLogged = !this.navbarOpenLogged;
  }
  
}
