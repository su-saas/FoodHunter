import { Component, Input, OnInit } from '@angular/core';
import { ReviewComponent } from '../review.component';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ReviewService } from 'src/app/review.service';

@Component({
	selector: 'app-addreview',
	templateUrl: './addReview.component.html',
	styleUrls: ['./addReview.component.css']
})
export class AddReviewComponent implements OnInit{
	private rID: number;
	private uID: number;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private reviewService: ReviewService
	){}
	ngOnInit(){
		this.uID = this.route.snapshot.queryParams["uID"];
		this.rID = this.route.snapshot.queryParams["rID"];
	}

	addNewReview(){

	}
	goBackToRestaurant(){
		this.router.navigateByUrl('/restaurants/'+this.rID);
	}
}
