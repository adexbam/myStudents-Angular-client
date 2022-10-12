import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  students;
  
  constructor(service: StudentsService) {
    this.students = service.loadAllStudents();
  }
  
  ngOnInit(): void {
  }

}
