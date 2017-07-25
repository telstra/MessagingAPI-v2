// represents the message sent response returned from the API
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