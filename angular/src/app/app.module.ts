import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
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
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { TagComponent } from './tag/tag.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { AlgorithmComponent } from './algorithm/algorithm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CollectionComponent,
    RestaurantComponent,
    ReviewComponent,
    AddReviewComponent,
    SearchComponent,
    FilterComponent,
    TagComponent,
    RecommendationListComponent,
    AlgorithmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [RestaurantService, CollectionService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
