import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent  implements OnInit {

  @Input() palavra1?: string;
  @Input() palavra2?: string;
  @Input() palavra3?: string;
  @Input() palavra4?: string;
  @Input() palavra5?: string;
  @Input() word1?: string;
  @Input() word2?: string;
  @Input() word3?: string;
  @Input() word4?: string;
  @Input() word5?: string;
  
  constructor() {}

  ngOnInit() {}

}
