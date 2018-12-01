import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { Pet } from '../classes/pets/pet';
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

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.petsUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  getPetsByFilter(filter: FilterPets): Observable<Pet[]>{
    

    if(filter.objetivo===""&&filter.especie===""&&filter.porte===""&&filter.sexo==="")
      return this.getPets();

    let str: string = `?`

    if(filter.especie!=="")
      str += `especie=${filter.especie}&`
    // if(filter.porte!=="")
    //   filtred = filtred.filter(pet => pet.porte.toLowerCase()===filter.porte.toLowerCase());
    if(filter.objetivo!=="")
      str += `objetivo=${filter.objetivo}&`
    if(filter.sexo!=="")
      filter.sexo.toLocaleLowerCase()==='macho'?str += `macho=true&`:str += `macho=false&`

    console.log(filter);
    console.log(this.petsUrl + str)
    
    return this.http.get<Pet[]>(this.petsUrl + str)
      .pipe(
        catchError(this.handleError)
      );
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.petsUrl, pet, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updatePet(pet: Pet): Observable<any> {
    return this.http.put(this.petsUrl, pet, httpOptions).pipe(
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

    const ret = {status: error.status,
                 message: ""};

    if(error.status===404){
      ret.message = "Pet não encontrado."
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
    
    ret.message =`(${error.status}) Ops... Aconteceu algum problema no servidor.`;
    return throwError(ret);
  }

}
