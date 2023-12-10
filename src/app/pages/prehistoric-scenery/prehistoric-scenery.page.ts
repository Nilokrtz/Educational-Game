import * as Phaser from 'phaser';
import { MyScene } from './scene';
import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';
import { SceneCommunication } from './comunication.interface';


@Component({
  selector: 'app-prehistoric-scenery',
  templateUrl: './prehistoric-scenery.page.html',
  styleUrls: ['./prehistoric-scenery.page.scss'],
})
export class PrehistoricSceneryPage implements  OnInit, SceneCommunication{
  constructor(private audioService: AudioService) {}
  
  private game!: Phaser.Game;

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
    this.audioService.playMusic('../../../assets/music/pre-historic.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}
