export class SMS {
    to: string[];
    from: string;
    validity: string;
    priority:  boolean;
    notifyURL: string;
    body: string;

    constructor(to: string[], from: string, validity: string, priority: boolean, notifyURL: string, body: string) {
        this.to = to;
        this.from = from;
        this.validity = validity;
        this.priority = priority;
        this.notifyURL = notifyURL;
        this.body = body;
    }
}