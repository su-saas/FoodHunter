import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
//import {Observable,of, from } from 'rxjs';
import { Observable } from 'rxjs';
import { IReviewModel } from './interfaces/IReviewModel';

@Injectable({
	providedIn: 'root'
})
export class ReviewService {
	private url: string = 'http://localhost:8080/review';

	//private url: string = 'https://foodhunter.azurewebsites.net/review';
	constructor(private http: HttpClient) { }

	getByRestaurantID(rID: number): Observable<IReviewModel[]> {
		rID = Number(rID);
		return this.http.get<IReviewModel[]>(this.url)
			.pipe(
				map(response => {
					let updatedResponse = []
					for(var i = 0; i < response.length; i ++){
						if(response[i].restaurantID === rID){
							updatedResponse.push(response[i]);
						}
					}
					return updatedResponse;
				})
			);
	}

	getByUserID(uID: number): Observable<IReviewModel[]> {
		uID = Number(uID);
		return this.http.get<IReviewModel[]>(this.url)
			.pipe(
				map(response => {
					let updatedResponse = []
					for(var i = 0; i < response.length; i ++){
						if(response[i].userID === uID){
							updatedResponse.push(response[i]);
						}
					}
					return updatedResponse;
				})
			);
	}

	add(body: any){
		let headers = new HttpHeaders();
    	headers = headers.set("Content-Type", "application/json");
		return this.http.post(this.url, JSON.stringify(body), {
			headers: headers,
		});
	}
}
