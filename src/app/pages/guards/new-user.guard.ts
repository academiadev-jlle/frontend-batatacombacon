import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class NewUserGuard implements CanActivate {
  
  constructor (private userService: UserService){ }

  private temCadastro: boolean=false;
  
  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
      this.userService.getUser(+next.params.id).subscribe(
        ret => this.temCadastro = true,
        error => this.temCadastro = false
      );

      return this.temCadastro;
  }

}
