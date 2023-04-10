import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { Bt1Component } from './bt1/bt1.component';
import { Bt2ModalComponent } from './bt2-modal/bt2-modal.component';
import { Task2Component } from './task2/task2.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    Bt1Component,
    Bt2ModalComponent,
    Task2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
