import { Component, OnInit } from '@angular/core';
import "semantic-ui-css/semantic.js";
import { BookService } from './book.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';




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
  hideMenuitems: boolean = false;
  constructor(private booService: BookService) { }

  ngOnInit(): void {
    const header = document.getElementById('glb-header') as HTMLInputElement;
    header.style.width = "calc(114% - 270px)";
    const main = document.getElementById('main') as HTMLInputElement;
    main.style.width = "calc(114% - 260px)";
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
    const header = document.getElementById('glb-header') as HTMLInputElement;
    header.style.width = "calc(100% - 270px)";
    const main = document.getElementById('main') as HTMLInputElement;
    main.style.width = "calc(100% - 260px)";
    this.hideMenuitems = true;
  }
  
   closeNav() {
    const mySidenav = document.getElementById('mySidenav') as HTMLInputElement;
    mySidenav.style.width = "60px";
    const header = document.getElementById('glb-header') as HTMLInputElement;
    header.style.width = "calc(114% - 270px)";
    const main = document.getElementById('main') as HTMLInputElement;
    main.style.width = "calc(114% - 260px)";
    this.hideMenuitems = false;
  }

}
