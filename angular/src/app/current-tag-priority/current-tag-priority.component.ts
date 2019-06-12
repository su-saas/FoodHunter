import { Component, OnInit, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { TagSelectionService } from '../services/tag-selection.service';
import { ProfileService } from '../services/profile.service';
import { AuthService } from '../services/auth.service';
import { TabId } from '../utils/enum';

@Component({
  selector: 'app-current-tag-priority',
  templateUrl: './current-tag-priority.component.html',
  styleUrls: ['./current-tag-priority.component.scss']
})
export class CurrentTagPriorityComponent implements OnInit {
  tagPriList: string[] = [];
  priorityList: number[] = [];
  tagList: any;
  userID: number;
  isInitialized = false;

  @Input() currentTab: BehaviorSubject<TabId>;

  constructor(
    private profileService: ProfileService,
    private tagSelectionService: TagSelectionService,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.currentTab.subscribe((currentTabId: TabId) => {
      if (currentTabId === TabId.currentTagPriorityTab) {
        this.initialize();
      } else {
        // Uninitalize
        this.isInitialized = false;
      }
    });
  }

  initialize(): void {
    if (!this.isInitialized) {
      this.isInitialized = true;
      this.auth.getSession().pipe(
        first()
      ).subscribe(data => {
        this.userID = data.userID;
        console.log('profile in current tag: ' + JSON.stringify(data));
        if (this.userID > 0) {
          this.tagSelectionService.getAllTags().subscribe(
            res => {
              this.tagList = res;
              this.profileService.getFoodieTagListByFoodieID(this.userID).subscribe(
                response => {
                  this.priorityList = response.tagList;
                  for (let i = 0; i < this.tagList.length; i++) {
                    let message: string = this.tagList[i]['tagName'] + ': ' + this.priorityList[i];
                    console.log(message);
                    this.tagPriList.push(message);
                  }
                  console.log(this.tagPriList);
                });
            });
        } else {
          console.log('cannot get user id in currentTag');
        }
      });
    } else {
      // NTD, already initialzed
    }
  }

}
