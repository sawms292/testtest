import { TestBed } from '@angular/core/testing';

import { PaperKeyword } from './paper-keyword';

describe('PaperKeyword', () => {
  let service: PaperKeyword;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaperKeyword);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
