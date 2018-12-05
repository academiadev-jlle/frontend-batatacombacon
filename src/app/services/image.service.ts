import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    //'Content-Type': 'multipart/form-data',
    'accept': '*/*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imageUrl = 'https://backendcombacon.herokuapp.com/images';

  constructor(private http: HttpClient) { }

  addPetImage(imagem: File, petId: number): Observable<any> {

    console.log(imagem, petId)

    const formData = new FormData();
    formData.append('imagem', imagem);

    return this.http.post(`${this.imageUrl}/pet/${petId}`, formData).pipe(
      catchError(this.handleError)
    );
  }

  // adiciona uma imagem qualquer
  addImage(imagem: File): Observable<any> {
    const formData = new FormData();
    formData.append('imagem', imagem);

    return this.http.post(this.imageUrl, formData).pipe(
      catchError(this.handleError)
    );
  }

  getImage(id: number): Observable<any> {
    return this.http.get<any>(`${this.imageUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any) { 
    return error;
  }
}
