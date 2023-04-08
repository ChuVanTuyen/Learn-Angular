import { Component, Output, EventEmitter, Input, ViewChild, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

import { Bt1Component } from '../bt1/bt1.component';

@Component({
  selector: 'app-bt2-modal',
  templateUrl: './bt2-modal.component.html',
  styleUrls: ['./bt2-modal.component.scss']
})
export class Bt2ModalComponent implements OnInit {
  @Input() checkName: any;// nhận kết quả trùng tên từ compnent cha
  checkNothingName = false;// kiểm tra tên rỗng
  checkNotingHomeTown = false;// kiểm tra quê rỗng
  @Input() user: any;// nhận giá trị của hàng cần sửa trong table
  @Output() returnUser = new EventEmitter<object>();//trả về dữ liệu khi người dùng submit
  @Output() clickClose = new EventEmitter<string>();//đóng modal 
  gender = "nam";
  fullName = '';
  homeTown = '';
  ngOnInit(): void {
    console.log(this.user);
    if (this.user) {
      this.gender = this.user.gender;
      this.fullName = this.user.fullname;
      this.homeTown = this.user.homeTown;
    }
  }

  handleClickClose(): void {//đóng modal 
    this.clickClose.emit();
  }

  onSubmit(): void {// khi người dùng submit form
    if (!this.fullName.trim()) {// kiểm tra người dùng nhập tên hay chưa
      this.checkNothingName = true;// nếu chưa nhập thì = true
    }
    if (!this.homeTown.trim()) {// kiểm tra người dùng nhập quê quán hay chưa
      this.checkNotingHomeTown = true;
    }
    if (!this.checkNothingName && !this.checkNotingHomeTown) {
      if (this.user.id.trim()) {// nếu đã có id
        this.returnUser.emit({// gửi dữ liệu đã được sửa từ component form cho component table
          id: this.user.id,
          fullname: this.fullName,
          homeTown: this.homeTown,
          gender: this.gender,
        });
      } else {// chưa có id. Tức là nhập một hàng mới trong table 
        this.returnUser.emit({// gửi dữ liệu từ component form cho component table
          id: UUID.UUID(),
          fullname: this.fullName,
          homeTown: this.homeTown,
          gender: this.gender,
        });
      }
      this.gender = "nam";
      this.fullName = '';
      this.homeTown = '';
    }
  }
  onChangeInput(): void {// người dùng nhập lại khi được báo lỗi
    console.log('change input');
    this.checkName = false;
    this.checkNothingName = false;
    this.checkNotingHomeTown = false;
  }
}
