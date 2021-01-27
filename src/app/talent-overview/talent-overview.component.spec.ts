import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentOverviewComponent } from './talent-overview.component';

describe('TalentOverviewComponent', () => {
  let component: TalentOverviewComponent;
  let fixture: ComponentFixture<TalentOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
