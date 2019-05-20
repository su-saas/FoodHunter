import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import { Foodie, RestaurantOwner, Admin } from "./route/User";
import { FoodieTagList } from "./route/FoodieTagList";
import { Tag } from "./route/Tag";
import { Review } from './route/Review';
import { FavoriteList } from './route/FavoriteList';
import { Restaurant } from './route/Restaurant';
import { Dish } from './route/Dish';
import { RestaurantTagList } from './route/RestaurantTagList';
import { ApplicationForm } from './route/ApplicationForm';
import { RecommendationList } from './route/RecommendationList';

import { Router } from "express-serve-static-core";


// creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public expressApp: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
    }

    // configure Express middleware.
    private middleware(): void {
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }

    // configure API endpoints.
    private routes(): void {
        let router: Router = express.Router();

        // add routes
        this.addRoutes(router);

        this.expressApp.use('/', router);
        this.expressApp.use('/', express.static(__dirname+'/pages'));
  }    
    private addRoutes(router: express.Router): void{
        // xing
        var review = new Review();
        review.registerRoutes(router);
        var favoriteList = new FavoriteList();
        favoriteList.registerRoutes(router);
        // erica
        var rest = new Restaurant();
        rest.registerRestaurantRoutes(router);
        var dish = new Dish();
        dish.registerDishRoutes(router);
        var rtaglist = new RestaurantTagList();
        rtaglist.registerrTagListRoutes(router);
        // helena
        var foodie = new Foodie();
        foodie.registerRoutes(router);
        var admin = new Admin();
        admin.registerRoutes(router);
        var restaurantOwner = new RestaurantOwner();
        restaurantOwner.registerRoutes(router);
        var tag = new Tag();
        tag.registerRoutes(router);
        var foodieTagList = new FoodieTagList();
        foodieTagList.registerRoutes(router);
        // Daniel
        var appForm = new ApplicationForm();
        appForm.registerRoutes(router);
        var recm = new RecommendationList();
        recm.registerRoutes(router);
    }

}

export {App};