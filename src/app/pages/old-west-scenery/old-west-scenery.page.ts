import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/component/settings/MusicService';

@Component({
  selector: 'app-old-west-scenery',
  templateUrl: './old-west-scenery.page.html',
  styleUrls: ['./old-west-scenery.page.scss'],
})
export class OldWestSceneryPage implements OnInit {
  audio: any;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.playMusic('../../../assets/music/worlds.ogg');
  }
}
