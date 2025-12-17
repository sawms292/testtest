import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewScoreForm } from './review-score-form';

describe('ReviewScoreForm', () => {
  let component: ReviewScoreForm;
  let fixture: ComponentFixture<ReviewScoreForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewScoreForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewScoreForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
