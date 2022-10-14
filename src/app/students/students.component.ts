import { Component, OnInit, Input } from '@angular/core';
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
  capitalizeFirst;
  message = 'hey I am here'


  constructor(
    public service: StudentsService,
    public dialog: MatDialog
    ) {
    this.students = service.loadAllStudents(this.studentsList);
    this.dataSource = this.students;
    this.average = service.averageAge(this.students);
    this.capitalizeFirst = service.capitalizeFirst;
  }

  displayedColumns = ['id', 'firstname', /*'lastname', 'age', 'class', 'email'*/];
  
  ngOnInit(): void {
    this.service.setMessage(this.students);
  }

  openStudentDialog(id: any) {
    let listOfStudents = JSON.stringify(this.students);
    localStorage.setItem('id', id);
    this.dialog.open(StudentDetailsComponent, {
      data: {
        firstname: 'Kevin',
      },
    });
  }
}

