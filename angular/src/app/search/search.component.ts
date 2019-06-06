import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { SearchService } from '../services/search.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
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
		this.submitted = true;
		var name = String(f.value.restaurantName);
		console.log(name);
		this.searchService.getRestaurantByName(name)
			.subscribe(res => {
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
