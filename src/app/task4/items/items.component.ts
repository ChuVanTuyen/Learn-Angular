import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config/config.service';

interface Item {


}

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  constructor(private configService: ConfigService, private route: ActivatedRoute) { }
  items: any;
  item: any;
  checkModal = false;// ẩn hiện modal
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.configService.getItems(params.get('id'))
        .subscribe((data: any) => this.items = data.data);
      setTimeout(() => console.log(this.items), 200);
    });
  }
  toggleModal(check: boolean, data?: any): void {
    if (data) {
      this.item = data;
    }
    this.checkModal = check;
  }
}
