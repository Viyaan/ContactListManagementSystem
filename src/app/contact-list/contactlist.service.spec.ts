import { TestBed, inject } from '@angular/core/testing';

import { ContactlistService } from './contactlist.service';

describe('ContactlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactlistService]
    });
  });

  it('should be created', inject([ContactlistService], (service: ContactlistService) => {
    expect(service).toBeTruthy();
  }));
});
