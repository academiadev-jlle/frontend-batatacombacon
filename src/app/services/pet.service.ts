import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../classes/pets/pet';
import { FilterPets } from '../classes/filter';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError } from 'rxjs/operators';
import { HandleError } from '../classes/handleErrors';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PetService {
  
  //private petsUrl = 'http://localhost:3000/pets';  // URL to web api
  private petsUrl = 'pet';

  private handleError = new HandleError();

  constructor(
    private http: HttpClient
  ) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl)
      .pipe(
        //tap(_ => this.log('fetched pets')),
        catchError(this.handleError.handleThis('getPets', []))
      );
  }
  
  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.petsUrl}/${id}`).pipe(
      //tap(_ => this.log(`fetched pet id=${id}`)),
      catchError(this.handleError.handleThis<Pet>(`getPet id=${id}`))
    );
  }

  getPetsByFilter(filter: FilterPets): Observable<Pet[]>{
    console.log(filter);

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

    return this.http.get<Pet[]>(this.petsUrl + str)
      .pipe(
        //tap(_ => this.log('fetched pets')),
        catchError(this.handleError.handleThis('getPets', []))
      );
  }

  addPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.petsUrl, pet, httpOptions).pipe(
      //tap((pet: Pet) => this.log(`added pet w/ id=${pet.id}`)),
      catchError(this.handleError.handleThis<Pet>('addPet'))
    );
  }

  updatePet(pet: Pet): Observable<any> {
    return this.http.put(this.petsUrl, pet, httpOptions).pipe(
      ///tap(_ => this.log(`updated pet id=${pet.id}`)),
      catchError(this.handleError.handleThis<Pet>('updatePet'))
    );
  }
  
  deletePet(pet: Pet): Observable<Pet> {
    const id = typeof pet === 'number' ? pet : pet.id;
    const url = `${this.petsUrl}/${id}`;
  
    return this.http.delete<Pet>(url, httpOptions).pipe(
      //tap(_ => this.log(`deleted pet id=${id}`)),
      catchError(this.handleError.handleThis<Pet>('deletePet'))

    );
  }  
}
