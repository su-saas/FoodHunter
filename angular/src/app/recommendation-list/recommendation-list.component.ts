import { Component, OnInit, Input } from '@angular/core';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { RecommendationListService } from '../services/recommendation-list.service';
import { RestaurantService } from '../services/restaurant.service';
import { filter } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recommendation-list',
  templateUrl: './recommendation-list.component.html',
  styleUrls: ['./recommendation-list.component.scss']
})
export class RecommendationListComponent implements OnInit {
  private restaurantIdList: number[];
  public recommendationList: IRestaurantModel[] = [];
  private userID: number;

  @Input('isChange') isChange: boolean = false;
  @Input('newList') newList: any = [];

  constructor(private recommendationListService: RecommendationListService,
              private restaurantService: RestaurantService,
              private auth: AuthService) {
                this.auth.getSession().subscribe(data => {
                this.userID = data.userID;
                console.log("profile: " + JSON.stringify(data)); 
              })
               }

  ngOnInit() {
    if (!this.isChange) {
      console.log(this.isChange);
      console.log(this.newList);
      this.recommendationListService.getTagListId(this.userID).subscribe(
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
