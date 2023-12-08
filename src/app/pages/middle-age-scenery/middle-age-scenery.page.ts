// middle-age-scenery.page.ts
import { Component, ComponentFactoryResolver, Injector, ApplicationRef, EmbeddedViewRef, OnDestroy, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';
import * as Phaser from 'phaser';
import { MyScene } from './scene'; // Import the custom scene
import { InteractionComponent } from '../../component/interaction/interaction.component';
import { ChoicesComponent } from '../../component/choices/choices.component';

@Component({
  selector: 'app-middle-age-scenery',
  templateUrl: './middle-age-scenery.page.html',
  styleUrls: ['./middle-age-scenery.page.scss'],
})
export class MiddleAgeSceneryPage implements OnInit, OnDestroy {
  private game!: Phaser.Game;

  constructor(
    private audioService: AudioService,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/middle-age.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }

  ngOnInit() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
        },
      },
      scene: [MyScene], // Use your custom scene here
    });
  }

  // Função para chamar o componente de interação
  showInteractionComponent(message: string, image: string) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(InteractionComponent);
    const componentRef = componentFactory.create(this.injector);
  
    // Informe ao TypeScript o tipo esperado do componentRef.instance
    const interactionInstance = componentRef.instance as InteractionComponent;
  
    // Configura as propriedades do componente com os valores fornecidos
    interactionInstance.message = message;
    interactionInstance.image = image;
  
    this.appRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElement);
  
    componentRef.onDestroy(() => {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
    });
  }
  
  // Função para chamar o componente de escolhas
showChoicesComponent(
  escolha1: string,
  escolha2: string,
  escolha3: string,
  escolha4: string,
  pergunta: string,
  respostaCorreta: string,
  explicacao: string
) {
  const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ChoicesComponent);
  const componentRef = componentFactory.create(this.injector);

  // Configura as propriedades do componente com os valores fornecidos
  componentRef.instance.escolha1 = escolha1;
  componentRef.instance.escolha2 = escolha2;
  componentRef.instance.escolha3 = escolha3;
  componentRef.instance.escolha4 = escolha4;
  componentRef.instance.pergunta = pergunta;
  componentRef.instance.respostaCorreta = respostaCorreta;
  componentRef.instance.explicacao = explicacao;

  this.appRef.attachView(componentRef.hostView);
  const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  document.body.appendChild(domElement);

  componentRef.onDestroy(() => {
    this.appRef.detachView(componentRef.hostView);
    componentRef.destroy();

    
  });
}
// Função para chamar o componente de interação
showInteraction() {
  const message = 'Olá mundo';
  const image = '../../../assets/Reactions/interaction2.png';
  this.showInteractionComponent(message, image);
}

// Função para chamar o componente de escolhas
showChoices() {
  const choicesOptions = {
    escolha1: '1',
    escolha2: '2',
    escolha3: '3',
    escolha4: '4',
    pergunta: 'Qual é o número primo?',
    respostaCorreta: 'B',
    explicacao: 'Porque os números 1, 3 e 4 não são primos'
  };
  this.showChoicesComponent(
    choicesOptions.escolha1,
    choicesOptions.escolha2,
    choicesOptions.escolha3,
    choicesOptions.escolha4,
    choicesOptions.pergunta,
    choicesOptions.respostaCorreta,
    choicesOptions.explicacao
  );
}



  ngOnDestroy() {
    this.game.destroy(true);
  }
}
