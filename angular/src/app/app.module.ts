import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; //for local 
//import { routing } from './app-routing.module';		//for deploy
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CollectionComponent } from './collection/collection.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReviewComponent } from './review/review.component';
import { AddReviewComponent } from './review/addReview/addReview.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { RecommendationListComponent } from './recommendation-list/recommendation-list.component';
import { TagSelectionComponent } from './tag-selection/tag-selection.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';


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
		SearchComponent,
		FilterComponent,
		RecommendationListComponent,
		TagSelectionComponent,
		NotFoundComponent,
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		//routing,		//for deploy
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
		MDBBootstrapModule.forRoot(),
	],
	schemas: [ NO_ERRORS_SCHEMA ],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
