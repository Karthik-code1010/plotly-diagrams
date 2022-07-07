import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHeatmapDataComponent } from './basic-heatmap-data.component';

describe('BasicHeatmapDataComponent', () => {
  let component: BasicHeatmapDataComponent;
  let fixture: ComponentFixture<BasicHeatmapDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicHeatmapDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHeatmapDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
