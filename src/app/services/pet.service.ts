import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pet } from '../classes/pets/pet';
import { FilterPets } from '../classes/filter';

import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PetService {
  
  private petsUrl = 'http://localhost:3000/pets';  // URL to web api

  constructor(private http: HttpClient) { }

  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(this.petsUrl)
      .pipe(
        //tap(_ => this.log('fetched pets')),
        catchError(this.handleError('getPets', []))
      );
  }
  
  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.petsUrl}/${id}`).pipe(
      //tap(_ => this.log(`fetched pet id=${id}`)),
      catchError(this.handleError<Pet>(`getPet id=${id}`))
    );
  }

  searchPetByFilter(filter: FilterPets): Observable<Pet[]>{
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
        catchError(this.handleError('getPets', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  
}
