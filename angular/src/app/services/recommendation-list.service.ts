import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommendationListService {
  private tagListUrl = 'http://localhost:8080/tagList/';
  private recommendationListUrl = 'http://localhost:8080/recommendationlist/tagList/';
  private restaurantUrl = 'http://localhost:8080/restaurant/';


  constructor(private http: HttpClient) { }

  getTagListId(userId) {
    return this.http.get(this.tagListUrl + userId);
  }

  getRecommendationList(tagListId) {
    return this.http.get(this.recommendationListUrl + tagListId);
  }

}
