import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent  implements OnInit {
  
  @Input() message?: string;
  @Input() image?: string;

  exibirComponente = true;

  constructor() { }

  ngOnInit() {}

  closeComponent() {
    this.exibirComponente = false;
  }
}
