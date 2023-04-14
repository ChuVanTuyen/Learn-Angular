import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bt1Component } from './bt1/bt1.component';

const task1Routers: Routes = [
    {
        path: '',
        component: Bt1Component,
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(task1Routers),
    ],
    exports: [RouterModule]
})
export class Task1RoutingModule { }
