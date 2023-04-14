import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentsComponent } from "./students/students.component";
import { StudentComponent } from "./student/student.component";

const task2Routers: Routes = [
    {
        path: '',
        component: StudentsComponent,
        children: [
            {
                path: 'student/:id/:name/:home/:gender',
                component: StudentComponent,
            },
        ]
    },
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(task2Routers)
    ],
    exports: [RouterModule]
})
export class Task2RoutingModule { }
