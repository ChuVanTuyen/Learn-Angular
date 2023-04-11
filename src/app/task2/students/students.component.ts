import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/modules/User';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  list: string | null | undefined;
  students: User[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.list = localStorage.getItem('listUser');
    if (this.list) {
      this.students = JSON.parse(this.list);
      let student = this.students[0];
      console.log(student);
      this.router.navigate(['task2/student/', student.id, student.fullname, student.homeTown, student.gender])
    }
  }
}
