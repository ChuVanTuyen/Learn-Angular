import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HelloComponent } from './hello/hello.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HelloComponent,
  },
  {
    path: 'task1',
    loadChildren: () => import('./task1/task1.module').then(m => m.Task1Module)
  },
  {
    path: 'task2',
    loadChildren: () => import('./task2/task2.module').then(m => m.Task2Module)
  },
  {
    path: 'task3',
    loadChildren: () => import('./task3/task3.module').then(m => m.Task3Module)
  },
  {
    path: 'task4',
    loadChildren: () => import('./task4/task4.module').then(m => m.Task4Module)
  },
  {
    path: 'task5',
    loadChildren: () => import('./task5/task5.module').then(m => m.Task5Module)
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
