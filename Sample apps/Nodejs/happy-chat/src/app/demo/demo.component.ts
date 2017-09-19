import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";
import 'rxjs/add/observable/timer'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'

import { MessagingService } from '../providers/messaging.service';
import { SMS } from '../models/sms.model';
import { MMS, MMSContent } from '../models/mms.model';
import { MessageSentResponse } from '../models/message-sent-response.model';
import { MessageReceivedResponse } from '../models/message-received-response.model';
import { MessageStatus } from '../models/message-status.model';
import { Message } from "app/models/message.model";
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  myNotifyURL = `Your notify url here`;
  myNumber = `Your provisioned number here`;

  errorResponses = ['DELETED', 'EXPIRED', 'UNDVBL', 'REJECTED', 'DeliveryImpossible'];
  successResponses = ['SENT', 'READ', 'DELIVRD'];
  acceptedFileTypes: string[] = ["audio/amr", "audio/aac", "audio/mp3", "audio/mpeg3", "audio/mpeg", "audio/mpg", "audio/wav", "audio/3gpp", "audio/mp4", "image/gif", "image/jpeg", "image/jpg", "image/png", "image/bmp", "video/mpeg4", "video/mp4", "video/mpeg", "video/3gpp", "video/3gp", "video/h263", "text/plain", "text/x-vCard", "text/x-vCalendar"];

  connections = 0;
  userConnected = true;
  userDisconnected = false;

  replyRequest: boolean = false;
  replyRequestIds: string[] = [];

  smsMessage: string;
  mmsSubject: string;
  numbersForm: FormGroup;

  messages: MessageReceivedResponse[] = [];
  sentMessages: MessageStatus[] = [];

  messageWaiting: Subscription;

  mmsContent: MMSContent[] = [];
  mmsFileLoading: boolean;
  fileErrors: string[] = [];
  scheduledDelivery: number;

  cardState = { RECIPIENTS: 1, SMS: 0, MMS: 0, HISTORY: 0 };

  constructor(private messaging: MessagingService, private fb: FormBuilder) {
  }

  // update the card state, changing the css class of the main card
  setCardState(state: string) {
    this.cardState.RECIPIENTS = 0;
    this.cardState.SMS = 0;
    this.cardState.MMS = 0;
    this.cardState.HISTORY = 0;

    this.cardState[state] = 1;
  }

  // remove spaces from input numbers and update australian mobile numbers (04) to the +61 international format
  convertToInternationalFormat(phoneNumber: string) {
    phoneNumber = phoneNumber.replace(/\s/g, "");
    if (phoneNumber[0] === '0' && phoneNumber[1] === '4') {
      phoneNumber = phoneNumber.replace(phoneNumber[0], '+61');
    }
    return phoneNumber;
  }

  // upload a file and add it to our MMSContent array
  onFileUpload(event: any) {
    this.fileErrors = [];
    if (event.target.files.length > 0) {
      // files sent over MMS are base64 encoded meaning they get about 30% larger, so we have to set 1.4mb file size limit on uploads
      // also check that the file type is one that can be sent by the API
      if (event.target.files[0].size < 1400000 && this.acceptedFileTypes.indexOf(event.target.files[0].type) !== -1) {
        this.mmsFileLoading = true;
        let reader = new FileReader();

        reader.onload = () => {
          this.mmsContent.push(new MMSContent(
            event.target.files[0].type,
            event.target.files[0].name,
            reader.result.split(',')[1]
          ));
          this.mmsFileLoading = false;
        };
        reader.readAsDataURL(event.target.files[0]);
      } else {
        this.mmsFileLoading = false;
        if (event.target.files[0].size > 1400000) {
          this.fileErrors.push(`File size cannot exceed 1.4MB 😭`);
        }
        if (this.acceptedFileTypes.indexOf(event.target.files[0].type) === -1) {
          this.fileErrors.push(`Not an accepted file type 😭`);
        }
      }
    }
  }

  // removes an entry from MMSContent
  removeMmsContent(i: number) {
    this.mmsContent.splice(i, 1);
  }

  // removes a message status from the list
  removeStatus(i: number) {
    this.sentMessages.splice(i, 1);
  }

  // clears all message status' from the list
  clearStatusList() {
    this.sentMessages = [];
  }

  // remove a message coming in from users
  removeMessage(i: number) {
    this.messages.splice(i, 1);
  }

  // get the value from the phone numbers input and format the numbers
  getRecipients() {
    let numbers: string[] = [];
    this.numbersForm.get('numbers').value.forEach((number: any) => {
      numbers.push(this.convertToInternationalFormat(number.number));
    });
    return numbers;
  }

  // send an SMS using the messaging API
  sendSMS(messageContent: string) {
    // check for scheduledDelivery first. If this value is <= 0 the message will not send
    if (this.scheduledDelivery <= 0) {
      this.scheduledDelivery = null;
    }
    // dont send if we are awaiting a response from the server
    if (!this.messageWaiting || this.messageWaiting && this.messageWaiting.closed) {

      // boradcast does not support replyRequest, so when this feature is on we only take the first number from the form array.
      // if we dont have replyRequest we can broadcast to all the numbers
      let numbers;
      this.replyRequest ? numbers = this.convertToInternationalFormat(this.numbersForm.get('numbers').value[0].number)
        : numbers = this.getRecipients();

      // default message if the user hasnt filled anything out in the SMS message box
      if (!messageContent || messageContent && messageContent.trim() === '') {
        messageContent = `Hi! Thanks for using Happy Chat! We all love Happy Chat!`;
      }
      // construst the SMS payload
      const sms = new SMS(
        numbers,
        this.myNumber,
        '60',
        false,
        this.myNotifyURL,
        this.replyRequest,
        messageContent,
        this.scheduledDelivery
      );

      console.log('sending', sms);

      // subscribe to the sendSMS function in the service which will invoke the server to send the SMS and return with a 
      // MessageSentResponse
      this.messageWaiting = this.messaging.sendSMS(sms).subscribe((response: MessageSentResponse) => {
        // unsubscribe so we can send messages again
        this.messageWaiting.unsubscribe();
        console.log('SMS response', response);

        // take the messages array from the response and add them to our sentMessages array to show up in 
        // the message history tab
        response.messages.forEach(message => {

          // if replyRequest was set to true add the returned messageId to the array of replyRequestIds so we can
          // identify messages receieved on that thread
          if (this.replyRequest) {
            this.replyRequestIds.push(message.messageId);
          }

          this.sentMessages.unshift(new MessageStatus(
            message.to,
            message.messageId,
            message.deliveryStatus
          ));
        });
      },
        error => this.messageWaiting.unsubscribe());
    }
  }

  // send an MMS message using the API. Follows pretty much the same flow as sending an SMS.
  sendMMS(subjectContent: string) {
    // check for MMSContent first
    if (this.mmsContent.length > 0) {
      
      if (!this.messageWaiting || this.messageWaiting && this.messageWaiting.closed) {

        let numbers = this.getRecipients();
        if (!subjectContent || subjectContent && subjectContent.trim() === '') {
          subjectContent = `Hi! Thanks for using Happy Chat! We all love Happy Chat!`;
        }

        // construct the MMS payload
        const mms = new MMS(
          this.myNumber,
          numbers,
          subjectContent,
          this.replyRequest,
          this.mmsContent
        );

        console.log('sending', mms);

        this.messageWaiting = this.messaging.sendMMS(mms).subscribe((response: MessageSentResponse) => {
          this.messageWaiting.unsubscribe();
          console.log('MMS response', response);

          response.messages.forEach(message => {
            if (this.replyRequest) {
              this.replyRequestIds.push(message.messageId);
            }

            this.sentMessages.unshift(new MessageStatus(
              message.to,
              message.messageId,
              message.deliveryStatus
            ));
          });
        },
          error => this.messageWaiting = null);
      }
    } else {
      this.fileErrors.push('At least one file required for MMS!');
    }
  }

  // bind the phone number input form. This is also a quick way to reset the form when the user clicks replyRequest
  bindForm() {
    // if the numbersForm is already initialized store the first value temporarily so we can set it again 
    let number: string;
    if (this.numbersForm) {
      number = this.numbersForm.get('numbers').value[0].number;
    }

    this.numbersForm = this.fb.group({
      numbers: this.fb.array([])
    });

    // add a number to the array and set the value to the number if we have it
    this.addNumber(number);
  }

  // get the form array control for numbers and intialize a new number
  addNumber(number?: string) {
    const control = <FormArray>this.numbersForm.get('numbers');
    control.push(this.fb.group({
      number: new FormControl({ value: number, disabled: false }, Validators.required)
    })
    );
  }

  // remove a number from the form array
  removeNumber(i: number) {
    const control = <FormArray>this.numbersForm.get('numbers');
    control.removeAt(i);
  }

  // for spinning the happy face at the bottom of the screen
  setConnected(connected: boolean, disconnected: boolean) {
    this.userConnected = connected;
    this.userDisconnected = disconnected;
  }

  ngOnInit() {
    // subscribe to message status events picked up in the messaging service
    this.messaging.getMessageStatus().subscribe((response: MessageStatus) => {
      console.log('status callback', response);

      let sentMessageIndex = this.sentMessages.findIndex(message => message.messageId === response.messageId);
      if (sentMessageIndex !== -1) {
        this.sentMessages[sentMessageIndex] = response;
      }
    });

    // subscribe to message received events picked up in the messaging service
    this.messaging.getMessages().subscribe((response: MessageReceivedResponse) => {
      console.log('message received', response);
      this.messages.unshift(response);
    });

    // subscribed to user connect/ disconnect events
    this.messaging.getConnectedUsers().subscribe((connections: number) => {
      if (this.connections === 0) {
        this.connections = connections;
      }
      if (connections > this.connections) {
        this.setConnected(true, false);
      }
      else if (connections < this.connections) {
        this.setConnected(false, true);
      }
      this.connections = connections;
      setTimeout(() => {
        this.setConnected(false, false);
      }, 300);
    });

    // initialize the form array for number inputs
    this.bindForm();
  }
}
