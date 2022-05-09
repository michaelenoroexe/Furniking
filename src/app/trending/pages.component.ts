import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: PagesComponent }]
})
export class PagesComponent extends CdkStepper implements OnInit {

  ngOnInit(): void {
    this.selectedIndex = 1;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
