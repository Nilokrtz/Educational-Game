import { Component, Input, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ElementRef, HostListener } from '@angular/core';
import { ResultComponent } from '../result/result.component';
import { PontuacaoService } from 'src/app/services/PontuacaoService/PontuacaoService';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.scss'],
})
export class ChoicesComponent implements OnInit {
  perguntasRespondidas = 0;
  @Input() escolha1?: string;
  @Input() escolha2?: string;
  @Input() escolha3?: string;
  @Input() escolha4?: string;
  @Input() pergunta?: string;
  @Input() respostaCorreta?: string;
  @Input() explicacao?: string;

  exibirComponente = true;

  @ViewChild('resultContainer', { read: ViewContainerRef }) resultContainer!: ViewContainerRef;
  
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private el: ElementRef, private pontuacaoService: PontuacaoService) {}

  async checkTheValue(answer: string) { 
    console.log(answer);
    console.log(typeof(answer));
    console.log(this.respostaCorreta);
    console.log(answer == this.respostaCorreta ? "correto" : "errado" );

    let message = '';
    let image = '';

    if (answer == this.respostaCorreta) {
      message = `Parabéns, você acertou!`;
      image = '../../../assets/Reactions/Right.png';
      this.pontuacaoService.adicionarPontos(1);
      this.pontuacaoService.adicionarRespondido(1);
  
      const pontuacaoAtual = this.pontuacaoService.getPontuacao();
      this.perguntasRespondidas++;
      let estrelas = 0;
    if (pontuacaoAtual >= 5) {
      estrelas = 3;
    } else if (pontuacaoAtual >= 3) {
      estrelas = 2;
    } else if (pontuacaoAtual >= 1) {
      estrelas = 1;
    }
    this.pontuacaoService.adicionarEstrelas(estrelas); // Adicionar estrelas com base na pontuação

    console.log(`Estrelas: ${estrelas}`);
    console.log('Pontuação final:', this.pontuacaoService.getPontuacao());
    
    } else {
      this.pontuacaoService.adicionarRespondido(1);
      message = `A resposta correta é a: ${this.respostaCorreta} \n${this.explicacao}`;
      image = '../../../assets/Reactions/Wrong.png';
      
    }

    this.openResultComponent(message, image);
    this.exibirComponente = false;
  }

  openResultComponent(message: string, image: string) {
    this.resultContainer.clear();  
    const factory = this.componentFactoryResolver.resolveComponentFactory(ResultComponent);    
    const resultComponentRef = this.resultContainer.createComponent(factory);    
    resultComponentRef.instance.message = message;
    resultComponentRef.instance.image = image;

    const closeOnClick = (event: Event) => {
      this.resultContainer.clear(); 
      document.removeEventListener('click', closeOnClick); 
    };
    document.addEventListener('click', closeOnClick);
  }

  ngOnDestroy() {
    console.log('Componente destruído');
  }

  ngOnInit() {}

  ngAfterViewInit() {
    
  }

  @HostListener('click', ['$event'])
  handleClick(event: Event) {
    event.stopPropagation(); 
  }
}
