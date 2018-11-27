import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from 'src/app/classes/pets/pet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss']
})
export class PetsListComponent implements OnInit {

  @Input() petListUser: Pet[];
  @Output() msgDeletePet = new EventEmitter<number>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  infoPet($event){
    this.router.navigate([`pet/${$event}`]);
  }

  deletePet($event){
    this.msgDeletePet.emit($event);
  }

}
