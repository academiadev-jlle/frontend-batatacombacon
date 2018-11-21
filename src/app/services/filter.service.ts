import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Objetivo } from '../classes/objetivo/objetivo';
import { Porte } from '../classes/porte/porte';
import { Especie } from '../classes/especie/especies';
import { Sexo } from '../classes/sexo/sexo';

import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { HandleError } from '../classes/handleErrors';

@Injectable({
    providedIn: 'root'
})

export class FilterService {
    
    private filterUrl = 'https://srv-fake-api.herokuapp.com';
    
    private handleError = new HandleError();
    
    constructor(
        private http: HttpClient
    ) { }

    getEspecies(): Observable<string[]>{
        return this.http.get<Especie[]>(`${this.filterUrl}/especies`)
       .pipe(
           map(response => response.map(r => r.nome)),
           //tap(_ => this.log('fetched pets')),
           catchError(this.handleError.handleThis('getEspecies', []))
       );
    }

    getPortes(): Observable<string[]>{
        return this.http.get<Porte[]>(`${this.filterUrl}/portes`)
       .pipe(
           map(response => response.map(r => r.tamanho)),
           //tap(_ => this.log('fetched pets')),
           catchError(this.handleError.handleThis('getPortes', []))
       );
    }

    getObjetivos(): Observable<string[]>{
        return this.http.get<Objetivo[]>(`${this.filterUrl}/objetivos`)
       .pipe(
           map(response => response.map(r => r.descricao)),
           //tap(_ => this.log('fetched pets')),
           catchError(this.handleError.handleThis('getObjetivos', []))
       );
    }
    
    getSexos(): Observable<string[]>{
        return this.http.get<Sexo[]>(`${this.filterUrl}/sexos`)
       .pipe(
           map(response => response.map(r => r.descricao)),
           //tap(_ => this.log('fetched pets')),
           catchError(this.handleError.handleThis('getSexos', []))
       );
    }
}