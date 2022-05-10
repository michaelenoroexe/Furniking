import { CdkStepper } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: ProductPagesComponent }]
})
export class ProductPagesComponent extends CdkStepper implements OnInit {

  // Change index to correct 1-100 diapason
  public get selectedIn() : number {
    return this.selectedIndex + 1;
  }
  public set selectedIn(ind:number) {
    this.selectedIndex = ind - 1;
  }
  
  ngOnInit(): void {
    this.selectedIndex = 0;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
