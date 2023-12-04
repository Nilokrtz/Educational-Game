// scene.ts
import * as Phaser from 'phaser';

export class MyScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private currentPart = 1; // A parte inicial do cenário

  constructor() {
    super({ key: 'my-scene' });
  }

  preload() {
    this.load.audio('middleage', 'assets/music/old-west.ogg');

    // Carregue todas as partes do cenário
    for (let i = 1; i <= 6; i++) {
      this.load.image(`background${i}`, `assets/scenerys/cenariomedieval/part${i}.jpg`);
    }
  }

  create() {
    const music = this.sound.add('middleage', { loop: true });
    music.play();

    // Adicione o cenário ao fundo
    this.addBackground();

    // Adicione o jogador (substitua isso com sua lógica)
    this.player = this.physics.add.sprite(100, 100, 'player');

    // Configura a câmera para seguir o jogador
    this.cameras.main.startFollow(this.player);
  }
  

  override update() {
    // Verifique se o jogador atingiu os limites da tela
    if (this.player.x > this.game.canvas.width) {
      // O jogador atingiu o lado direito, mude o cenário
      this.changeBackground();
    }
    // Adicione mais verificações conforme necessário (lado esquerdo, topo, base)
  }

  private addBackground() {
    // Adicione a parte inicial do cenário
    const background = this.add.image(0, 0, `background${this.currentPart}`).setOrigin(0, 0);

    // Ajusta o tamanho do cenário para cobrir toda a tela
    background.displayWidth = this.game.canvas.width;
    background.displayHeight = this.game.canvas.height;
  }

  private changeBackground() {
    // Carregue e exiba a próxima parte do cenário
    this.currentPart = (this.currentPart % 6) + 1;
    this.addBackground();
  }
}