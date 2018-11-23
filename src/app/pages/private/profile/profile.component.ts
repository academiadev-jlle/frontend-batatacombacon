import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UsuarioAPI, Usuario, APIUsuarioFactory } from 'src/app/classes/usuario/usuario';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;

  constructor(private userService: UserService) { }

  ngOnInit() {
    
    // desenvolvimento apenas. Provavelmente o usuario virá
    // estará registrado em algum lugar e bastara chamar ele.
    this.userService.getUser(1).subscribe(user => this.usuario = APIUsuarioFactory(user));
  }

}
