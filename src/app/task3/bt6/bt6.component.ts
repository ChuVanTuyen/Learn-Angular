import { Component, OnInit } from '@angular/core';
import { faWrench, faXmark } from '@fortawesome/free-solid-svg-icons';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-bt6',
  templateUrl: './bt6.component.html',
  styleUrls: ['./bt6.component.scss']
})
export class Bt6Component implements OnInit {
  icons = { faWrench, faXmark };// dùng icons fontawesome;
  showAdd = false;// ẩn hiện modal thêm công việc
  showModalDelete = false;// ẩn hiện modal có chắc chắn muốn xóa công việc 
  filter = 'Tất cả'; // lọc công việc: tất cả, chưa hoàn thành, đã hoàn thành
  tasks: any;// lưu dữ liệu mảng công việc
  task = {
    id: '',
    name: '',
    time: '',
    status: 'Chưa hoàn thành',
    update: false
  };
  ngOnInit(): void {
    // console.log(this.faWrench);
    // localStorage.clear();
    let list = localStorage.getItem('tasks');
    if (list) {
      this.tasks = JSON.parse(list);
    }
  }

  // các hàm thêm công việc
  isShowAdd(): void {// hiện modal thêm công việc
    this.showAdd = true;
  }

  isHideShowAdd(): void {// ẩn modal thêm công việc
    this.task = {
      id: '',
      name: '',
      time: '',
      status: 'Chưa hoàn thành',
      update: false
    };
    this.showAdd = false;
  }

  addSubmit(): void {// thêm công việc
    this.task.id = UUID.UUID();
    if (this.tasks) {
      this.tasks.push(this.task);
    } else {
      this.tasks = [this.task];
    }
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.task = {
      id: '',
      name: '',
      time: '',
      status: 'Chưa hoàn thành',
      update: false
    }
  }
  //----------------------------------------------------------------

  // các hàm xóa công việc
  isHideModalDelete() {// ẩn modal có chắc chắn muốn xóa
    this.task = {
      id: '',
      name: '',
      time: '',
      status: 'Chưa hoàn thành',
      update: false
    }
    this.showModalDelete = false;
  }

  isDelete(data: string) {// khi click vào xóa công việc,
    this.showModalDelete = true;//hiện modal hỏi có chắc chắn muốn xóa hay không
    this.task.id = data;// lấy id công việc cần xóa
  }

  deleteTask() {// xóa công việc
    let confirm = this.tasks.findIndex((item: any) => item.id === this.task.id);
    if (confirm !== -1) {
      this.tasks.splice(confirm, 1);
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      this.isHideModalDelete();
    }
  }
  //----------------------------------------------------------------

  //các hàm lọc công việc
  onChangeFilter(data: string) {
    this.filter = data;
    console.log(this.filter);
  }
  //-----------------------------------------------------------------

  //các hàm sửa công việc
  changeStatus(id: string): void {// sửa trạng thái công việc
    let data = this.tasks.find((t: any) => t.id === id);
    data.status =
      data.status === 'Chưa hoàn thành' ? data.status = 'Đã hoàn thành' : data.status = 'Chưa hoàn thành';
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
  showUpdate(id: string): void {// ẩn hiện trường sửa công việc
    let data = this.tasks.find((item: any) => item.id === id);
    this.task = { ...data };
    data.update = true;
  }

  cancelUpdate(): void {// hủy sửa công việc
    let data = this.tasks.find((item: any) => item.id === this.task.id);
    data.update = false;
    this.task = {
      id: '',
      name: '',
      time: '',
      status: 'Chưa hoàn thành',
      update: false
    };
    console.log('cancel');
  }
  confirmUpdate(): void {
    let data = this.tasks.find((item: any) => item.id === this.task.id);
    data.name = this.task.name;
    data.time = this.task.time;
    data.update = false;
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.task = {
      id: '',
      name: '',
      time: '',
      status: 'Chưa hoàn thành',
      update: false
    };
    console.log('updated');
  }
  //-----------------------------------------------------------------
}
