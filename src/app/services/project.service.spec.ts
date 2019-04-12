import {inject, TestBed} from '@angular/core/testing';

import { ProjectService } from './project.service';

describe('ProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectService = TestBed.get(ProjectService);
    expect(service).toBeTruthy();
  });

  it('should have add function',
    inject([ProjectService], (service: ProjectService) => {
      expect(service.addProject).toBeTruthy();
    })
  );

  it('should have get function',
    inject([ProjectService], (service: ProjectService) => {
      expect(service.getProjects).toBeTruthy();
    })
  );

  it('result [0].name is Pegasus',
    inject([ProjectService], (service: ProjectService) => {
      expect(service.getProjects()[0].name).toEqual('Pegasus');
    })
  );

});
