import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet } from 'src/app/classes/pets/pet';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  pets: Pet[];
  message:string;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
    .subscribe(pets => this.pets = pets);
  }

  receiveMessage($event) {
    this.message = $event
    console.log("mensagem recebida")
    console.log($event);
    //this.filterPets($event);
  }

  filterPets(params: string) {
    console.log("filter: " + params);
    this.petService.searchPetByEspecie(params)
      .subscribe(pets => this.pets = pets);
  }

}
