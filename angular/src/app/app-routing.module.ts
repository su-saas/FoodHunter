import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { AddReviewComponent } from './review/addReview/addReview.component';
import { ProfileComponent } from './profile/profile.component';
import { CollectionComponent } from './collection/collection.component';
import { ReviewComponent } from './review/review.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { TagSelectionComponent } from './tag-selection/tag-selection.component';


const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch:'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'restaurants/:rID', component: RestaurantComponent },
  { path: 'addreview', component: AddReviewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'search', component: SearchComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'tagSelection', component: TagSelectionComponent },
  { path: 'recommendationList/:name', component: RecommendationListComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
