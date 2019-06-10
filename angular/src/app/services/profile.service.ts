import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUserModel } from '../interfaces/IUserModel';
import { IFoodieModel } from '../interfaces/IFoodieModel';
import { IFavoriteListModel } from '../interfaces/IFavoriteListModel';
import { IFoodieTagListModel } from '../interfaces/IFoodieTagListModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private foodieurl = '/foodie/';
// private url: string = 'https://foodhunter.azurewebsites.net/foodie/';
  private tagListUrl = '/tagList/';
  constructor(private http: HttpClient) { }

  getProfileByFoodieID(userID: number): Observable<IFoodieModel> {
    console.log(userID);
    return this.http.get<IFoodieModel>(this.foodieurl + userID);
  }

  getFoodieTagListByFoodieID(userID: number): Observable<IFoodieTagListModel> {
    return this.http.get<IFoodieTagListModel>(this.tagListUrl + userID);
  }
}

