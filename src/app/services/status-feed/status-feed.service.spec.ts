import { TestBed, inject } from '@angular/core/testing';

import { StatusFeedServiceService } from './status-feed-service.service';

describe('StatusFeedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StatusFeedServiceService]
    });
  });

  it('should be created', inject([StatusFeedServiceService], (service: StatusFeedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
