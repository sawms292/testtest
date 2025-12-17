import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperDetail } from './paper-detail';

describe('PaperDetail', () => {
  let component: PaperDetail;
  let fixture: ComponentFixture<PaperDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
