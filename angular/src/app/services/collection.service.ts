import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IFavoriteListModel } from '../interfaces/IFavoriteListModel';
@Injectable({
	providedIn: 'root'
})
export class CollectionService {
	private favoriateListUrl = '/favoriteList';
	constructor(private http: HttpClient) { }

	getCollectionByUserID(userID: number): Observable<IFavoriteListModel> {
		return this.http.get<IFavoriteListModel>(this.favoriateListUrl + '/user/' + userID);
	}

	// add restaurant to the collection
	updateCollectionByListID(listID: number, newList: object) {
		const url = this.favoriateListUrl + '/' + listID;
		return this.http.put(url, newList).subscribe(res => {
			console.log('collection updated:' + res);
		});
	}
	// add restaurant to the collection of the user
	// add restaurant to the collection of the user
	addCollection(userID: number, restaurantID: number): Observable<boolean> {
		let successOrNot = new Subject<boolean>();
		const url = this.favoriateListUrl + '/user/' + userID;
		console.log('in collection service, url is ' + url);
		this.http.get<IFavoriteListModel[]>(url)
			.subscribe(favoriteList => {
				console.log('in collection service, favoritelist length is ' + favoriteList.length);
				let exist = false;
				if (favoriteList.length > 0) {
					let restaurants = favoriteList[0].restaurantIDList;
					for (let i = 0; i < restaurants.length; i++) {
						if (restaurants[i] === restaurantID) {
							exist = true;
							break;
						}
					}
				}
				console.log('in collection service, ' + restaurantID + ' exist: ' + exist);
				if (!exist) {
					//no record
					if (favoriteList.length === 0) {
						const body = {
							'userID': userID,
							'restaurantIDList': [restaurantID]
						};
						let headers = new HttpHeaders();
						headers = headers.set('Content-Type', 'application/json');
						this.http.post(this.favoriateListUrl, body, {
							headers,
						}).subscribe(res => {
							console.log('create favoriateList result:' + res);
							successOrNot.next(true);
						});
					}
					else {
						favoriteList[0].restaurantIDList.push(restaurantID);
						const body = {
							'userID': userID,
							'restaurantIDList': favoriteList[0].restaurantIDList
						};
						let headers = new HttpHeaders();
						headers = headers.set('Content-Type', 'application/json');
						this.http.put(this.favoriateListUrl + '/' + favoriteList[0].favoriteListID, body, {
							headers,
						}).subscribe(res => {
							console.log('update favoriateList result:' + res);
							successOrNot.next(true);
						});
					}
				}
				else {
					console.log('already exist');
					successOrNot.next(false);
				}
			});
		return successOrNot.asObservable();
	}
}