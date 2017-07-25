import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

import { DemoService } from './demo.service';
import { SMS } from '../models/sms.model';
import { Chatter } from '../models/chatter.model';
import { MessageSentResponse } from '../models/message-sent-response.model';
import { MessageReceivedResponse } from '../models/message-received-response.model';
import { MessageStatus } from '../models/message-status.model';
import { Message } from "app/models/message.model";

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  // replace these with your own notifyURL and provisioned phone number
  private myNotifyURL = `your notify URL here`;
  private myNumber = `your provisioned phone number here`

  connections = 0;
  userConnected = true;
  userDisconnected = false;

  smsForm: FormGroup;
  messages: Message[] = [];
  sentMessages: MessageStatus[] = [];

  messageWaiting: Subscription;

  chatters: Chatter[] = [];

  constructor(private demoService: DemoService, private fb: FormBuilder) { }

  // Australian numbers dont have to be in international format for the messaging API to send them a message, but the API will
  // return the number in the message status and message receieved callbacks in international format. Since we use the number to
  // identify our chatters we convert any phone numbers starting with a 0 to international format before assigning it to a chatter
  convertToInternationalFormat(phoneNumber: string) {
    phoneNumber = phoneNumber.replace(phoneNumber[0], '+61');
    return phoneNumber;
  }

  // send an SMS
  onSend() {
    // double check if the form is valid
    if (this.smsForm.valid) {
      this.sentMessages = [];
      let numbers: string[] = [];

      // create our array of phone numbers and set up our chatter
      this.smsForm.get('to').value.forEach((to: any) => {
        if (to.number[0] === '0') {
          to.number = this.convertToInternationalFormat(to.number);
        }
        numbers.push(to.number);
        if (!this.chatters.find(chatter => chatter.number === to.number)) {
          this.chatters.push(new Chatter(
            to.name,
            to.number
          ));
        }
      });
      // create the SMS object to send to the messaging API
      const sms = new SMS(
        numbers,
        this.myNumber,
        '60',
        false,
        this.myNotifyURL,
        false,
        this.smsForm.get('message').value
      );
      // Send the SMS via the demoService. We will get a MessageSentResponse back
      this.messageWaiting = this.demoService.sendSMS(sms).subscribe((response: MessageSentResponse) => {
        this.messageWaiting.unsubscribe();

        // add all messages from the response to our sentMessages array.
        response.messages.forEach(message => {
          // here we remove everything after the first hyphen in the messageId. This is because the message status returns this same
          // id but with a / instead of a hyphen. Thats ok though, because everything after these symbols is just the phone number,
          // everything before these symbols is the actual message id
          message.messageId = message.messageId.substr(0, message.messageId.indexOf('-'));
          // push the MessageStatus to our sentMessages array. We will update this as the status of the message in the UI
          this.sentMessages.push(new MessageStatus(
            message.to,
            message.messageId,
            message.deliveryStatus
          ));
        });
      },
        error => this.messageWaiting = null);
    } else {
      this.smsForm.markAsDirty();
    }
  }

  // gets the message status. Because of the way the app is set up we use the phone number and find it in our sentMessages array.
  // A much better implementation of getting the message status would be to use the messageId
  getMessageStatus(phoneNumber: string) {
    let result = null;
    if (phoneNumber) {
      phoneNumber = this.convertToInternationalFormat(phoneNumber);
      if (this.sentMessages.find(message => message.to === phoneNumber)) {
        result = this.sentMessages.find(message => message.to === phoneNumber).deliveryStatus;
      }
    }
    return result;
  }

  // sets up the form, and also is a quick and easy way of resetting form arrays
  bindForm() {
    this.smsForm = this.fb.group({
      to: this.fb.array([]),
      message: new FormControl('', Validators.required)
    });
  }

  // initialises the form controls in the 'to' form field when the user clicks the add recipient button
  initNumber() {
    return this.fb.group({
      number: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required)
    });
  }

  // add a 'to' form field
  addTo() {
    const control = <FormArray>this.smsForm.get('to');
    control.push(this.initNumber());
  }

  // rmeove a 'to' form field
  removeTo(i: number) {
    const control = <FormArray>this.smsForm.get('to');
    control.removeAt(i);
  }

  // for the current connected users display.
  setConnected(connected: boolean, disconnected: boolean) {
    this.userConnected = connected;
    this.userDisconnected = disconnected;
  }

  ngOnInit() {
    // subscribe to the getMessageStatus function in the service. This function uses socket.io to listen for message status events
    // from the API
    this.demoService.getMessageStatus().subscribe((response: MessageStatus) => {
      response.messageId = response.messageId.substr(0, response.messageId.indexOf('/'));
      let sentMessageIndex = this.sentMessages.findIndex(message => message.messageId === response.messageId);
      if (sentMessageIndex !== -1) {
        this.sentMessages[sentMessageIndex] = response;
      }
    });

    // subscrive to the get<essages function in the service. This function uses socket.io to listen for message received events
    // from the API
    this.demoService.getMessages().subscribe((response: MessageReceivedResponse) => {
      let chatter = this.chatters.find(chatter => chatter.number === response.from);
      if (!chatter) {
        chatter = new Chatter(
          'Happy chatter',
          response.from
        );
      }
      this.messages.unshift(new Message(
        chatter,
        response.body,
        response.sentTimestamp,
        response.messageId
      ));
    });

    // get incoming connection messages via socket.io
    this.demoService.getConnectedUsers().subscribe((connections: number) => {
      if(this.connections === 0) { 
        this.connections = connections; 
      }
      if(connections > this.connections) {
        this.setConnected(true, false);
      }
      else if(connections < this.connections) {
        this.setConnected(false, true);
      }
      this.connections = connections;
      setTimeout(() => {
        this.setConnected(false, false);
      }, 300);
    });

    this.bindForm();
    this.addTo();
  }
}
