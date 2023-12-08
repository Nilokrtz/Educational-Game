import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';


@Component({
  selector: 'app-moon-scenery',
  templateUrl: './moon-scenery.page.html',
  styleUrls: ['./moon-scenery.page.scss'],
})
export class MoonSceneryPage {

  constructor(private audioService: AudioService) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/moon.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}
