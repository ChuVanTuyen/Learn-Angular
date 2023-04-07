import { Component, Output, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn_angular';
  // @Output() person ={name: "John", age: 20};
  // @Output() users = [
  //   { name: "John", age: 20 },
  //   { name: "John1", age: 21 },
  //   { name: "John2", age: 22 },
  //   { name: "John3", age: 23 },
  //   { name: "John4", age: 24 },
  // ]

  // message = "from app component";
  // onButtonClick(event: any): void {
  //   console.log(event);
  //   this.message = event;
  // }
  // changeParent(): void {
  //   this.message = "change by parent";
  // }

  // @ViewChildren(HelloComponent) private helloC!: QueryList<HelloComponent>;

  // ngAfterViewInit() {
  //   console.log(this.helloC);
  // }
  // onClick(): void {
  //   console.log(this.helloC);
  // }

  counter = 1;
}
