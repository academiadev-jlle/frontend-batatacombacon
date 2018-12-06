import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent {
  imgCarregada:boolean=false; // mostra a imagem quando carrega a imagem

  // a cada redimensionada, o croppedImage é preenchido com a nova imagem.
  croppedImage: any = '';
  imageChangedEvent: any = '';

  fileChangeEvent(event: any): void {
    this.imgCarregada=true;
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.file;
  }

  imageLoaded() {
    this.imgCarregada=true;
  }

  loadImageFailed() {}

  limparInput(){
    this.imageChangedEvent='';
    this.croppedImage='';
    this.imgCarregada=false;
  }
}
  