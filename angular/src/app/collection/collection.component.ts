import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CollectionService } from '../services/collection.service';
import { RestaurantService } from '../services/restaurant.service';
import { Subscription } from 'rxjs';
// import { MessageService } from '../message.service';
import { AuthService } from '../auth/auth.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { ProfileComponent } from '../profile/profile.component';
import { IFavoriteListModel } from '../interfaces/IFavoriteListModel';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})

export class CollectionComponent implements OnInit {
  user: object;
  favoriateList: IFavoriteListModel;
  restaurantIDList: number[] = [];
  restaurants: IRestaurantModel[] = [];
  constructor(private collectionData: CollectionService,
              private restaurantData: RestaurantService,
              private authService: AuthService) { }

  ngOnInit() {
    this.collectionData.getCollectionByListID(3).subscribe(data => {
      this.favoriateList = data;
      this.restaurantIDList = this.favoriateList[0].restaurantIDList;
      console.log('favoriateList: ', this.favoriateList);


      for (let each of this.restaurantIDList) {
        console.log('each: ', each);
        this.restaurantData.getByID(each).subscribe(restaurant => {
          this.restaurants.push(restaurant);
          console.log('restaurant: ', restaurant);
        });
      }
    });
  }

  // console.log('restaurants list:', restaurants);

  get userID(): string {
    return this.authService.userID;
  }
}
