"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var url = require("url");
var bodyParser = require("body-parser");
var RestaurantModel_1 = require("./model/RestaurantModel");
var DishModel_1 = require("./model/DishModel");
var RestaurantTagListModel_1 = require("./model/RestaurantTagListModel");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.expressApp = express();
        this.middleware();
        this.routes();
        this.idGenerator = 100;
        this.Restaurant = new RestaurantModel_1.RestaurantModel();
        this.Dish = new DishModel_1.DishModel();
        this.rTagList = new RestaurantTagListModel_1.RestaurantTagListModel();
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
            console.log('restaurant id:' + id);
            _this.Restaurant.updateRestaurant(res, { restaurantID: id }, req.body);
        });
        router["delete"]('/restaurant/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.Restaurant.deleteRestaurant(res, { restaurantID: id });
        });
        router.get('/search', function (req, res) {
            var urlParts = url.parse(req.url, true);
            var query = urlParts.query;
            var msg = 'search for ' + query.var1;
            console.log(msg);
            _this.Restaurant.getByRestaurantName(res, query);
        });
        router.get('/search2', function (req, res) {
            var urlParts = url.parse(req.url, true);
            var query = urlParts.query;
            var msg = 'search for ' + query.var1;
            console.log(msg);
            _this.Restaurant.getByKeyword(res, query);
        });
        /******** Restaurant Dish********/
        router.get('/menu/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.Dish.retrieveDishDetails(res, { restaurantID: id });
        });
        router.put('/menu/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.Dish.updateDish(res, { restaurantID: id }, req.body);
        });
        router["delete"]('/menu/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.Dish.deleteDish(res, { restaurantID: id });
        });
        /******** Restaurant Tags********/
        router.get('/tags/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.rTagList.retrieverTagListDetails(res, { restaurantID: id });
        });
        router.put('/tags/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.rTagList.updateTagList(res, { restaurantID: id }, req.body);
        });
        router["delete"]('/tags/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.rTagList.deleteTagList(res, { restaurantID: id });
        });
        this.expressApp.use('/', router);
        this.expressApp.use('/app/json/', express.static(__dirname + '/app/json'));
        this.expressApp.use('/images', express.static(__dirname + '/img'));
        this.expressApp.use('/', express.static(__dirname + '/pages'));
    };
    return App;
}());
exports.App = App;
