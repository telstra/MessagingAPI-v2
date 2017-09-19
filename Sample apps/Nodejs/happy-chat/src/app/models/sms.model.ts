export class SMS {
    to: string[];
    from: string;
    validity: string;
    priority:  boolean;
    notifyURL: string;
    replyRequest: boolean;
    body: string;
    scheduledDelivery?: number;

    constructor(to: string[], from: string, validity: string, priority: boolean, notifyURL: string, replyRequst: boolean, body: string, scheduledDelivery?: number) {
        this.to = to;
        this.from = from;
        this.validity = validity;
        this.priority = priority;
        this.notifyURL = notifyURL;
        this.replyRequest = replyRequst;
        this.body = body;
        this.scheduledDelivery = scheduledDelivery;
    }
}