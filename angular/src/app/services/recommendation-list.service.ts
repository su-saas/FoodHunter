import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlgorithmService } from './algorithm.service';

@Injectable({
  providedIn: 'root'
})
export class RecommendationListService {
  private tagListUrl = '/tagList/';
  private recommendationListUrl = '/recommendationlist/tagList/';
  private recommendationCreationUrl = '/recommendationlist';


  constructor(private http: HttpClient,
              private algorithmService: AlgorithmService) { }

  getTagListId(userId) {
    return this.http.get(this.tagListUrl + userId);
  }

  getRecommendationList(tagListId) {
    return this.http.get(this.recommendationListUrl + tagListId);
  }

  createRecommendationList(tagListId, list) {
    const obj = {
      recommendationlistID: 0,
      foodietaglistID: tagListId,
      restaurantList: list
    }
    return this.http.post(this.recommendationCreationUrl, obj).subscribe(res => console.log('Done'));
  }

  updateRecommendationList(tagList, tagListId) {
    // tslint:disable-next-line:prefer-const
    let newRecommendationList = this.algorithmService.getRecommandationByTaglist(tagList);
    return this.http.put(this.recommendationListUrl + tagListId, newRecommendationList).subscribe(
      res => console.log('Done'));
  }
}
