import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Subscription } from 'rxjs';
// import { MessageService } from '../message.service';
import { AuthService } from '../auth/auth.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { ProfileService } from '../profile.service';
import { RestaurantService } from '../restaurant.service';
import { ProfileComponent } from '../profile/profile.component';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})

export class CollectionComponent implements OnInit {
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
  }
}
