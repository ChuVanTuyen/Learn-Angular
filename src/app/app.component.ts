import { Component, Output, ViewChild, AfterViewInit, ViewChildren, QueryList, OnInit } from '@angular/core';
import { Config, ConfigService } from './config/config.service';
import { Router } from '@angular/router';
import { map, toArray } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private getCate: ConfigService, private router: Router) { }
  title = 'learn_angular';
  config: any;
  observable = {
    next: (data: any) => {
      this.config = data;
      console.log(data);
    },
    error: (data: any) => console.log(data)
  }
  ngOnInit(): void {
    this.getCate.getItems(0);
  }
  onClick() {
    console.log(this.config);
  }
}
