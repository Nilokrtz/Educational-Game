// scene.ts
import * as Phaser from 'phaser';

export class MyScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private currentPart = 1; // A parte inicial do cenário
  private background!: Phaser.GameObjects.Image; // Adicione esta linha para manter a referência ao plano de fundo
  private npc1!: Phaser.Physics.Arcade.Sprite;

  constructor() {
    super({ key: 'my-scene' });
  }

  preload() {
    this.load.spritesheet('walkPlayerSheet', 'assets/SpritesProtagonista/spritsheet_walk.png', {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 7,
    });
    this.load.spritesheet('deathPlayerSheet', 'assets/SpritesProtagonista/spritsheet_death.png', {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 7,
    });
    this.load.spritesheet('attackPlayerSheet', 'assets/SpritesProtagonista/spritsheet_attack.png', {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 7,
    });
    this.load.spritesheet('staticPlayerSheet', 'assets/SpritesProtagonista/spritsheet_static.png', {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 1,
    });
    this.load.audio('middleage', 'assets/music/old-west.ogg');
    this.load.image('npc1', 'assets/Npcs/npc1.png');
    
    // Carregue todas as partes do cenário
    for (let i = 1; i <= 6; i++) {
      this.load.image(`background${i}`, `assets/scenerys/cenariomedieval/part${i}.jpg`);
    }
  }
  
  create() {
    const music = this.sound.add('middleage', { loop: true });
    music.play();

    // Add the background
    this.addBackground();
    // Add the player with an initial position adjustment
    this.player = this.physics.add.sprite(50, this.game.canvas.height / 1.54, 'player');
    this.player.setScale(2.5);

    // Create player animations
    this.anims.create({
        key: 'walkAnimation',
        frames: this.anims.generateFrameNumbers('walkPlayerSheet', {
            start: 0,
            end: 7,
        }),
        frameRate: 8,
        repeat: -1,
    });
    this.anims.create({
        key: 'deathAnimation',
        frames: this.anims.generateFrameNumbers('deathPlayerSheet', {
            start: 0,
            end: 7,
        }),
        frameRate: 8,
        repeat: 0,
    });
    this.anims.create({
        key: 'attackAnimation',
        frames: this.anims.generateFrameNumbers('attackPlayerSheet', {
            start: 0,
            end: 7,
        }),
        frameRate: 8,
        repeat: 0,
    });
    this.anims.create({
        key: 'staticAnimation',
        frames: this.anims.generateFrameNumbers('staticPlayerSheet', {
            start: 0,
            end: 1,
        }),
        frameRate: 2,
        repeat: -1,
    });

    // Play the player animation
    this.player.play('walkAnimation');    
    // Add a movement animation to the player
    const movePlayerTween = this.tweens.add({
      targets: this.player,
      x: this.game.canvas.width,
      duration: 5000,
      ease: 'Power',
      onComplete: () => {
            this.changeBackground();
            this.player.x = 50;
            this.player.play('walkAnimation');
            if (this.player.x = 50) {
              this.player.anims.stop();
              this.player.play('statickAnimation');
              /* função para chamar o component */
          }

        },
    });

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

    this.npc1 = this.physics.add.sprite(200, this.game.canvas.height / 1.5, 'npc1');
    this.npc1.setFlipX(true);
    this.npc1.setScale(2.5);

    // Mantém o jogador centralizado vertical e horizontalmente
    this.player.x = this.game.canvas.width / 1.5;
    this.player.y = this.game.canvas.height / 1.54;
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