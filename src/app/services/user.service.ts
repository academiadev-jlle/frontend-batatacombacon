import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
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

  newUser: {nome: '',
            email: '',
            acabouDeRegistrar: boolean};

  private usersUrl = 'https://backendcombacon.herokuapp.com/user';
  //private usersUrl = 'https://srv-fake-api.herokuapp.com/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usersUrl}`).pipe(
      catchError(this.handleError)
    );
  }
  
  getUser(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.usersUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addUser(usuario: Usuario): Observable<any> {
    const userPayload = APIUsuarioFactory(usuario);
    
    return this.http.post<UsuarioAPI>(this.usersUrl, userPayload, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  updateUser(usuario: Usuario): Observable<any> {
    const userPayload = APIUsuarioFactory(usuario);

    return this.http.put<UsuarioAPI>(`${this.usersUrl}/${usuario.id}`, userPayload, httpOptions)
    .pipe(
      catchError(this.handleError)
    );
  }

  getPetsUser(userId: number): Observable<Pet[]>{
    return this.http.get<Pet[]>(`${this.usersUrl}/user/${userId}/pet`).pipe(
      catchError(this.handleError)
    )
  }

  changeUserPassword(submitForm: FormGroup): Observable<any> {
    const body = { "senha": submitForm.get('senha').value };
    const id = submitForm.get('id').value;
    const token = submitForm.get('token').value;
    return this.http.post<any>(`${this.usersUrl}/changePassword?id=${id}&token=${token}`, body , httpOptions)
    .pipe(catchError(this.handleError)
    );
  }

  resetUserPassword(email: string): Observable<any> {
    const body = { "email": email };
    return this.http.post<any>(`${this.usersUrl}/resetPassword?email=${email}`, body, httpOptions)
    .pipe(catchError(this.handleError)
    );
  }

  private handleError(error: any) { 

    const ret = {status: error.status,
                 message: ""};

    if(error.status===404){
      ret.message = "Usuário não encontrado."
      return throwError(ret);
    }

    if(error.status===400){
      ret.message = "Bad request."
      return throwError(ret);
    }

    if(error.status===401){
      ret.message = "Você não tem autorização"
      return throwError(ret);
    }
    
    //ret.message =`(${error.status}) Ops... Aconteceu algum problema no servidor.`;
    return throwError(error);
  }

}
