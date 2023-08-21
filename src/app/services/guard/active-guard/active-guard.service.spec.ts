import { TestBed } from '@angular/core/testing';

import { ActiveGuardService } from './active-guard.service';

describe('ActiveGuardService', () => {
  let service: ActiveGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
