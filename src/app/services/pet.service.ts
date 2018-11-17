import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PETS } from '../classes/pets/mock-pets';
import { Pet } from '../classes/pets/pet';
import { FilterPets } from '../classes/filter';

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

  searchPetByFilter(filter: FilterPets): Observable<Pet[]>{
    console.log(filter);

     if(filter.categoria===""&&filter.especie===""&&filter.porte===""&&filter.sexo==="")
       return of(PETS);

    let filtred: Pet[] = [];

    filtred = PETS.concat();

    if(filter.especie!=="")
      filtred = filtred.filter(pet => pet.especie.toLowerCase()===filter.especie.toLowerCase());
    if(filter.porte!=="")
      filtred = filtred.filter(pet => pet.porte.toLowerCase()===filter.porte.toLowerCase());
    if(filter.categoria!=="")
      filtred = filtred.filter(pet => pet.categoria.toLowerCase()===filter.categoria.toLowerCase());
    if(filter.sexo!=="")
      filtred = filtred.filter(pet => pet.sexo.toLowerCase()===filter.sexo.toLowerCase());

    return of(filtred);
  }
  
}
