import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicChartDataComponent } from './basic-chart-data.component';

describe('BasicChartDataComponent', () => {
  let component: BasicChartDataComponent;
  let fixture: ComponentFixture<BasicChartDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicChartDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicChartDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
