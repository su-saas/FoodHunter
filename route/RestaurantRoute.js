"use strict";
exports.__esModule = true;
var url = require("url");
var RestaurantModel_1 = require("../model/RestaurantModel");
var Restaurant = /** @class */ (function () {
    function Restaurant() {
        this.Restaurant = new RestaurantModel_1.RestaurantModel();
        this.idGenerator = 1000;
    }
    Restaurant.prototype.registerRestaurantRoutes = function (router) {
        this.routes(router);
    };
    Restaurant.prototype.routes = function (router) {
        var _this = this;
        router.get('/restaurant', function (req, res) {
            console.log('All restaurants');
            _this.Restaurant.retrieveAll(res);
        });
        router.get('/restaurant/:restaurantID', function (req, res) {
            var id = req.params.restaurantID;
            console.log('restaurant id:' + id);
            _this.Restaurant.retrieveRestaurantDetails(res, { restaurantID: id });
        });
        router.post('/restaurant', function (req, res) {
            var body = req.body;
            body.restaurantID = _this.idGenerator;
            _this.idGenerator++;
            _this.Restaurant.addNewRestaurant(res, body);
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
            _this.Restaurant.getByKeyword(res, query);
        });
    };
    return Restaurant;
}());
exports.Restaurant = Restaurant;
