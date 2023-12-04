
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audioPlayer: HTMLAudioElement = new Audio();
  private audioSrc: string = ''; // Caminho da música
  private isMusicPlaying: boolean = false;

  constructor() {}

  playMusic(audioFile: string) {
    this.audioSrc = audioFile;
    this.audioPlayer.src = this.audioSrc;
    this.audioPlayer.load();
    this.audioPlayer.play();
    this.isMusicPlaying = true;
  }

  pauseMusic() {
    this.audioPlayer.pause();
    this.isMusicPlaying = false;
  }

  stopMusic() {
    this.audioPlayer.pause();
    this.audioPlayer.currentTime = 0;
  }

  resumeMusic() {
    this.audioPlayer.play();
    this.isMusicPlaying = true;
  }

  toggleMusic() {
    if (this.isMusicPlaying) {
      this.pauseMusic();
    } else {
      this.resumeMusic();
    }
  }

  isPlaying(): boolean {
    return this.isMusicPlaying;
  }
}
