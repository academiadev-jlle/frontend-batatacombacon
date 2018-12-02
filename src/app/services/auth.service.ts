import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     // montando o header com Authorization. Seria esse um parametro Dummy?
//     'Authorization': 'Basic ' + btoa('frontfront:frontend')
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //private access_token = '';
  //private url = "https://reqres.in/api";

  private logged = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router, private oauth: OAuthService) { }

  loginAuth(user: string, pass: string): Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa(this.oauth.clientId + ':' + this.oauth.dummyClientSecret),
      'grant_type': 'password'
    });
    
    this.oauth.scope = 'password';

    return from(this.oauth.fetchTokenUsingPasswordFlow(user, pass, headers)
    );
  }

  // login(user: string, pass: string): Observable<any>{

  //   user = "peter@klaven";
  //   pass = "cityslicka";

  //   // aqui vai o body com a requisicao. OAuth2 pede 'grant_type: password' ?
  //   const bodyPayload = {"email": user, "password": pass /*'grant_type':'password');*/};

  //   return this.http.post(`${this.url}/login`, bodyPayload, httpOptions)
  //     .pipe(
  //       map(ret => {
  //         this.access_token = ret['token'];
  //         this.logged.next(true);
  //         return ret;
  //       }),
  //       catchError(this.handleError)
  //     );
  // }

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
    // TODO: Implementar codigo de erros!
    return throwError(error);
  }

}
