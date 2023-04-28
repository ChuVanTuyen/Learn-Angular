import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit, OnChanges, AfterViewInit {
  constructor() { }
  @ViewChild("ngSlide") slide!: ElementRef;
  @Input() list: any;
  @Input() itemMargin: any;
  @Input() type: any;
  resizeWidth = 0;
  showItemNum = 0;// số phần tử nằm gọn traong khung hình
  slideItem: any;// phần tử html trong slide;
  slidePosition = 0;// giá trị slide đã translateX
  slideLength = 0;// số các phần tử có trong slide
  itemWidth = 0;// width của 1 phần tử có trong slide
  slideWidth = 0;// width của slide
  ngOnChanges(): void {
    this.slideLength = this.list.length;
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.slideItem = this.slide.nativeElement.querySelector(".item");
    this.itemWidth = this.slideItem.getBoundingClientRect().width;
    this.slideWidth = this.slide.nativeElement.getBoundingClientRect().width;
    this.showItemNum = Math.floor(this.slideWidth / (this.itemWidth + this.itemMargin));
  }
  onclickBtnDirection(event: any, left: boolean): void {
    // let e = event.target.parentElement;
    if (this.slideLength) {
      if (left) {
        // nếu width phần bị che ở phía trái còn ít hơn độ rộng hiển thị thì transfrom translate về 0
        if (-this.slidePosition <= (this.itemWidth + this.itemMargin) * this.showItemNum) {
          this.slidePosition = 0;
        } else { // dịch dịch trái showItemNum phần tử
          this.slidePosition += (this.itemWidth + this.itemMargin) * this.showItemNum;
        }
        this.slide.nativeElement.style.transform = `translateX(${this.slidePosition}px)`;
        return;
      } else {
        // nếu width slide bị che ở phía phải còn ít hơn độ rộng hiển thị thì transfrom translate về cuối slide
        if (Math.floor(-this.slidePosition / (this.itemWidth + this.itemMargin)) + 2 * this.showItemNum >= this.slideLength - 1) {
          this.slidePosition = -this.slideLength * (this.itemWidth + this.itemMargin) + this.slideWidth + this.itemMargin;
          this.slide.nativeElement.style.transform = `translateX(${this.slidePosition}px)`;
          return;
        }
        this.slidePosition -= this.showItemNum * (this.itemWidth + this.itemMargin);
        this.slide.nativeElement.style.transform = `translateX(${this.slidePosition}px)`;
      }
    }
  }

  screenChange(): void { // sự kiện thay đổi kích thước màn hình
    this.slideWidth = this.slide.nativeElement.getBoundingClientRect().width;// lấy lại width của slide
    this.showItemNum = Math.floor(this.slideWidth / (this.itemWidth + this.itemMargin));// thay đổi số phần tử mỗi lần dịch
    this.slidePosition = 0;
    this.slide.nativeElement.style.transform = `translateX(0px)`;
  }
}
