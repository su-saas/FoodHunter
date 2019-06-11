import { Component, OnInit, Input } from '@angular/core';
import { IReviewModel } from '../interfaces/IReviewModel';
import { IFoodieModel } from '../interfaces/IFoodieModel';
import { ReviewService } from '../services/review.service';
import { ProfileService } from '../services/profile.service';
import { RestaurantService } from '../services/restaurant.service';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
	reviewList: IReviewModel[] = [];
	userList: IFoodieModel[] = [];
	isUser: boolean = false;
	rIdList: number[] = [];
	rNameList: string[] = [];
	currentUserID: number;

	// tslint:disable-next-line:no-input-rename
	@Input('rID') rID = 0;

	constructor(
		private authService: AuthService,
		private reviewService: ReviewService,
		private profileService: ProfileService,
		private restaurantService: RestaurantService) { }

	ngOnInit() {
		this.authService.getSession().subscribe(
            data => {
				this.currentUserID = data.userID;
				console.log('user id in review: ', this.currentUserID);
				console.log('rID get by review: ', this.rID);
				if (this.rID > 0) {
					this.reviewService.getByRestaurantID(this.rID).subscribe(
						reviews => {
							for (let i = 0; i < reviews.length; i++) {
								this.reviewList[i] = reviews[i];
								console.log('get reviews by restaurant id:', reviews);
								console.log('single review by restaurant id:', this.reviewList[i]);
								this.profileService.getProfileByFoodieID(reviews[i].userID).subscribe(
									user => this.userList.push(user)
								);
							}
							console.log("get users by reviews: ", this.userList);
						});
				} else {
					this.isUser = true;
					this.reviewService.getByUserID(this.currentUserID).subscribe(
						reviews => {
							for (let i = 0; i < reviews.length; i++) {
								this.reviewList[i] = reviews[i];
								this.rIdList[i] = reviews[i].restaurantID;
								this.restaurantService.getByID(this.reviewList[i].restaurantID).subscribe(
										restaurant => this.rNameList[i] = restaurant.restaurantName
								);
							}
						});
				}
     });
	}

}
