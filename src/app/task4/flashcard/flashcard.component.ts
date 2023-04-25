import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { LocalStorageService } from 'src/app/modules/local-storage.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.scss']
})
export class FlashcardComponent implements OnChanges, OnInit {
  constructor(private myLocalStorage: LocalStorageService) { }
  @Input() category: any;
  @Output() checkFlashcard = new EventEmitter();
  filter = 2;// 2. tất cả, 1. đã nhớ, 0. chưa nhớ
  categoryCopy: any; // dùng để lưu dữ liệu có remember và để lưu trên local
  categoryFilter: any; // hiện thị ra giao giện, phục vụ cho lọc các phần tử có nhớ ko nhớ
  remember = 1;
  checks = {
    isShowOptionFilter: false,// ẩn hiện option lọc
    isFlip: true,
    isItemCarousel: 0,
  }

  ngOnChanges(): void {
    if (this.category) { // lấy dữ liệu cho categoryCopy để hiển thị ra giao diện
      let data = this.myLocalStorage.getItem(this.category.categoryName);
      if (typeof data === 'string') {
        this.categoryCopy = JSON.parse(data);
      }
      else {
        this.categoryCopy = this.category.items;
        this.myLocalStorage.setItem(this.category.categoryName, this.category.items);
      }
      this.categoryFilter = this.categoryCopy;
    }
  }

  ngOnInit(): void {
    // this.myLocalStorage.clear();
  }

  closeFlashcard(): void { // quay về dao diện danh sách item folder
    this.checkFlashcard.emit();
  }

  //thay đổi remeber cho từ từ vựng
  changeRemember(id: any, index: number, rem: number): void {
    this.categoryFilter[index].remember = rem;
    let data = this.categoryCopy.find((item: any) => item.id === id);
    data.remember = rem;
    this.myLocalStorage.setItem(this.category.categoryName, this.categoryCopy);
  }

  // các hàm cho button filter
  changeFilterValue(e: any): void {
    this.filter = e.target.value;
    if (this.filter === 0) {
      this.categoryFilter = this.categoryCopy.filter((item: any) => item.remember === 0 || item.remember === null);
    } else if (this.filter === 1) {
      this.categoryFilter = this.categoryCopy.filter((item: any) => item.remember === 1);
    } else {
      this.categoryFilter = this.categoryCopy
    }
    this.checks.isItemCarousel = 0;
    this.checks.isShowOptionFilter = false;
  }

  showOptionFilter(): void {
    this.checks.isShowOptionFilter = true;
  }
  //---------------------------------------------------


  // lật thẻ 
  flipCard() {
    this.checks.isFlip = !this.checks.isFlip;
  }
  //---------------------------------------------------

  // carousel 
  shiftLeft(): void {
    this.checks.isItemCarousel > 0
      ? this.checks.isItemCarousel--
      : this.checks.isItemCarousel = this.categoryFilter.length - 1;
  }
  shiftRight(): void {
    this.checks.isItemCarousel < this.categoryFilter.length - 1
      ? this.checks.isItemCarousel++
      : this.checks.isItemCarousel = 0;
  }
  //---------------------------------------------------

  // trộn ngẫu nhiên thứ tự flash card
  shuffledArr(array: any): void { array.sort(() => 0.5 - Math.random()) };
  mixRandom(): void {
    this.checks.isItemCarousel = 0;
    this.categoryFilter = this.categoryCopy.sort(() => 0.5 - Math.random());
  }
}
