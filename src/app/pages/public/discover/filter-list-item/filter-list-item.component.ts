import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { FilterPets } from 'src/app/classes/filter';

import { ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-filter-list-item',
  templateUrl: './filter-list-item.component.html',
  styleUrls: ['./filter-list-item.component.scss']
})
export class FilterListItemComponent implements OnInit {
  
  especies: string[]=[];
  portes: string[]=[];
  objetivos: string[]=[];
  sexos: string[]=[];

  selectedEspecie: string;
  @ViewChild('instanceEspecie') instanceEspecie: NgbTypeahead;
  focusEspecie$ = new Subject<string>();
  clickEspecie$ = new Subject<string>();

  searchEspecies = (text$: Observable<string>) => {
    return merge(text$.pipe(debounceTime(200), distinctUntilChanged()),
                 this.focusEspecie$, 
                 this.clickEspecie$.pipe(filter(() => !this.instanceEspecie.isPopupOpen()))
                 ).pipe(
                        map(term => (
                              term === '' ? this.especies : this.especies.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
                            )
                        );
  }

  selectedPorte: string;
  @ViewChild('instancePorte') instancePorte: NgbTypeahead;
  focusPorte$ = new Subject<string>();
  clickPorte$ = new Subject<string>();

  searchPortes = (text$: Observable<string>) => {
    return merge(text$.pipe(debounceTime(200), distinctUntilChanged()),
                 this.focusPorte$, 
                 this.clickPorte$.pipe(filter(() => !this.instancePorte.isPopupOpen()))
                 ).pipe(
                        map(term => (
                              term === '' ? this.portes : this.portes.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
                            )
                        );
  }
 
  selectedObjetivo: string;
  @ViewChild('instanceObjetivo') instanceObjetivo: NgbTypeahead;
  focusObjetivo$ = new Subject<string>();
  clickObjetivo$ = new Subject<string>();

  searchObjetivos = (text$: Observable<string>) => {
    return merge(text$.pipe(debounceTime(200), distinctUntilChanged()),
                 this.focusObjetivo$, 
                 this.clickObjetivo$.pipe(filter(() => !this.instanceObjetivo.isPopupOpen()))
                 ).pipe(
                        map(term => (
                              term === '' ? this.objetivos : this.objetivos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
                            )
                        );
  }
 
  selectedSexo: string;
  @ViewChild('instanceSexo') instanceSexo: NgbTypeahead;
  focusSexo$ = new Subject<string>();
  clickSexo$ = new Subject<string>();

  searchSexos = (text$: Observable<string>) => {
    return merge(text$.pipe(debounceTime(200), distinctUntilChanged()),
                 this.focusSexo$, 
                 this.clickSexo$.pipe(filter(() => !this.instanceSexo.isPopupOpen()))
                 ).pipe(
                        map(term => (
                              term === '' ? this.sexos : this.sexos.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10)
                            )
                        );
  }
 
  @Output() messageEvent = new EventEmitter<string>();
  
  filterParams =  new FilterPets();

  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.getEspecies();
    this.getPortes();
    this.getObjetivos();
    this.getSexos();
  }

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