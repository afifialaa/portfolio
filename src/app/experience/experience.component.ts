import { Component, OnInit } from '@angular/core';
import {ExperienceService} from '../services/experience.service';

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

	showDetailsArr: any[] = []
	detailsHTMLContent: string[] = []

	experiences: [] = []

	constructor(private expSrvc: ExperienceService) { 
		this.expSrvc.getExp().subscribe(data => {
			this.experiences = data

			this.showDetailsArr = this.experiences.map( i => false)
			this.detailsHTMLContent = this.experiences.map( i => 'more')
		})
	}


	ngOnInit(): void {
		
	}

	showDetails(index:number){
		this.showDetailsArr[index] = !this.showDetailsArr[index]
		if(this.showDetailsArr[index]) {
			this.detailsHTMLContent[index] = 'less...';
		}else{
			this.detailsHTMLContent[index] = 'more...';
		}
	}
}
