import { TestBed, inject } from '@angular/core/testing';

import { PanelActionService } from './panel-action.service';

describe('PanelActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PanelActionService]
    });
  });

  it('should be created', inject([PanelActionService], (service: PanelActionService) => {
    expect(service).toBeTruthy();
  }));
});
