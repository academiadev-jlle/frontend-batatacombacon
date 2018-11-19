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
  objetivos: string[];
  sexos: string[];
  
  selectedEspecie: string;
  selectedPorte: string;
  selectedObjetivo: string;
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

  getObjetivos(): void {
    this.filterService.getObjetivos()
      .subscribe(objetivos_ => this.objetivos = objetivos_);
  }

  getSexos(): void {
    this.filterService.getSexos()
      .subscribe(sexos_ => this.sexos = sexos_);
  }

  ngOnInit() {
    this.getEspecies();
    this.getPortes();
    this.getObjetivos();
    this.getSexos();
  }

  filtraPetsClick() {
    this.filterParams["especie"] = this.selectedEspecie===undefined?this.selectedEspecie="":this.selectedEspecie;
    this.filterParams["porte"] = this.selectedPorte===undefined?this.selectedPorte="":this.selectedPorte;
    this.filterParams["objetivo"] = this.selectedObjetivo===undefined?this.selectedObjetivo="":this.selectedObjetivo;
    this.filterParams["sexo"] = this.selectedSexo===undefined?this.selectedSexo="":this.selectedSexo;

    this.sendMessage(this.filterParams);
  }

  sendMessage(selecteds) {
    this.messageEvent.emit(selecteds);
  }


}
