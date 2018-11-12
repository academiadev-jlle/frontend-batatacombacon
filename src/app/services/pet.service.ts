import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PETS } from '../classes/mock-pets';
import { Pet } from '../classes/pet';

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

}
