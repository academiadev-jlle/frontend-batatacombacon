import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pet } from 'src/app/classes/pets/pet';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-json',
  templateUrl: './pet-json.component.html',
  styleUrls: ['./pet-json.component.scss']
})
export class PetJsonComponent implements OnInit {

  pet: Pet;
  pageIdentifier: string;
  pageUrl: string;


  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location) { }

  ngOnInit() {
    this.getPet();
    this.pageIdentifier = this.route.snapshot.paramMap.get('id');
    this.pageUrl = `https://frontendbatatacombacon.disqus.com${ this.pageIdentifier }`;
    //garantindo que não de erro quando a página abrir.
    this.pet = new Pet();
  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id)
      .subscribe(pet => this.pet = pet);
  }

  goBack(): void {
    this.location.back();
  }

}
