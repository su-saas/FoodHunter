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
  users: Object;
  userID: number;
  userName:string;
  emailAddress:string;
  favoriteListID: number;
  favoriateList: IFavoriteListModel;
  restaurantIDList: number[] = [];
  tagList: any;
  priorityList: number[] = [];
  tagPriList: string[] = [];
  
  constructor(private auth: AuthService,
    private data: ProfileService,
    private route: ActivatedRoute,
    private collectionservice: CollectionService,
    private recommendationListService: RecommendationListService,
    private tagSelectionService: TagSelectionService) {
      this.auth.getSession().subscribe(data => {
        this.userID = data.userID;
        this.emailAddress = data.emailAddress;
        this.userName = data.userName; 
        console.log("profile: " + JSON.stringify(data)); 
      })
    }

  ngOnInit() {
      this.data.getProfileByFoodieID(this.userID).subscribe(
        data => {
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
    }
}
  
  


