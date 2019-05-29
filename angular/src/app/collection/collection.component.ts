import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import { AuthService } from '../auth/auth.service';
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
  get userID():string {
    return this.authService.userID;
  }

}
