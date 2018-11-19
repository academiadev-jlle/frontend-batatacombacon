import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    
    private apiUrl = 'http://localhost:3000/';
    
    constructor(private http: HttpClient) { }

    getEspecies(): Observable<string[]>{
        return this.http.get<Especie[]>(this.apiUrl + 'especies')
       .pipe(
           map(response => response.map(r => r.nome)),
           //tap(_ => this.log('fetched pets')),
           //catchError(this.handleError('getPets', [])) //TODO: GENERALIZE handleError
       );
    }

    getPortes(): Observable<string[]>{
        return this.http.get<Porte[]>(this.apiUrl + 'portes')
       .pipe(
           map(response => response.map(r => r.tamanho)),
           //tap(_ => this.log('fetched pets')),
           //catchError(this.handleError('getPets', [])) //TODO: GENERALIZE handleError
       );
    }

    getObjetivos(): Observable<string[]>{
        return this.http.get<Objetivo[]>(this.apiUrl + 'objetivos')
       .pipe(
           map(response => response.map(r => r.descricao)),
           //tap(_ => this.log('fetched pets')),
           //catchError(this.handleError('getPets', [])) //TODO: GENERALIZE handleError
       );
    }
    
    getSexos(): Observable<string[]>{
        return this.http.get<Sexo[]>(this.apiUrl + 'sexos')
       .pipe(
           map(response => response.map(r => r.descricao)),
           //tap(_ => this.log('fetched pets')),
           //catchError(this.handleError('getPets', [])) //TODO: GENERALIZE handleError
       );
    }
}