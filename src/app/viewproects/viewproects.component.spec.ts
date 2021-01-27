import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproectsComponent } from './viewproects.component';

describe('ViewproectsComponent', () => {
  let component: ViewproectsComponent;
  let fixture: ComponentFixture<ViewproectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
