import { Component } from '@angular/core';
import { MusicService } from 'src/app/component/settings/MusicService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  audio: any;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.playMusic('../../../assets/music/worlds.ogg');
  }
}
