import { Component, OnInit } from '@angular/core';
import { TagSelectionService } from '../services/tag-selection.service';
import { Router } from '@angular/router';
import { AlgorithmService } from '../services/algorithm.service';
import { RestaurantService } from '../services/restaurant.service';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';

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
  public newList = [1, 2, 3, 4, 5, 6, 7, 8];
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
      // this.score = this.algorithmService.getRecommandationByTaglist(this.newList);
      // console.log(this.score);
      // this.getTopThreeRestaurants();
  }

  onClick() {
    this.clickCount++;
    if (this.clickCount % 2 !== 0) {
      this.isCollapse = true;
    } else {
      this.isCollapse = false;
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
    console.log('inside the onsubmit', this.newList);
    this.topThreeRestaurantId = this.algorithmService.getRecommandationByTaglist(this.newList);
    console.log("top three restaurant: ", this.topThreeRestaurantId);
  }

}
