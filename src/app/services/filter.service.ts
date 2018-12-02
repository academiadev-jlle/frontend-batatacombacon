import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { Objetivo } from '../classes/objetivo/objetivo';
import { Porte } from '../classes/porte/porte';
import { Especie } from '../classes/especie/especies';
import { Sexo } from '../classes/sexo/sexo';

import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class FilterService {
    
    //private filterUrl = 'https://srv-fake-api.herokuapp.com';
    private filterUrl = 'https://backendcombacon.herokuapp.com';
    
    constructor(private http: HttpClient) { }

    getEspecies(): Observable<string[]>{
        return this.http.get<Especie[]>(`${this.filterUrl}/especies`).pipe(
           map(response => response.map(r => r.descricao)),
           catchError(this.handleError)
       );
    }

    getPortes(): Observable<string[]>{
        return this.http.get<Porte[]>(`${this.filterUrl}/porte`).pipe(
           map(response => response.map(r => r.descricao)),
           catchError(this.handleError)
       );
    }

    getObjetivos(): Observable<string[]>{
        return this.http.get<Objetivo[]>(`${this.filterUrl}/objetivos`).pipe(
           map(response => response.map(r => r.descricao)),
           catchError(this.handleError)
       );
    }
    
    getSexos(): Observable<string[]>{
        return this.http.get<Sexo[]>(`${this.filterUrl}/sexo`).pipe(
           map(response => response.map(r => r.descricao)),
           catchError(this.handleError)
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
        
        return throwError(error);
        }
}