import { TestBed } from '@angular/core/testing';

import { HomeActivityService } from './home-activity.service';

describe('HomeActivityService', () => {
  let service: HomeActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
