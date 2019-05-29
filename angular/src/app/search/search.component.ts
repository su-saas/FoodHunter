import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private recommendationUrl = 'recommendationList/';
  private nextStationUrl: string;

  options = [
    {description: 'Restaurant Name'},
    {description: 'Restaurant Address'}
  ];
  submitted = false;

  constructor(private router: Router) { }

  ngOnInit() {

  }

  onSubmit(f) {
    this.submitted = true;
    console.log(f.value);
    this.nextStationUrl = this.recommendationUrl +  f.value.restaurantName;
    console.log(this.nextStationUrl);
    this.router.navigateByUrl(this.nextStationUrl);
  }
}
