import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportList } from './sport-list';

describe('SportList', () => {
  let component: SportList;
  let fixture: ComponentFixture<SportList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SportList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
