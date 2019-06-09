import { Component, OnInit } from '@angular/core';
import {IRestaurantModel} from '../interfaces/IRestaurantModel';
import { RestaurantService } from '../services/restaurant.service';
import { Router  , ActivatedRoute } from '@angular/router';
import { CollectionService } from '../services/collection.service';

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

    detail: IRestaurantModel;
    constructor(
        private restaurantService: RestaurantService,
        private collectionService: CollectionService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.restaurantService.getByID(this.route.snapshot.params.rID).subscribe(
            res => this.detail = res
        );
    }
    
    addToCollection(){
    }
}
