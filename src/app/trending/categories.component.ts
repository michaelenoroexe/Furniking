import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trend-categ',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CategoriesComponent }]
})
export class CategoriesComponent extends CdkStepper implements OnInit {

  ngOnInit(): void {
    this.selectedIndex = 0;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
