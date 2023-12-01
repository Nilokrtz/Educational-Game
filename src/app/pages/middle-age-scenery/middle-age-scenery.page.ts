// middle-age-scenery.page.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicService } from 'src/app/component/settings/MusicService';

@Component({
  selector: 'app-moon-scenery',
  templateUrl: './middle-age-scenery.page.html',
  styleUrls: ['./middle-age-scenery.page.scss'],
})
export class MiddleAgeSceneryPage implements OnInit, OnDestroy {
  audio: any;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.playMusic('../../../assets/music/middle-age.ogg');
  }
  
  ngOnDestroy() {
    this.musicService.pauseMusic();
  }
}
