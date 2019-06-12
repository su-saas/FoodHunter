import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private newTagList = new BehaviorSubject<number[]>([1, 2, 3, 4, 5, 6, 7]);
  private submit = new BehaviorSubject<boolean>(false);
  cast = this.newTagList.asObservable();
  anotherCast = this.submit.asObservable();
  constructor() { }
  editList(newList) {
    // replace the list with the new list
    this.newTagList.next(newList);
  }
  editSubmit(updatedSubmit) {
    // replace the submit with the updatedSubmit
    this.submit.next(updatedSubmit);
  }
}
