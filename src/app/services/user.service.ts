import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleError } from '../classes/handleErrors';
import { Observable } from 'rxjs';
import { Usuario, APIUsuarioFactory, UsuarioAPI } from '../classes/usuario/usuario';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'accept': '*/*'
  })
};

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private usersUrl = 'https://backendcombacon.herokuapp.com/user';

  private handleError = new HandleError();

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usersUrl}`).pipe(
      //tap(_ => this.log(`fetched pet id=${id}`)),
      catchError(this.handleError.handleThis<Usuario>(`getUsuarios`))
    );
  }
  
  getUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usersUrl}/${id}`).pipe(
      //tap(_ => this.log(`fetched pet id=${id}`)),
      catchError(this.handleError.handleThis<Usuario>(`getUsuario id=${id}`))
    );
  }

  addUser(usuario: Usuario): Observable<any> {
    const userPayload = APIUsuarioFactory(usuario);
    
    return this.http.post<UsuarioAPI>(this.usersUrl, userPayload, httpOptions).pipe(
      //tap((pet: Pet) => this.log(`added pet w/ id=${pet.id}`)),
      catchError(this.handleError.handleThis<UsuarioAPI>('addUser'))
    );
  }

  updateUser(usuario: Usuario): Observable<any> {
    return this.http.put(this.usersUrl, usuario, httpOptions).pipe(
      ///tap(_ => this.log(`updated pet id=${pet.id}`)),
      catchError(this.handleError.handleThis<Usuario>('updateUser'))
    );
  }

}
