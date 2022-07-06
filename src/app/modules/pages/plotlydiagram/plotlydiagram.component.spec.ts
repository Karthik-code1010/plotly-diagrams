import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlydiagramComponent } from './plotlydiagram.component';

describe('PlotlydiagramComponent', () => {
  let component: PlotlydiagramComponent;
  let fixture: ComponentFixture<PlotlydiagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotlydiagramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlydiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
