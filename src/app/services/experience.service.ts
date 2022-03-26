import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ExperienceService {

	constructor(private httpClient:HttpClient) { }

	getExp(): Observable<any>{
		return this.httpClient.get("../../assets/exp.json")
	}
}
