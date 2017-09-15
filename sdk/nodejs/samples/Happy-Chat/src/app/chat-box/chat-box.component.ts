import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MessageReceivedResponse } from '../models/message-received-response.model';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(150)
      ])
    ])
  ]
})

export class ChatBoxComponent {
  @Input() messages: MessageReceivedResponse[];
  @Input() replyRequestIds: string[];
  @Output() messageRemoved: EventEmitter<number>;

  constructor() {
    this.messageRemoved = new EventEmitter<number>();
  }

  removeMessage(i: number) {
    this.messageRemoved.emit(i);
  }
}