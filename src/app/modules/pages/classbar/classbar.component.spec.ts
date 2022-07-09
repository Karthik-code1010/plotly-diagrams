import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbarComponent } from './classbar.component';

describe('ClassbarComponent', () => {
  let component: ClassbarComponent;
  let fixture: ComponentFixture<ClassbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
