import { Component } from '@angular/core';

import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.component.html',
  styleUrl: './message-list.component.css',
})
export class MessageListComponent {
  messages: Message[] = [
    new Message("66359", "Funny jokes", "Yo Momma!", "Phil"),
    new Message("87965", "Sad Day", "Still Yo Momma!", "Mary"),
    new Message("22358", "I'll stop", "I'm not gonna stop.", "Phil"),
  ];

  onAddMessage(message: Message){
    this.messages.push(message);
  };
}
