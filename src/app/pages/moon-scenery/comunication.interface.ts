export interface SceneCommunication {  
    showInteraction1():Promise<void>;
    showInteraction2():Promise<void>;
    showInteraction3():Promise<void>;
    showInteraction4():Promise<void>;
    showInteraction5():Promise<void>;
    showChoices1() : void;
    showChoices2() : void;
    showChoices3() : void;
    showChoices4() : void;
    showChoices5() : void;
    interactionVisible1: boolean;
    handleInteractionClick() :void;
    x :boolean;
    }
  