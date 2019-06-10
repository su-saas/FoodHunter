import { Component, OnInit } from '@angular/core';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { RestaurantService } from '../services/restaurant.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CollectionService } from '../services/collection.service';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

    detail: IRestaurantModel;

    addCollectionClicked: boolean;
    addCollectionSuccessOrNot: boolean;
    currentUserID: number;
    constructor(
        private authService: AuthService,
        private restaurantService: RestaurantService,
        private collectionService: CollectionService,
        private route: ActivatedRoute
    ) {
        this.authService.getSession().subscribe(
            data => {
                this.currentUserID = data.userID;
            }
        );
    }

    ngOnInit() {
        this.addCollectionClicked = false;
        this.addCollectionSuccessOrNot = false;
        this.restaurantService.getByID(this.route.snapshot.params.rID).subscribe(
            res => {
                this.detail = res;
                console.log(this.detail);
            }
        );
    }

    addToCollection() {
        this.collectionService.addCollection(this.currentUserID, this.detail.restaurantID)
            .subscribe(
                res => {
                    this.addCollectionClicked = true;
                    this.addCollectionSuccessOrNot = res;
                    console.log("create success or not:" + this.addCollectionSuccessOrNot);
                }
            );
    }
}
