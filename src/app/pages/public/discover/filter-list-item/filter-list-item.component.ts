import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { FilterPets } from 'src/app/classes/filter';

@Component({
  selector: 'app-filter-list-item',
  templateUrl: './filter-list-item.component.html',
  styleUrls: ['./filter-list-item.component.scss',
]
})
export class FilterListItemComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  
  especies: string[];
  portes: string[];
  categorias: string[];
  sexos: string[];
  
  selectedEspecie: string;
  selectedPorte: string;
  selectedCategoria: string;
  selectedSexo: string;

  filterParams =  new FilterPets();

  constructor(private filterService: FilterService) { }

  getEspecies(): void {
    this.filterService.getEspecies()
      .subscribe(especies_ => this.especies = especies_);
  }

  getPortes(): void {
    this.filterService.getPortes()
      .subscribe(portes_ => this.portes = portes_);
  }

  getCategorias(): void {
    this.filterService.getCategorias()
      .subscribe(categorias_ => this.categorias = categorias_);
  }

  getSexos(): void {
    this.filterService.getSexos()
      .subscribe(sexos_ => this.sexos = sexos_);
  }

  ngOnInit() {
    this.getEspecies();
    this.getPortes();
    this.getCategorias();
    this.getSexos();
  }

  click() {
    this.filterParams["especie"] = this.selectedEspecie;
    this.filterParams["porte"] = this.selectedPorte;
    this.filterParams["categoria"] = this.selectedCategoria;
    this.filterParams["sexo"] = this.selectedSexo;

    this.sendMessage(this.filterParams);
  }



  sendMessage(selecteds) {
    this.messageEvent.emit(selecteds);
  }


}
