import { Component, Output, ViewChild, AfterViewInit, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Config, ConfigService } from './config/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learn_angular';
  config: any;
  ngOnInit(): void {

  }
  onClick() {
    console.log(this.config);
  }
}
