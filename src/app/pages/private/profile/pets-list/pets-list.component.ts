import { Component, OnInit, Input } from '@angular/core';
import { Pet } from 'src/app/classes/pets/pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  @Input() petListUser: Pet[];

  constructor() { }

  ngOnInit() {
  }

}
