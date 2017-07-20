import { EventEmitter } from '@angular/core';
import { Notification } from './notification.model';

/**
 * Notification service is basically just an event emitter that tells the component to display
 * a toast to the screen. Notification Data pretty much always comes back from the server.
 */

export class NotificationService{

    notificationOccured = new EventEmitter<Notification>();

    handleNotification(notification: any) {
        const notificationData = new Notification(notification.type, notification.message);
        this.notificationOccured.emit(notificationData);
    }
}