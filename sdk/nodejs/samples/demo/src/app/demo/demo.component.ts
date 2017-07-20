import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

import { DemoService } from './demo.service';
import { SMS } from '../models/sms.model';
import { MessageSentResponse } from '../models/message-sent-response.model';
import { MessageStatusResponse } from '../models/message-status-response.model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  smsForm: FormGroup;
  sentMessages: MessageSentResponse;
  messageStatusResponse: MessageStatusResponse;

  pollWaiting: Subscription;
  messageWaiting: Subscription;

  constructor(private demoService: DemoService, private fb: FormBuilder) { }

  // adds an additional form field to add more numbers
  addTo() {
    const control = <FormArray>this.smsForm.get('to');
    control.push(this.initNumber());
  }

  // rmeoves form field at index
  removeTo(i: number) {
    const control = <FormArray>this.smsForm.get('to');
    control.removeAt(i);
  }

  // constructs a new SMS object for sending
  onSend() {
    if(this.smsForm.valid) {
      var numbers: string[] = [];
      this.smsForm.get('to').value.forEach((to: any) => {
        numbers.push(to.number);
      });
      const sms = new SMS(
        numbers,
        'Telstra',
        '60',
        false,
        null,
        this.smsForm.get('message').value
      );
      this.messageWaiting = this.demoService.sendSMS(sms).subscribe((response: MessageSentResponse) => {
        this.messageWaiting = null;
        this.sentMessages = response;
        console.log(this.sentMessages);
      },
      error => this.messageWaiting = null);
    }
  }

  // checks if a successful message has been sent to the phoneNumber
  getSent(phoneNumber: string) {
    let result = this.sentMessages.messages.find(message => message.to === phoneNumber);
    return result;
  }

  // gets the status of the message sent to the phoneNumber
  getMessageStatus(phoneNumber: string) {
    if(this.getSent(phoneNumber)) {
      let messageId = this.sentMessages.messages.find(sentMessage => sentMessage.to === phoneNumber).messageId;
      this.pollWaiting = this.demoService.getMessageStatus(messageId).subscribe((response: MessageStatusResponse) => {
        this.pollWaiting = null;
        this.messageStatusResponse = response;
        console.log(this.messageStatusResponse);
      },
      error => this.pollWaiting = null);
    }
  }

  closeStatus() {
    this.messageStatusResponse = null;
  }

  // initialize the new form field
  initNumber() {
    return this.fb.group({
      number: new FormControl('', Validators.required)
    });
  }

  // set up the form
  bindForm() {
    this.smsForm = this.fb.group({
      to: this.fb.array([]),
      message: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.bindForm();
    this.addTo();
  }
}
