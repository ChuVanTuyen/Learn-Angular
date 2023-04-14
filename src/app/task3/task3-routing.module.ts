import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Bt6Component } from "./bt6/bt6.component";

const task3Routes: Routes = [
    {
        path: '',
        component: Bt6Component
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(task3Routes)
    ],
    exports: [RouterModule]
})
export class Task3RoutingModule { }