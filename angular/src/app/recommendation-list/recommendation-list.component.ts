import { Component, OnInit, Input } from '@angular/core';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { RecommendationListService } from '../services/recommendation-list.service';
import { RestaurantService } from '../services/restaurant.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {
  private restaurantIdList: number[];
  private recommendationList: IRestaurantModel[] = [];
  private userId: number = 3;

  @Input('isChange') isChange: boolean = false;
  @Input('newList') newList: any = [];

  constructor(private recommendationListService: RecommendationListService,
              private restaurantService: RestaurantService) { }

  ngOnInit() {
    if (!this.isChange) {
      console.log(this.isChange);
      console.log(this.newList);
      this.recommendationListService.getTagListId(this.userId).subscribe(
        res => {
          console.log(res);
          this.recommendationListService.getRecommendationList(res['tagListID']).subscribe(
            response => {
              console.log(response);
              this.restaurantIdList = response['restaurantList'];
              console.log(this.restaurantIdList);
              // tslint:disable-next-line:forin
              for (let each of this.restaurantIdList) {
                this.restaurantService.getByID(+each).subscribe(
                  result => {
                    this.recommendationList.push(result);
                    console.log(this.recommendationList);
                  });
              }
            });
        });
    } else {
      // algo
    }
  }

}
