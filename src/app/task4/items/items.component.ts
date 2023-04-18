import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';
import { MyCacheService } from 'src/app/modules/my-cache.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, AfterViewInit {
  constructor(private configService: ConfigService, private route: ActivatedRoute, private myCache: MyCacheService) { }
  @Input() items: any; // lưu danh sách các từ đã có trong folder
  @Input() itemsLength: any;
  item: any;// lưu giá trị cho modal chi tiết
  checks = {
    itemsLength: false,// kiểm tra để hiện danh sách item; nếu sử dụng trực tiếp items.length trong *ngIf sẽ xuất hiện lỗi
    checkModal: false// ẩn hiện modal
  }

  @Output() reFlashcard = new EventEmitter();


  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // this.checks.itemsLength = this.items.length !== 0 ? true : false;
  }

  // hàm ẩn hiện modal chi tiết
  toggleModal(check: boolean, data?: any): void {
    if (data) {
      this.item = data;
    }
    this.checks.checkModal = check;
  }

  // hàm hiện flashcard của folder
  showFlashCard(): void {
    this.reFlashcard.emit(this.items);
  }
}
