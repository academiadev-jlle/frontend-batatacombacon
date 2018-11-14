import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ESPECIES } from '../classes/especie/mock-especies';
import { PORTES } from '../classes/porte/mock-porte';
import { CATEGORIAS } from '../classes/categoria/mock-categoria';
import { SEXOS } from '../classes/sexo/mock-sexo';

@Injectable({
    providedIn: 'root'
})

export class FilterService {
    
    constructor() { }

    getEspecies(): Observable<string[]>{
        return of(ESPECIES.map(especie => especie.nome));
    }

    getPortes(): Observable<string[]>{
        return of(PORTES.map(porte => porte.tamanho));
    }

    getCategorias(): Observable<string[]>{
        return of(CATEGORIAS.map(categoria => categoria.descricao));
    }
    
    getSexos(): Observable<string[]>{
        return of(SEXOS.map(sexo => sexo.descricao));
    }
}