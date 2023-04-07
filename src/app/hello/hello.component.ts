import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bt2ModalComponent } from '../bt2-modal/bt2-modal.component';

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

  // listUser: any = [];
  // clickMessage: any;
  ngOnInit(): void {
    console.log('hello');
  }

  // onSubmit(formValue: any): void {
  //   // this.listUser.push(formValue);
  //   console.log(formValue);
  // }
  // @Input() message: any;
  // @Output() buttonClick = new EventEmitter<string>();
  // changeMessage(): void {
  //   this.message = "message has been changed";
  //   this.buttonClick.emit(this.message);
  // }

  message = "hello xin chào.";
  onClick(): void {
    this.message = "Change by child";
  }
}
