import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import { Foodie, RestaurantOwner, Admin } from "./route/UserRoute";
import { FoodieTagList } from "./route/FoodieTagListRoute";
import { Tag } from "./route/TagRoute";
import { Review } from './route/ReviewRoute';
import { FavoriteList } from './route/FavoriteListRoute';
import { Restaurant } from './route/RestaurantRoute';
import { Dish } from './route/DishRoute';
import { RestaurantTagList } from './route/RestaurantTagListRoute';
import { ApplicationForm } from './route/ApplicationFormRoute';
import { RecommendationList } from './route/RecommendationListRoute';

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
        this.expressApp.use(function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
    }

    // configure API endpoints.
    private routes(): void {
        let router: Router = express.Router();

        // add routes
        this.addRoutes(router);
        this.expressApp.use('/', router);
        this.expressApp.use('/', express.static(__dirname+'/pages', {index: 'login.html'}));
  }    
    private addRoutes(router: express.Router): void{
        var review = new Review();
        review.registerRoutes(router);
        var favoriteList = new FavoriteList();
        favoriteList.registerRoutes(router);
        var rest = new Restaurant();
        rest.registerRestaurantRoutes(router);
        var dish = new Dish();
        dish.registerDishRoutes(router);
        var rtaglist = new RestaurantTagList();
        rtaglist.registerrTagListRoutes(router);
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
        var appForm = new ApplicationForm();
        appForm.registerRoutes(router);
        var recm = new RecommendationList();
        recm.registerRoutes(router);
    }

}

export {App};