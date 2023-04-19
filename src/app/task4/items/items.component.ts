import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, AfterViewInit {
  constructor() { }
  @Input() items: any; // lưu danh sách các từ đã có trong folder
  @Input() itemsLength: any;
  item: any;// lưu giá trị cho modal chi tiết
  checks = {
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
    this.reFlashcard.emit();
  }
}
