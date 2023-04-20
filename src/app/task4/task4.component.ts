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
    checkFlashcard: false,
    itemsLength: false,// kiểm tra để hiện danh sách item; nếu sử dụng trực tiếp items.length trong *ngIf sẽ xuất hiện lỗi
    checkModal: false,// ẩn hiện modal
    categoryActive: 0,// active folder
  }
  item: any;// lưu giá trị cho modal chi tiết

  ngOnInit(): void {
    this.getDataNote.getCategory()
      .subscribe((data: any) => {
        this.categories = [...data];
        this.showItems(this.categories[1]);// gọi api các items trong folder đầu tiên
        this.checks.checkFlashcard = true;
      });
  }

  showItems(cate: any, index?: number): void {
    this.getDataNote.getItems(cate.categoryId)
      .subscribe((data: any) => {
        this.items = data.data;
        console.log(this.items);
        this.checks.itemsLength = this.items.length !== 0 ? true : false;
        this.flashcard = {
          categoryName: cate.categoryName,
          items: this.items,
        }
      });
    if (index !== undefined) {
      this.checks.categoryActive = index;
    }
  }

  showFlashcard(): void {
    this.checks.checkFlashcard = true;
  }

  closeFlashcard(): void {
    this.checks.checkFlashcard = false;
  }
}
