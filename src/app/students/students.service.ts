import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  loadAllStudents(){
    return ['ade', 'segun', 'gafar']
  }
}
