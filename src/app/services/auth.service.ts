import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

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
  private logged = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }

  login(user: string, pass: string): Observable<any>{

    user = "peter@klaven";
    pass = "cityslicka";

    // aqui vai o body com a requisicao. OAuth2 pede 'grant_type: password' ?
    const bodyPayload = {"email": user, "password": pass /*'grant_type':'password');*/};

    return this.http.post(`${this.url}/login`, bodyPayload, httpOptions)
      .pipe(
        map(ret => {
          this.access_token = ret['token'];
          this.logged.next(true);
          return ret;
        }),
        catchError(this.handleError)
      );
  }

  logout(){
    // TODO: mais alguma implementação?
    this.logged.next(false);
    this.router.navigate(['']);
  }

  getAuthorizationHeader() {
    return `Bearer ${this.access_token}`;
  }

  get isLogged() {
    return this.logged.asObservable();
  }

  private handleError(error: any) { 
    // TODO: Implementar codigo de erros!
    return throwError(error);
  }

}
