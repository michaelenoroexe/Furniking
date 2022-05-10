import { Component, OnInit } from '@angular/core';
import { CdkStepper} from '@angular/cdk/stepper'

@Component({
  selector: 'customer-output',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomerPagesComponent }]
})
export class CustomerPagesComponent extends CdkStepper implements OnInit {
  ngOnInit(): void {
    this.selectedIndex = 1;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
