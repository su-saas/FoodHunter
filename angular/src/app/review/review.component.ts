import { Component, OnInit, Input } from '@angular/core';
import { IReviewModel } from '../interfaces/IReviewModel';
import { IFoodieModel } from '../interfaces/IFoodieModel';
import { ReviewService } from '../review.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { ProfileService } from '../profile.service';
import { tap, flatMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { registerContentQuery } from '@angular/core/src/render3';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
	@Input() restaurant: IRestaurantModel;
	lists: IReviewModel[] = [];
	users: IFoodieModel[] = [];
	constructor(
		private reviewService: ReviewService,
		private profileService: ProfileService,
		private route: ActivatedRoute
	) { }
	ngOnInit() {
		this.reviewService.getByRestaurantID(this.route.snapshot.params['rID'])
			.subscribe(reviews => {
				for (var i = 0; i < reviews.length; i++) {
					this.lists[i] = reviews[i];
					this.profileService.getProfileByFoodieID(String(reviews[i].userID))
						.subscribe(user => {
							this.users.push(user);
						});
				}
			});

	}

}
