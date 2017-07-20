export class MessageStatusResponse {
  receivedTimestamp: Date;
  sentTimestamp: Date;
  to: string;

  constructor(receivedTimestamp: Date, sentTimestamp: Date, to: string) {
    this.receivedTimestamp = receivedTimestamp;
    this.sentTimestamp = sentTimestamp;
    this.to = to;
  }
}