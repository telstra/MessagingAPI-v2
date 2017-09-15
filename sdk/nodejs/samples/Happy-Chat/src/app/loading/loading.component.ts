import { Component, OnInit, Input } from '@angular/core';

// https://codepen.io/aurer/pen/jEGbA

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input() colour: string;

  constructor() { }

  ngOnInit() {
  }

}
