import { Component, OnInit } from '@angular/core';
import { TagSelectionService } from '../services/tag-selection.service';
import { Router } from '@angular/router';
import { AlgorithmService } from '../services/algorithm.service';
import { DataService } from '../services/data.service';
import { RecommendationListService } from '../services/recommendation-list.service';
import { AuthService } from '../services/auth.service';

@Component({

  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public isCollapse: boolean;
  clickCount: number;
  isSubmit: boolean;
  tagList: any;
  tagListId: number;
  userID: number;
  public newList: number[] = [];
  public newList1: number[] = [];
  public topThreeRestaurantId: number[] = [];
  public name = 'data from parent';

  constructor(private tagSelectionService: TagSelectionService,
              private recommendationListService: RecommendationListService,
              private auth: AuthService,
              private dataService: DataService) {
  }

  ngOnInit() {
      this.tagSelectionService.getAllTags().subscribe(
        res => {
          this.tagList = res;
          this.isCollapse = false;
          this.clickCount = 0;
        });
        this.auth.getSession().subscribe(data => {
          this.userID = data.userID;
          this.recommendationListService.getTagListId(this.userID).subscribe(
            res => {
              console.log('exists user taglist: ', res);
              this.tagListId = res['tagListID'];
            });
        });
        //this.dataService.cast.subscribe(newTagList => this.newList1 = newTagList);
        //this.dataService.anotherCast.subscribe(submit => this.isSubmit = submit);
  }

  onClick() {
    this.clickCount++;
    if (this.clickCount % 2 !== 0) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;
    }
  }

  checkValidation(f) {
    let set = new Set();
    for (let key in f.value) {
      let value = f.value[key];
      let num = +value;
      set.add(num);
    }
    if (typeof this.tagList !== 'undefined') {
      if (set.size < this.tagList.length) {
        return false;
      }
      return true;
    }
  }

  onSubmit(f) {
    this.isSubmit = true;
    console.log(f.value);
    // tslint:disable-next-line:forin
    this.newList = [];
    for (const key in f.value) {
      const value = f.value[key];
      const num = +value;
      this.newList.push(num);
    }
    console.log('inside the onsubmit filter', this.newList);
    //this.updateList();
    //this.dataService.editSubmit(true);
    this.recommendationListService.updateRecommendationList(this.newList, this.tagListId);
    location.reload();

  }

  // updateList() {
  //   this.dataService.editList(this.newList);
  // }

}
