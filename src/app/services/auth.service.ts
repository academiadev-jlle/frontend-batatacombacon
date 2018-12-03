import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private logged = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private oauth: OAuthService) { }

  loginAuth(user: string, pass: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.oauth.clientId + ':' + this.oauth.dummyClientSecret),
      'grant_type': 'password'
    });
    
    this.oauth.scope = 'password';

    return from(this.oauth.fetchTokenUsingPasswordFlow(user, pass, headers).then(
      result => {

        console.log(this.oauth.getIdentityClaims())

        if(!!this.oauth.getAccessToken()){
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
