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
	//@Input() restaurant: IRestaurantModel;
	lists: IReviewModel[] = [];
	users: IFoodieModel[] = [];

	@Input('rID') rID: number = 0;
	@Input('uID') uID: number = 0;

	constructor(
		private reviewService: ReviewService,
		private profileService: ProfileService,
		private route: ActivatedRoute
	) { }
	ngOnInit() {
		if (this.rID > 0 && this.uID > 0) {
			this.reviewService.getByRestaurantID(this.rID)
				.subscribe(reviews => {
					for (var i = 0; i < reviews.length; i++) {
						this.lists[i] = reviews[i];
						this.profileService.getProfileByFoodieID(reviews[i].userID)
							.subscribe(user => {
								this.users.push(user);
							});
					}
				});
		}
		else {
			this.route.queryParams.subscribe(
				params => {
					console.log(params['uID']);
					this.uID = Number(params['uID']);
					this.reviewService.getByUserID(this.uID)
					.subscribe(
						reviews => {
							for (var i = 0; i < reviews.length; i++) {
								this.lists[i] = reviews[i];
								this.profileService.getProfileByFoodieID(reviews[i].userID)
									.subscribe(user => {
										this.users.push(user);
									});
							}
						});
				}
			);
		}
	}

}
