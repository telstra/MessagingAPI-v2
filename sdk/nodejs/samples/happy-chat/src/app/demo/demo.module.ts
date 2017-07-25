import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DemoService } from './demo.service';
import { ChatBoxComponent } from './chat-box/chat-box.component';

@NgModule({
  declarations: [
    DemoComponent,
    ChatBoxComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DemoService
  ],
  exports: [
    DemoComponent,
    ChatBoxComponent
  ]
})

export class DemoModule { }
