import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { ErrorService } from './error.service';

@NgModule({
    declarations: [
        ErrorComponent
    ],
    imports:[
        CommonModule
    ],
    providers: [
        ErrorService
    ],
    exports: [
        ErrorComponent
    ]
})

export class ErrorModule {}