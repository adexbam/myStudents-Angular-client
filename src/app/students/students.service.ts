import { Injectable } from '@angular/core';
import { ListOfStudents} from './studentList';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  studentsList = ListOfStudents;
  constructor() { }

  loadAllStudents<T>(list: T){
    return list;
  }

  averageAge(studentList: any){
    let studentAge: number[] = [];
    let sumOfAllAges: number = 0;
    let count = 0

    studentList.map((item: any) => {
      studentAge.push(item.age);
      sumOfAllAges += item.age;
      count ++;
      console.log(count);
      console.log(sumOfAllAges / count)
    });
    return Math.floor(sumOfAllAges / count);
  }
}