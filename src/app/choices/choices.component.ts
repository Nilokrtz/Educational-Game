import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent implements OnInit {

  @Input() escolha1?: string;
  @Input() escolha2?: string;
  @Input() escolha3?: string;
  @Input() escolha4?: string;
  @Input() pergunta?: string;
  @Input() respostaCorreta?: string;
  @Input() explicacao?: string;

  exibirComponente = true;

  checkTheValue(answer: string) { 
    console.log(answer);
    console.log(typeof(answer));
    console.log(this.respostaCorreta);
    console.log(answer == this.respostaCorreta ? "correto" : "errado" );

    if (answer == this.respostaCorreta) {
      alert('Parabéns!' + '\n' +'Você acertou.');
    } else {
      alert('A resposta correta é a: ' + `${this.respostaCorreta}` + '\n' + `${this.explicacao}`);
    }

    this.exibirComponente = false;
  }
  
  ngOnDestroy() {
    console.log('Componente destruído');
  }

  ngOnInit() {}

}
