import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet} from 'src/app/classes/pets/pet';
import { FilterPets } from 'src/app/classes/filter';

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

  getPets() {
    this.petService.getPets()
      .subscribe(pets =>this.pets = pets)
  }

  receiveMessage($event) {
    this.message = $event
    this.filterPets($event);
  }

  filterPets(params: FilterPets):void {
    this.petService.searchPetByFilter(params)
      .subscribe(pets => this.pets = pets);
  }
}
