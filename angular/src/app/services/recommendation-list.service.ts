import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecommendationListService {
  private tagListUrl = '/tagList/';
  private recommendationListUrl = '/recommendationlist/tagList/';
  private restaurantUrl = '/restaurant/';


  constructor(private http: HttpClient) { }

  getTagListId(userId) {
    return this.http.get(this.tagListUrl + userId);
  }

  getRecommendationList(tagListId) {
    return this.http.get(this.recommendationListUrl + tagListId);
  }

}
