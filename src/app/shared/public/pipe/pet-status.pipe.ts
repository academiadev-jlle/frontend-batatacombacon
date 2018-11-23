import { Pet } from 'src/app/classes/pets/pet';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'petStatus'
})
export class PetStatusPipe implements PipeTransform {
  
  transform(pet){
    return pet;
  }

  // transform(pet: Pet) {
  //   if (pet.isLost) {
  //     if (pet.isAdoption) {
  //       return 'A Procura de um Lar!';
  //     } else {
  //       return 'Perdido!';
  //     }
  //   } else {
  //     return 'Encontrou um Lar!';
  //   }
  // }

}
