import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactorListPageComponent } from './reactor-list-page.component';

describe('ReactorListPageComponent', () => {
  let component: ReactorListPageComponent;
  let fixture: ComponentFixture<ReactorListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactorListPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReactorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
