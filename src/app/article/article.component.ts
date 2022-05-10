import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  // Input parameters of an item
  @Input()
  pic:string = '';
  @Input()
  type:string = '';
  @Input()
  date:string = '';
  @Input()
  title:string = '';
  @Input()
  link:string = '';


  constructor() { }

  ngOnInit(): void { }
}
