import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterPlotDataComponent } from './scatter-plot-data.component';

describe('ScatterPlotDataComponent', () => {
  let component: ScatterPlotDataComponent;
  let fixture: ComponentFixture<ScatterPlotDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterPlotDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterPlotDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
