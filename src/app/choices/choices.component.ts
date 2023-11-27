import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ResultComponent } from '../result/result.component';

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

  constructor(private modalController: ModalController) {}

  async checkTheValue(answer: string) { 
    console.log(answer);
    console.log(typeof(answer));
    console.log(this.respostaCorreta);
    console.log(answer == this.respostaCorreta ? "correto" : "errado" );

    let message = '';
    let image = '';

    if (answer == this.respostaCorreta) {
      message = `Parabéns! \n Você acertou.`;
      image = '../../assets/Dino.png';
    } else {
      message = `A resposta correta é a: ${this.respostaCorreta} + \n + ${this.explicacao}`;
      image = '../../assets/cowboy.png';
    }

    await this.openModal(message, image);
    this.exibirComponente = false;
  }

  async openModal(message: string, image: string) {
    const modal = await this.modalController.create({
      component: ResultComponent,
      componentProps: {
        message: message,
        image: image,
      }
    });
    
    return await modal.present();
  }
  
  ngOnDestroy() {
    console.log('Componente destruído');
  }

  ngOnInit() {}

}
