import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { IFavoriteListModel } from '../interfaces/IFavoriteListModel';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private favoriateListUrl = '/favoriteList/';
  constructor(private http: HttpClient) { }

// get collection by favoriteListID
	getCollectionByListID(listID: number): Observable<IFavoriteListModel> {
    console.log(listID);
    return this.http.get<IFavoriteListModel>(this.favoriateListUrl + listID);
	}
	
// add restaurant to the collection
	updateCollectionByListID(listID: number, newList: object) {
		const url = this.favoriateListUrl + listID;
		return this.http.put(url, newList).subscribe(res => console.log('updated'));
	}

// // user may have several collections
// // get all collection first, then filtered by userId, may have a better solution
//   getCollectionByUserID(userID: number): Observable<IFavoriteListModel[]> {
// 		console.log(userID);
// 		return this.http.get<IFavoriteListModel[]>(this.favoriateListUrl)
// 		.pipe(
// 			map(response => {
// 				const updatedResponse = [];
// 				for (let i = 0; i < response.length; i++) {
// 					if (response[i].userID === userID) {
// 						updatedResponse.push(response[i]);
// 					}
// 				}
// 				return updatedResponse;
// 			})
// 		)
//   }

}
