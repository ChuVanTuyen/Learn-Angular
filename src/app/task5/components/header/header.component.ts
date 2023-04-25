import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() openNav = new EventEmitter<boolean>();

  openNavBar(): void {
    this.openNav.emit(true);
  }
}
