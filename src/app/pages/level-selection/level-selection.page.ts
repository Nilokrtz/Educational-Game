import { Component, OnDestroy, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';


@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.page.html',
  styleUrls: ['./level-selection.page.scss'],
})
export class LevelSelectionPage {
  constructor(private audioService: AudioService) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/level-selection.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}