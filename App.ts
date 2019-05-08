import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
<<<<<<< HEAD
import { ApplicationFormRoute } from './routes/ApplicationFormRoute';
import { RecommendationListRoute } from './routes/RecommendationListRoute';

//connect to the model 
import { RecommendationListModel } from './model/RecommendationListModel'
import { ApplicationFormModel } from './model/ApplicationFormModel'
import {User} from './route/User';
=======


import { Router } from "express-serve-static-core";
import { Foodie, RestaurantOwner, Admin } from "./route/User";
import { FoodieTagList } from "./route/FoodieTagList";
import { Tag } from "./route/Tag";
>>>>>>> 1a8e7c4dc1a81f1efeb527d16fb5184e11c632f6
import { Review } from './route/Review';
import { FavoriteList } from './route/FavoriteList';
import { Restaurant } from './route/Restaurant';
import { Menu } from './route/Menu';
import { RestaurantTagList } from './route/RestaurantTagList';



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

        // add user routes
        this.addRoutes(router);

        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
        this.expressApp.use('/images', express.static(__dirname+'/img'));
        this.expressApp.use('/', express.static(__dirname+'/pages'));
  }    
    private addRoutes(router: express.Router): void{
        // xing
        var review = new Review();
        review.registerRoutes(router);
        var favoriteList = new FavoriteList();
        favoriteList.registerRoutes(router);
        var recommendationList = new RecommendationListRoute();
        recommendationList.registerRoutes(router);
        var applicationForm = new ApplicationFormRoute();
        applicationForm.registerRoutes(router);
        // erica
        this.addRestaurant(router);
        this.addMenu(router);  
        this.addrTags(router);
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
    }

    /******** Restaurant ********/
    private addRestaurant(router: express.Router): void{
      var rest = new Restaurant();
      rest.registerRestaurantRoutes(router);
    }
    
    /******** Restaurant Dish********/
    private addMenu(router: express.Router): void{
      var menu = new Menu();
      menu.registerDishRoutes(router);
    }

    /******** Restaurant Tags********/
    private addrTags(router: express.Router): void{
      var rtaglist = new RestaurantTagList();
      rtaglist.registerrTagListRoutes(router);
    }

<<<<<<< HEAD
=======
  
>>>>>>> 1a8e7c4dc1a81f1efeb527d16fb5184e11c632f6

}

export {App};