import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

import { DemoModule } from './demo/demo.module';
import { ErrorModule } from './error/error.module';
import { NotificationModule } from './notification/notification.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    ToastModule.forRoot(),
    DemoModule,
    ErrorModule,
    NotificationModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
