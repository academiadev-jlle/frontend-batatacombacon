import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-input-image',
  templateUrl: './input-image.component.html',
  styleUrls: ['./input-image.component.scss']
})
export class InputImageComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

  active:boolean=true;
  url: string;
  formData: FormData;
  file: File;

  onFileChanged(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      
      reader.onload = (event: ProgressEvent) => {
        this.url  = (<FileReader>event.target).result as string;
      }
      
      reader.readAsDataURL(event.target.files[0]);

      this.file = event.target.files[0];

      //this.imageService.addImage(event.target.files[0]).subscribe(ret => console.log(ret))
    }
  }

  send(){
    this.imageService.addImage(this.file).subscribe(ret => console.log(ret))
  }

  get(){
    this.imageService.getImage(2).subscribe(
      ret => console.log(ret), 
      error => console.log(error)
    )
  }

}
