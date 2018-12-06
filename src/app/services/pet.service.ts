import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { Pet, PetPagination, APIPetFactory, PetAPI } from '../classes/pets/pet';
import { FilterPets } from '../classes/filter';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PetService {
  
  private petsUrl = 'https://backendcombacon.herokuapp.com/pet';

  constructor(
    private http: HttpClient
  ) { }

  getPets(): Observable<PetPagination> {
    return this.http.get<PetPagination>(this.petsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.petsUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getPetsByFilter(filter: FilterPets): Observable<PetPagination>{

    if((filter.objetivo===""||filter.objetivo===undefined)&&
        (filter.especie===""||filter.especie===undefined)&&
        (filter.porte===""||filter.porte===undefined)&&
        (filter.sexo===""||filter.sexo===undefined))
      return this.getPets();

    let str: string = `?`

    if(filter.especie!=="" && filter.especie!==undefined)
      str += `especie=${filter.especie}&`
    if(filter.porte!=="" && filter.porte!==undefined)
      str += `porte=${filter.porte}&`
    if(filter.objetivo!=="" && filter.objetivo!==undefined)
      str += `objetivo=${filter.objetivo}&`
    if(filter.sexo!=="" && filter.sexo!==undefined)
      str += `sexo=${filter.sexo}&`

    console.log(filter);
    console.log(this.petsUrl + str)
    
    return this.http.get<PetPagination>(this.petsUrl + str)
      .pipe(
        catchError(this.handleError)
      );
  }

  addPet(pet: Pet): Observable<any>{
    const petPayload = APIPetFactory(pet);
    return this.http.post<PetAPI>(this.petsUrl, petPayload, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updatePet(pet: Pet, idPet: number): Observable<any> {
    const petPayload = APIPetFactory(pet);
    console.log(idPet)
    console.log(petPayload)
    return this.http.put(`${this.petsUrl}/${idPet}?idPet=${idPet}`, petPayload, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  deletePet(pet: number): Observable<any> {
    const id = typeof pet === 'number' ? pet : undefined;
    const url = `${this.petsUrl}/${id}`;
  
    return this.http.delete<Pet>(url, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: any) { 
    return throwError(error);
  }

}
