import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt1',
  templateUrl: './bt1.component.html',
  styleUrls: ['./bt1.component.scss']
})
export class Bt1Component implements OnInit {
  // constructor(@Inject('serviceName') private isShowModal: any){}
  list: any;// lưu dữ liệu lấy từ localStorage
  users: any;// lưu dữ liệu được chuyển sang mang của list
  checkGender = true;// đổi màu theo giới tính
  isShowModal = false;// ẩn hiện modal form
  checkName = false;// nếu đúng sẽ hiện trường báo bị trùng tên

  ngOnInit() {
    console.log(localStorage.getItem('listUser'));
    if (localStorage.getItem('listUser')) {// kiểm tra xem có dữ liệu trên localStorage hay không
      this.list = localStorage.getItem('listUser');
    }
    if (this.list) {
      this.users = JSON.parse(this.list);
    }
  }

  changeGender(g: boolean): void {// thay đổi in màu cho các hàng giới tính trong bảng
    this.checkGender = g;
  }

  handleShowModal(): void {// hàm hiện modal form
    this.isShowModal = true;
  }

  handleCloseModal(): void {// hàm đóng modal form
    this.isShowModal = false;
  }

  addUser(event: any): void {// hàm lưu dữ liệu được thêm vào local
    if (this.users) {
      // kiểm tra có bị trùng tên hay không
      let check = this.users.some((item: any) => item.fullname === event.fullname);
      this.checkName = check;
      if (check) {
        return;
      }
      this.users = [...this.users, event];
    } else {
      this.users = [event];
    }
    localStorage.setItem('listUser', JSON.stringify(this.users));
    console.log(localStorage.getItem('listUser'));
  }
}
