import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {
  getid: any = localStorage.getItem('id');
  id = JSON.parse(this.getid);
  
  constructor() { }

  getStudentDeatils(id: any, list: any){
    let myitem;
    list.filter((listItem: any) => listItem.id === id).map((item: any) => {
      myitem = item;
    });
    return myitem
  }

}
