import { Injectable } from '@angular/core';

import {MatDialogModule} from '@angular/material/dialog';

import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentDetailsComponent } from '../student-details/student-details.component';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {

  constructor() { }

  loadAllStudents<T>(studentlist: T[]) : T[]{
    return studentlist;
  }

  averageAge(studentList: any){
    let studentAge: number[] = [];
    let sumOfAllAges: number = 0;
    let counter = 0;

    studentList.map((item: any) => {
      studentAge.push(item.age);
      sumOfAllAges += item.age;
      counter ++;
    });
    return Math.floor(sumOfAllAges / counter);
  }

  capitalizeFirst(element: string): string{
    return element.charAt(0).toUpperCase() + element.slice(1);
  }

  getFirstName(element: string): void{
    localStorage.setItem('firstname', element)
    console.log(element)
  }

  openStudentDialog(): void {
    console.log('yes');
  }
}