import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-to-form',
    templateUrl: './to-form.component.html'
})

export class ToFormComponent {
    @Input('group')
    toForm: FormGroup;
}