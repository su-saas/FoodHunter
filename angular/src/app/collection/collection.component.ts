import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Subscription } from 'rxjs';
// import { MessageService } from '../message.service';
import { AuthService } from '../auth/auth.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { RestaurantService } from '../services/restaurant.service';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {
  user: Object;
  constructor(private data: CollectionService,
              private authService: AuthService) { }

  ngOnInit() {
    // this.data.getCollectionByUserID().subscribe(data => {
    //   this.user = data;
    //   console.log(this.user);
    // }
  // );
    console.log(this.userID);
  }
  get userID(): string {
    return this.authService.userID;
  }
}
