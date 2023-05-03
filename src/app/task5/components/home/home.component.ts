import { AfterViewInit, Component, ElementRef, OnDestroy, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild("ngHomeSlideList") homeSlide!: ElementRef;
  list = [
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "assets/task5/1420724053825_500.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "t.bình", img: "assets/task5/18422817_267711936970458_6205876168907061104_o.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "dễ", img: "assets/task5/191d9a966f20e565490d7d17d73f415e.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "assets/task5/CityPop.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "dễ", img: "assets/task5/Image-from-iOS-1.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "t.bình", img: "assets/task5/yuuri-billboard-japan-2022-billboard-1548.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "assets/task5/images.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "dễ", img: "assets/task5/maxresdefault.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "dễ", img: "assets/task5/New-Japanese-Music-Tokyo-Weekender.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "t.bình", img: "assets/task5/orEmdwEqPCCDhCBRYvUL6K.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "assets/task5/111036.jpg", kindOfMusic: "Pop Music" },
    { name: "Name Song", artist: "Kananishino", level: "khó", img: "assets/task5/Untitled.jpeg", kindOfMusic: "Pop Music" },
  ];
  bannerImgs = [
    "assets/task5/pngtree-school-ancient-music-club-recruits-neoclassical-geometric-gray-banner-picture-image_1091572.jpg",
    "assets/task5/pngtree-japanese-ukiyo-e-surf-simple-banner-background-picture-image_1090571.jpg",
    "assets/task5/pngtree-japanese-japan-fresh-blue-picture-image_928843.jpg",
  ];
  itemActive = 0;
  clearInfinity: any;
  ngAfterViewInit(): void {
    this.clearInfinity = setInterval(() => {
      this.itemActive++;
      this.itemActive %= this.bannerImgs.length;
    }, 5000);
  }

  changeItemActive(index: number): void {
    this.itemActive = index;
  }

  ngOnDestroy(): void {
    clearInterval(this.clearInfinity);
  }
}
