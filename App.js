"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var Restaurant_1 = require("./route/Restaurant");
var Menu_1 = require("./route/Menu");
var RestaurantTagList_1 = require("./route/RestaurantTagList");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var router = express.Router();
        this.addRestaurant(router);
        this.addMenu(router);
        this.addrTags(router);
        this.expressApp.use('/', router);
        //this.expressApp.use('/', express.static(__dirname+'/pages/search.html'));
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    /******** Restaurant ********/
    App.prototype.addRestaurant = function (router) {
        var rest = new Restaurant_1.Restaurant();
        rest.registerRestaurantRoutes(router);
    };
    /******** Restaurant Dish********/
    App.prototype.addMenu = function (router) {
        var menu = new Menu_1.Menu();
        menu.registerDishRoutes(router);
    };
    /******** Restaurant Tags********/
    App.prototype.addrTags = function (router) {
        var rtaglist = new RestaurantTagList_1.RestaurantTagList();
        rtaglist.registerrTagListRoutes(router);
    };
    return App;
}());
exports.App = App;
