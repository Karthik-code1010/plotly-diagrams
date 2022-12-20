import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DensityplotdataComponent } from './densityplotdata.component';

describe('DensityplotdataComponent', () => {
  let component: DensityplotdataComponent;
  let fixture: ComponentFixture<DensityplotdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DensityplotdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DensityplotdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
