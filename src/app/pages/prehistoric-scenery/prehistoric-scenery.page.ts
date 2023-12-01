import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/component/settings/MusicService';


@Component({
  selector: 'app-prehistoric-scenery',
  templateUrl: './prehistoric-scenery.page.html',
  styleUrls: ['./prehistoric-scenery.page.scss'],
})
export class PrehistoricSceneryPage implements OnInit {
  audio: any;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.musicService.playMusic('../../../assets/music/worlds.ogg');
  }
}
