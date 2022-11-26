import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl: string = 'https://www.googleapis.com/books/v1/volumes?q=kaplan%20test%20prep';
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    return this.http.get<any>(this.booksUrl).pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
    );
}

private handleError(err: HttpErrorResponse) {

  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
  } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}

}
