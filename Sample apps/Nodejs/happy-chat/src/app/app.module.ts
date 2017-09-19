import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { DemoModule } from './demo/demo.module';
import { ChatBoxModule } from './chat-box/chat-box.module';
import { ErrorModule } from './error/error.module';
import { LoadingModule } from './loading/loading.module';
import { TickModule } from './tick/tick.module';

import { MessagingService } from './providers/messaging.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    DemoModule,
    ChatBoxModule,
    ErrorModule,
    LoadingModule,
    TickModule,
    routing
  ],
  providers: [MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
