import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactorComponentComponent } from './reactor-component.component';

describe('ReactorComponentComponent', () => {
  let component: ReactorComponentComponent;
  let fixture: ComponentFixture<ReactorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
