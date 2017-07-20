export interface MessageSentResponse {
  messages: [
    {
      deliveryStatus: string,
      messageId: string,
      to: string
    }
  ];
  messageType: string;
  numberDestinations: number;
  numberSegments: number;
}