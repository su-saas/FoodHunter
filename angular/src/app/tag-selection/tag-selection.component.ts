import { Component, OnInit } from '@angular/core';
import { TagSelectionService } from '../tag-selection.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tag-selection',
  templateUrl: './tag-selection.component.html',
  styleUrls: ['./tag-selection.component.css']
})
export class TagSelectionComponent implements OnInit {
  private userID: number;
  private searchUrl = 'search';
  tagList: any;
  newList = [];

  constructor(private tagSelectionService: TagSelectionService,
              private router: Router,
              private route: ActivatedRoute,) {
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
    if (this.route.snapshot.queryParams['uID']){
      console.log(this.route.snapshot.queryParams['uID']);
      this.userID = this.route.snapshot.queryParams['uID'];
      console.log(this.userID);
      this.tagSelectionService.createTagPriorityList(this.userID, this.newList);
    }    
    this.router.navigateByUrl(this.searchUrl);
  }
}
