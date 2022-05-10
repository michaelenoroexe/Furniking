import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'offer-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class OfferItemComponent implements OnInit {
  
  @Input()
  image:string = "";
  @Input()
  discount:string = "";
  @Input()
  title:string = "";
  @Input()
  description:string = "";
  @Input()
  price:string = "";
  @Input()
  days:string = "";
  @Input()
  hours:string = "";
  @Input()
  minutes:string = "";
  @Input()
  seconds:string = "";

  priceNew:number = 0;
  interval:any;

  // Timer of discount
StartTimer() {
    this.interval = setInterval(() => {
      if ( +this.days > 0 && +this.hours == 0) {
        this.days = +this.days - 1+"";
        this.hours = "24";
      }
      if ( +this.hours > 0 && +this.minutes == 0) {
        this.hours = +this.hours - 1+"";
        this.minutes = "60";
      }
      if ( +this.minutes > 0 && +this.seconds == 0) {
        this.minutes = +this.minutes - 1+"";
        this.seconds = "60";
      }
      if (+this.seconds > 0) {
        this.seconds = +this.seconds - 1+"";
      }
      if (+this.days == 0 && +this.hours == 0 && +this.minutes == 0 && +this.seconds == 0)
      this.PauseTimer();
    },1000)
  }


  PauseTimer() {
    clearInterval(this.interval);
  }

  constructor() { }

  ngOnInit(): void { 
    // Calculate price with discount 
    this.priceNew = +this.price - (+this.price * +this.discount / 100);
    this.StartTimer();
  }
}
