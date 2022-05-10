import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class FurnExampleComponent implements OnInit {
  rate = [1,2,3,4,5];
  buttonsVisib:boolean = false;
  // Input parameters of an item
  @Input()
  type:string = '';
  @Input()
  image:string = '';
  @Input()
  typ:string = '';
  @Input()
  name:string = '';
  @Input()
  priceNew:string = '0';
  @Input()
  priceOld:string = '0';
  @Input()
  rating:string = '';
  // Check type of product and set background color depends on
  TypeCh(t:string) {
    if (t == "New") return "#00B7F1";
    if (t == "Sale") return "#7AC751";
    return "#FF6868"
  }
  // Display furniture correct rating
  RateCh(rate:number) {
    if (this.rating == "") return "";
    if (rate <= +this.rating) return "url(../../assets/Trending/top-products/item-images/ratingplus.png)"
    return "url(../../assets/Trending/top-products/item-images/ratingmin.png)"
  }
  // Appearing buttons on hovering mouse 
  ButtonAppear() {
    this.buttonsVisib = true;
  }
  ButtonHide() {
    this.buttonsVisib = false;
  }

  constructor() { }

  ngOnInit(): void { }
}
