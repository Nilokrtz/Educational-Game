import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/component/settings/AudioService';


@Component({
  selector: 'app-pirates-scenery',
  templateUrl: './pirates-scenery.page.html',
  styleUrls: ['./pirates-scenery.page.scss'],
})
export class PiratesSceneryPage {

  constructor(private audioService: AudioService) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/pirates.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}
