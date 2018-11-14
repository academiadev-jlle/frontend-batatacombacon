import { Component, OnInit } from '@angular/core';
import { EspecieService } from 'src/app/services/especie.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-filter-list-item',
  templateUrl: './filter-list-item.component.html',
  styleUrls: ['./filter-list-item.component.scss',
]
})
export class FilterListItemComponent implements OnInit {
  
  especies: string[];
  selected: string;

  constructor(
    private especieService: EspecieService) { }

  ngOnInit() {
    this.getEspecies();
  }

  getEspecies(): void {
    this.especieService.getEspecies()
      .subscribe(especies_ => this.especies = especies_);
  }

  onSelect(event: TypeaheadMatch): void {
    this.selected = event.item;
    console.log(this.selected);
  }

  // filterByEspecie():void {
  //   this.petService.searchPetByEspecie(this.selected)
  //     .subscribe()
  // }


}
