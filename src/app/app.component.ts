import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'My first encounter with angular';
  constructor(
    private location: Location,
  ) { }
  handleBackButton() {
    this.location.back();
  }
}
