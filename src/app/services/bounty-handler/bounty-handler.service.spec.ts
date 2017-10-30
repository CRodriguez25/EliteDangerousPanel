import { TestBed, inject } from '@angular/core/testing';

import { BountyHandlerService } from './bounty-handler.service';

describe('BountyHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BountyHandlerService]
    });
  });

  it('should be created', inject([BountyHandlerService], (service: BountyHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
