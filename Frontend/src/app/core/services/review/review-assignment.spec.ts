import { TestBed } from '@angular/core/testing';

import { ReviewAssignment } from './review-assignment';

describe('ReviewAssignment', () => {
  let service: ReviewAssignment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewAssignment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
