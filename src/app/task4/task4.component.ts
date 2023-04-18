import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from '../config/config.service';
import { MyCacheService } from '../modules/my-cache.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit {
  constructor(private getData: ConfigService, private router: Router, private myCache: MyCacheService) { }
  categories: any;// lưu các folder
  items: any;
  flashcard: any;
  checks = {
    flashcard: false,
    itemsLength: false,// kiểm tra để hiện danh sách item; nếu sử dụng trực tiếp items.length trong *ngIf sẽ xuất hiện lỗi
    checkModal: false,// ẩn hiện modal
    categoryActive: 0,
  }
  item: any;// lưu giá trị cho modal chi tiết

  ngOnInit(): void {
    let urlCategory = 'https://api.mazii.net/api/get-category/0/100';
    if (this.myCache.has(urlCategory)) {
      this.categories = this.myCache.getDataCache(urlCategory); // lấy data từ cache
    } else {// nếu trong cache chưa có data thì thực hiện gọi api
      this.getData.getCategory()
        .subscribe((data: any) => {
          this.categories = [...data];
          this.myCache.setDataCache(urlCategory, this.categories);// lưu data vào cache
          console.log(this.categories[0].categoryId);
          this.showItems(this.categories[0].categoryId);// gọi api các items trong folder đầu tiên
        });
    }
  }

  showItems(cate: number, index?: number): void {
    let url = `https://api.mazii.net/api/get-note/${cate}/0/10`;
    if (this.myCache.has(url)) {// nếu đã từng gọi api và data đã được lưu vào cache
      this.items = this.myCache.getDataCache(url);// lấy data từ cache
      this.checks.itemsLength = this.items.length !== 0 ? true : false;
    } else {// thực hiện call api
      this.getData.getItems(cate)
        .subscribe((data: any) => {
          this.items = data.data;
          this.myCache.setDataCache(url, this.items);// lưu data vào cache
          this.checks.itemsLength = this.items.length !== 0 ? true : false;
          console.log(this.items);
        });
    }
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
