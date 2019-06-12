import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as session from 'express-session';
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
import GooglePassportObj from './GooglePassport';

let passport = require('passport');
let newReq = require('request');
let logout = require('express-passport-logout');

// creates and configures an ExpressJS web server.
class App {

    public expressApp: express.Application;
    public googlePassportObj:GooglePassportObj;
    //Run configuration methods on the Express instance.
    constructor() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.googlePassportObj = new GooglePassportObj();
    }

    // configure Express middleware.
    private middleware(): void {
        let allowCrossDomain = function(req, res, next) {
            res.header('Access-Control-Allow-Origin', "*");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        }
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(session({ secret: 'keyboard cat' }));
        this.expressApp.use(allowCrossDomain);
        this.expressApp.use(passport.initialize());
        this.expressApp.use(passport.session());
    }

    //////////////////////////////////////////////////
    //*************** google login ******************/
    private validateAuth(req, res, next):void {
        // && req.cookies.user_sid  => not allow the user log in two different account in the same browser
        if (req.isAuthenticated()) { 
            console.log("user is authenticated"); 
            console.log("validate user id: " + req.user.id);
            console.log("validate email: " + req.user.emails[0].value);
            return next(); 
        }
        console.log("user is not authenticated");
        res.redirect('/');
    }

    // configure API endpoints.
    private routes(): void {
        let router: Router = express.Router();
        router.get('/auth/google',
            passport.authenticate('google',
                { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }
            )
        );

        router.get('/auth/google/callback',
            passport.authenticate('google',
                { successRedirect: '/#/profile', failureRedirect: '/' })
        );

        router.get('/auth/user', this.validateAuth, (req, res) => {
            var email = this.googlePassportObj.email;
            newReq.get(req.protocol+"://"+req.get('host') + "/login/" + email,{},(err, resp, body)=>{
                res.send(body);
            });
        });

        router.get('/logout', (req, res) => {
            this.googlePassportObj.email = ""; 
            logout();
            return res.redirect("/#/login");
        })

        router.get('/loggedIn', (req, res) => {
            if(this.googlePassportObj.email != null && this.googlePassportObj.email != ""){
                res.send("true");
            }else{
                res.send("false"); 
            }
        })

    //////////////////////////////////////////////////
    //*************** google login end ***************/
        // add routes
        this.addRoutes(router);
        this.expressApp.use('/', router);
        this.expressApp.use('/', express.static(__dirname+'/angularDist'));     
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