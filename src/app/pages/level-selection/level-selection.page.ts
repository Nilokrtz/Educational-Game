import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.page.html',
  styleUrls: ['./level-selection.page.scss'],
})
export class LevelSelectionPage implements OnInit, OnDestroy {
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
    this.game.scene.scenes[0].load.audio('level-selection', '../../../assets/music/level-selection.ogg');
  }

  create() {
    // Criando a música e iniciando a reprodução automaticamente
    this.music = this.game.scene.scenes[0].sound.add('level-selection', { loop: true });
    this.music.play();
  }
}