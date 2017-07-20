import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DemoComponent } from './demo.component';
import { DemoService } from './demo.service';
import { ToFormComponent } from './form/to-form.component';

@NgModule({
  declarations: [
    DemoComponent,
    ToFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    DemoService
  ],
  exports: [
    DemoComponent,
    ToFormComponent
  ]
})

export class DemoModule { }
