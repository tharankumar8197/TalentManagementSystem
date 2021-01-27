import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalviewComponent } from './additionalview.component';

describe('AdditionalviewComponent', () => {
  let component: AdditionalviewComponent;
  let fixture: ComponentFixture<AdditionalviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionalviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
