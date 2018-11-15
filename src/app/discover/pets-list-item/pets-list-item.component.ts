import { Component, OnInit, Input } from '@angular/core';

import { PetOptions } from './pets-list-item.options';

@Component({
  selector: 'app-pets-list-item',
  templateUrl: './pets-list-item.component.html',
  styleUrls: ['./pets-list-item.component.scss']
})
export class PetsListItemComponent implements OnInit {

  pets: PetOptions[] = [];

  constructor() {
    this.pets.push(...[{
      id: 1,
      name: 'Pé de pano',
      photo: 'https://www.paulickreport.com/wp-content/uploads/2015/08/Happy_horse.jpg',
      description: 'Oi! Fui abandonado e preciso de um novo lar. Sou bem divertido :D',
      isAdoption: false,
      isLost: true
    }, {
      id: 2,
      name: 'Cãopeão',
      photo: 'http://talkingship.com/wp/wp-content/uploads/2013/12/dog-laughing-from-Laugh-It-Out-with-Luisa-Thwaites-443x325.jpg',
      description: 'Yeahhhhhh!',
      isAdoption: true,
      isLost: false
    }, {
      id: 3,
      name: 'Baby',
      photo: 'https://www.bestfunnies.com/wp-content/uploads/2012/06/Funny-Pig-48.jpg',
      description: 'Perdi o caminho de casa. Conhece meu dono? Quer me adotar?',
      isAdoption: false,
      isLost: false
    }, {
      id: 4,
      name: 'Balanoalvo',
      photo: 'https://www.paulickreport.com/wp-content/uploads/2015/08/Happy_horse.jpg',
      description: 'Oi! Fui abandonado e preciso de um novo lar. Sou bem divertido :D',
      isAdoption: false,
      isLost: true
    }, {
      id: 5,
      name: 'Cachurros',
      photo: 'http://talkingship.com/wp/wp-content/uploads/2013/12/dog-laughing-from-Laugh-It-Out-with-Luisa-Thwaites-443x325.jpg',
      description: 'Yeahhhhhh!',
      isAdoption: true,
      isLost: false
    }, {
      id: 6,
      name: 'Bacon',
      photo: 'https://www.bestfunnies.com/wp-content/uploads/2012/06/Funny-Pig-48.jpg',
      description: 'Perdi o caminho de casa. Conhece meu dono? Quer me adotar?',
      isAdoption: false,
      isLost: false
    }, {
      id: 7,
      name: 'Coice',
      photo: 'https://www.paulickreport.com/wp-content/uploads/2015/08/Happy_horse.jpg',
      description: 'Oi! Fui abandonado e preciso de um novo lar. Sou bem divertido :D',
      isAdoption: false,
      isLost: true
    }, {
      id: 8,
      name: 'Doggo',
      photo: 'http://talkingship.com/wp/wp-content/uploads/2013/12/dog-laughing-from-Laugh-It-Out-with-Luisa-Thwaites-443x325.jpg',
      description: 'Yeahhhhhh!',
      isAdoption: true,
      isLost: false
    }, {
      id: 9,
      name: 'Batata',
      photo: 'https://www.bestfunnies.com/wp-content/uploads/2012/06/Funny-Pig-48.jpg',
      description: 'Perdi o caminho de casa. Conhece meu dono? Quer me adotar?',
      isAdoption: false,
      isLost: false
    }]);
  }

  ngOnInit() {
  }

}
