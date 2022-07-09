import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DensityplotComponent } from './densityplot.component';

describe('DensityplotComponent', () => {
  let component: DensityplotComponent;
  let fixture: ComponentFixture<DensityplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DensityplotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DensityplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
