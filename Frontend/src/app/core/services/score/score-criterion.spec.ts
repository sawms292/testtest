import { TestBed } from '@angular/core/testing';

import { ScoreCriterion } from './score-criterion';

describe('ScoreCriterion', () => {
  let service: ScoreCriterion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScoreCriterion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
