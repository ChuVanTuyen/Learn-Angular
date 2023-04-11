import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Bt1Component } from './bt1/bt1.component';
import { HelloComponent } from './hello/hello.component';
import { StudentsComponent } from './task2/students/students.component';
import { StudentComponent } from './task2/student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'bai-tap',
    component: Bt1Component,
  },
  {
    path: 'task2',
    component: StudentsComponent,
    children: [
      {
        path: 'student/:id/:name/:home/:gender',
        component: StudentComponent,
      },
    ]
  },
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
