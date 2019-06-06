import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private searchKeyWordUrl = 'http://localhost:8080/search';

  constructor(private http: HttpClient) { }

  getRestaurantByName(restaurantName): Observable<IRestaurantModel[]> {
    return this.http.get<IRestaurantModel[]>(this.searchKeyWordUrl + "?restaurantName=" + restaurantName);
  }

}
