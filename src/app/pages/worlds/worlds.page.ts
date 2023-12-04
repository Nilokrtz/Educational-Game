import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicService } from 'src/app/component/settings/MusicService';

@Component({
  selector: 'app-worlds',
  templateUrl: './worlds.page.html',
  styleUrls: ['./worlds.page.scss'],
})
export class WorldsPage implements OnInit, OnDestroy {
  audio: any;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    const audioSrc = '../../../assets/music/worlds.ogg'; // Caminho do arquivo de música da página "Worlds"
    this.musicService.playMusic(audioSrc);
  }
  
  ngOnDestroy() {
    this.musicService.pauseMusic();
  }
}
