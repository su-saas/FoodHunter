"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var User_1 = require("./route/User");
var FoodieTagList_1 = require("./route/FoodieTagList");
var Tag_1 = require("./route/Tag");
var Review_1 = require("./route/Review");
var FavoriteList_1 = require("./route/FavoriteList");
var Restaurant_1 = require("./route/Restaurant");
var Dish_1 = require("./route/Dish");
var RestaurantTagList_1 = require("./route/RestaurantTagList");
var ApplicationForm_1 = require("./route/ApplicationForm");
var RecommendationList_1 = require("./route/RecommendationList");
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
    };
    // configure API endpoints.
    App.prototype.routes = function () {
        var router = express.Router();
        // add routes
        this.addRoutes(router);
        this.expressApp.use('/', router);
        this.expressApp.use('/', express.static(__dirname + '/pages', { index: 'login.html' }));
    };
    App.prototype.addRoutes = function (router) {
        // xing
        var review = new Review_1.Review();
        review.registerRoutes(router);
        var favoriteList = new FavoriteList_1.FavoriteList();
        favoriteList.registerRoutes(router);
        // erica
        var rest = new Restaurant_1.Restaurant();
        rest.registerRestaurantRoutes(router);
        var dish = new Dish_1.Dish();
        dish.registerDishRoutes(router);
        var rtaglist = new RestaurantTagList_1.RestaurantTagList();
        rtaglist.registerrTagListRoutes(router);
        // helena
        var foodie = new User_1.Foodie();
        foodie.registerRoutes(router);
        var admin = new User_1.Admin();
        admin.registerRoutes(router);
        var restaurantOwner = new User_1.RestaurantOwner();
        restaurantOwner.registerRoutes(router);
        var tag = new Tag_1.Tag();
        tag.registerRoutes(router);
        var foodieTagList = new FoodieTagList_1.FoodieTagList();
        foodieTagList.registerRoutes(router);
        // Daniel
        var appForm = new ApplicationForm_1.ApplicationForm();
        appForm.registerRoutes(router);
        var recm = new RecommendationList_1.RecommendationList();
        recm.registerRoutes(router);
    };
    return App;
}());
exports.App = App;
