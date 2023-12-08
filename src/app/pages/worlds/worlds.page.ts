import { Component} from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.page.html',
  styleUrls: ['./worlds.page.scss'],
})
export class WorldsPage {

  constructor(private audioService: AudioService) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/worlds.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }

}
