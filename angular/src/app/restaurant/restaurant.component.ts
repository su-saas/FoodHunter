import { Component, OnInit } from '@angular/core';
import {IRestaurantModel} from '../interfaces/IRestaurantModel';
import { RestaurantService } from '../restaurant.service';
import { Router  , ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

    detail: IRestaurantModel;
    constructor(
        private restaurantService: RestaurantService,
        private route: ActivatedRoute
    ) { 
    }

    ngOnInit() {
        this.restaurantService.getByID(this.route.snapshot.params['rID']).subscribe(
            res => this.detail = res
        );
    }
}
