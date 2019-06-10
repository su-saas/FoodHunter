import { Component, OnInit, Input } from '@angular/core';
import { IReviewModel } from '../interfaces/IReviewModel';
import { IFoodieModel } from '../interfaces/IFoodieModel';
import { ReviewService } from '../services/review.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import { RestaurantService } from '../services/restaurant.service';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
	lists: IReviewModel[] = [];
	users: IFoodieModel[] = [];
	isUser: boolean = false;
	rIdList: number[] = [];
	rNameList: string[] = [];

	@Input('rID') rID = 0;
	@Input('uID') uID = 0;

	constructor(
		private reviewService: ReviewService,
		private profileService: ProfileService,
		private route: ActivatedRoute,
		private restaurantService: RestaurantService
	) { }
	ngOnInit() {
		if (this.rID > 0 && this.uID > 0) {
			this.reviewService.getByRestaurantID(this.rID)
				.subscribe(reviews => {
					for (let i = 0; i < reviews.length; i++) {
						this.lists[i] = reviews[i];
						this.profileService.getProfileByFoodieID(reviews[i].userID)
							.subscribe(user => {
								this.users.push(user);
							});
					}
				});
		} else {
			this.isUser = true;
			this.reviewService.getByUserID(this.uID)
				.subscribe(
					reviews => {
						for (let i = 0; i < reviews.length; i++) {
							this.lists[i] = reviews[i];
							this.rIdList[i] = reviews[i].restaurantID;
							this.restaurantService.getByID(this.lists[i].restaurantID)
								.subscribe(
									restaurant => {
										this.rNameList[i] = restaurant.restaurantName;
									}
								)
						}
					});
		}
	}

}
