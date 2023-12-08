import { Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { AudioService } from 'src/app/services/AudioService/AudioService';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent{
 
constructor(private platform: Platform, private location: Location, private audioService: AudioService) {}

  refreshPage() {
    if (this.platform.is('cordova')) {
      window.location.reload();
    } else {
      window.location.reload();
    }
  }

  toggleMusic() {
    this.audioService.toggleMusic();
  }

  isMusicPlaying() {
    return this.audioService.isPlaying();
  }

}
