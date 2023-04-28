import { Component, Output, ViewChild, AfterViewInit, ViewChildren, QueryList, OnInit } from '@angular/core';
import { NoteService } from './services/note.service';
import { Router } from '@angular/router';
import { map, toArray } from 'rxjs';
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
  headerLink = true;
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
