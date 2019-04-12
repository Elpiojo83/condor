import {inject, TestBed} from '@angular/core/testing';

import { UserService } from './user.service';
import {ProjectService} from './project.service';

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });

  it('should have get function',
    inject([UserService], (service: UserService) => {
      expect(service.getUsers).toBeTruthy();
    })
  );

  it('result [0].name is Pegasus',
    inject([UserService], (service: UserService) => {
      expect(service.getUsers()[0].firstName).toEqual('Pegasus');
    })
  );
});
