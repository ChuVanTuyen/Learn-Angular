import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn_angular';
  // @Output() person ={name: "John", age: 20};
  @Output() users = [
    { name: "John", age: 20 },
    { name: "John1", age: 21 },
    { name: "John2", age: 22 },
    { name: "John3", age: 23 },
    { name: "John4", age: 24 },
  ]
}
