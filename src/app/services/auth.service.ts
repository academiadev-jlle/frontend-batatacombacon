import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject, from } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { catchError } from 'rxjs/operators';
import { UserService } from './user.service';
import { UsuarioWhoami } from '../classes/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private logged = new BehaviorSubject<boolean>(false);
  whoami: UsuarioWhoami;
  
  constructor(private router: Router, 
              private oauth: OAuthService, 
              private userService: UserService) { }

  loginAuth(user: string, pass: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.oauth.clientId + ':' + this.oauth.dummyClientSecret),
      'grant_type': 'password'
    });
    
    this.oauth.scope = 'password';

    return from(this.oauth.fetchTokenUsingPasswordFlowAndLoadUserProfile(user, pass, headers).then(
      result => {
        if(!!this.oauth.getAccessToken()){

          let claims = this.oauth.getIdentityClaims();
          this.whoami = {
            nome: claims['nome'], 
            email: claims['email'], 
            id: claims['id'], 
            acabouDeFazerLogin: true
          }

          this.logged.next(true);
        }else{
          catchError(this.handleError)
          //this.handleError(result)
        }
      }
    ));
  }

  logout(){
    this.oauth.logOut();
    this.logged.next(false);
    this.whoami = null;
    this.router.navigate(['']);
  }

  getAuthorizationHeader() {
    return `Bearer ${this.oauth.getAccessToken()}`;
  }

  get isLogged() {
    return this.logged.asObservable();
  }

  private handleError(error: any) { 

    const ret = {status: error.status,
                 message: ""};

      if(error.status===401){
        ret.message = "Você não tem autorização."
        return throwError(ret);
      }

    return throwError(error);
  }

}
