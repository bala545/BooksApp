import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { BooksComponent } from './books/books.component';
import { CreateNewbookComponent } from './create-newbook/create-newbook.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BooksComponent,
    CreateNewbookComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  //exports: [DashboardModule]

})
export class DashboardModule { }
