import { TestBed, inject } from '@angular/core/testing';

import { ShipScanHandlerService } from './ship-scan-handler.service';

describe('ShipScanHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipScanHandlerService]
    });
  });

  it('should be created', inject([ShipScanHandlerService], (service: ShipScanHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
