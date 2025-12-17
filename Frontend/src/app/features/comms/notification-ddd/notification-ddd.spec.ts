import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationDdd } from './notification-ddd';

describe('NotificationDdd', () => {
  let component: NotificationDdd;
  let fixture: ComponentFixture<NotificationDdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationDdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationDdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
