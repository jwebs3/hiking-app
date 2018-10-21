import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home.component';

const homeRoutes: Routes [
 { path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forChild(homeRoutes)
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
