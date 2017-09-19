import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TickComponent } from './tick.component';

@NgModule({
  declarations: [
    TickComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TickComponent
  ]
})

export class TickModule { }
