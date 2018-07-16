import { TestBed, inject } from '@angular/core/testing';

import { UserformService } from './userform.service';

describe('UserformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserformService]
    });
  });

  it('should be created', inject([UserformService], (service: UserformService) => {
    expect(service).toBeTruthy();
  }));
});
