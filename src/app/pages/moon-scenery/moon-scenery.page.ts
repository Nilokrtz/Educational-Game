import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-moon-scenery',
  templateUrl: './moon-scenery.page.html',
  styleUrls: ['./moon-scenery.page.scss'],
})
export class MoonSceneryPage implements OnInit, OnDestroy {

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
     this.game.scene.scenes[0].load.audio('moon', '../../../assets/music/moon.ogg');
   }

  create() {
    // Criando a música e iniciando a reprodução automaticamente
    this.music = this.game.scene.scenes[0].sound.add('moon', { loop: true });
    this.music.play();
  }
}
