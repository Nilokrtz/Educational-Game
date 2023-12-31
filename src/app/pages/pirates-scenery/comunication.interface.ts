export interface SceneCommunication {
  showInteraction1(): void;
  showInteraction2(): void;
  showInteraction3(): void;
  showInteraction4(): void;
  showInteraction5(): void;
  showInteraction6(): void;
  showInteraction7(): void;
  showChoices1(): void;
  showChoices2(): void;
  showChoices3(): void;
  showChoices4(): void;
  showChoices5(): void;
  closeComponent1():void;
  closeComponent2():void;
  closeComponent3():void;
  closeComponent4():void;
  closeComponent5():void;
  getPontuacao(): number;
  getEstrelas(): number;
  aumentarPontuacao(pontos: number): void;
  interactionVisible1: boolean;
  handleInteractionClick(): void;
  x: boolean;
}
