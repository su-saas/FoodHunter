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
<<<<<<< HEAD
              private profileService: ProfileService) { }

  ngOnInit() {
    this.auth.getSession().subscribe(data => {
      this.userID = data.userID;
      this.emailAddress = data.emailAddress;
      this.userName = data.userName;
      console.log('profile: ' + JSON.stringify(data));
      console.log('user of profile: ', this.userID);
      this.profileService.getProfileByFoodieID(this.userID).subscribe(
        foodieinfo => this.avatarPicture = foodieinfo.avatar
      );
    });
  }
=======
    private data: ProfileService,
    private route: ActivatedRoute,
    private collectionservice: CollectionService,
    private recommendationListService: RecommendationListService,
    private tagSelectionService: TagSelectionService) {
      this.auth.getSession().subscribe(data => {
        this.userID = data.userID;
        this.emailAddress = data.emailAddress;
        this.userName = data.userName; 
        console.log("userID (getSession()): " + this.userID); 
        console.log("profile: " + JSON.stringify(data)); 
        console.log("userID (ngOnInit()): " + this.userID); 
        this.data.getProfileByFoodieID(this.userID).subscribe(
          data => {
            console.log("getProfileByFoodieID:" + this.userID);
            this.users = data;
            this.userName = data.userName;
            this.emailAddress = data.emailAddress;
            this.tagSelectionService.getAllTags().subscribe(
              res => {
                this.tagList = res;
                this.data.getFoodieTagListByFoodieID(this.userID).subscribe(
                  response => {
                    this.priorityList = response.tagList;
                    for (let i = 0; i < this.tagList.length; i++) {
                      let message: string = this.tagList[i]['tagName'] + ": " + this.priorityList[i];
                      console.log(message);
                      this.tagPriList.push(message);
                    }
                    console.log(this.tagPriList);
                });
            });
        });
      })
    }


  ngOnInit() {}
  
}
  
  

>>>>>>> add logout

}
