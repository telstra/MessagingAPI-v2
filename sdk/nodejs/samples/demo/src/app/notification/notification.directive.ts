import { Directive, ViewContainerRef } from '@angular/core'
import { NotificationService } from './notification.service';
import { Notification } from './notification.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

/**
 * Notification component subscribes to the notification service and pops a notification when
 * the service emits the handleNotification event. This is always present on the screen, with the
 * <app-notification> tag present in app.component.html.
 * 
 * The notification model contains a type, a title and a message. The type defines what type of notification to show.
 * 
 *  https://www.npmjs.com/package/ng2-toastr
 * 
 */

@Directive({
  selector: 'app-notification'
})

export class NotificationDirective {

  notification: Notification;

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef, private notificationService: NotificationService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  showSuccess() {
    this.toastr.success(this.notification.message);
  }

  showImportant() {
    this.toastr.error(this.notification.message);
  }

  showWarning() {
    this.toastr.warning(this.notification.message);
  }

  showInfo() {
    this.toastr.info(this.notification.message);
  }

  ngOnInit() {
    this.notificationService.notificationOccured
      .subscribe(
      (notification: Notification) => {
        this.notification = notification;
        switch (this.notification.type) {
          case 'success':
            this.showSuccess();
            break;
          case 'important':
            this.showImportant();
            break;
          case 'warning':
            this.showWarning();
            break;
          case 'info':
            this.showInfo();
            break;
          default:
            break;
        }
      });
  }
}