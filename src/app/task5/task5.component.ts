import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Task5Component {
  checks = {
    openNav: false, // ẩn hiện nabar với các màn hình <= 992px
  }

  openNavBar(check: boolean): void {
    this.checks.openNav = check;
  }
}
