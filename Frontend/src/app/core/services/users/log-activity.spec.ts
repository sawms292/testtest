import { TestBed } from '@angular/core/testing';

import { LogActivity } from './log-activity';

describe('LogActivity', () => {
  let service: LogActivity;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogActivity);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
