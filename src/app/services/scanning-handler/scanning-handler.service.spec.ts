import { TestBed, inject } from '@angular/core/testing';

import { ScanningHandlerService } from './scanning-handler.service';

describe('ScanningHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScanningHandlerService]
    });
  });

  it('should be created', inject([ScanningHandlerService], (service: ScanningHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
