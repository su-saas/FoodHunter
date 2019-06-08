import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUserModel } from './interfaces/IUserModel';
import { IFoodieModel } from './interfaces/IFoodieModel';
import { IFavoriteListModel } from './interfaces/IFavoriteListModel';
import { IFoodieTagListModel } from './interfaces/IFoodieTagListModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private foodieUrl = 'http://localhost:8080/foodie/';
  private tagListUrl = 'http://localhost:8080/tagList/';
// private url: string = 'https://foodhunter.azurewebsites.net/foodie/';
  constructor(private http: HttpClient) { }

  getProfileByFoodieID(userID: Number): Observable<IFoodieModel> {
    console.log(userID);
    return this.http.get<IFoodieModel>(this.foodieUrl + userID);
  }

  getFoodieTagListByFoodieID(id: Number): Observable<IFoodieTagListModel> {
    return this.http.get<IFoodieTagListModel>(this.tagListUrl + id);
  }
}

