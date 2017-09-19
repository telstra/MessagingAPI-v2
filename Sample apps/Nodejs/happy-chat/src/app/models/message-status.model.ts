export class MessageStatus {
  receivedTimestamp?: Date;
  sentTimestamp?: Date;
  to: string;
  messageId: string;
  deliveryStatus: string;

  constructor(to: string, messageId: string, deliveryStatus: string, receivedTimestamp?: Date, sentTimestamp?: Date) {
    this.to = to;
    this.messageId = messageId;
    this.deliveryStatus = deliveryStatus;
    this.receivedTimestamp = receivedTimestamp;
    this.sentTimestamp = sentTimestamp;
  }
}