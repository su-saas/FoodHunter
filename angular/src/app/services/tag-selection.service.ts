import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class TagSelectionService {
  private tagUrl = '/tag';
  private listUrl = '/tagList';

  constructor(private http: HttpClient) { }

  getAllTags() {
    return this.http.get(this.tagUrl);
  }

  updateTagPriorityList(id, list) {
    const obj = {
      tagList: list,
    };
    const url = this.listUrl + '/' + id;
    return this.http.put(`${url}`, obj).subscribe(res => console.log('Done'));
  }
}
