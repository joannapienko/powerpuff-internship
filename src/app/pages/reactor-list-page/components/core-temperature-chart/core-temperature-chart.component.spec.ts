import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreTemperatureChartComponent } from './core-temperature-chart.component';

describe('CoreTemperatureChartComponent', () => {
  let component: CoreTemperatureChartComponent;
  let fixture: ComponentFixture<CoreTemperatureChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreTemperatureChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CoreTemperatureChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
