import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: 'student-home', component: StudentsComponent},
  {path: '', redirectTo:'student-home', pathMatch: 'prefix'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
