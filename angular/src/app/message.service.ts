import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<any>();
  sendMessage(message: string) {
    this.subject.next({ text: message });
    console.log('sendMessage being called');
  }

  clearMessages() {
      this.subject.next();
      console.log('clearMessage being called');
  }

  getMessage(): Observable<any> {
      console.log('getMessage being called');
      console.log(this.subject);
      return this.subject.asObservable();

  }

  constructor() { }
}
