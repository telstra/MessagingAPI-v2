import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box.component';

@NgModule({
  declarations: [
    ChatBoxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChatBoxComponent
  ]
})

export class ChatBoxModule { }
