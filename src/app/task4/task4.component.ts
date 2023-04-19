import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit {
  constructor(private getDataNote: ConfigService, private router: Router) { }
  categories: any;// lưu các folder
  items: any;
  flashcard: any;
  checks = {
    flashcard: false,
    itemsLength: false,// kiểm tra để hiện danh sách item; nếu sử dụng trực tiếp items.length trong *ngIf sẽ xuất hiện lỗi
    checkModal: false,// ẩn hiện modal
    categoryActive: 0,// active folder
  }
  item: any;// lưu giá trị cho modal chi tiết

  ngOnInit(): void {
    this.getDataNote.getCategory()
      .subscribe((data: any) => {
        this.categories = [...data];
        console.log(this.categories[0].categoryId);
        this.showItems(this.categories[0].categoryId);// gọi api các items trong folder đầu tiên
      });
  }

  showItems(cate: number, index?: number): void {
    this.getDataNote.getItems(cate)
      .subscribe((data: any) => {
        this.items = data.data;
        this.checks.itemsLength = this.items.length !== 0 ? true : false;
      });
    if (index !== undefined) {
      this.checks.categoryActive = index;
    }
  }

  showFlashcard(data: any): void {
    this.checks.flashcard = true;
    this.flashcard = data;
    console.log(this.flashcard);
  }
}
