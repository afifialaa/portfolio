import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { PartialsModule } from './partials/partials.module';
import { SkillsComponent } from './skills/skills.component'

import { ProjectModule } from './project/project.module';
import { ExperienceComponent } from './experience/experience.component';
import { ContactmeComponent } from './contactme/contactme.component'

@NgModule({
	declarations: [
		AppComponent,
		JumbotronComponent,
		SkillsComponent,
		ExperienceComponent,
		ContactmeComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PartialsModule,
		ProjectModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
