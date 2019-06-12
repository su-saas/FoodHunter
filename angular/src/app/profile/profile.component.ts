import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { ProfileService } from '../services/profile.service';
import { AuthService } from '../services/auth.service';
import { IFavoriteListModel } from '../interfaces/IFavoriteListModel';
import { TabId } from '../utils/enum';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userID: number;
  userName: string;
  emailAddress: string;
  favoriteListID: number;
  favoriateList: IFavoriteListModel;
  restaurantIDList: number[] = [];
  avatarPicture: string;
  tabId = TabId;

  // This is assuming that we always start with the current tag pri tab
  currentTabSubject: BehaviorSubject<TabId> = new BehaviorSubject<TabId>(TabId.currentTagPriorityTab);

  constructor(
    private auth: AuthService,
    private profileService: ProfileService
  ) { }

  ngOnInit() {
    this.auth.getSession().pipe(
      first()
    ).subscribe(data => {
      this.userID = data.userID;
      this.emailAddress = data.emailAddress;
      this.userName = data.userName;
      console.log('profile in profile: ' + JSON.stringify(data));
      console.log('user of profile: ', this.userID);
      if (this.userID > 0) {
        this.profileService.getProfileByFoodieID(this.userID).subscribe(
          foodieinfo => this.avatarPicture = foodieinfo.avatar
        );
      }
    });
  }

  ngOnDestroy(): void {
    // Release subject subscription
    this.currentTabSubject.complete();
  }

  onTabChage(currentTab: TabId): void {
    this.currentTabSubject.next(currentTab);
  }

}
