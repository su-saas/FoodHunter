"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var UserRoute_1 = require("./route/UserRoute");
var FoodieTagListRoute_1 = require("./route/FoodieTagListRoute");
var TagRoute_1 = require("./route/TagRoute");
var ReviewRoute_1 = require("./route/ReviewRoute");
var FavoriteListRoute_1 = require("./route/FavoriteListRoute");
var RestaurantRoute_1 = require("./route/RestaurantRoute");
var DishRoute_1 = require("./route/DishRoute");
var RestaurantTagListRoute_1 = require("./route/RestaurantTagListRoute");
var ApplicationFormRoute_1 = require("./route/ApplicationFormRoute");
var RecommendationListRoute_1 = require("./route/RecommendationListRoute");
//let passport = require('passport');
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
// creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
    }
    // configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger("dev"));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(function (req, res, next) {
            res.header('Access-Control-Allow-Origin', "*");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });
    };
    // configure API endpoints.
    App.prototype.routes = function () {
        var router = express.Router();
        // add routes
        this.addRoutes(router);
        this.expressApp.use(allowCrossDomain);
        this.expressApp.use('/', router);
        this.expressApp.use('/', express.static(__dirname + '/pages', { index: 'login.html' }));
    };
    App.prototype.addRoutes = function (router) {
        var review = new ReviewRoute_1.Review();
        review.registerRoutes(router);
        var favoriteList = new FavoriteListRoute_1.FavoriteList();
        favoriteList.registerRoutes(router);
        var rest = new RestaurantRoute_1.Restaurant();
        rest.registerRestaurantRoutes(router);
        var dish = new DishRoute_1.Dish();
        dish.registerDishRoutes(router);
        var rtaglist = new RestaurantTagListRoute_1.RestaurantTagList();
        rtaglist.registerrTagListRoutes(router);
        var foodie = new UserRoute_1.Foodie();
        foodie.registerRoutes(router);
        var admin = new UserRoute_1.Admin();
        admin.registerRoutes(router);
        var restaurantOwner = new UserRoute_1.RestaurantOwner();
        restaurantOwner.registerRoutes(router);
        var tag = new TagRoute_1.Tag();
        tag.registerRoutes(router);
        var foodieTagList = new FoodieTagListRoute_1.FoodieTagList();
        foodieTagList.registerRoutes(router);
        var appForm = new ApplicationFormRoute_1.ApplicationForm();
        appForm.registerRoutes(router);
        var recm = new RecommendationListRoute_1.RecommendationList();
        recm.registerRoutes(router);
    };
    return App;
}());
exports.App = App;
