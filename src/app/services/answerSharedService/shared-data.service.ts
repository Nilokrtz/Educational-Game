import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  playerAnswer: string | null = null;
  correctAnswer: string | null = null;

  setAnswers(playerAnswer: string, correctAnswer: string) {
    this.playerAnswer = playerAnswer;
    this.correctAnswer = correctAnswer;
  }

  clearAnswers() {
    this.playerAnswer = null;
    this.correctAnswer = null;
  }
}
