import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task5Component } from './task5.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { VoiceChartComponent } from './components/voice-chart/voice-chart.component';
import { SlideComponent } from './components/slide/slide.component';
import { PopularTagComponent } from './components/popular-tag/popular-tag.component';
import { FooterComponent } from './components/footer/footer.component';

const task5Routes: Routes = [
  {
    path: '',
    component: Task5Component,
  }
]

@NgModule({
  declarations: [
    Task5Component,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    VoiceChartComponent,
    SlideComponent,
    PopularTagComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(task5Routes)
  ]
})
export class Task5Module { }
