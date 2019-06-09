import { Component, OnInit, Input} from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';
// import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { CollectionService } from '../services/collection.service';
import { type } from 'os';
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
  id: Number;
  userName: string;
  email: string;
  favoriteListID: number;
  favoriateList: IFavoriteListModel;
  restaurantIDList: number[] = [];
  tagList: any;
  priorityList: number[] = [];
  tagPriList: string[] = [];
  userIdtemp: number = 3;

  constructor(private data: ProfileService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private collectionservice: CollectionService,
              private recommendationListService: RecommendationListService,
              private tagSelectionService: TagSelectionService) { }

  ngOnInit() {
    if (this.route.snapshot.queryParams.userID) {
      console.log(this.route.snapshot.queryParams.userID);
      //this.userID = this.route.snapshot.queryParams.userID;
      // this.data.getProfileByFoodieID(parseInt(this.userID)).subscribe(data => {
      this.data.getProfileByFoodieID(this.userIdtemp).subscribe(data => {
        this.users = data;
        this.userName = data.userName;
        this.email = data.emailAddress;
      });
    } else {
      // tslint:disable-next-line:radix
      //this.id = parseInt(this.userID);
      // this.data.getProfileByFoodieID(this.id).subscribe(data => {
      // this.data.getProfileByFoodieID(this.id).subscribe(data => {
      this.data.getProfileByFoodieID(this.userIdtemp).subscribe(data => {
        this.users = data;
        this.userName = data.userName;
        this.email = data.emailAddress;
        this.tagSelectionService.getAllTags().subscribe(
          res => {
            this.tagList = res;
            this.data.getFoodieTagListByFoodieID(8).subscribe(
              response => {
                this.priorityList = response.tagList;
                for (let i = 0; i < this.tagList.length; i++) {
                  let message: string = this.tagList[i]['tagName'] + ": " + this.priorityList[i].toString();
                  console.log(message);
                  this.tagPriList.push(message);
                }
                console.log(this.tagPriList);
            });
        });
      });
    }
  }




    // }
}

  // get userID(): string {
  //   return this.authService.userID;
  // }

  // set userID(value: string) {
  //   this.authService.userID = value;
  // }

