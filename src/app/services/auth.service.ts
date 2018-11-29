import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // montando o header com Authorization. Seria esse um parametro Dummy?
    'Authorization': 'Basic ' + btoa('frontfront:frontend')
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private access_token = '';

  private url = "https://reqres.in/api";

  constructor(private http: HttpClient) { }

  login(user: string, pass: string): Observable<any>{

    user = "peter@klaven";
    pass = "cityslicka";

    // aqui vai o body com a requisicao. OAuth2 pede 'grant_type: password' ?
    const bodyPayload = {"email": user, "password": pass /*'grant_type':'password');*/};

    return this.http.post(`${this.url}/login`, bodyPayload, httpOptions)
      .pipe(
        map(ret => {
          this.access_token = ret['token'];
          return ret;
        }),
        catchError(this.handleError)
      );
  }

  logout(){
    // TODO: chamada http aqui!
  }


  getAuthorizationHeader() {
    return `Bearer ${this.access_token}`;
  }

  isUserLogged() {
    console.log('authService', this.access_token, !!this.access_token);
    return !!this.access_token;
  }

  private handleError(error: any) { 
    // TODO: Implementar codigo de erros!
    return throwError(error);
  }

}
