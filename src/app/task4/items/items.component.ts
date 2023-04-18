import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';
import { MyCacheService } from 'src/app/modules/my-cache.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  constructor(private configService: ConfigService, private route: ActivatedRoute, private myCache: MyCacheService) { }
  items: any; // lưu danh sách các từ đã có trong folder
  itemsLength = false;// kiểm tra để hiện danh sách item; nếu sử dụng trực tiếp items.length trong *ngIf sẽ xuất hiện lỗi
  item: any;// lưu giá trị cho modal chi tiết
  checkModal = false;// ẩn hiện modal
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      let url = `https://api.mazii.net/api/get-note/${id}/0/10`;
      if (this.myCache.has(url)) {// nếu đã từng gọi api và data đã được lưu vào cache
        this.items = this.myCache.getDataCache(url);// lấy data từ cache
        this.itemsLength = this.items.length !== 0 ? true : false;
      } else {// thực hiện call api
        this.configService.getItems(params.get('id')) // lưu data vào cache
          .subscribe((data: any) => {
            this.items = data.data;
            this.myCache.setDataCache(url, this.items);
            this.itemsLength = this.items.length !== 0 ? true : false;
          });
      }
    });

  }
  toggleModal(check: boolean, data?: any): void {
    if (data) {
      this.item = data;
    }
    this.checkModal = check;
  }
}
