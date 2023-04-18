import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Task4Component } from './task4.component';
import { ItemsComponent } from './items/items.component';
import { FlashcardComponent } from './flashcard/flashcard.component';

const task4Routes: Routes = [
  {
    path: '',
    component: Task4Component,
  }
];

@NgModule({
  declarations: [
    Task4Component,
    ItemsComponent,
    FlashcardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(task4Routes)
  ],
})
export class Task4Module { }
