// scene.ts
import * as Phaser from 'phaser';

export class MyScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private currentPart = 1; // A parte inicial do cenário
  private background!: Phaser.GameObjects.Image; // Adicione esta linha para manter a referência ao plano de fundo

  constructor() {
    super({ key: 'my-scene' });
  }

  preload() {
    this.load.audio('middleage', 'assets/music/old-west.ogg');
    this.load.image('player', 'assets/SpritesProtagonista/7.png');

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
  
    // Adicione o jogador com uma posição inicial ajustada
    this.player = this.physics.add.sprite(50, this.game.canvas.height / 2, 'player');
    this.player.setScale(3);
  
    // Adicione uma animação de movimento ao jogador
    const movePlayerTween = this.tweens.add({
      targets: this.player,
      x: this.game.canvas.width, // Mova para o final da tela
      duration: 1000, // Duração em milissegundos (ajuste conforme necessário)
      ease: 'Power', // Efeito de easing (ajuste conforme necessário)
      onComplete: () => {
        // Chamado quando a animação do jogador é concluída
        this.changeBackground();
        
        // Após a mudança de cenário, mova o jogador de volta para a posição inicial
        this.player.x = 50;  // ou a posição inicial desejada
      },
    });
  
    // Adiciona um ouvinte de evento para redimensionamento da janela
    window.addEventListener('resize', () => this.handleResize());
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
    this.background = this.add.image(0, 0, `background${this.currentPart}`).setOrigin(0, 0);
    // Ajusta o tamanho do cenário para cobrir toda a tela
    this.background.displayWidth = this.game.canvas.width;
    this.background.displayHeight = this.game.canvas.height;
  }

  private changeBackground() {
    // Carregue e exiba a próxima parte do cenário
    this.currentPart = (this.currentPart % 6) + 1;

    // Atualize a textura
    this.background.setTexture(`background${this.currentPart}`);

    // Ajusta o tamanho do cenário para cobrir toda a tela
    this.background.displayWidth = this.game.canvas.width;
    this.background.displayHeight = this.game.canvas.height;

    // Mantém o jogador centralizado vertical e horizontalmente
    this.player.x = this.game.canvas.width / 2;
    this.player.y = this.game.canvas.height / 2;
  }

  private handleResize() {
    // Atualiza o cenário quando a janela é redimensionada
    this.scaleBackground();
  }

  private scaleBackground() {
    // Ajusta o tamanho do cenário para cobrir toda a tela
    const background = this.add.image(0, 0, `background${this.currentPart}`).setOrigin(0, 0);
    background.displayWidth = this.game.canvas.width;
    background.displayHeight = this.game.canvas.height;
    background.destroy(); // Remove a imagem temporária
  }
}
