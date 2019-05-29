import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TagSelectionService {
  private tagUrl = 'http://localhost:8080/tag';
  private listUrl = 'http://localhost:8080/tagList';

  constructor(private http: HttpClient) { }

  getAllTags() {
    return this.http.get(this.tagUrl);
  }

  createTagPriorityList(id, list) {
    const obj = {
      userID: id,
      tagList: list,
    };
    console.log(obj);
    return this.http.post(`${this.listUrl}`, obj).subscribe(res => console.log('Done'));
  }
}