import { TestBed } from '@angular/core/testing';

import { Keyword } from './keyword';

describe('Keyword', () => {
  let service: Keyword;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Keyword);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
