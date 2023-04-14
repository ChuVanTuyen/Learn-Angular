import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task1RoutingModule } from './task1-routing.module';
import { Bt1Component } from './bt1/bt1.component';
import { Bt2ModalComponent } from './bt2-modal/bt2-modal.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Bt1Component,
    Bt2ModalComponent,
  ],
  imports: [
    CommonModule,
    Task1RoutingModule,
    FormsModule,
  ]
})
export class Task1Module { }
