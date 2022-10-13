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

  it('should load and return list of all students',  () => {
    expect(service.loadAllStudents(studentsList)).toBe(studentsList);
  });

  it('should return the average age from list of all students', () => {
    expect(service.averageAge(studentsList)).toBe(15);
  });
});
