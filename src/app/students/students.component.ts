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
  
  constructor(service: StudentsService) {
    this.students = service.loadAllStudents();
    this.dataSource = this.students;
  }

  displayedColumns = ['id', 'name', 'age', 'class', 'email'];

  
  ngOnInit(): void {
  }

}

