import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild("ngHomeSlideList") homeSlideList!: ElementRef;
  list = [
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "../../../../assets/task5/1420724053825_500.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "t.bình", img: "../../../../assets/task5/18422817_267711936970458_6205876168907061104_o.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "dễ", img: "../../../../assets/task5/191d9a966f20e565490d7d17d73f415e.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "../../../../assets/task5/CityPop.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "dễ", img: "../../../../assets/task5/Image-from-iOS-1.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "t.bình", img: "../../../../assets/task5/yuuri-billboard-japan-2022-billboard-1548.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "../../../../assets/task5/images.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "dễ", img: "../../../../assets/task5/maxresdefault.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "dễ", img: "../../../../assets/task5/New-Japanese-Music-Tokyo-Weekender.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "t.bình", img: "../../../../assets/task5/orEmdwEqPCCDhCBRYvUL6K.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "../../../../assets/task5/111036.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "../../../../assets/task5/Untitled.jpeg", kindOfMusic: "Pop Music" },
  ];
  homeSlideItem: any;
  slideItem: any;
  slideNum = 1;
  ngAfterViewInit(): void {
    this.homeSlideItem = this.homeSlideList.nativeElement.querySelectorAll(".home-slide-item");
    // this.homeSlideItem[0].style.zIndex = "99";
    // console.log(this.homeSlideItem[0]);
    // this.slideItem = setInterval(() => {
    //   this.slideNum++;
    //   if (this.slideNum > 2) {
    //     this.slideNum %= 3;
    //   }
    //   if (this.slideNum - 1 < 0) {
    //     this.homeSlideItem[this.slideNum - 1 + 3].style.left = "-101%";
    //   } else {
    //     this.homeSlideItem[this.slideNum - 1].style.left = "-101%";
    //   }

    //   this.homeSlideItem[this.slideNum].style.visibility = "visible";
    //   this.homeSlideItem[this.slideNum].style.left = "0%";

    //   if (this.slideNum + 1 > 2) {
    //     setTimeout(() => {
    //       this.homeSlideItem[this.slideNum + 1 - 3].style.visibility = "hidden";
    //       this.homeSlideItem[this.slideNum + 1 - 3].style.left = "101%";
    //     }, 100);
    //   } else {
    //     setTimeout(() => {
    //       this.homeSlideItem[this.slideNum + 1].style.visibility = "hidden";
    //       this.homeSlideItem[this.slideNum + 1].style.left = "101%";
    //     },)
    //   }
    // }, 2000);
  }
}
