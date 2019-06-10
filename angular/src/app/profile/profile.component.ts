import { Component, OnInit, Input} from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CollectionService } from '../services/collection.service';
import { IFavoriteListModel } from '../interfaces/IFavoriteListModel';
import { RecommendationListService } from '../services/recommendation-list.service';
import { TagSelectionService } from '../services/tag-selection.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userID: number = 12;
  userName:string = "Helena";
  emailAddress:string = "helenawang77@gmail.com";
  favoriteListID: number;
  favoriateList: IFavoriteListModel;
  restaurantIDList: number[] = [];
  tagList: any;
  priorityList: number[] = [];
  tagPriList: string[] = [];
  // avatarPicture: string = "https://drive.google.com/uc?id=1rGvNT1klU8v287D6twZ5Up1ewfwDRZsT";
  avatarPicture: string;

  constructor(private auth: AuthService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private collectionservice: CollectionService,
    private recommendationListService: RecommendationListService,
    private tagSelectionService: TagSelectionService) {
      // this.auth.getSession().subscribe(data => {
      //   this.userID = data.userID;
      //   this.emailAddress = data.emailAddress;
      //   this.userName = data.userName; 
      //   console.log("profile: " + JSON.stringify(data)); 
      // })
    }

  ngOnInit() {
    this.tagSelectionService.getAllTags().subscribe(
      res => {
        this.tagList = res;
        //console.log(this.tagList);
        this.profileService.getFoodieTagListByFoodieID(this.userID).subscribe(
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

    this.profileService.getProfileByFoodieID(77).subscribe(foodieinfo => {
      this.avatarPicture = foodieinfo.avatar;
    });
  }
}
  
  
