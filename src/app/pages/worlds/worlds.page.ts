import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.page.html',
  styleUrls: ['./worlds.page.scss'],
})
export class WorldsPage implements OnInit, OnDestroy {
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
    this.game.scene.scenes[0].load.audio('worlds', '../../../assets/music/worlds.ogg');
  }

  create() {
    // Criando a música e iniciando a reprodução automaticamente
    this.music = this.game.scene.scenes[0].sound.add('worlds', { loop: true });
    this.music.play();
  }
}
