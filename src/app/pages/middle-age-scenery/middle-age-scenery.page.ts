// middle-age-scenery.page.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AudioService } from 'src/app/component/settings/AudioService';

@Component({
  selector: 'app-moon-scenery',
  templateUrl: './middle-age-scenery.page.html',
  styleUrls: ['./middle-age-scenery.page.scss'],
})
export class MiddleAgeSceneryPage {

  constructor(private audioService: AudioService) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/middle-age.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}