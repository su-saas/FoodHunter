import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { SearchService } from '../services/search.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	private restaurantDetailUrl = 'restaurants/';
	private nextStationUrl: string;
	private restaurant: IRestaurantModel;
	private rID: number;
	private notFind: boolean;
	private submitted: boolean;
	options = [
		{ description: 'Restaurant Name' },
	];

	constructor(private router: Router,
		           private searchService: SearchService) { }

	ngOnInit() {
		this.notFind = true;
		this.submitted = false;
	}

	onSubmit(f) {
<<<<<<< HEAD
		var name = String(f.value.restaurantName);
=======
		this.submitted = true;
		var name = String(f.value.restaurantName).toLowerCase();
>>>>>>> a701cf5c41540172148fc95606676132d2a666ba
		console.log(name);
		this.searchService.getRestaurantByName(name)
			.subscribe(res => {
				this.submitted = true;
				if (res.length > 0) {
					this.notFind = false;
					this.restaurant = res[0];
					console.log(res);
					this.rID = this.restaurant.restaurantID;
					console.log(this.rID);
					this.nextStationUrl = this.restaurantDetailUrl + this.rID;
					this.router.navigateByUrl(this.nextStationUrl);
				}
			});
		}
}
