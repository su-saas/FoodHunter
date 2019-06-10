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
  userID: number;
  userName:string;
  emailAddress:string;
  favoriteListID: number;
  favoriateList: IFavoriteListModel;
  restaurantIDList: number[] = [];
  avatarPicture: string;

  constructor(private auth: AuthService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private collectionservice: CollectionService,
    private recommendationListService: RecommendationListService,
    ) {
      this.auth.getSession().subscribe(data => {
        this.userID = data.userID;
        this.emailAddress = data.emailAddress;
        this.userName = data.userName; 
        console.log("profile: " + JSON.stringify(data)); 
      })
    }

  ngOnInit() {
    console.log("here is profile: ", this.userID);
    this.profileService.getProfileByFoodieID(this.userID).subscribe(foodieinfo => {
      this.avatarPicture = foodieinfo.avatar;
    });
  }

}
  
  
