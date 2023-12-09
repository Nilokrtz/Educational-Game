import * as Phaser from 'phaser';
import { MyScene } from './scene';
import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';

@Component({
  selector: 'app-prehistoric-scenery',
  templateUrl: './prehistoric-scenery.page.html',
  styleUrls: ['./prehistoric-scenery.page.scss'],
})
export class PrehistoricSceneryPage {
  constructor(private audioService: AudioService) {}
  private game!: Phaser.Game;

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
      scene: [MyScene],
    });
  }

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/pre-historic.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}
