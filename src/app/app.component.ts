import { Component, Output, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'learn_angular';
  ngAfterViewInit(): void {
  }
  counter = 1;
}
