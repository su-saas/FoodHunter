import { Component, OnInit, Input} from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';
// import { MessageService } from '../message.service';
import { Observable } from 'rxjs';
import { CollectionService } from '../collection.service';
import { type } from 'os';
import { IFavoriteListModel } from '../interfaces/IFavoriteListModel';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  users: Object;
  // tslint:disable-next-line:ban-types
  id: Number;
  userName: string;
  email: string;
  favoriteListID: number;
  favoriateList: IFavoriteListModel;
  restaurantIDList: number[];
  
  constructor(private data: ProfileService, private route: ActivatedRoute,
              private authService: AuthService, private collectionservice: CollectionService) { }
  ngOnInit() {

      // tslint:disable-next-line:radix
      this.id = parseInt(this.userID);
      // this.data.getProfileByFoodieID(this.id).subscribe(data => {
      this.data.getProfileByFoodieID(2).subscribe(data => {
        this.users = data;
        this.userName = data.userName;
        this.email = data.emailAddress;
        console.log(this.users);
        console.log(this.userName);
        this.favoriteListID = data.favoriteListID;
        console.log("favoriateListID: " + this.favoriteListID);
        console.log("type of id: " + this.favoriteListID);
        this.collectionservice.getCollectionByID(this.favoriteListID).subscribe(data => {
          this.favoriateList = data;
          console.log("this collection is: ", this.favoriateList);
          this.restaurantIDList = this.favoriateList[0].restaurantIDList;
          console.log("restaurantList: ", this.restaurantIDList);
          this.restaurantIDList.forEach(element => {
            console.log(element);
          });
          // this.restaurantList = data.restaurantIDList;
          // console.log(this.restaurantList);
        });
      });
  }

  public getName(): string {
    return this.userName;
  }

  public getEmail(): string {
    return this.email;
  }
  get userID(): string {
    return this.authService.userID;
  }

  set userID(value: string) {
    this.authService.userID = value;
  }

  // sendMessage(): void {
  //   // send message to subscribers via observable subject
  //   this.messageService.sendMessage('Message from Home Component to App Component!');
  //   console.log('Message from Home Component to App Component!');
  // }

  // clearMessages(): void {
  //     // clear messages
  //     this.messageService.clearMessages();
  // }
}
