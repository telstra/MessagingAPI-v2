import { Injectable } from '@angular/core'
import { routing } from './../app.routing';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { ErrorService } from '../error/error.service';
import { SMS } from '../models/sms.model';
import { MessageSentResponse } from '../models/message-sent-response.model';
import { MessageStatus } from '../models/message-status.model';

import * as io from 'socket.io-client';
import { MessageReceivedResponse } from "app/models/message-received-response.model";
import { MMS } from "app/models/mms.model";

@Injectable()

export class MessagingService {

  private socket;
  private hostURL = window.location.origin;
  private replyRequestIds: string[] = [];

  constructor(private http: Http, private router: Router, private errorService: ErrorService) {
    this.socket = io(this.hostURL);
  }

  handleError(error: Response) {
    this.errorService.handleError(error.json());
    return Observable.throw(error.json());
  }

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

  sendMMS(mms: MMS): Observable<MessageSentResponse> {
    const body = JSON.stringify(mms);
    const headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

    return this.http.post('/api/sendMMS', body, { headers: headers })
    .map((response: Response) => {
      return response.json().obj;
    })
    .catch((error: Response) => {
      return this.handleError(error);
    });
  }

  getMessageStatus() {
    let observable = new Observable(observer => {
      this.socket.on('message_status', (data: MessageStatus) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket.on('message_received', (data: MessageReceivedResponse) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getConnectedUsers() {
    let observable = new Observable(observer => {
      this.socket.on('user_connected', (data: number) => {
        observer.next(data);
      });
      this.socket.on('user_disconnected', (data: number) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }
}