import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task3RoutingModule } from './task3-routing.module';
import { Bt6Component } from './bt6/bt6.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Bt6Component,
  ],
  imports: [
    CommonModule,
    Task3RoutingModule,
    FormsModule,
    FontAwesomeModule,
  ]
})
export class Task3Module { }
