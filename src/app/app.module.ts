import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { PhotoComponent } from './photo/photo.component';
import { NgOptimizedImage } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    PhotoComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
