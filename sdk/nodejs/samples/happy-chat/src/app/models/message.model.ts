import { Chatter } from './chatter.model';

export class Message {
  chatter: Chatter;
  message: string;
  sentTimestamp: Date;
  messageId: string;

  constructor(chatter: Chatter, message: string, sentTimestamp: Date, messageId: string) {
    this.chatter = chatter;
    this.message = message;
    this.sentTimestamp = sentTimestamp;
    this.messageId = messageId;
  }
}