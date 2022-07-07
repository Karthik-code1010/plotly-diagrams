import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelingDataComponent } from './modeling-data.component';

describe('ModelingDataComponent', () => {
  let component: ModelingDataComponent;
  let fixture: ComponentFixture<ModelingDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelingDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelingDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
