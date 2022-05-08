import { Component, OnInit } from '@angular/core';
import { CdkStepper} from '@angular/cdk/stepper'

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: CustomStepperComponent }]
})
export class CustomStepperComponent extends CdkStepper implements OnInit {
  ngOnInit(): void {
    this.selectedIndex = 2;
  }

  selectStepByIndex(index: number): void {
    this.selectedIndex = index;
  }
}
