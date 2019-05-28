import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IUserModel } from './interfaces/IUserModel';
import { IFoodieModel } from './interfaces/IFoodieModel';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private url: string = 'http://localhost:8080/foodie/';
//private url: string = 'https://foodhunter.azurewebsites.net/foodie/';
  constructor(private http: HttpClient) { }

  getProfileByFoodieID(index: string): Observable<IFoodieModel> {
    console.log(index);
    return this.http.get<IFoodieModel>(this.url +  index);
  }


}
