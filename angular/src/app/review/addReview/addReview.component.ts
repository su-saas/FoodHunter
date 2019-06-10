import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewService } from '../../services/review.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
	selector: 'app-addreview',
	templateUrl: './addReview.component.html',
	styleUrls: ['./addReview.component.scss']
})
export class AddReviewComponent implements OnInit {
	private rID: number;
	private currentUserID: number;

	constructor(
		private authService: AuthService,
		private route: ActivatedRoute,
		private router: Router,
		private reviewService: ReviewService) {
		this.authService.getSession().subscribe(
			data => {
				this.currentUserID = data.userID;
			}
		);
	}

	ngOnInit() {
		this.rID = Number(this.route.snapshot.queryParams.rID);
	}

	addNewReview(content: string, title: string) {
		console.log("here is userId" + this.currentUserID);
		const body = {
			userID: this.currentUserID,
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
