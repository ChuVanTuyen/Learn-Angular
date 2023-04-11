import { Component, Output, OnInit, EventEmitter, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bt2ModalComponent } from '../bt2-modal/bt2-modal.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  ngOnInit(): void {
    console.log('hello');
  }

  message = "hello xin chào.";
  onClick(): void {
    this.message = "Change by child";
  }
}
