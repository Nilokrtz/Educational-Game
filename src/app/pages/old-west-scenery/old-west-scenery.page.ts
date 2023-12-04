import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/component/settings/AudioService';

@Component({
  selector: 'app-old-west-scenery',
  templateUrl: './old-west-scenery.page.html',
  styleUrls: ['./old-west-scenery.page.scss'],
})
export class OldWestSceneryPage {

  constructor(private audioService: AudioService) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/old-west.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}
