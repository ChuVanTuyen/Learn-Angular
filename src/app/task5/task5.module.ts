import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task5Component } from './task5.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

const task5Routes: Routes = [
  {
    path: '',
    component: Task5Component,
  }
]

@NgModule({
  declarations: [
    Task5Component,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(task5Routes)
  ]
})
export class Task5Module { }
