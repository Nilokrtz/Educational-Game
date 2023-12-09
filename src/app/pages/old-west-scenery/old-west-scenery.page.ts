import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';
import * as Phaser from 'phaser';
import { MyScene } from './scene';

@Component({
  selector: 'app-old-west-scenery',
  templateUrl: './old-west-scenery.page.html',
  styleUrls: ['./old-west-scenery.page.scss'],
})
export class OldWestSceneryPage {
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
    this.audioService.playMusic('../../../assets/music/old-west.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}
