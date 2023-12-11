// scene.ts
import * as Phaser from 'phaser';
import { SceneCommunication } from './comunication.interface';
import { SharedDataService } from '../../services/answerSharedService/shared-data.service';

export class MyScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private currentPart = 1; // A parte inicial do cenário
  private background!: Phaser.GameObjects.Image; // Adicione esta linha para manter a referência ao plano de fundo
  private npc1!: Phaser.Physics.Arcade.Sprite;
  private npc2!: Phaser.Physics.Arcade.Sprite;
  private boss!: Phaser.Physics.Arcade.Sprite;
  private communication: SceneCommunication;
  private sharedDataService!: SharedDataService;

  constructor(communication: SceneCommunication) {
    super({ key: 'my-scene' });
    this.communication = communication;
  }

  preload() {
    this.load.spritesheet(
      'walkPlayerSheet',
      'assets/sprites/Protagonista/spritsheet_walk.png',
      {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 7,
      }
    );
    this.load.spritesheet(
      'deathPlayerSheet',
      'assets/sprites/Protagonista/spritsheet_death.png',
      {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 7,
      }
    );
    this.load.spritesheet(
      'attackPlayerSheet',
      'assets/sprites/Protagonista/spritsheet_attack.png',
      {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 7,
      }
    );
    this.load.spritesheet(
      'staticPlayerSheet',
      'assets/sprites/Protagonista/spritsheet_static.png',
      {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 1,
      }
    );
    this.load.spritesheet(
      'staticNpc1Sheet',
      'assets/sprites/Npcs/Medieval/npc1.png',
      {
        frameWidth: 39,
        frameHeight: 53,
        startFrame: 0,
        endFrame: 7,
      }
    );
    this.load.spritesheet(
      'staticNpc2Sheet',
      'assets/sprites/Npcs/Medieval/npc2.png',
      {
        frameWidth: 160,
        frameHeight: 111,
        startFrame: 0,
        endFrame: 7,
      }
    );
    this.load.spritesheet(
      'hurtBossSheet',
      'assets/sprites/Boss/Medieval/spritsheetHurtBoss.png',
      {
        frameWidth: 250,
        frameHeight: 250,
        startFrame: 0,
        endFrame: 2,
      }
    );
    this.load.spritesheet(
      'deathBossSheet',
      'assets/sprites/Boss/Medieval/spritsheetDeathBoss.png',
      {
        frameWidth: 250,
        frameHeight: 250,
        startFrame: 0,
        endFrame: 6,
      }
    );
    this.load.spritesheet(
      'attackBossSheet',
      'assets/sprites/Boss/Medieval/spritsheetAttackBoss.png',
      {
        frameWidth: 250,
        frameHeight: 250,
        startFrame: 0,
        endFrame: 7,
      }
    );
    this.load.spritesheet(
      'attack2BossSheet',
      'assets/sprites/Boss/Medieval/spritsheetAttack2Boss.png',
      {
        frameWidth: 250,
        frameHeight: 250,
        startFrame: 0,
        endFrame: 7,
      }
    );
    this.load.spritesheet(
      'staticBossSheet',
      'assets/sprites/Boss/Medieval/spritsheetStaticBoss.png',
      {
        frameWidth: 250,
        frameHeight: 250,
        startFrame: 0,
        endFrame: 7,
      }
    );

    // Carregue todas as partes do cenário
    for (let i = 1; i <= 6; i++) {
      this.load.image(
        `background${i}`,
        `assets/scenerys/cenariomedieval/part${i}.jpg`
      );
    }
  }

  create() {
    this.addBackground();
    // Add the player with an initial position adjustment
    this.player = this.physics.add.sprite(
      50,
      this.game.canvas.height / 1.54,
      'player'
    );
    this.player.setScale(2.5);

    // Create player animations
    this.anims.create({
      key: 'walkPlayerAnimation',
      frames: this.anims.generateFrameNumbers('walkPlayerSheet', {
        start: 0,
        end: 7,
      }),
      frameRate: 8,
      repeat: -1,
    });
    this.anims.create({
      key: 'deathPlayerAnimation',
      frames: this.anims.generateFrameNumbers('deathPlayerSheet', {
        start: 0,
        end: 7,
      }),
      frameRate: 8,
      repeat: 0,
    });
    this.anims.create({
      key: 'attackPlayerAnimation',
      frames: this.anims.generateFrameNumbers('attackPlayerSheet', {
        start: 0,
        end: 7,
      }),
      frameRate: 8,
      repeat: 0,
    });
    this.anims.create({
      key: 'staticPlayerAnimation',
      frames: this.anims.generateFrameNumbers('staticPlayerSheet', {
        start: 0,
        end: 1,
      }),
      frameRate: 2,
      repeat: -1,
    });

    // Create npcs animations

    this.anims.create({
      key: 'staticNpc1Animation',
      frames: this.anims.generateFrameNumbers('staticNpc1Sheet', {
        start: 0,
        end: 7,
      }),
      frameRate: 7,
      repeat: -1,
    });
    this.anims.create({
      key: 'staticNpc2Animation',
      frames: this.anims.generateFrameNumbers('staticNpc2Sheet', {
        start: 0,
        end: 7,
      }),
      frameRate: 7,
      repeat: -1,
    });

    // Create boss animations
    this.anims.create({
      key: 'hurtBossAnimation',
      frames: this.anims.generateFrameNumbers('hurtBossSheet', {
        start: 0,
        end: 2,
      }),
      frameRate: 3,
      repeat: 0,
    });
    this.anims.create({
      key: 'deathBossAnimation',
      frames: this.anims.generateFrameNumbers('deathBossSheet', {
        start: 0,
        end: 6,
      }),
      frameRate: 7,
      repeat: 0,
    });
    this.anims.create({
      key: 'attackBossAnimation',
      frames: this.anims.generateFrameNumbers('attackBossSheet', {
        start: 0,
        end: 7,
      }),
      frameRate: 8,
      repeat: 0,
    });
    this.anims.create({
      key: 'attack2BossAnimation',
      frames: this.anims.generateFrameNumbers('attack2BossSheet', {
        start: 0,
        end: 7,
      }),
      frameRate: 8,
      repeat: 0,
    });
    this.anims.create({
      key: 'staticBossAnimation',
      frames: this.anims.generateFrameNumbers('staticBossSheet', {
        start: 0,
        end: 7,
      }),
      frameRate: 8,
      repeat: -1,
    });
    
    this.player.play('walkPlayerAnimation');
    
    // Add a movement animation to the player
    const movePlayerTween = this.tweens.add({
      targets: this.player,
      x: this.game.canvas.width,
      ease: 'Power',
      onComplete: () => {
        this.player.setVelocityX(200);
        this.changeBackground();
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
    this.background = this.add
    .image(0, 0, `background${this.currentPart}`)
    .setOrigin(0, 0);
    // Ajusta o tamanho do cenário para cobrir toda a tela
    this.background.displayWidth = this.game.canvas.width;
    this.background.displayHeight = this.game.canvas.height;
  }
  private changeBackground() {
    if (this.player && this.player.body && this.player.body.velocity.x !== 0) {
      this.player.anims.stop();
      this.player.play('staticPlayerAnimation');
      this.player.setVelocityX(0);

      if (this.currentPart === 3) {
        this.communication.showChoices1();
        if (this.sharedDataService && this.sharedDataService.playerAnswer && this.sharedDataService.correctAnswer) {
          var playerAnswer = this.sharedDataService.playerAnswer;
          var correctAnswer = this.sharedDataService.correctAnswer;
          if (playerAnswer === correctAnswer) {
            
            this.player.play('attackPlayerAnimation');
          } else {
            this.boss.play('attackBossAnimation');
          }
          this.sharedDataService.clearAnswers();
        }
      }
      
      if (this.player.x !== 50 && this.currentPart < 3) {
        this.communication.showInteraction1();
        this.time.delayedCall(2000, () => {
          this.player.setVelocityX(200);
          this.player.play('deathPlayerAnimation');
        });
      }
    }
    
    // Load and display the next part of the background
    this.currentPart++;
    
    // Verifique se há uma parte de cenário correspondente
    this.textures.exists(`background${this.currentPart}`);
    // Update the texture
    this.background.setTexture(`background${this.currentPart}`);
    
    // Adjust the size of the background to cover the entire screen
    this.background.displayWidth = this.game.canvas.width;
    this.background.displayHeight = this.game.canvas.height;
    
    // Remove NPC1 if it exists
    if (this.npc1) {
      this.npc1.destroy();
    }
    
    // Create NPC1 only in the second scenario
    if (this.currentPart === 2) {
      this.npc1 = this.physics.add.sprite(
        200,
        this.game.canvas.height / 1.64,
        'npc1'
        );
        this.npc1.setScale(2.5);
        this.npc1.play('staticNpc1Animation');
      }
      
      // Remove NPC2 if it exists
      if (this.npc2) {
        this.npc2.destroy();
      }
      
      // Create NPC2 only in the third scenario
      if (this.currentPart === 3) {
        this.npc2 = this.physics.add.sprite(
          200,
          this.game.canvas.height / 1.9,
          'npc2'
          );
          this.npc2.setFlipX(true);
          this.npc2.setScale(2.5);
          this.npc2.play('staticNpc2Animation');
        }
        
        // Remove the boss if it exists
        if (this.boss) {
          this.boss.destroy();
        }
        
        // Create the boss only in the fourth scenario
        if (this.currentPart === 4) {
          this.boss = this.physics.add.sprite(
            250,
            this.game.canvas.height / 1.8,
            'boss'
            );
            this.boss.setFlipX(true);
            this.boss.setScale(2.5);
            this.boss.play('attackBossAnimation');
            this.time.delayedCall(1000, () => {
              this.boss.play('attack2BossAnimation');
              this.time.delayedCall(1000, () => {
                this.boss.play('staticBossAnimation');
                this.time.delayedCall(1000, () => {
                  this.boss.play('hurtBossAnimation');
                  this.time.delayedCall(1000, () => {
                    this.boss.play('deathBossAnimation');
                  });
                });
              });
            });
          }
          
          this.player.x = 50;
          /* 
          if (this.currentPart === 4) {
            // Acesse as respostas do jogador e correta usando o serviço
            
            
            // Realize a lógica desejada aqui com as respostas
            
            // ...
            
            // Limpe as respostas quando necessário
            
          } */
      /* this.communication.showChoices2();
      this.communication.showChoices3();
      this.communication.showChoices4();
      this.communication.showChoices5(); */
    
  }

  private handleResize() {
    // Atualiza o cenário quando a janela é redimensionada
    this.scaleBackground();
  }

  private scaleBackground() {
    // Ajusta o tamanho do cenário para cobrir toda a tela
    const background = this.add
      .image(0, 0, `background${this.currentPart}`)
      .setOrigin(0, 0);
    background.displayWidth = this.game.canvas.width;
    background.displayHeight = this.game.canvas.height;
    background.destroy(); // Remove a imagem temporária
  }
}
