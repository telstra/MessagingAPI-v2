export class Message {
  to: string;
  from: string;
  message: string;
  sentTimestamp: Date;
  messageId: string;

  constructor(to: string, from: string, message: string, sentTimestamp: Date, messageId: string) {
    this.to = to;
    this.from = from;
    this.message = message;
    this.sentTimestamp = sentTimestamp;
    this.messageId = messageId;
  }
}