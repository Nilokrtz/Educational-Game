// middle-age-scenery.page.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as Phaser from 'phaser';
import { MyScene } from './scene'; // Import the custom scene

@Component({
  selector: 'app-moon-scenery',
  templateUrl: './middle-age-scenery.page.html',
  styleUrls: ['./middle-age-scenery.page.scss'],
})
export class MiddleAgeSceneryPage implements OnInit, OnDestroy {
  private game!: Phaser.Game;

  ngOnInit() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 0 },
        },
      },
      scene: [MyScene], // Use your custom scene here
    });
  }

  ngOnDestroy() {
    this.game.destroy(true);
  }
}