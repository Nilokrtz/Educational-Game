import { Injectable, ComponentFactoryResolver, Injector, ApplicationRef, ComponentRef } from '@angular/core';
import { InteractionComponent } from '../../component/interaction/interaction.component';

@Injectable({
  providedIn: 'root',
})
export class InteractionService {
  private componentRef!: ComponentRef<InteractionComponent>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {}

  createComponent(message: string, image: string): void {
    // Crie uma fábrica de componentes
    const factory = this.resolver.resolveComponentFactory(InteractionComponent);

    // Crie um injector com os parâmetros desejados
    const injector = Injector.create({
      providers: [
        { provide: 'message', useValue: message },
        { provide: 'image', useValue: image },
      ],
      parent: this.injector,
    });

    // Crie e anexe o componente ao DOM
    this.componentRef = factory.create(injector);
    this.appRef.attachView(this.componentRef.hostView);

    // Adicione o componente ao corpo do documento
    const domElem = (this.componentRef.hostView as any).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
  }

  closeComponent(): void {
    if (this.componentRef) {
      // Remova o componente do DOM
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
    }
  }
}
