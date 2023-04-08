import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bt1Component } from './bt1/bt1.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  {
    path: 'bai-tap',
    component: Bt1Component,
  },
  {
    path: '',
    component: HelloComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
