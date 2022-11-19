import { TestBed } from '@angular/core/testing';

import { AnimGuard } from './anim.guard';

describe('AnimGuard', () => {
  let guard: AnimGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnimGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
