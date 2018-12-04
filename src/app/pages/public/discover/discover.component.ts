import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { Pet, PetPagination} from 'src/app/classes/pets/pet';
import { FilterPets } from 'src/app/classes/filter';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  pets = [];
  message:string;
  sum = 0;
  end: boolean;
  numberOfElements = 6;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets(this.sum, this.numberOfElements);
  }

  getPets(page: number, size: number) {
    this.petService.getPetsScroll( page, size)
      .subscribe(
        pets => {
        pets.content.map( pet => this.pets.push(pet) );
        this.end = pets.last;
      },
        error => console.log(error)
      );
    console.log(this.pets);
  }

  receiveMessage($event) {
    this.message = $event
    this.filterPets($event);
  }

  filterPets(params: FilterPets):void {
    this.petService.getPetsByFilter(params)
      .subscribe(
        pets => this.pets = pets.content,
        error => console.log(error)
      );
  }

  onScroll () {
    console.log('scrolled!!');
    if (!this.end) {
      this.sum ++;
      this.getPets(this.sum, this.numberOfElements);
    }
  }
}
