import { TestBed, inject } from '@angular/core/testing';

import { SystemRepoService } from './system-repo.service';

describe('SystemRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemRepoService]
    });
  });

  it('should be created', inject([SystemRepoService], (service: SystemRepoService) => {
    expect(service).toBeTruthy();
  }));
});
