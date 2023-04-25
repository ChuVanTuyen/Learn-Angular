import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() closeNav = new EventEmitter<boolean>();

  openNavBar(): void {
    this.closeNav.emit(false);
  }
}
