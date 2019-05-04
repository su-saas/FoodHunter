"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
<<<<<<< HEAD
var User_1 = require("./route/User");
var Review_1 = require("./route/Review");
var FavoriteList_1 = require("./route/FavoriteList");
=======
var RestaurantModel_1 = require("./model/RestaurantModel");
>>>>>>> Add db and Model
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
<<<<<<< HEAD
=======
        this.idGenerator = 100;
        this.Restaurant = new RestaurantModel_1.RestaurantModel();
>>>>>>> Add db and Model
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
<<<<<<< HEAD
        // add user routes
        this.addRoutes(router);
=======
        /******** Restaurant ********/
        router.get('/restaurant', function (req, res) {
            console.log('All restaurants');
            _this.Restaurant.retrieveAll(res);
        });
        router.get('/restaurant/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.Restaurant.retrieveRestaurantDetails(res, { restaurantID: id });
        });
        router.put('/restaurant/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            var name = req.params.restaurantName;
            var addr = req.params.address;
            var phone = req.params.phoneNum;
            var intro = req.params.introductionContent;
            var hour = req.params.hours;
            console.log('restaurant id:' + id);
            _this.Restaurant.updateRestaurant(res, { restaurantID: id }, { restaurantName: name }, { address: addr }, { phoneNum: phone }, { introductionContent: intro }, { hours: hour });
        });
>>>>>>> Add db and Model
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    App.prototype.addRoutes = function (router) {
        var user = new User_1.User();
        user.registerRoutes(router);
        var review = new Review_1.Review();
        review.registerRoutes(router);
        var favoriteList = new FavoriteList_1.FavoriteList();
        favoriteList.registerRoutes(router);
    };
    return App;
}());
exports.App = App;
