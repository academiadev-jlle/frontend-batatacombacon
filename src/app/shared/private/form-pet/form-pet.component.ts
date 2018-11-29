import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Pet } from 'src/app/classes/pets/pet';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.scss']
})
export class FormPetComponent implements OnInit, OnChanges {

  @Input() petProfile: Pet;
  @Output() messageEvent = new EventEmitter<FormGroup>();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  
}
