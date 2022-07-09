import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterThresholdDataComponent } from './scatter-threshold-data.component';

describe('ScatterThresholdDataComponent', () => {
  let component: ScatterThresholdDataComponent;
  let fixture: ComponentFixture<ScatterThresholdDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatterThresholdDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScatterThresholdDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
