import { Component, OnInit } from '@angular/core';
import { FilterService } from '../services/filter.service';
import { TagSelectionService } from '../services/tag-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  private searchUrl = 'search';
  private url = 'filter';
  tagList: any;
  newList = [];

  constructor(private tagSelectionService: TagSelectionService,
              private router: Router) {
  }

  ngOnInit() {
      this.tagSelectionService.getAllTags().subscribe(
        res => this.tagList = res
      );
  }

  indexMatchValidator() {
    // TODO
  }

  onSubmit(f) {
    console.log(f.value);
    for (let key in f.value) {
      var value = f.value[key];
      var num = +value;
      this.newList.push(num);
    }
    console.log(this.newList);
    //Algorithm service TODO
    this.router.navigateByUrl(this.searchUrl);
  }

  onReset(f) {
    f.form.reset('');
  }
}
