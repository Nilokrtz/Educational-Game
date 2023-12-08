import { Component, OnInit } from '@angular/core';
import { AudioService } from 'src/app/services/AudioService/AudioService';
import { PontuacaoService } from 'src/app/services/PontuacaoService/PontuacaoService';


@Component({
  selector: 'app-moon-scenery',
  templateUrl: './moon-scenery.page.html',
  styleUrls: ['./moon-scenery.page.scss'],
})
export class MoonSceneryPage {
  totalPerguntas = 5;
  
  constructor(private pontuacaoService: PontuacaoService, private audioService: AudioService) {}

  ionViewDidEnter() {
    this.audioService.playMusic('../../../assets/music/moon.ogg');
  }

  ionViewWillLeave() {
    this.audioService.stopMusic();
  }

  todasPerguntasRespondidas(): boolean {
    return this.pontuacaoService.todasPerguntasRespondidas(this.totalPerguntas);
  }
}
