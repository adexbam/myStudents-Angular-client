import { TestBed } from '@angular/core/testing';
import { ListOfStudents} from './studentList';

import { StudentsService } from './students.service';

describe('StudentsService', () => {
  let service: StudentsService;
  let studentsList = ListOfStudents;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load list of students',  () => {
    expect(service.loadAllStudents(studentsList)).toBe(studentsList);
  });
});
