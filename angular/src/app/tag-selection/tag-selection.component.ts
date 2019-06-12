import { Component, OnInit, ViewChild } from '@angular/core';
import { TagSelectionService } from '../services/tag-selection.service';
import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tag-selection',
  templateUrl: './tag-selection.component.html',
  styleUrls: ['./tag-selection.component.scss']
})
export class TagSelectionComponent implements OnInit {
  private tagListID: number;
  userID: number;
  tagList: any;
  newList = [];

  constructor(private tagSelectionService: TagSelectionService,
              private data: ProfileService,
              private router: Router,
              private auth: AuthService,
              private location: Location) {
  }

  ngOnInit() {
    this.auth.getSession().subscribe(data => {
      this.userID = data.userID;
      console.log('profile in tag-selection: ' + JSON.stringify(data));
    });
    this.tagSelectionService.getAllTags().subscribe(
      res => this.tagList = res
    );

  }

  onSubmit(f) {
    this.newList = []; 
    console.log(f.value);
    for (let key in f.value) {
      let value = f.value[key];
      let num = +value;
      this.newList.push(num);
    }
    console.log('get new list from user in tagSelection edit: ', this.newList);
    if (this.userID > 0) {
      this.data.getProfileByFoodieID(this.userID).subscribe(data => {
        this.tagListID = data.tagListID;
        if (this.tagListID !== null) {
          this.tagSelectionService.updateTagPriorityList(this.userID, this.newList);
          this.load();
        } else {
          console.log('you can not edit tagList, tagList does not exist');
        }
      });
    }
  }

  load() {
    location.reload();
  }

}
