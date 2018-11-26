import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { HandleError } from '../classes/handleErrors';
import { Observable } from 'rxjs';
import { Usuario, APIUsuarioFactory, UsuarioAPI } from '../classes/usuario/usuario';
import { catchError } from 'rxjs/operators';
import { Pet } from '../classes/pets/pet';

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
  //private usersUrl = 'https://srv-fake-api.herokuapp.com/user';

  private handleError = new HandleError();

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usersUrl}`).pipe(
      catchError(this.handleError.handleThis<Usuario>(`getUsuarios`))
    );
  }
  
  getUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usersUrl}/${id}`).pipe(
      catchError(this.handleError.handleThis<Usuario>(`getUsuario id=${id}`))
    );
  }

  addUser(usuario: Usuario): Observable<any> {
    const userPayload = APIUsuarioFactory(usuario);
    
    return this.http.post<UsuarioAPI>(this.usersUrl, userPayload, httpOptions).pipe(
      catchError(this.handleError.handleThis<UsuarioAPI>('addUser'))
    );
  }

  updateUser(usuario: Usuario): Observable<any> {
    const userPayload = APIUsuarioFactory(usuario);

    return this.http.put<UsuarioAPI>(`${this.usersUrl}/${usuario.id}`, userPayload, httpOptions).pipe(
      catchError(this.handleError.handleThis<UsuarioAPI>('updateUser'))
    );
  }

  getPetsUser(userId: number): Observable<Pet[]>{
    return this.http.get<Pet[]>(`https://backendcombacon.herokuapp.com/usuario/${userId}/pet`).pipe(
      catchError(this.handleError.handleThis<Pet[]>('getPetsUser'))
    )
  }

}
