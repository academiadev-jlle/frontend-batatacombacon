import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit {
  
  constructor(private imageService: ImageService) { }
  
  ngOnInit() {
  }
  
  get(){
    this.imageService.getImage(2).subscribe(
      ret => {}, 
      error => {}
      )
    }

    /**----------------------------------- */

    imgCarregada:boolean=false; // mostra a imagem quando carrega a imagem
    loading: boolean=false; // mostra loading no button

    imageChangedEvent: any = '';
    croppedImage: any = '';
    
    fileChangeEvent(event: any): void {
      //this.loading=true; //nao funcionou como devia
      this.imageChangedEvent = event;
    }

    imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
    }

    imageLoaded() {
      this.loading=false;
      this.imgCarregada=true;
    }

    loadImageFailed() {}
    
    mountImage(imagem: File) {
      const formData = new FormData();
      formData.append('imagem', imagem);

      return formData;
    }
  }
  