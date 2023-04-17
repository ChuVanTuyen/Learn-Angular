import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit, AfterViewInit {
  constructor(private getCate: ConfigService, private router: Router) { }
  categories: any;
  ngOnInit(): void {
    this.getCate.getCategory()
      .subscribe((data: any) => {
        this.categories = [...data];
        this.router.navigate(['task4/', this.categories[1].categoryId]);
        setTimeout(() => { console.log(this.categories) }, 200)
      });
  }

  ngAfterViewInit(): void {
  }
}
