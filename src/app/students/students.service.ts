import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StudentsService {
  message: any;
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

  setMessage(data: any){
    this.message= data;
  }

  getMessage(){
    return this.message;
  }
}