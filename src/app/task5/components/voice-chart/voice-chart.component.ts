import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-voice-chart',
  templateUrl: './voice-chart.component.html',
  styleUrls: ['./voice-chart.component.scss']
})
export class VoiceChartComponent implements OnInit, AfterViewInit {
  @ViewChild("ngList") private listItem!: ElementRef;
  list = [
    { id: 0, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/CityPop.jpg" },
    { id: 1, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/1420724053825_500.jpg" },
    { id: 2, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/191d9a966f20e565490d7d17d73f415e.jpg" },
    { id: 3, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/Image-from-iOS-1.jpg" },
    { id: 4, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/Untitled.jpeg" },
    { id: 5, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/sakikoosawa.jpg" },
    { id: 6, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/sakikoosawa.jpg" },
    { id: 7, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/sakikoosawa.jpg" },
    { id: 8, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/sakikoosawa.jpg" },
    { id: 9, name: "best friend", artist: "Kananishino", view: 1234, img: "../../../../assets/task5/sakikoosawa.jpg" },
  ];
  bigImg = '';// ảnh to
  item: any;
  keepActive = 0;// phần tử đang có class active trong danh sách
  itemHeight = 0;
  ngOnInit(): void {
    this.bigImg = this.list[0].img;// mặc định là ảnh của phần tử đầu tiên trong danh sách
  }

  ngAfterViewInit(): void {
    this.item = this.listItem.nativeElement.querySelector(".item");
    this.itemHeight = this.item.offsetHeight;
    // this.keepActive.classList.add("active");// thêm class active cho phần tử đầu tiên
  }
  chooseVoice(num: number): void {
    this.keepActive = num;
    this.bigImg = this.list[this.keepActive].img;// thay đổi ảnh to để hiển thị
  }

  onScroll(data: any): void {
    console.log(data.target.scrollTop);
    this.keepActive = Math.round(data.target.scrollTop / this.itemHeight);
    this.bigImg = this.list[this.keepActive].img;// thay đổi ảnh to để hiển thị
  }
}
