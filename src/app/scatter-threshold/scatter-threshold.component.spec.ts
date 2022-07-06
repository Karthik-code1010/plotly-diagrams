import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterThresholdComponent } from './scatter-threshold.component';

describe('ScatterThresholdComponent', () => {
  let component: ScatterThresholdComponent;
  let fixture: ComponentFixture<ScatterThresholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterThresholdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterThresholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
