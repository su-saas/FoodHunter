import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    // this.tagSelectionService.createTagPriorityList().subscribe(
    //   res => 
    // );
    this.router.navigateByUrl(this.searchUrl);
  }
}
