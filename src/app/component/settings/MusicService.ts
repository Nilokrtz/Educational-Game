
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
    audio: HTMLAudioElement | undefined;
    isPlaying: boolean = false;
  
    playMusic(audioSrc?: string) {
      if (audioSrc) {
        this.audio = new Audio(audioSrc);
        this.audio.load();
        this.audio.play();
        this.isPlaying = true;
      } else if (this.audio) {
        this.audio.play();
        this.isPlaying = true;
      }
    }
  
    pauseMusic() {
      if (this.audio) {
        this.audio.pause();
        this.isPlaying = false;
      }
    }
  
    toggleMusic(audioSrc?: string) {
      if (this.isPlaying) {
        this.pauseMusic();
      } else {
        this.playMusic(audioSrc);
      }
    }
}
