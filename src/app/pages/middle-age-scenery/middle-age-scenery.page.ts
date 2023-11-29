import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { GameScene } from './game-scene';

@Component({
  selector: 'app-middle-scenery',
  templateUrl: './middle-age-scenery.page.html',
  styleUrls: ['./middle-age-scenery.page.scss'],
})
export class MiddleAgeSceneryPage implements OnInit, OnDestroy {
  private game!: Phaser.Game;
  private music!: Phaser.Sound.BaseSound;

  ngOnInit() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
      },
      scene: [GameScene],
    });
  }

  ngOnDestroy() {
    this.game.destroy(true);
  }

  preload() {
    this.game.scene.scenes[0].load.audio('going-up', '../../../assets/music/going-up.ogg');
  }

  create() {
    // Criando a música e iniciando a reprodução automaticamente
    this.music = this.game.scene.scenes[0].sound.add('going-up', { loop: true });
    this.music.play();
  }

}
