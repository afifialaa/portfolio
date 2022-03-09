import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { ProjectCardComponent } from './project-card/project-card.component';



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectComponent,
  ]
})
export class ProjectModule { }
