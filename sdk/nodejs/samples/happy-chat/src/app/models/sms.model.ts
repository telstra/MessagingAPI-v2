// represents what the API needs in order to send an SMS. MessageId is added here just for our app
export class SMS {
    to: string[];
    from: string;
    validity: string;
    priority:  boolean;
    notifyURL: string;
    replyRequest: boolean;
    body: string;
    messageId?: string;

    constructor(to: string[], from: string, validity: string, priority: boolean, notifyURL: string, replyRequst: boolean, body: string, messageId?: string) {
        this.to = to;
        this.from = from;
        this.validity = validity;
        this.priority = priority;
        this.notifyURL = notifyURL;
        this.replyRequest = replyRequst;
        this.body = body;
        this.messageId = messageId;
    }
}