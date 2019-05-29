import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IRestaurantModel } from './interfaces/IRestaurantModel';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private url: string = 'http://localhost:8080/restaurant';
  constructor(private http: HttpClient) { }

  /*getCollectionByUserID(userID: string):{
    
  }*/

  // getCollectionByUserID(rID: number): Observable<IRestaurantModel[]> {
	// 	  rID = Number(rID);
	// 	  return this.http.get<IRestaurantModel[]>(this.url)
	// 		  .pipe(
	// 			  map(response => {
	// 				  let updatedResponse = []
	// 				  for(var i = 0; i < response.length; i ++){
	// 					  if(response[i].restaurantID === rID){
	// 						  updatedResponse.push(response[i]);
	// 					}
	// 				}
	// 				return updatedResponse;
	// 			})
	// 		);
  // }
}
