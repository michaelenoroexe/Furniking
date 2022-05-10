import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-categ',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: ProductsCategoriesComponent }]
})
export class ProductsCategoriesComponent extends CdkStepper implements OnInit {

  ngOnInit(): void {
    this.selectedIndex = 0;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
