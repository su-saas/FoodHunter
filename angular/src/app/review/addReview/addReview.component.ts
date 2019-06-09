import { Component, Input, OnInit } from '@angular/core';
import { ReviewComponent } from '../review.component';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ReviewService } from '../../services/review.service';

@Component({
	selector: 'app-addreview',
	templateUrl: './addReview.component.html',
	styleUrls: ['./addReview.component.scss']
})
export class AddReviewComponent implements OnInit {
	private rID: number;
	// private uID: number;
	@Input('uID') uID = 0;

	constructor(private route: ActivatedRoute,
				private router: Router,
				private reviewService: ReviewService) {}
				
	ngOnInit() {
		this.rID = Number(this.route.snapshot.queryParams.rID);
	}

	addNewReview(content: string, title: string) {
		const body = {
			userID: this.uID,
			restaurantID: this.rID,
			title: title,
			content: content,
			date: new Date().toLocaleString()
		};
		this.reviewService.add(body).subscribe(
			(val) => {
				// console.log("POST call successful value returned:", val, typeof(val));
				if (val > 0) {
					this.goBackToRestaurant();
				} else {
					console.log('fail to create');
				}
			}
		);
	}
	goBackToRestaurant() {
		this.router.navigateByUrl('/restaurants/' + this.rID);
	}
}
