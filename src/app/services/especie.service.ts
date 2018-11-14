import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ESPECIES } from '../classes/especie/mock-especies';
import { Especie } from '../classes/especie/especies';

@Injectable({
    providedIn: 'root'
})

export class EspecieService {
    
    constructor() { }

    getEspecies(): Observable<string[]>{
        return of(ESPECIES.map(especie => especie.nome));
    }
    
}