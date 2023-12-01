import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/component/settings/MusicService';


@Component({
  selector: 'app-pirates-scenery',
  templateUrl: './pirates-scenery.page.html',
  styleUrls: ['./pirates-scenery.page.scss'],
})
export class PiratesSceneryPage implements OnInit {
  audio: any;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.playMusic('../../../assets/music/worlds.ogg');
  }
}
