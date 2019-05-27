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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CollectionComponent,
    RestaurantComponent,
    ReviewComponent,
    AddReviewComponent
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
