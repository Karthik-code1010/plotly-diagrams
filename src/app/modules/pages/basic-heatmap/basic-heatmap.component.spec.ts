import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicHeatmapComponent } from './basic-heatmap.component';

describe('BasicHeatmapComponent', () => {
  let component: BasicHeatmapComponent;
  let fixture: ComponentFixture<BasicHeatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicHeatmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
