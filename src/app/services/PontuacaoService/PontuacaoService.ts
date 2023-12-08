import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PontuacaoService {
    private pontuacao = 0;
    private estrelas = 0;
  
    adicionarPontos(pontos: number) {
      this.pontuacao += pontos;
    }
  
    getPontuacao(): number {
      return this.pontuacao;
    }
  
    adicionarEstrelas(estrelas: number) {
      this.estrelas += estrelas;
    }
  
    getEstrelas(): number {
      return this.estrelas;
    }
}
