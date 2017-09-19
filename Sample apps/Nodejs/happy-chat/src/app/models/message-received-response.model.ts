export class MessageReceivedResponse {
  to: string;
  from: string;
  body: string;
  sentTimestamp: Date;
  messageId: string;

  constructor(to: string, from: string, body: string, sentTimestamp: Date, messageId: string) {
    this.to = to;
    this.from = from;
    this.body = body;
    this.sentTimestamp = sentTimestamp;
    this.messageId = messageId;
  }
}