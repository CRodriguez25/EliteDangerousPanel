import { TestBed, inject } from '@angular/core/testing';

import { EventFeedService } from './event-feed.service';

describe('EventFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventFeedService]
    });
  });

  it('should be created', inject([EventFeedService], (service: EventFeedService) => {
    expect(service).toBeTruthy();
  }));
});
