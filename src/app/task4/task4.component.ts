import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConfigService } from '../config/config.service';
import { MyCacheService } from '../modules/my-cache.service';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit, AfterViewInit {
  constructor(private getCate: ConfigService, private router: Router, private myCache: MyCacheService) { }
  categories: any;
  ngOnInit(): void {
    let urlCategory = 'https://api.mazii.net/api/get-category/0/100';
    if (this.myCache.has(urlCategory)) {
      this.categories = this.myCache.getDataCache(urlCategory); // lấy data từ cache
      this.router.navigate(['task4/', this.categories[0].categoryId]);
    } else {// nếu trong cache chưa có data thì thực hiện gọi api
      this.getCate.getCategory()
        .subscribe((data: any) => {
          this.categories = [...data];
          this.myCache.setDataCache(urlCategory, this.categories);// lưu data vào cache
          this.router.navigate(['task4/', this.categories[0].categoryId]);
        });
    }
  }

  ngAfterViewInit(): void {
  }
}
