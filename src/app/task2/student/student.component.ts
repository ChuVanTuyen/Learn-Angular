import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/modules/User';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  student: User = {
    id: '',
    fullname: '',
    homeTown: '',
    gender: ''
  };
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.student.id = params.get('id');
      this.student.fullname = params.get('name');
      this.student.homeTown = params.get('home');
      this.student.gender = params.get('gender');
    })
  }
}
