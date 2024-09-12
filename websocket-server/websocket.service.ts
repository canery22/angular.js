import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private ws!: WebSocket;
  private messagesSubject = new Subject<string>();

  public messages$ = this.messagesSubject.asObservable();

  constructor() {
    this.connect();
  }

  private connect() {
    this.ws = new WebSocket('ws://localhost:8080');

    this.ws.onmessage = (event) => {
      this.messagesSubject.next(event.data);
    };

    this.ws.onopen = () => {
      console.log('WebSocket bağlantısı kuruldu.');
    };

    this.ws.onclose = () => {
      console.log('WebSocket bağlantısı kapatıldı.');
      // Bağlantı kesildiyse yeniden bağlanmayı deneyebilirsin
    };
  }

  public sendMessage(message: string) {
    this.ws.send(message);
  }
}