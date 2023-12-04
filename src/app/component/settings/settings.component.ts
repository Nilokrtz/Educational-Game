import { Component} from '@angular/core';
import { Platform } from '@ionic/angular';
import { Location } from '@angular/common';
import { MusicService } from 'src/app/component/settings/MusicService';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent{
  isMusicPlaying: boolean = true;

constructor(private platform: Platform, private location: Location, private musicService: MusicService) {}

  refreshPage() {
    if (this.platform.is('cordova')) {
      window.location.reload();
    } else {
      window.location.reload();
    }
  }

  toggleMusic() {
    this.musicService.toggleMusic();
  }
}
