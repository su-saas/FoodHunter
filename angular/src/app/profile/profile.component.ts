import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { AuthService } from '../services/auth.service';
import { IFavoriteListModel } from '../interfaces/IFavoriteListModel';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userID: number;
  userName: string;
  emailAddress: string;
  favoriteListID: number;
  favoriateList: IFavoriteListModel;
  restaurantIDList: number[] = [];
  avatarPicture: string;

  constructor(private auth: AuthService,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.auth.getSession().subscribe(data => {
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

}
