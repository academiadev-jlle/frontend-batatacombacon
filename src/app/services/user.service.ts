import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleError } from '../classes/handleErrors';
import { Observable } from 'rxjs';
import { Usuario } from '../classes/usuario/usuario';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  //private usersUrl = 'http://localhost:3000/users';  // URL to web api
  private usersUrl = 'user';

  private handleError = new HandleError();

  constructor(
    private http: HttpClient
  ) { }
  
  getUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usersUrl}/${id}`).pipe(
      //tap(_ => this.log(`fetched pet id=${id}`)),
      catchError(this.handleError.handleThis<Usuario>(`getUsuario id=${id}`))
    );
  }

  addUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usersUrl, user, httpOptions).pipe(
      //tap((pet: Pet) => this.log(`added pet w/ id=${pet.id}`)),
      catchError(this.handleError.handleThis<Usuario>('addUser'))
    );
  }

  updateUser(user: Usuario): Observable<any> {
    return this.http.put(this.usersUrl, user, httpOptions).pipe(
      ///tap(_ => this.log(`updated pet id=${pet.id}`)),
      catchError(this.handleError.handleThis<Usuario>('updateUser'))
    );
  }

}
