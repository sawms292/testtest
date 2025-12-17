import { TestBed } from '@angular/core/testing';

import { Rebuttal } from './rebuttal';

describe('Rebuttal', () => {
  let service: Rebuttal;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Rebuttal);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
