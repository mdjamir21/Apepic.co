import { Component, ViewChild } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { PhotoComponent} from './photo/photo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apepic';
  showElement = true; 
  isActive = false;
}

const logoimagepath = '/assets/ApEPIC-cropped.svg';