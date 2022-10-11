import { TestBed } from '@angular/core/testing';

import { FetchStudentDataService } from './fetch-student-data.service';

describe('FetchStudentDataService', () => {
  let service: FetchStudentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchStudentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
