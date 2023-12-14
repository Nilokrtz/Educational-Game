import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';
import { PontuacaoService } from 'src/app/services/PontuacaoService/PontuacaoService';
import * as Phaser from 'phaser';
import { MyScene } from './scene';
import { SceneCommunication } from './comunication.interface';

@Component({
  selector: 'app-moon-scenery',
  templateUrl: './moon-scenery.page.html',
  styleUrls: ['./moon-scenery.page.scss'],
})
export class MoonSceneryPage implements OnInit, SceneCommunication {
  private game!: Phaser.Game;
  totalPerguntas = 5;

  interactionVisible1 = false;
  interactionVisible2 = false;
  interactionVisible3 = false;
  interactionVisible4 = false;
  interactionVisible5 = false;

  choicesVisible1 = false;
  choicesVisible2 = false;
  choicesVisible3 = false;
  choicesVisible4 = false;
  choicesVisible5 = false;
  x = true;

  setTimeoutZero(callback: () => void): void {
    setTimeout(callback, 0);
  }

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

  showInteraction1(): void{
    this.interactionVisible1 = true;
  }

  showInteraction2(): void{
    this.interactionVisible2 = true;
  }
  showInteraction3(): void{
    this.interactionVisible3 = true;
  }
  showInteraction4(): void{
    this.interactionVisible4 = true;
  }
  showInteraction5(): void{
    this.interactionVisible5 = true;
  }
  
  handleInteractionClick() :void{
    console.log("Foi");
    this.x = false
  }

  todasPerguntasRespondidas(): boolean {
    return this.pontuacaoService.todasPerguntasRespondidas(this.totalPerguntas);
  }

  constructor(
    private pontuacaoService: PontuacaoService,
    private audioService: AudioService
  ) {}

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
    this.audioService.playMusic('../../../assets/music/moon.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}
