import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private audioService: AudioService) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/home.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }

  OnInit(){

  }
}
