import { Component, OnInit, Input } from '@angular/core';
import { IReviewModel } from '../interfaces/IReviewModel';
import { IFoodieModel } from '../interfaces/IFoodieModel';
import { ReviewService } from '../review.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { ProfileService } from '../profile.service';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
	@Input() restaurant: IRestaurantModel;
	lists: IReviewModel[] = [];
	users: IFoodieModel[] = [];
	@Input('rID') rID: number = 0;
	@Input('uID') uID: number = 0;
	constructor(
		private reviewService: ReviewService,
		private profileService: ProfileService,
		private route: ActivatedRoute
	) { }

}
