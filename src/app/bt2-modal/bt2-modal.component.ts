import { Component, Output, EventEmitter, Input } from '@angular/core';
import { UUID } from 'angular2-uuid';
@Component({
  selector: 'app-bt2-modal',
  templateUrl: './bt2-modal.component.html',
  styleUrls: ['./bt2-modal.component.scss']
})
export class Bt2ModalComponent {
  @Input() checkName: any;// nhận kết quả trùng tên từ compnent cha
  checkNothingName = false;// kiểm tra tên rỗng
  checkNotingHomeTown = false;// kiểm tra quê rỗng
  @Output() returnUser = new EventEmitter<object>();//trả về dữ liệu khi người dùng submit
  @Output() clickClose = new EventEmitter<string>();//đóng modal 

  handleClickClose(): void {//đóng modal 
    this.clickClose.emit();
  }
  gender = "nam";
  fullName = '';
  homeTown = '';
  onSubmit(): void {
    if (!this.fullName.trim()) {
      this.checkNothingName = true;
    }
    if (!this.homeTown.trim()) {
      this.checkNotingHomeTown = true;
    }
    if (!this.checkNothingName && !this.checkNotingHomeTown) {
      this.returnUser.emit({
        id: UUID.UUID(),
        fullname: this.fullName,
        homeTown: this.homeTown,
        gender: this.gender,
      });
    }
    console.log(this.fullName, this.homeTown, this.checkName);
  }
  onChangeInput(): void {
    console.log('change input');
    this.checkName = false;
    this.checkNothingName = false;
    this.checkNotingHomeTown = false;
  }
}
