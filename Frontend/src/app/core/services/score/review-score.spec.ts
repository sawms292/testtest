import { TestBed } from '@angular/core/testing';

import { ReviewScore } from './review-score';

describe('ReviewScore', () => {
  let service: ReviewScore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewScore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
