import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaperForm } from './paper-form';

describe('PaperForm', () => {
  let component: PaperForm;
  let fixture: ComponentFixture<PaperForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaperForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaperForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
