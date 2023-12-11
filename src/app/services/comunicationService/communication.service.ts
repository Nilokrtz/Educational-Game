// communication.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private interactionClosedSubject = new Subject<void>();

  interactionClosed(): Observable<void> {
    return this.interactionClosedSubject.asObservable();
  }

  closeInteraction() {
    this.interactionClosedSubject.next();
  }
}
