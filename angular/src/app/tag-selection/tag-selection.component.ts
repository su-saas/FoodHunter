import { Component, OnInit } from '@angular/core';
import { TagSelectionService } from '../tag-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-selection',
  templateUrl: './tag-selection.component.html',
  styleUrls: ['./tag-selection.component.css']
})
export class TagSelectionComponent implements OnInit {
  private searchUrl = 'search';
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
    this.tagSelectionService.createTagPriorityList(10, this.newList);
    this.router.navigateByUrl(this.searchUrl);
  }
}
