import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';


import { Router } from "express-serve-static-core";
import { FoodieRoute, RestaurantOwnerRoute, AdminRoute } from "./route/UserRoute";
import { FoodieTagListRoute } from "./route/FoodieTagListRoute";
import { TagRoute } from "./route/TagRoute";
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
        // erica
        this.addRestaurant(router);
        this.addMenu(router);  
        this.addrTags(router);
        // helena
        var foodie = new FoodieRoute();
        foodie.registerRoutes(router);
        var admin = new AdminRoute();
        admin.registerRoutes(router);
        var restaurantOwner = new RestaurantOwnerRoute();
        restaurantOwner.registerRoutes(router);
        var tag = new TagRoute();
        tag.registerRoutes(router);
        var foodieTagList = new FoodieTagListRoute();
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

  

}

export {App};