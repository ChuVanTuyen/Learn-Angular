import { Component, Output, EventEmitter, Input, ViewChild, OnInit } from '@angular/core';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-bt2-modal',
  templateUrl: './bt2-modal.component.html',
  styleUrls: ['./bt2-modal.component.scss']
})
export class Bt2ModalComponent implements OnInit {
  @Input() checkName: any;// nhận kết quả trùng tên từ compnent cha
  checkNothingName = false;// kiểm tra tên rỗng
  checkNotingHomeTown = false;// kiểm tra quê rỗng
  @Input() user: any;// nhận giá trị của row cần sửa trong table
  @Output() returnUser = new EventEmitter<object>();//trả về dữ liệu khi người dùng submit
  @Output() clickClose = new EventEmitter<string>();//đóng modal 
  ngOnInit(): void {
    console.log(this.user);
  }

  handleClickClose(): void {//đóng modal 
    this.clickClose.emit();
  }

  onSubmit(): void {// khi người dùng submit form
    if (!this.user.fullname.trim()) {// kiểm tra người dùng nhập tên hay chưa
      this.checkNothingName = true;// nếu chưa nhập thì = true
    }
    if (!this.user.homeTown.trim()) {// kiểm tra người dùng nhập quê quán hay chưa
      this.checkNotingHomeTown = true;
    }
    if (!this.checkNothingName && !this.checkNotingHomeTown) {
      if (this.user.id.trim()) {// nếu đã có id
        this.returnUser.emit({// gửi dữ liệu đã được sửa từ component form cho component table
          id: this.user.id,
          fullname: this.user.fullname,
          homeTown: this.user.homeTown,
          gender: this.user.gender,
        });
      } else {// chưa có id. Tức là nhập một hàng mới trong table 
        this.returnUser.emit({
          id: UUID.UUID(),
          fullname: this.user.fullname,
          homeTown: this.user.homeTown,
          gender: this.user.gender,
        });// gửi dữ liệu từ component form cho component table
      }
      this.user = {
        id: this.user.id,
        fullname: '',
        homeTown: '',
        gender: 'nam',
      }
    }
  }
  onChangeInput(): void {// người dùng nhập lại khi được báo lỗi
    console.log('change input');
    this.checkName = false;
    this.checkNothingName = false;
    this.checkNotingHomeTown = false;
  }
}
