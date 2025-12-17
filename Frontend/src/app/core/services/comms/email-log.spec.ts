import { TestBed } from '@angular/core/testing';

import { EmailLog } from './email-log';

describe('EmailLog', () => {
  let service: EmailLog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailLog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
