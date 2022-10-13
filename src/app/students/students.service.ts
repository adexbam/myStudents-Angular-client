import { Injectable } from '@angular/core';

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
}