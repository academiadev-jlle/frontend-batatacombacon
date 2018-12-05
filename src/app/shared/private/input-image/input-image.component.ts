import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent {
  
  imgCarregada:boolean=false; // mostra a imagem quando carrega a imagem
  loading: boolean=false; // mostra loading no button

  // a cada redimensionada, o croppedImage é preenchido com a nova imagem.
  croppedImage: any = '';
  imageChangedEvent: any = '';

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
}
  