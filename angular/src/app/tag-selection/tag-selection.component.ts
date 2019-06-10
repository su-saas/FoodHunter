import { Component, OnInit, Input } from '@angular/core';
import { TagSelectionService } from '../services/tag-selection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-tag-selection',
  templateUrl: './tag-selection.component.html',
  styleUrls: ['./tag-selection.component.scss']
})
export class TagSelectionComponent implements OnInit {
  //private userID: number;
  private tagListID: number;
  private searchUrl = 'search';
  tagList: any;
  newList = [];

  @Input('userID') userID = 0;
  constructor(private tagSelectionService: TagSelectionService,
              private router: Router,
              private route: ActivatedRoute,
              private data: ProfileService) {
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
    for (const key in f.value) {
      const value = f.value[key];
      const num = +value;
      this.newList.push(num);
    }
    console.log(this.newList);
    this.data.getProfileByFoodieID(this.userID).subscribe(data => {
      this.tagListID = data.tagListID;
      if (this.tagListID !== null) {
        this.tagSelectionService.updateTagPriorityList(this.userID, this.newList);
      } else {
        console.log('Not exists');
      }
    });
  }
}
