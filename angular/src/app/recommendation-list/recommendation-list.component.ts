import { Component, OnInit, Input } from '@angular/core';
import { IRestaurantModel } from '../interfaces/IRestaurantModel';
import { RecommendationListService } from '../services/recommendation-list.service';
import { RestaurantService } from '../services/restaurant.service';
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

// tslint:disable-next-line: no-input-rename
  @Input ('isChange') isChange = false;
  // tslint:disable-next-line:no-input-rename
  @Input ('newList') newList: any = [];

  constructor(private recommendationListService: RecommendationListService,
              private restaurantService: RestaurantService,
              private auth: AuthService) { }

  ngOnInit() {
    this.auth.getSession().subscribe(data => {
      this.userID = data.userID;
      console.log('profile in recommendation list: ' + JSON.stringify(data));
      if (!this.isChange) {
        console.log('get submit from filter in recommendList: ', this.isChange);
        console.log('get new tagList from filter in recommendList: ', this.newList);
        this.recommendationListService.getTagListId(this.userID).subscribe(
          res => {
            console.log('exists user taglist: ', res);
            this.recommendationListService.getRecommendationList(res['tagListID']).subscribe(
              response => {
                console.log('exists recommend list: ', response);
                this.restaurantIdList = response['restaurantList'];
                console.log('get list: ', this.restaurantIdList);
                // tslint:disable-next-line:forin
                for (let each of this.restaurantIdList) {
                  this.restaurantService.getByID(+each).subscribe(
                    result => this.recommendationList.push(result)
                    );
                }
                console.log('final get the recommendationList: ', this.recommendationList);
              });
          });
      } else {
        // algo
      }
    });
  }

}
