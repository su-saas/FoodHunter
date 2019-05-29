import { Component, OnInit, OnDestroy } from '@angular/core';
import { CollectionService } from '../collection.service';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit, OnDestroy {
  messages: any[] = [];
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      console.log("inside the subscription!");
      if (message) {
        this.messages.push(message);
        console.log(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
        console.log("no message");
      }
    });
  // subscribe to profile component messages
    // this.subscription = this.messageService.getMessage().subscribe(message => {
    //   if (message) {
    //     this.messages.push(message);
    //     console.log(message);
    //   } else {
    //     // clear messages when empty message received
    //     this.messages = [];
    //   }
    // });
  }

  ngOnInit() {
      // subscribe to profile component messages
      console.log('jump to collection page');
      this.subscription = this.messageService.getMessage().subscribe(message => {
        console.log("inside the subscription!");
        if (message) {
          this.messages.push(message);
          console.log(message);
        } else {
          // clear messages when empty message received
          this.messages = [];
          console.log("no message");
        }
      });
    // this.data.getCollectionByUserID().subscribe(data => {
    //   this.user = data;
    //   console.log(this.user);
    // }
  // );
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}
