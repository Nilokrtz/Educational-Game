import * as Phaser from 'phaser';
import { MyScene } from './scene';
import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';

@Component({
  selector: 'app-pirates-scenery',
  templateUrl: './pirates-scenery.page.html',
  styleUrls: ['./pirates-scenery.page.scss'],
})
export class PiratesSceneryPage {
  private game!: Phaser.Game;

  constructor(private audioService: AudioService) {}

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
    this.audioService.playMusic('../../../assets/music/pirates.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}
