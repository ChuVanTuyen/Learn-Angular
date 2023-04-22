import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from '../config/config.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit {
  constructor(private getDataNote: ConfigService, private router: Router) { }
  @ViewChild("ngConditionFill") conditionFill!: ElementRef;
  categories: any;// lưu các folder
  items: any;
  categoryData: any;// lưu tên folder và item của nó
  checks = {
    showFlashcard: false,
    showFill: false,
    itemsLength: false,// kiểm tra để hiện danh sách item; nếu sử dụng trực tiếp items.length trong *ngIf sẽ xuất hiện lỗi
    checkModal: false,// ẩn hiện modal
    categoryActive: 0,// active folder
  }
  item: any;// lưu giá trị cho modal chi tiết

  ngOnInit(): void {
    // localStorage.clear();
    this.getDataNote.getCategory()
      .subscribe((data: any) => {
        this.categories = [...data];
        this.showItems(this.categories[0]);// gọi api các items trong folder đầu tiên
      });
  }

  // lấy dữ liệu của 1 folder
  showItems(cate: any, index?: number): void {
    this.getDataNote.getItems(cate.categoryId)
      .subscribe((data: any) => {
        this.items = data.data;
        console.log(this.items);
        this.checks.itemsLength = this.items.length !== 0 ? true : false;
        this.categoryData = {
          categoryName: cate.categoryName,
          items: this.items,
        }
      });
    if (index !== undefined) {
      this.checks.categoryActive = index;
    }
  }

  // hiện flashcard hoặc fill
  showFlashOrFill(check: any): void {
    this.checks.showFlashcard = check.flashcard;
    if (this.categoryData.items.length < 4) {
      this.conditionFill.nativeElement.classList.add("show");
      return;
    }
    this.checks.showFill = true;

  }

  //ẩn fill
  closeFlashcard(): void {
    this.checks.showFlashcard = false;
  }

  //ẩn fill
  closeFill(): void {
    this.checks.showFill = false;
  }
  //-------------------------------------------------

  closeConditionFill(): void {
    this.conditionFill.nativeElement.classList.remove("show");
  }
}
