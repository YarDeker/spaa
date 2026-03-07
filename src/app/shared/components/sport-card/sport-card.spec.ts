import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCard } from './sport-card';

describe('SportCard', () => {
  let component: SportCard;
  let fixture: ComponentFixture<SportCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
