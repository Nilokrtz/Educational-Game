import { Component, OnInit } from '@angular/core';
import { PontuacaoService } from 'src/app/services/PontuacaoService/PontuacaoService';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss'],
})
export class ConclusionComponent  implements OnInit {
  pontuacao: number = 0;

  constructor(private pontuacaoService: PontuacaoService) {}

  ngOnInit() {
    // Obtém a pontuação do serviço
    this.pontuacao = this.pontuacaoService.getPontuacao();
  }
}
