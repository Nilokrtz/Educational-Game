import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PontuacaoService {
  private pontuacaoSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  pontuacao$ = this.pontuacaoSubject.asObservable();

  private pontuacao = 0;
  private estrelas = 0;
  private respondido = 0;

  adicionarPontos(pontos: number) {
    this.pontuacao += pontos;
    this.pontuacaoSubject.next(this.pontuacao);
  }

  adicionarRespondido(respondido: number) {
    this.respondido += respondido;
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
    
    aumentarPontuacao(pontos: number): void {
      this.pontuacao += pontos;
      // Add any additional logic as needed
    }

    getRespondido(): number{
      return this.respondido;
    }

    todasPerguntasRespondidas(perguntasTotais: number): boolean {
      return this.getRespondido() === perguntasTotais;
    }
}
