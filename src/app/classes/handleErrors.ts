import { Observable, of } from "rxjs";

export class HandleError{

    handleThis<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); // log to console instead
          //this.log(`${operation} failed: ${error.message}`);
          return of(result as T);
        };
      }
}