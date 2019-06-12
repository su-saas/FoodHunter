import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, expand, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IReviewModel } from '../interfaces/IReviewModel';

@Injectable({
	providedIn: 'root'
})
export class ReviewService {
	private url = '/review';
	constructor(private http: HttpClient) { }

	getByRestaurantID(rID: number): Observable<IReviewModel[]> {
		rID = Number(rID);
		return this.http.get<IReviewModel[]>(this.url)
			.pipe(
				map(response => {
					const updatedResponse = [];
					for (let i = 0; i < response.length; i++) {
						if (response[i].restaurantID === rID) {
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
					const updatedResponse = [];
					for (let i = 0; i < response.length; i++) {
						if (response[i].userID === uID) {
							updatedResponse.push(response[i]);
						}
					}
					return updatedResponse;
				})
			);
	}

	add(body: any) {
		let times = 0;
		let headers = new HttpHeaders();
		headers = headers.set('Content-Type', 'application/json');
		return this.http.post(this.url, JSON.stringify(body), { headers })
			.pipe(
				map(res => {
					if (res === 0 && times < 50) {
						throw new Error('get response ' + res + 'try create review again');
					}
					else {
						return res;
					}
				}),
				catchError((err, caught$) => {
					times++;
					console.log('retry times ${times}');
					return caught$;
				})
			)
			;
	}
}
