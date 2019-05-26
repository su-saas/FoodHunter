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

	private url: string = 'https://foodhunter.azurewebsites.net/review';
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

	add(body: any): Observable<number>{
		return this.http.post<number>(this.url, body);
	}
}
