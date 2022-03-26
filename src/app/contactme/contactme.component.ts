import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
	selector: 'app-contactme',
	templateUrl: './contactme.component.html',
	styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit {

	contactForm: FormGroup;

	constructor() { 
		this.contactForm = new FormGroup({
			name: new FormControl('', {
				validators: [
					Validators.required,
					Validators.minLength(3),
				],
				updateOn: "blur"
			}),
			email: new FormControl('', {
				validators: [
					Validators.required,
					Validators.minLength(8),
					Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
				],
				updateOn: "blur"
			}),
			message: new FormControl('', {
				validators: [
					Validators.required
				]
			})
		})
	}

	ngOnInit(): void {
	}

	get name(){
		return this.contactForm.get('name');
	}

	get email(){
		return this.contactForm.get('email');
	}

	get message(){
		return this.contactForm.get('message');
	}

	onContactSubmit(){
		let data = {
			name: this.contactForm.value.name,
			email: this.contactForm.value.email,
			message: this.contactForm.value.message
		}

	}

}
