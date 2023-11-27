import { Component, OnInit, NgZone } from '@angular/core';
import * as Phaser from 'phaser';
import { GameScene } from '../middle-age-scenery/game-scene';

@Component({
  selector: 'app-middle-scenery',
  templateUrl: './middle-age-scenery.page.html',
  styleUrls: ['./middle-age-scenery.page.scss'],
})
export class MiddleAgeSceneryPage implements OnInit {
  private phaserGame!: Phaser.Game;

  constructor(private zone: NgZone) {}

  ngOnInit() {
    this.initializeGame();
  }

  private initializeGame() {
    const config: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
        },
      },
      scene: [GameScene], // Use an array to include multiple scenes if needed
    };

    this.phaserGame = new Phaser.Game(config);
  }
}
