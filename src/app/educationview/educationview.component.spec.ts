import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationviewComponent } from './educationview.component';

describe('EducationviewComponent', () => {
  let component: EducationviewComponent;
  let fixture: ComponentFixture<EducationviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducationviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
