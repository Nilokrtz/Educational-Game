import { Component, OnInit } from '@angular/core';
import { PontuacaoService } from 'src/app/services/PontuacaoService/PontuacaoService';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.scss'],
})
export class ConclusionComponent implements OnInit {
  pontuacao: number = 0;
  estrelas: number = 0;
  mostrarUmaEstrela: boolean = false;
  mostrarDuasEstrelas: boolean = false;
  mostrarTresEstrelas: boolean = false;

  constructor(private pontuacaoService: PontuacaoService) {}

  ngOnInit() {
    this.pontuacaoService.pontuacao$.subscribe(pontuacao => {
      this.pontuacao = pontuacao;
      this.estrelas = this.calcularEstrelas(pontuacao);
      this.mostrarEstrelas(this.estrelas);
    });
  }

  calcularEstrelas(pontuacao: number): number {
    let estrelas = 0;
    if (pontuacao >= 5) {
      estrelas = 3;
    } else if (pontuacao >= 3) {
      estrelas = 2;
    } else if (pontuacao >= 1) {
      estrelas = 1;
    }
    return estrelas;
  }

  mostrarEstrelas(estrelas: number): void {
    this.mostrarUmaEstrela = estrelas >= 1;
    this.mostrarDuasEstrelas = estrelas >= 2;
    this.mostrarTresEstrelas = estrelas >= 3;
  }
}
