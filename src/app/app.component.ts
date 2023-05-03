import { Component, OnInit } from '@angular/core';
import { ST } from './pipes/velocity.pipe';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('vi');
  }
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
