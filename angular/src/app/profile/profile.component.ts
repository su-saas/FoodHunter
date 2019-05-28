import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router  , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: Object;

  constructor(private data: ProfileService, private route: ActivatedRoute) { }

  ngOnInit() {
      // this.data.getProfileByFoodieID(this.route.snapshot.params['ID']).subscribe(data => {
      this.data.getProfileByFoodieID("2").subscribe(data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

}
