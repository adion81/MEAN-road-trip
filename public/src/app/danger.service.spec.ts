import { TestBed } from '@angular/core/testing';

import { DangerService } from './danger.service';

describe('DangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DangerService = TestBed.get(DangerService);
    expect(service).toBeTruthy();
  });
});
