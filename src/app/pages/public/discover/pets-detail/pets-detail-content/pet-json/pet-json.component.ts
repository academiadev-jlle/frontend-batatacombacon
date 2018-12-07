import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pet } from 'src/app/classes/pets/pet';
import { PetService } from 'src/app/services/pet.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-pet-json',
  templateUrl: './pet-json.component.html',
  styleUrls: ['./pet-json.component.scss']
})
export class PetJsonComponent implements OnInit {

  pet: Pet;
  pageIdentifier: string;
  pageUrl: string;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location,
    private sanitizer: DomSanitizer,
    private imageService: ImageService) { }

  ngOnInit() {
    this.getPet();
    
    // //garantindo que não de erro quando a página abrir.
    // this.pet = new Pet();

    this.pageIdentifier = this.route.snapshot.paramMap.get('id');
    this.pageUrl = `https://frontendbatatacombacon.disqus.com${ this.pageIdentifier }`;
  }

  getPet(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.petService.getPet(id)
      .subscribe(pet => {
        this.pet = pet
      
        // get image from database
        let lastImage = +pet.fotos.sort()[pet.fotos.length-1]
        this.imageService.getImage(lastImage).subscribe(
          retImage => {
            pet.photoLink = this.sanitize(URL.createObjectURL(retImage));
          },
          errorImage => {
            pet.photoLink = './assets/dog-silhouette.jpg'
          }
        )
        // get image from database
      
      
      });
  }

  goBack(): void {
    this.location.back();
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
