import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { BooksComponent } from './books/books.component';
import { CreateNewbookComponent } from './create-newbook/create-newbook.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'books', component: BooksComponent},
  { path: 'create-newbook', component: CreateNewbookComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
