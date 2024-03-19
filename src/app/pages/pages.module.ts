import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import { AddTaskComponent } from './add-task/add-task.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [HomeComponent, AddTaskComponent],
  imports: [
    CommonModule,
    RouterLink,
    FormsModule
  ]
})
export class PagesModule { }
