import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ESPECIES } from '../classes/especie/mock-especies';
import { Especie } from '../classes/especie/especies';

@Injectable({
    providedIn: 'root'
})

export class EspecieService {
    
    constructor() { }

    getEspecies(): Observable<Especie[]>{
        return of(ESPECIES);
    }

    searchEspecie(term: string): Observable<Especie[]>{
        console.log()
        if (!term.trim()) {
          return of([]);
        }
        return of(ESPECIES.filter(especie_ => especie_.nome.toLowerCase().includes(term.toLowerCase())));
      }
    
}