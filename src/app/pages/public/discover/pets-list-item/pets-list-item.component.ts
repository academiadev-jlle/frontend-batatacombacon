import { Component, OnInit } from '@angular/core';

import { Pet } from 'src/app/classes/pets/pet';
import { PetService } from 'src/app/services/pet.service';

import { Location } from '@angular/common';

@Component({
  selector: 'app-pets-list-item',
  templateUrl: './pets-list-item.component.html',
  styleUrls: ['./pets-list-item.component.scss']
})
export class PetsListItemComponent implements OnInit {

  pets: Pet[];z

  constructor(
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
    .subscribe(pets => this.pets = pets);
  }

  goBack(): void {
    this.location.back();
  }

}
