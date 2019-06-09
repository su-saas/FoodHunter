import { Component, OnInit, Input} from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { AuthService } from '../services/auth.service';
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
    
  }
}

