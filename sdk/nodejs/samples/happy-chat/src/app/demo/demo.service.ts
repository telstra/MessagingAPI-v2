import { Injectable } from '@angular/core'
import { routing } from './../app.routing';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
import * as io from 'socket.io-client';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { ErrorService } from '../error/error.service';
import { SMS } from '../models/sms.model';
import { MessageSentResponse } from '../models/message-sent-response.model';
import { MessageStatus } from '../models/message-status.model';
import { Message } from "app/models/message.model";

@Injectable()

export class DemoService {

  // web socket set up
  private socket;
  private hostURL = `http://${document.location.host}`;

  constructor(private http: Http, private router: Router, private errorService: ErrorService) { }

  // error handler
  handleError(error: Response) {
    this.errorService.handleError(error.json());
    return Observable.throw(error.json());
  }

  // sends an SMS using the SDK and messaging API
  sendSMS(sms: SMS): Observable<MessageSentResponse> {
    const body = JSON.stringify(sms);
    const headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

    return this.http.post('/api/send', body, { headers: headers })
      .map((response: Response) => {
        return response.json().obj;
      })
      .catch((error: Response) => {
        return this.handleError(error);
      });
  }

  // listens via websockets for the message status callback event from the API. See the readme file for more information on
  // how to set this up
  getMessageStatus() {
    let observable = new Observable(observer => {
      this.socket = io(this.hostURL);
      this.socket.on('message_status', (data: MessageStatus) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }

  // listens via websockets for the message received callback event from the API. See the readme file for more information on
  // how to set this up
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.hostURL);
      this.socket.on('message_received', (data: Message) => {
        observer.next(data);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }
}