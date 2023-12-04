import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/component/settings/MusicService';


@Component({
  selector: 'app-moon-scenery',
  templateUrl: './moon-scenery.page.html',
  styleUrls: ['./moon-scenery.page.scss'],
})
export class MoonSceneryPage implements OnInit {
  audio: any;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.playMusic('../../../assets/music/worlds.ogg');
  }
}
