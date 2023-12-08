import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';


@Component({
  selector: 'app-prehistoric-scenery',
  templateUrl: './prehistoric-scenery.page.html',
  styleUrls: ['./prehistoric-scenery.page.scss'],
})
export class PrehistoricSceneryPage {

  constructor(private audioService: AudioService) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/pre-historic.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }
}
