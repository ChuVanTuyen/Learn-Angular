import { TestBed } from '@angular/core/testing';

import { MyCacheService } from './my-cache.service';

describe('MyCacheService', () => {
  let service: MyCacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
