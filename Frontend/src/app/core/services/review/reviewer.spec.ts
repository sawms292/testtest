import { TestBed } from '@angular/core/testing';

import { Reviewer } from './reviewer';

describe('Reviewer', () => {
  let service: Reviewer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Reviewer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
