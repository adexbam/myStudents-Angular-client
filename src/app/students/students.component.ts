import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students;
  dataSource;
  average;
  
  constructor(service: StudentsService) {
    this.students = service.loadAllStudents(service.studentsList);
    this.dataSource = this.students;
    this.average = service.averageAge();
  }

  displayedColumns = ['id', 'firstname', 'lastname', 'age', 'class', 'email'];
  
  ngOnInit(): void {
  }

}

