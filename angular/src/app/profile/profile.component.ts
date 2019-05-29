import { Component, OnInit} from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users: Object;
  id: Number; 
  private userName: string;
  private email: string;
  constructor(private data: ProfileService, private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
      if(this.route.snapshot.queryParams['userID']){
        console.log(this.route.snapshot.queryParams['userID'])
        this.userID = this.route.snapshot.queryParams['userID'];
        this.data.getProfileByFoodieID(parseInt(this.userID)).subscribe(data => {
          this.users = data;
          this.userName = data.userName;
          this.email = data.emailAddress;
        });
      }else{
        this.id = parseInt(this.userID);
        this.data.getProfileByFoodieID(this.id).subscribe(data => {
          console.log(this.userID);
          console.log(this.id);
          this.users = data;
          this.userName = data.userName;
          this.email = data.emailAddress;
          console.log(this.users);
        }
      );
    }
  }

  get userID():string {
    return this.authService.userID;
  }

  set userID(value: string) {
    this.authService.userID = value; 
  }
}
