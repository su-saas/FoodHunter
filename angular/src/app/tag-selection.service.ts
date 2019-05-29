import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TagSelectionService {
  private url = 'http://localhost:8080/tag';

  constructor(private http: HttpClient) { }

  getNumberOfTags() {
    const result: any = this.http.get(this.url);
    return result.length();
  }

  getAllTags() {
    return this.http.get(this.url);
  }

  createTagPriorityList() {
    
  }

}
