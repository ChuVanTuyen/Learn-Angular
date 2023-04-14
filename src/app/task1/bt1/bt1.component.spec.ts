import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bt1Component } from './bt1.component';

describe('Bt1Component', () => {
  let component: Bt1Component;
  let fixture: ComponentFixture<Bt1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bt1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
