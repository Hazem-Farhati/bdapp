import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Quizz } from '../classes/quizz';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const apiUrl = 'http://127.0.0.1:8000/api/records/quizz';
const apiUrl1 = 'http://127.0.0.1:8000/api/records/quizz';



@Injectable({
  providedIn: 'root'
})
export class QuizzsService {
 

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  
constructor(private http: HttpClient) { }

getQuizzs(token): Observable<any> {
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  })
  return this.http.get(apiUrl, { headers: headers });

}


/*
getQuizzs () {
  
  return this.http.get(this.baseUrl,    
      {
        headers:
          new HttpHeaders(
            {
              'Content-Type': 'application/json',
              'X-Requested-With': 'XMLHttpRequest',
              'MyClientCert': '',        // This is empty
              'MyToken': ''              // This is empty
            }
          )
      }).pipe(
    tap(_ => console.log('fetched quizzs')),
    catchError(this.handleError<Quizz[]>('getQuizzs', []))
  );
}
*/
}