import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PETS } from '../classes/pets/mock-pets';
import { Pet } from '../classes/pets/pet';

@Injectable({
  providedIn: 'root'
})

export class PetService {
  
  constructor() { }
  
  getPets(): Observable<Pet[]>{
    return of(PETS);
  }
  
  getPet(id: number): Observable<Pet> {
    return of(PETS.find(pet => pet.id === id));
  }
  
  searchPetByEspecie(especie: string): Observable<Pet[]>{
    if (!especie.trim()) {
      return of([]);
    }
    return of(PETS.filter(pet_ => pet_.especie.toLocaleLowerCase() === especie.toLocaleLowerCase()));
  }
  
}
