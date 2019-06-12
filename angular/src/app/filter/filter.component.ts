import { Component, OnInit } from '@angular/core';
import { TagSelectionService } from '../services/tag-selection.service';
import { Router } from '@angular/router';
import { AlgorithmService } from '../services/algorithm.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  public isCollapse: boolean;
  clickCount: number;
  isSubmit = false;
  tagList: any;
  public newList: number[] = [];
  public topThreeRestaurantId: number[] = [];
  public name = 'data from parent';

  constructor(private tagSelectionService: TagSelectionService,
              private router: Router,
              private algorithmService: AlgorithmService) {
  }

  ngOnInit() {
      this.tagSelectionService.getAllTags().subscribe(
        res => {
          this.tagList = res;
          this.isCollapse = false;
          this.clickCount = 0;
        });
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
    //this.topThreeRestaurantId = this.algorithmService.getRecommandationByTaglist(this.newList);
    //console.log("top three restaurant id : ", this.topThreeRestaurantId);
  }

}
