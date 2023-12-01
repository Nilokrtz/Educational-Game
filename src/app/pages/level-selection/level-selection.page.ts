import { Component, OnDestroy, OnInit } from '@angular/core';
import { MusicService } from 'src/app/component/settings/MusicService';

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.page.html',
  styleUrls: ['./level-selection.page.scss'],
})
export class LevelSelectionPage implements OnInit, OnDestroy {
  audio: any;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    const audioSrc = '../../../assets/music/level-selection.ogg'; // Caminho do arquivo de música da página "Worlds"
    this.musicService.playMusic(audioSrc);
  }
  
  ngOnDestroy() {
    this.musicService.pauseMusic();
  }
}