import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
	currentItem: string = 'hello world'
	repos = [
		{
			name: 'Inventory API',
			description: 'This is a cool description'
		},
		{
			name: 'MEAN employee management',
			description: 'This is a cool description'
		},
		{
			name: 'Go-Book-Directory',
			description: 'This is a cool description'
		},
		{
			name: 'Inventory API',
			description: 'This is a cool description'
		},
		{
			name: 'Inventory API',
			description: 'This is a cool description'
		},
		{
			name: 'Inventory API',
			description: 'This is a cool description'
		}
	]

	constructor() { }

	ngOnInit(): void {
	}

}
