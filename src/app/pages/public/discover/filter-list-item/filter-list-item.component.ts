import { Component, OnInit } from '@angular/core';
import { Especie } from 'src/app/classes/especie/especies';
import { EspecieService } from 'src/app/services/especie.service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-filter-list-item',
  templateUrl: './filter-list-item.component.html',
  styleUrls: ['./filter-list-item.component.scss']
})
export class FilterListItemComponent implements OnInit {
  especies$: Observable<Especie[]>;
  private searchTerms = new Subject<string>();

  constructor(private especieService: EspecieService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.especies$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.especieService.searchEspecie(term)),
    );
  }

}
