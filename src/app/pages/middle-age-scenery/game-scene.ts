import 'phaser';

export class GameScene extends Phaser.Scene {
  private player!: Phaser.Physics.Arcade.Sprite;
  private nextButton!: HTMLButtonElement;

  constructor() {
    super({ key: 'game' });
  }

  preload() {
    this.load.image('ground', '../../../assets/scenerys/CenarioLua.jpg');
    this.load.spritesheet('player', '../../../assets/SpritesProtagonista/7.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  create() {
    // Add ground
    const ground = this.physics.add.staticGroup();
    ground.create(window.innerWidth / 2, window.innerHeight - 20, 'ground').setScale(2).refreshBody();

    // Add player
    this.player = this.physics.add.sprite(100, window.innerHeight - 100, 'player');
    this.player.setCollideWorldBounds(true);

    // Add button
    this.nextButton = document.createElement('button');
    this.nextButton.innerText = 'Next';
    this.nextButton.style.position = 'absolute';
    this.nextButton.style.bottom = '20px';
    this.nextButton.style.right = '20px';
    this.nextButton.addEventListener('click', () => this.nextButtonClick());
    document.body.appendChild(this.nextButton);

    // Set up collisions
    this.physics.add.collider(this.player, ground);
  }

  private nextButtonClick() {
    // Implement logic to move the player to the next NPC
    // For example, update player coordinates and disable the button until the question is answered
  }
}
