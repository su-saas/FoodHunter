import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionComponent } from './collection/collection.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantService } from './restaurant.service';
import { CollectionService } from './collection.service';
import { ReviewComponent } from './review/review.component';
import { ReviewService } from './review.service';

@NgModule({
  declarations: [
    AppComponent,
    CollectionComponent,
    RestaurantComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RestaurantService, CollectionService, ReviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
