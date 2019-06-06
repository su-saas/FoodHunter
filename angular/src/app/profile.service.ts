import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUserModel } from './interfaces/IUserModel';
import { IFoodieModel } from './interfaces/IFoodieModel';
import { IFavoriteListModel } from './interfaces/IFavoriteListModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private foodieurl = 'http://localhost:8080/foodie/';
// private url: string = 'https://foodhunter.azurewebsites.net/foodie/';
  constructor(private http: HttpClient) { }

  getProfileByFoodieID(userID: Number): Observable<IFoodieModel> {
    console.log(userID);
    return this.http.get<IFoodieModel>(this.foodieurl + userID);
  }
}

