import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent  implements OnInit {
  
  @Input() escolha1?: string;
  @Input() escolha2?: string;
  @Input() escolha3?: string;
  @Input() escolha4?: string;
  @Input() pergunta?: string;


  checkTheValue(){

  }
  
  ngOnInit() {}

}
