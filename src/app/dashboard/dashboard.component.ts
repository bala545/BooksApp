import { Component, OnInit } from '@angular/core';
import "semantic-ui-css/semantic.js";
import { BookService } from './book.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

// import { MatCard, MatCardTitle,MatCardSubtitle,MatCardContent} from '@angular/material/card';
// import {MatFormField} from '@angular/material/form-field';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})


export class DashboardComponent implements OnInit{
  
  longText:string =  "sample text";
  title:string = "Book Name";
  allBooks:any = [];
  errorMessage:any = '';
  constructor(private booService: BookService) { }

  ngOnInit(): void {
    this.booService.getAllBooks().subscribe(books => {
       this.allBooks = books;
       console.log(this.allBooks);
    },
    error => this.errorMessage = <any>error
     );
  }

  openNav() {
    const input = document.getElementById('mySidenav') as HTMLInputElement;
    input.style.width = "250px";
    const main = document.getElementById('main') as HTMLInputElement;
    main.style.marginLeft = "250px";
  }
  
   closeNav() {
    const mySidenav = document.getElementById('mySidenav') as HTMLInputElement;
    mySidenav.style.width = "0";
    const mySidenav1 = document.getElementById('main') as HTMLInputElement;
    mySidenav1.style.marginLeft= "0";
  }

}
