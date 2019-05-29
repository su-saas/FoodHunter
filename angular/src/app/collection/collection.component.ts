import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CollectionService } from '../collection.service';
<<<<<<< HEAD
import { Subscription } from 'rxjs';
// import { MessageService } from '../message.service';
import { AuthService } from '../auth/auth.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { RestaurantService } from '../restaurant.service';
import { ProfileComponent } from '../profile/profile.component';
=======
import { AuthService } from '../auth/auth.service';
>>>>>>> 09ac0bd5679ac6e4356f4821a701fbbe06a9f3af
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {
<<<<<<< HEAD
  // name = this.userName;
  // emailAddress = this.email;
  message: string;
  profile: ProfileComponent;
  constructor() { }

  ngOnInit() {
    console.log('inside the init')
    console.log(this.profile);
    // this.data.currentMessage.subscribe(message => this.message = message);
    // console.log(this.message);
=======
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
  get userID():string {
    return this.authService.userID;
>>>>>>> 09ac0bd5679ac6e4356f4821a701fbbe06a9f3af
  }
}
