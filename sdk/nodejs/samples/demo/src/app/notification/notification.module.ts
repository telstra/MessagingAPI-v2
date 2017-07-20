import { NgModule } from '@angular/core';
import { NotificationDirective } from './notification.directive';
import { NotificationService } from './notification.service';

@NgModule({
    declarations: [
        NotificationDirective
    ],
    imports: [
    ],
    providers: [
        NotificationService
    ],
    exports: [
        NotificationDirective
    ]
})

export class NotificationModule {}