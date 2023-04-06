import { Component } from '@angular/core';

@Component({
  selector: 'app-bt1',
  templateUrl: './bt1.component.html',
  styleUrls: ['./bt1.component.scss']
})
export class Bt1Component {
  list = [
    { id: 1, fullname: "Chu Văn Tuyến", homeTown: "Bắc Giang", gender: "nam" },
    { id: 2, fullname: "Lê Thị Đào Mận", homeTown: "Cà Mau", gender: "nữ" },
    { id: 3, fullname: "Đào Bá Đạo", homeTown: "Bắc Ninh", gender: "nam" },
    { id: 4, fullname: "Nguyễn Thị B", homeTown: "Thái Bình", gender: "nữ" },
    { id: 5, fullname: "Nguyễn Thị A", homeTown: "Bắc Giang", gender: "nữ" },
  ];
  checkGender = true;
  changeGender(g: boolean): void {
    this.checkGender = g;
  }
}
