import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';

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

  options = [
    {description: 'Restaurant Name'},
  ];

  constructor(private router: Router,
              private searchService: SearchService) { }

  ngOnInit() {
     
  }

  onSubmit(f) {
    this.searchService.getRestaurantByName(f.value.restaurantName)
    .subscribe(res => {
      this.restaurant = res[0];
      this.rID = this.restaurant.restaurantID;
      console.log(this.rID);
      this.nextStationUrl = this.restaurantDetailUrl + this.rID;
      this.router.navigateByUrl(this.nextStationUrl);
    });
  }
}
