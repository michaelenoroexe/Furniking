import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class CommentComponent implements OnInit {
  
  buttonsVisib:boolean = false;
  // Input parameters of an item
  @Input()
  pic:string = '';
  @Input()
  text:string = '';
  @Input()
  name:string = '';
  @Input()
  addi:string = '';


  constructor() { }

  ngOnInit(): void { }
}
