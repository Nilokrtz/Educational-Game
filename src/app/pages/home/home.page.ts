import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private game!: Phaser.Game;
  private music!: Phaser.Sound.BaseSound;

  ngOnInit() {
    
  }

  ngOnDestroy() {
    this.game.destroy(true);
  }

  preload() {
    this.game.scene.scenes[0].load.audio('home', '../../../assets/music/home.ogg');
  }

  create() {
    // Criando a música e iniciando a reprodução automaticamente
    this.music = this.game.scene.scenes[0].sound.add('home', { loop: true });
    this.music.play();
  }
}
