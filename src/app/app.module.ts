import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Bt1Component } from './bt1/bt1.component';
import { Bt2ModalComponent } from './bt2-modal/bt2-modal.component';
import { StudentsComponent } from './task2/students/students.component';
import { StudentComponent } from './task2/student/student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Bt6Component } from './task3/bt6/bt6.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Bt1Component,
    Bt2ModalComponent,
    StudentsComponent,
    StudentComponent,
    PageNotFoundComponent,
    Bt6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
