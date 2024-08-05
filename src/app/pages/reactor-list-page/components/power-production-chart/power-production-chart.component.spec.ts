import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerProductionChartComponent } from './power-production-chart.component';

describe('PowerProductionChartComponent', () => {
  let component: PowerProductionChartComponent;
  let fixture: ComponentFixture<PowerProductionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerProductionChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PowerProductionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
