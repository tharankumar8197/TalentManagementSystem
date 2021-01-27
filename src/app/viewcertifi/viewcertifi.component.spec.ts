import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcertifiComponent } from './viewcertifi.component';

describe('ViewcertifiComponent', () => {
  let component: ViewcertifiComponent;
  let fixture: ComponentFixture<ViewcertifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcertifiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcertifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
