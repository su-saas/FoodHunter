import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import { ApplicationFormRoute } from './routes/ApplicationFormRoute';
import { RecommendationListRoute } from './routes/RecommendationListRoute';

//connect to the model 
import { RecommendationListModel } from './model/RecommendationListModel'
import { ApplicationFormModel } from './model/ApplicationFormModel'
import {User} from './route/User';
import { Review } from './route/Review';
import { FavoriteList } from './route/FavoriteList';
//var MongoClient = require('mongodb').MongoClient;
//var Q = require('q');

//connect to the model 
import {DataAccess} from './DataAccess';
import { Restaurant } from './route/Restaurant';
import { Menu } from './route/Menu';
import { RestaurantTagList } from './route/RestaurantTagList';

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public expressApp: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        let router = express.Router();

        // add user routes
        this.addRoutes(router);

        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname+'/app/json'));
        this.expressApp.use('/images', express.static(__dirname+'/img'));
        this.expressApp.use('/', express.static(__dirname+'/pages'));
  }    
    private addRoutes(router: express.Router): void{
        var user = new User();
        user.registerRoutes(router);
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