import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../websocket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public messages: string[] = [];
  public newMessage: string = '';

  constructor(private websocketService: WebsocketService) {}

  ngOnInit(): void {
    this.websocketService.messages$.subscribe(message => {
      this.messages.push(message);
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.websocketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}