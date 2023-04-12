import { Component, OnInit, AfterViewInit } from '@angular/core';

import { User } from '../modules/User';
@Component({
  selector: 'app-bt1',
  templateUrl: './bt1.component.html',
  styleUrls: ['./bt1.component.scss']
})
export class Bt1Component implements OnInit, AfterViewInit {
  // constructor(@Inject('serviceName') private isShowModal: any){}
  list: any;// lưu dữ liệu lấy từ localStorage
  users: any;// lưu dữ liệu được chuyển sang mảng của list
  checkGender = true;// đổi màu theo giới tính
  isShowModal = false;// ẩn hiện modal form
  checkName = false;// nếu đúng sẽ hiện trường báo bị trùng tên
  user: User = {
    id: '',
    fullname: '',
    homeTown: '',
    gender: 'nam'
  };
  ngOnInit() {
    // localStorage.clear();
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
    this.user = {
      id: '',
      fullname: '',
      homeTown: '',
      gender: 'nam'
    }
    this.checkGender = true;
    this.isShowModal = false;
    this.checkName = false;
  }

  addUser(event: any): void {// hàm lưu dữ liệu được thêm vào local
    if (this.users) {
      let checkIndex = this.users.findIndex((item: any) => item.id === event.id);
      if (checkIndex !== -1) {// nếu người dùng sửa thông tin
        let newList = [...this.users];
        newList.splice(checkIndex, 1);
        this.checkName = newList.some((item: any) => item.fullname.trim() === event.fullname.trim());
        if (this.checkName) {// kiểm tra xem tên mới sửa có trùng với tên khác hay không
          return;
        }
        this.users.splice(checkIndex, 1, event);// sửa lại
        localStorage.setItem('listUser', JSON.stringify(this.users));// cập nhật lại local
        return;
      } else {// nếu người dùng thêm mới
        // kiểm tra có bị trùng tên hay không
        this.checkName = this.users.some((item: any) => item.fullname.trim() === event.fullname.trim());
        if (this.checkName) {
          return;
        }
        else {
          this.users = [...this.users, event];
        }
      }
    } else {
      this.users = [event];
    }
    localStorage.setItem('listUser', JSON.stringify(this.users));
  }

  handleUpdate(data: any): void {
    this.user = {
      id: data.id,
      fullname: data.fullname,
      homeTown: data.homeTown,
      gender: data.gender
    }
    this.handleShowModal();
  }

  ngAfterViewInit(): void {
    console.log("AfterViewInit");
  }
}
