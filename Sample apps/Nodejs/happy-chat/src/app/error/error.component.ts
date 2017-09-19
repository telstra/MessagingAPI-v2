import { Component, ViewChild, OnInit } from '@angular/core';

import { ErrorService } from './error.service';
import { Error } from './error.model';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.scss']
})

export class ErrorComponent implements OnInit {
    error: Error;
    display = 'none';

    constructor(private errorService: ErrorService) {}

    onErrorHandled() {
        this.error = null;
        this.display = 'none';
    }

    ngOnInit() {
        this.errorService.errorOccured
            .subscribe(
                (error: Error) => {
                    this.error = error;
                    this.display = 'block';
                }
            )
    }
}