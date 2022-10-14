import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { ListOfStudents} from './studentList.component';

import { MatDialog } from '@angular/material/dialog';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students;
  dataSource;
  average;
  studentsList = ListOfStudents;

  
  constructor(
    service: StudentsService,
    public dialog: MatDialog
    ) {
    this.students = service.loadAllStudents(this.studentsList);
    this.dataSource = this.students;
    this.average = service.averageAge(this.students);

  }

  displayedColumns = ['id', 'firstname', /*'lastname', 'age', 'class', 'email'*/];
  
  ngOnInit(): void {
  }

  openStudentDialog() {
    this.dialog.open(StudentDetailsComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
}

