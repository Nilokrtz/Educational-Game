import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Phaser from 'phaser';

@Component({
  selector: 'app-old-west-scenery',
  templateUrl: './old-west-scenery.page.html',
  styleUrls: ['./old-west-scenery.page.scss'],
})
export class OldWestSceneryPage implements OnInit, OnDestroy {
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
    this.game.scene.scenes[0].load.audio('happywalking', '../../../assets/music/happywalking.ogg');
  }

  create() {
    // Criando a música e iniciando a reprodução automaticamente
    this.music = this.game.scene.scenes[0].sound.add('happywalking', { loop: true });
    this.music.play();
  }
}
