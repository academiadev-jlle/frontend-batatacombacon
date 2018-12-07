import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Cep } from '../classes/cep/cep';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  private cepsUrl = 'https://viacep.com.br/ws';

  constructor(private http: HttpClient) { }

  getCep(cep: string): Observable<Cep> {
    return this.http.get<Cep>(`${this.cepsUrl}/${cep}/json`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) { 
    return throwError(error);
  }
}
