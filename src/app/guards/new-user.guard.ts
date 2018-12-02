import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewUserGuard implements CanActivate {
  
  constructor (private userService: UserService, private router: Router){ }

  private temCadastro: boolean=false;
  
  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    if(!!this.userService.newUser==false){
      this.router.navigate([''])
      return false;
    }

    this.temCadastro = this.userService.newUser.acabouDeRegistrar;
    next.root.data = {nome: this.userService.newUser.nome, email: this.userService.newUser.email}
    this.userService.newUser.acabouDeRegistrar = false;

    return this.temCadastro;
  }

}
