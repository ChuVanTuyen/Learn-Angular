import { Component, OnInit } from '@angular/core';
import { ST } from './pipes/velocity.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }
  title = 'learn_angular';
  config: any;
  headerLink = false;
  st: ST = {
    distance: 100,// mét
    time: 11,// giây
  }
  ngOnInit(): void {
  }

  hideHeaderLink(): void {
    this.headerLink = false;
  }
}
