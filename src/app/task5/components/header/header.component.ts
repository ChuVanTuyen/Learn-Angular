import { Component, EventEmitter, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() openNav = new EventEmitter<boolean>();
  showModal = false;
  openNavBar(): void {
    this.openNav.emit(true);
  }

  toggelOder(oder: boolean): void {
    this.showModal = oder;
  }
}
