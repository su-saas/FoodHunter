import { Component, OnInit } from '@angular/core';
import { IReviewModel } from '../interfaces/IReviewModel';
import { ReviewService } from '../review.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

	lists: IReviewModel[];
	constructor(
		private reviewService: ReviewService,
		private route: ActivatedRoute
	) {
		reviewService.getByRestaurantID(this.route.snapshot.params['rID']).subscribe(
			res => this.lists = res
		);
	}

	ngOnInit() {
	}

}
