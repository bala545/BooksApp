import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
// import { MatCard, MatCardTitle,MatCardSubtitle,MatCardContent} from '@angular/material/card';
// import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    //MatCard, MatCardTitle,MatCardSubtitle,MatCardContent,MatFormField
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule    // MatCard,
    // MatCardContent,
    // MatCard, MatCardTitle,MatCardSubtitle,MatCardContent,
    // MatCardSubtitle,
    //MatFormFieldModule
  ],
  // exports: [
  //   MatCard, MatCardTitle,MatCardSubtitle,MatCardContent,MatFormField],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
