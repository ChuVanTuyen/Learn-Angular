import { TestBed } from '@angular/core/testing';

import { CacheNoteService } from './my-cache.service';

describe('MyCacheService', () => {
  let service: CacheNoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheNoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
