import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';
import { Task2RoutingModule } from './task2-routing.module';



@NgModule({
  declarations: [
    StudentComponent,
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    Task2RoutingModule
  ]
})
export class Task2Module { }
