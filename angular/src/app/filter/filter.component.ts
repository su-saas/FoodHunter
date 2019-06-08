import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { TagSelectionService } from '../services/tag-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  // private searchUrl = 'search';
  // private url = 'filter';
  private isCollapse: boolean;
  private clickCount: number;
  tagList: any;
  newList = [];

  constructor(private tagSelectionService: TagSelectionService,
              private router: Router) {
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

  onSubmit(f) {
    console.log(f.value);
    // tslint:disable-next-line:forin
    for (const key in f.value) {
      const value = f.value[key];
      const num = +value;
      this.newList.push(num);
    }
    console.log(this.newList);
    // Algorithm service TODO
    // this.router.navigateByUrl(this.searchUrl);
  }
}
