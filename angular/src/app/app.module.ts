import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { CollectionComponent } from './collection/collection.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantService } from './restaurant.service';
import { CollectionService } from './collection.service';
import { ReviewComponent } from './review/review.component';
import { ReviewService } from './review.service';
import { AddReviewComponent } from './review/addReview/addReview.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile.service';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { TagSelectionComponent } from './tag-selection/tag-selection.component';


@NgModule({
  declarations: [
    AppComponent,
		LoginComponent,
		RegisterComponent,
		CollectionComponent,
		RestaurantComponent,
		ReviewComponent,
		AddReviewComponent,
		ProfileComponent,
		NotFoundComponent,
    SearchComponent,
    FilterComponent,
    RecommendationListComponent,
    TagSelectionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
