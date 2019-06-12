import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { SearchService } from '../services/search.service';
import { AuthService } from '../services/auth.service';

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
	public found: boolean;
	public submitted: boolean;
	userID: number;
	options = [
		{ description: 'Restaurant Name' },
	];

	constructor(private router: Router,
				private searchService: SearchService,
				private auth: AuthService) {
					this.auth.getSession().subscribe(data => {
					this.userID = data.userID;
					console.log("profile: " + JSON.stringify(data)); 
					})
				 }

	ngOnInit() {
		this.found = true;
		this.submitted = false;
	}

	onSubmit(f) {
		this.submitted = true;
		var name = String(f.value.restaurantName).toLowerCase();
		console.log('input restaurant name: ', name);
		this.searchService.getRestaurantByName(name)
			.subscribe(res => {
				this.submitted = true;
				if (res.length > 0) {
					this.restaurant = res[0];
					console.log('get restaurant: ', res);
					this.rID = this.restaurant.restaurantID;
					console.log('get restaurant id: ', this.rID);
					this.nextStationUrl = this.restaurantDetailUrl + this.rID;
					this.router.navigateByUrl(this.nextStationUrl);
				} else {
					this.found = false;
				}
			});
		}
}
