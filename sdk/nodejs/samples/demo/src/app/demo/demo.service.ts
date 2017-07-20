import { Injectable } from '@angular/core'
import { routing } from './../app.routing';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/Rx';
import { Observable } from 'rxjs';

import { ErrorService } from '../error/error.service';
import { NotificationService } from '../notification/notification.service';
import { SMS } from '../models/sms.model';
import { MessageSentResponse } from '../models/message-sent-response.model';
import { MessageStatusResponse } from '../models/message-status-response.model';

@Injectable()

export class DemoService {

  constructor(private http: Http, private router: Router, private errorService: ErrorService, private notificationService: NotificationService) { }

  // error handling
  handleError(error: Response) {
    this.errorService.handleError(error.json());
    return Observable.throw(error.json());
  }

  // send an SMS
  sendSMS(sms: SMS): Observable<MessageSentResponse> {
    const body = JSON.stringify(sms);
    const headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'application/json' });

    return this.http.post('/api/send', body, { headers: headers })
      .map((response: Response) => {
        console.log(response.json());
        this.notificationService.handleNotification(response.json());
        return response.json().obj;
      })
      .catch((error: Response) => {
        return this.handleError(error);
      });
  }

  // poll an SMS
  getMessageStatus(messageId: string): Observable<MessageStatusResponse> {
    return this.http.get(`/api/status/${messageId}`)
      .map((response: Response) => {
        return response.json().obj;
      })
      .catch((error: Response) => {
        return this.handleError(error);
      });
  }
}