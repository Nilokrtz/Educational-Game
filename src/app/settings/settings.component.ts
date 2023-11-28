import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent  implements OnInit {

  private game!: Phaser.Game;
  private music!: Phaser.Sound.BaseSound;
  private isMusicPlaying: boolean = true;

  ngOnInit() {
    this.game = new Phaser.Game({
      // Configurações do jogo...
      scene: {
        preload: () => this.preload(),
        create: () => this.create(),
      },
    });
  }

  preload() {
    this.game.scene.scenes[0].load.audio('prehistoric', 'assets/music/prehistoric.ogg');
  }

  create() {
    // Criando a música e iniciando a reprodução automaticamente
    this.music = this.game.scene.scenes[0].sound.add('prehistoric', { loop: true });
    this.music.play();
  }

  toggleMusic(event: any) {
    if (event.detail.checked) {
      this.music.pause();
      this.isMusicPlaying = false;
    } else {
      this.music.resume();
      this.isMusicPlaying = true;
    }
  }
}
