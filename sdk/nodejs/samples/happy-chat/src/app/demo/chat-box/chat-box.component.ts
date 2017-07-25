import { Component, Input } from '@angular/core';
import { Message } from '../../models/message.model';
import { trigger, state, transition, style, animate } from '@angular/animations'
import { Chatter } from "app/models/chatter.model";

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
  @Input() messages: Message[];
}