import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'student-home', component: StudentsComponent},
  {path: 'student-details', component: StudentDetailsComponent},
  {path: '', redirectTo:'student-home', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
