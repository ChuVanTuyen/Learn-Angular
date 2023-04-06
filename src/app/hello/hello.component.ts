import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  // @Input() person: any;
  // increasePersonAge(): void {
  //   this.person.age += 1;
  // }
  // reducePersonAge(): void {
  //   this.person.age -= 1;
  // }

  // @Input() list: any;

  ngOnInit(): void {
    console.log('hello');
  }

  onSubmit(form: any): void {
    console.log(form);
  }
}
