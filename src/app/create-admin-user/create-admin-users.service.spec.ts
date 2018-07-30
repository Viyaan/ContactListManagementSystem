import { TestBed, inject } from '@angular/core/testing';

import { CreateAdminUsersService } from './create-admin-users.service';

describe('CreateAdminUsersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateAdminUsersService]
    });
  });

  it('should be created', inject([CreateAdminUsersService], (service: CreateAdminUsersService) => {
    expect(service).toBeTruthy();
  }));
});
