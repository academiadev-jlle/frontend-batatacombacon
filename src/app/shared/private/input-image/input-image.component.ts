import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit, OnChanges {
  
  @Input() imagePetEdit:any;
  @Input() creatingNewPet:boolean;

  srcImage: any; // caminho da imagem
  imgCarregada:boolean=false; // mostra a imagem quando carrega a imagem

  // a cada redimensionada, o croppedImage é preenchido com a nova imagem.
  croppedImage: any = '';
  imageChangedEvent: any = '';

  ngOnChanges(changes: SimpleChanges): void {
    if("imagePetEdit" in changes || "creatingNewPet" in changes){
      if(this.creatingNewPet){
        console.log("new pet!!")
        this.srcImage= './assets/dog-silhouette.jpg'
      }else{
        this.srcImage = this.sanitize(this.imagePetEdit)
      }
    }
  }

  ngOnInit() {}

  constructor(private sanitizer: DomSanitizer) {}
  
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

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
  