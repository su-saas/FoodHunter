import { Component, OnInit, Input } from '@angular/core';
import { IReviewModel } from '../interfaces/IReviewModel';
import { ReviewService } from '../review.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RestaurantComponent } from '../restaurant/restaurant.component';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

	@Input() restaurant: IRestaurantModel;
	lists: IReviewModel[];
	constructor(
		private reviewService: ReviewService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.reviewService.getByRestaurantID(this.route.snapshot.params['rID']).subscribe(
			res => this.lists = res
		);
	}

}
