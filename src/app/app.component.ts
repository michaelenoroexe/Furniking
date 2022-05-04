import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Furniking';
  selected = new FormControl('USD');
  constructor() {
  }
  
}
