import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students/students.service';
import { StudentDetailsService } from './student-details.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  studentDetails: any;
  id;
  message: any;


  constructor(
    public detailsService: StudentDetailsService,
    private studentsService: StudentsService
  ) {
    this.id = detailsService.id;
  }

  ngOnInit(): void {
    this.message = this.studentsService.getMessage();
    this.studentDetails = this.detailsService.getStudentDeatils(this.id, this.message)
  }

}
