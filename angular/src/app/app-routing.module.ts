import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AddReviewComponent } from './review/addReview/addReview.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { TagSelectionComponent } from './tag-selection/tag-selection.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'restaurants/:rID', component: RestaurantComponent},
  {path: 'addreview', component: AddReviewComponent},
  {path: 'search', component: SearchComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'tagSelection', component: TagSelectionComponent},
  {path: 'recommendationList/:name', component: RecommendationListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
