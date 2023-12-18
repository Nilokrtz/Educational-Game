import * as Phaser from 'phaser';
import { MyScene } from './scene';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';
import { SceneCommunication } from './comunication.interface';
import { PontuacaoService } from 'src/app/services/PontuacaoService/PontuacaoService';

@Component({
  selector: 'app-pirates-scenery',
  templateUrl: './pirates-scenery.page.html',
  styleUrls: ['./pirates-scenery.page.scss'],
})
export class PiratesSceneryPage implements OnInit, OnDestroy, SceneCommunication{
  private game!: Phaser.Game;
  totalPerguntas = 5;  

  interactionVisible1 = false;
  interactionVisible2 = false;
  interactionVisible3 = false;
  interactionVisible4 = false;
  interactionVisible5 = false;
  interactionVisible6 = false;
  interactionVisible7 = false;
  
  choicesVisible1 = false;
  choicesVisible2 = false;
  choicesVisible3 = false;
  choicesVisible4 = false;
  choicesVisible5 = false;
  x = true;
  pontuacao = 0;
  estrelas = 0;

  showChoices1() {
    this.choicesVisible1 = true;
  }

  showChoices2() {
    this.choicesVisible2 = true;
  }

  showChoices3() {
    this.choicesVisible3 = true;
  }

  showChoices4() {
    this.choicesVisible4 = true;
  }

  showChoices5() {
    this.choicesVisible5 = true;
  }

  showInteraction1() {
    this.interactionVisible1 = true;
  }
  
  showInteraction2() {
    this.interactionVisible2 = true;
  }

  showInteraction3() {
    this.interactionVisible3 = true;
  }

  showInteraction4() {
    this.interactionVisible4 = true;
  }
  showInteraction5() {
    this.interactionVisible5 = true;
  }
  showInteraction6() {
    this.interactionVisible6 = true;
  }
  showInteraction7() {
    this.interactionVisible7 = true;
  }

  getPontuacao(): number {
    return this.pontuacaoService.getPontuacao();
 }
 getEstrelas(): number {
   return this.estrelas;
 }
 aumentarPontuacao(pontos: number): void {
   this.pontuacao += pontos;
 }
 closeComponent1() {
   this.choicesVisible1 = false;
 }
 closeComponent2() {
   this.choicesVisible2 = false;
 }
 closeComponent3() {
   this.choicesVisible3 = false;
 }
 closeComponent4() {
   this.choicesVisible4 = false;
 }
 closeComponent5() {
   this.choicesVisible5 = false;
 }
 
 handleInteractionClick() :void{
   console.log("Foi");
   this.x = false;
 }

 todasPerguntasRespondidas(): boolean {
   return this.pontuacaoService.todasPerguntasRespondidas(this.totalPerguntas);
 }

  constructor(private audioService: AudioService,private pontuacaoService: PontuacaoService) {}

  ngOnInit() {
    const communication: SceneCommunication = this;
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
      scene: [new MyScene(communication)], 
    });
  }
  
  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/pirates.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
  
  ngOnDestroy() {
    this.game.destroy(true);
  }
}
