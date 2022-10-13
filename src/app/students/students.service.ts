import { Injectable } from '@angular/core';
import {ListOfStudents} from './studentList';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  studentsList = ListOfStudents;
  constructor() { }

  loadAllStudents<T>(list: T){
    return list;
  }

  averageAge(){
    let studentList = this.studentsList;
    let studentAge: number[] = [];
    let sumOfAllAges: number = 0;

    studentList.map((item) => {
      studentAge.push(item.age);
      sumOfAllAges += item.age;
    });
    return Math.floor(sumOfAllAges / studentList.length);
  }
}