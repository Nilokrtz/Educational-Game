// ./scene.ts
import * as Phaser from 'phaser';

export class MyScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;

  constructor() {
    super({ key: 'my-scene' });
  }

  preload() {
    this.load.image('ground', 'assets/scenerys/CenarioLua.jpg');
    this.load.image('player', 'assets/SpritesProtagonista/7.png');
    this.load.audio('middleage', 'assets/music/old-west.ogg');
  }

  create() {
    // Background color for visibility
    this.add.graphics().fillRect(0, 0, window.innerWidth, window.innerHeight).fillStyle(0x222222);

    const music = this.sound.add('middleage', { loop: true });
    music.play();

    // Add ground
    const ground = this.physics.add.staticGroup();
    ground.create(window.innerWidth / 2, window.innerHeight - 20, 'ground').setScale(2).refreshBody();

    // Add player
    this.player = this.physics.add.sprite(window.innerWidth / 2, window.innerHeight - 100, 'player');
    this.player.setCollideWorldBounds(true);

    this.physics.add.collider(this.player, ground);
  }
}
