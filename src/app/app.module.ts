import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import {PartialsModule} from './partials/partials.module';
import { SkillsComponent } from './skills/skills.component'

import {ProjectModule} from './project/project.module'

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartialsModule,
    ProjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
