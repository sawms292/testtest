import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreDashboard } from './score-dashboard';

describe('ScoreDashboard', () => {
  let component: ScoreDashboard;
  let fixture: ComponentFixture<ScoreDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreDashboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
