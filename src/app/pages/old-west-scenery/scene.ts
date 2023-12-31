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
      'hurtPlayerSheet',
      'assets/sprites/Protagonista/spritsheet_hurt.png',
      {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 4,
      }
    );
    this.load.spritesheet(
      'staticNpc1Sheet',
      'assets/sprites/Npcs/Faroeste/npc1.png',
      {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 3,
      }
    );
    this.load.spritesheet(
      'staticNpc2Sheet',
      'assets/sprites/Npcs/Faroeste/npc2.png',
      {
        frameWidth: 32,
        frameHeight: 32,
        startFrame: 0,
        endFrame: 3,
      }
    );
    this.load.spritesheet(
      'hurtBossSheet',
      'assets/sprites/Boss/Faroeste/spritsheetHurtBoss.png',
      {
        frameWidth: 90,
        frameHeight: 90,
        startFrame: 0,
        endFrame: 2,
      }
    );
    this.load.spritesheet(
      'deathBossSheet',
      'assets/sprites/Boss/Faroeste/spritsheetDeathBoss.png',
      {
        frameWidth: 90,
        frameHeight: 90,
        startFrame: 0,
        endFrame: 7,
      }
    );
    this.load.spritesheet(
      'attackBossSheet',
      'assets/sprites/Boss/Faroeste/spritsheetAttackBoss.png',
      {
        frameWidth: 90,
        frameHeight: 90,
        startFrame: 0,
        endFrame: 15,
      }
    );
    this.load.spritesheet(
      'staticBossSheet',
      'assets/sprites/Boss/Faroeste/spritsheetStaticBoss.png',
      {
        frameWidth: 90,
        frameHeight: 90,
        startFrame: 0,
        endFrame: 8,
      }
    );

    // Carregue todas as partes do cenário
    for (let i = 1; i <= 6; i++) {
      this.load.image(
        `background${i}`,
        `assets/scenerys/cenariocowboy/part${i}.jpg`
      );
    }
  }

  create() {
    // Add the background
    this.addBackground();
    // Add the player with an initial position adjustment
    this.player = this.physics.add.sprite(
      50,
      this.game.canvas.height / 1.2,
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
    this.anims.create({
      key: 'hurtPlayerAnimation',
      frames: this.anims.generateFrameNumbers('hurtPlayerSheet', {
        start: 0,
        end: 5,
      }),
      frameRate: 15,
      repeat: 2,
    });

    // Create npcs animations

    this.anims.create({
      key: 'staticNpc1Animation',
      frames: this.anims.generateFrameNumbers('staticNpc1Sheet', {
        start: 0,
        end: 3,
      }),
      frameRate: 4,
      repeat: -1,
    });
    this.anims.create({
      key: 'staticNpc2Animation',
      frames: this.anims.generateFrameNumbers('staticNpc2Sheet', {
        start: 0,
        end: 3,
      }),
      frameRate: 4,
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
        end: 7,
      }),
      frameRate: 8,
      repeat: 0,
    });
    this.anims.create({
      key: 'attackBossAnimation',
      frames: this.anims.generateFrameNumbers('attackBossSheet', {
        start: 0,
        end: 15,
      }),
      frameRate: 16,
      repeat: 0,
    });
    this.anims.create({
      key: 'staticBossAnimation',
      frames: this.anims.generateFrameNumbers('staticBossSheet', {
        start: 0,
        end: 8,
      }),
      frameRate: 9,
      repeat: -1,
    });

    this.player.play('walkPlayerAnimation');

    // Add a movement animation to the player
    const movePlayerTween = this.tweens.add({
      targets: this.player,
      x: this.game.canvas.width,
      ease: 'Power',
      onComplete: () => {
        this.player.setVelocityX(150);
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
  /* começo */

  private HandleClick() {
    this.communication.handleInteractionClick();
  }
  private async changeBackground() {
    if (this.player && this.player.body && this.player.body.velocity.x !== 0) {
      this.player.anims.stop();
      this.player.play('staticPlayerAnimation');
      this.player.setVelocityX(0);

      if (this.player.x == 50 && this.currentPart == 3) {
        this.player.x = 100;
        this.player.play('staticPlayerAnimation');
        this.player.setVelocityX(0);

        await new Promise<void>((resolve) => {
          const intervalId = setInterval(() => {
            if (!this.communication.x) {
              clearInterval(intervalId);
              resolve();
            }
          }, 10);
        });
        this.HandleClick();
      }

      if (this.player.x !== 50 && this.currentPart == 1) {
        if ((this.player.x = 50)) {
          this.npc1 = this.physics.add.sprite(
            200,
            this.game.canvas.height / 1.22,
            'npc1'
          );
          this.npc1.setScale(3.5);
          this.npc1.play('staticNpc1Animation');
        }
        await this.communication.showInteraction1();
        await this.communication.showInteraction2();
        await this.communication.showInteraction3();

        await new Promise<void>((resolve) => {
          const intervalId = setInterval(() => {
            if (!this.communication.x) {
              clearInterval(intervalId);
              resolve();
            }
          }, 10);
        });
        this.HandleClick();

        console.log(this.communication.x);
        this.communication.x = true;
        this.player.play('walkPlayerAnimation');
        this.player.setVelocityX(150);
      }
      if (this.player.x !== 50 && this.currentPart == 2) {
        await this.communication.showInteraction4();
        await this.communication.showInteraction5();

        this.communication.x = true;
        await new Promise<void>((resolve) => {
          const waitForX = () => {
            if (!this.communication.x) {
              resolve();
            } else {
              requestAnimationFrame(waitForX);
            }
          };
          waitForX();
        });

        console.log(this.communication.x);
        this.player.play('walkPlayerAnimation');
        this.player.setVelocityX(150);

        this.communication.x = true;
        this.HandleClick();

        const waitForX = async () => {
          return new Promise<void>((resolve) => {
            const checkInterval = setInterval(() => {
              if (!this.communication.x) {
                this.HandleClick();
                this.communication.x = true;
                clearInterval(checkInterval);
                resolve();
              }
            }, 100); // Ajuste conforme necessário
          });
        };

        // Adicione um atraso antes de mostrar Interaction6
        await waitForX();
        await new Promise((innerResolve) => setTimeout(innerResolve, 2000));
        this.communication.showInteraction6();

        await waitForX();
        this.communication.showChoices1();
        var pontuacaoAnterior = 0;
        var novaPontuacao = this.communication.getPontuacao();

        await waitForX();
        if (pontuacaoAnterior < novaPontuacao) {
          this.protagonistaAttack();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        } else {
          this.EnemyAttack();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        }

        await waitForX();
        this.communication.showChoices2();
        pontuacaoAnterior = novaPontuacao;
        novaPontuacao = this.communication.getPontuacao();

        await waitForX();
        if (pontuacaoAnterior < novaPontuacao) {
          this.protagonistaAttack();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        } else {
          this.EnemyAttack();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        }

        await waitForX();
        this.communication.showChoices3();
        pontuacaoAnterior = novaPontuacao;
        novaPontuacao = this.communication.getPontuacao();

        await waitForX();
        if (pontuacaoAnterior < novaPontuacao) {
          this.protagonistaAttack();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        } else {
          this.EnemyAttack();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        }

        await waitForX();
        this.communication.showChoices4();
        pontuacaoAnterior = novaPontuacao;
        novaPontuacao = this.communication.getPontuacao();

        await waitForX();
        if (pontuacaoAnterior < novaPontuacao) {
          this.protagonistaAttack();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        } else {
          this.EnemyAttack();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        }

        await waitForX();
        this.communication.showChoices5();
        pontuacaoAnterior = novaPontuacao;
        novaPontuacao = this.communication.getPontuacao();

        await waitForX();
        if (pontuacaoAnterior < novaPontuacao) {
          this.bossDeath();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        } else {
          this.playerDeath();
          console.log('pontuação nova:' + novaPontuacao);
          console.log('pontuação anterior:' + pontuacaoAnterior);
        }

        this.communication.x = false;

        await new Promise((innerResolve) => setTimeout(innerResolve, 6000000));
        this.communication.showInteraction1();
        console.log(
          'After All Choices - Current Pontuacao:',
          this.communication.getPontuacao()
        );
      }
    } /* fim */

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
        this.game.canvas.height / 1.22,
        'npc1'
      );
      this.npc1.setScale(3.5);
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
        this.game.canvas.height / 1.22,
        'npc2'
      );
      this.npc2.setFlipX(true);
      this.npc2.setScale(3.5);
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
        this.game.canvas.height / 1.25,
        'boss'
      );
      this.boss.setFlipX(true);
      this.boss.setScale(4);
      this.boss.play('staticBossAnimation');
      /* this.time.delayedCall(1000, () => {
          this.boss.play('staticBossAnimation');
          this.time.delayedCall(1000, () => {
            this.boss.play('hurtBossAnimation');
            this.time.delayedCall(1000, () => {
              this.boss.play('deathBossAnimation');
            });
          });
        }); */
    }

    // Keep the player centered vertically and horizontally
    this.player.x = 50;
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

  playerAttack() {
    return new Promise<void>((resolve) => {
      this.player.play('attackPlayerAnimation');
      this.player.once('animationcomplete', () => {
        this.player.play('staticPlayerAnimation');
        this.player.once('animationcomplete', () => {
          resolve();
        });
      });
    });
  }

  playerHurt() {
    return new Promise<void>((resolve) => {
      this.player.play('hurtPlayerAnimation');
      this.player.once('animationcomplete', () => {
        this.player.play('staticPlayerAnimation');
        this.player.once('animationcomplete', () => {
            
            resolve();
          });
      });
    });
  }

  playerDeath() {
    this.player.play('deathPlayerAnimation');
  }

  bossAttack() {
    return new Promise<void>((resolve) => {
      this.boss.play('attackBossAnimation');
      this.boss.once('animationcomplete', () => {
          this.boss.play('staticBossAnimation');
          this.boss.once('animationcomplete', () => {
            resolve();
          });
      });
    });
  }

  bossHurt() {
    return new Promise<void>((resolve) => {
      this.boss.play('hurtBossAnimation');
      this.boss.once('animationcomplete', () => {
        this.boss.play('staticBossAnimation');
        this.boss.once('animationcomplete', () => {
          resolve();
        });
      });
    });
  }

  bossDeath() {
    this.boss.play('deathBossAnimation');
  }

  async EnemyAttack() {
    await Promise.all([this.bossAttack(), this.playerHurt()]);
  }

  async protagonistaAttack() {
    await Promise.all([this.playerAttack(), this.bossHurt()]);
  }
}
