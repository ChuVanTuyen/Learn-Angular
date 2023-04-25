import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task5Component } from './task5.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

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
    NavComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(task5Routes)
  ]
})
export class Task5Module { }
