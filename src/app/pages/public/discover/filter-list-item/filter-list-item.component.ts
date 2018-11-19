import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { FilterPets } from 'src/app/classes/filter';

import { ViewChild} from '@angular/core';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

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

  @ViewChild('instance') instanceEspecie: NgbTypeahead;
  focusEspecie$ = new Subject<string>();
  clickEspecie$ = new Subject<string>();

  @ViewChild('instance') instancePorte: NgbTypeahead;
  focusPorte$ = new Subject<string>();
  clickPorte$ = new Subject<string>();

  @ViewChild('instance') instanceCategoria: NgbTypeahead;
  focusCategoria$ = new Subject<string>();
  clickCategoria$ = new Subject<string>();

  @ViewChild('instance') instanceSexo: NgbTypeahead;
  focusSexo$ = new Subject<string>();
  clickSexo$ = new Subject<string>();

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.getEspecies();
    this.getPortes();
    this.getCategorias();
    this.getSexos();
  }

  filtraPetsClick() {
    this.filterParams["especie"] = this.selectedEspecie===undefined?this.selectedEspecie="":this.selectedEspecie;
    this.filterParams["porte"] = this.selectedPorte===undefined?this.selectedPorte="":this.selectedPorte;
    this.filterParams["categoria"] = this.selectedCategoria===undefined?this.selectedCategoria="":this.selectedCategoria;
    this.filterParams["sexo"] = this.selectedSexo===undefined?this.selectedSexo="":this.selectedSexo;

    this.sendMessage(this.filterParams);
  }

  sendMessage(selecteds) {
    this.messageEvent.emit(selecteds);
  }

  searchEspecie = (text$: Observable<string>) => {
    return this.searchItems(text$, this.instanceEspecie, this.especies, this.focusEspecie$, this.clickEspecie$);
  }

  searchPorte = (text$: Observable<string>) => {
    return this.searchItems(text$, this.instancePorte, this.portes, this.focusPorte$, this.clickPorte$);
  }

  searchCategoria = (text$: Observable<string>) => {
    return this.searchItems(text$, this.instancePorte, this.categorias, this.focusCategoria$, this.clickCategoria$);
  }

  searchSexo = (text$: Observable<string>) => {
    return this.searchItems(text$, this.instancePorte, this.sexos, this.focusSexo$, this.clickSexo$);
  }

  // General function that searches typeahead lists.
  searchItems(text$: Observable<string>, instance, list, focus, click){
    const debouncedText$ = text$.pipe(debounceTime(300), distinctUntilChanged());
    const clicksWithClosedPopup$ = click.pipe(filter(() => !instance.isPopupOpen()));
    const inputFocus$ = focus;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? list
        : list.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

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
}
