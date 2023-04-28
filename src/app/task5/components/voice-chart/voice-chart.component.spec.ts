import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceChartComponent } from './voice-chart.component';

describe('VoiceChartComponent', () => {
  let component: VoiceChartComponent;
  let fixture: ComponentFixture<VoiceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiceChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoiceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
