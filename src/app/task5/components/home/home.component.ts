import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild("ngHomeSlideList") homeSlideList!: ElementRef;
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
