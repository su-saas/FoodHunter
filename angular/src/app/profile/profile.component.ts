import { Component, OnInit} from '@angular/core';
import { ProfileService } from '../profile.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { MessageService } from '../message.service';
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
  private userName: string;
  private email: string;
  constructor(private data: ProfileService, private route: ActivatedRoute,
              private authService: AuthService, private messageService: MessageService) { }

  ngOnInit() {
      // tslint:disable-next-line:radix
      this.id = parseInt(this.userID);
      // this.data.getProfileByFoodieID(this.id).subscribe(data => {
      this.data.getProfileByFoodieID(2).subscribe(data => {
        console.log(this.userID);
        console.log(this.id);
        this.users = data;
        this.userName = data.userName;
        this.email = data.emailAddress;
        console.log(this.users);
      }
    );
      this.sendMessage();
  }

  get userID(): string {
    return this.authService.userID;
  }

  set userID(value: string) {
    this.authService.userID = value;
  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
    console.log('Message from Home Component to App Component!');
  }

  clearMessages(): void {
      // clear messages
      this.messageService.clearMessages();
  }
}
