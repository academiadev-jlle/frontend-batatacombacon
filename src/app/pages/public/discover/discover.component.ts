import { Component, OnInit } from '@angular/core';
import { PetService } from 'src/app/services/pet.service';
import { FilterPets } from 'src/app/classes/filter';
import { Pet } from 'src/app/classes/pets/pet';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.component.html',
  styleUrls: ['./discover.component.scss']
})
export class DiscoverComponent implements OnInit {

  pets = [];
  filterContent: FilterPets;
  page = 0;
  numberOfElements = 6;
  end: boolean;
  filtred: boolean=false;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.getPets(this.page, this.numberOfElements);
  }

  getPets(page: number, size: number) {
    this.petService.getPetsScroll(page, size)
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
    this.page = 0;
    this.pets = [];
    this.filtred = true;
    this.filterContent = $event
    this.filterPets($event);
  }

  filterPets(params: FilterPets):void {
    this.petService.getPetsByFilterScroll(params, this.page, this.numberOfElements)
      .subscribe(
        pets => {
          pets.content.map( pet => this.pets.push(pet) );     
          this.end = pets.last;
      },
        error => console.log(error)
      );
  }

  onScroll() {
    if (!this.end) {
      this.page++;
      if (this.filtred) {
        this.filterPets(this.filterContent);
      } else {
        this.getPets(this.page, this.numberOfElements);
      }
    } else {
      this.filtred = false;
    }
  }
}
