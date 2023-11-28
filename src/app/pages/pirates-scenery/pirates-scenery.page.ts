import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-pirates-scenery',
  templateUrl: './pirates-scenery.page.html',
  styleUrls: ['./pirates-scenery.page.scss'],
})
export class PiratesSceneryPage implements OnInit, OnDestroy {
  private game!: Phaser.Game;
  private music!: Phaser.Sound.BaseSound;

  ngOnInit() {
    this.game = new Phaser.Game({
      // Configurações do jogo...
      scene: {
        preload: () => this.preload(),
        create: () => this.create(),
      },
    });
  }

  ngOnDestroy() {
    this.game.destroy(true);
  }

  preload() {
    this.game.scene.scenes[0].load.audio('pirates', '../../../assets/music/pirates.ogg');
  }

  create() {
    // Criando a música e iniciando a reprodução automaticamente
    this.music = this.game.scene.scenes[0].sound.add('pirates', { loop: true });
    this.music.play();
  }
}
