import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt2ModalComponent } from './bt2-modal.component';

describe('Bt2ModalComponent', () => {
  let component: Bt2ModalComponent;
  let fixture: ComponentFixture<Bt2ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bt2ModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bt2ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
