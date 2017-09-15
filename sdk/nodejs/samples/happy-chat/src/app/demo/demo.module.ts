import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { LoadingModule } from '../loading/loading.module';
import { TickModule } from '../tick/tick.module';
import { ChatBoxModule } from '../chat-box/chat-box.module';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoadingModule,
    TickModule,
    ChatBoxModule
  ],
  exports: [
    DemoComponent
  ]
})

export class DemoModule { }
